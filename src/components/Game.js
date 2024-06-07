
import Logo from '../components/Logo'



import React, { useState, useEffect } from 'react';
import Question from './Question';
import initialQuestions from '../data/initialQuestions.json';
import getResponses from '../getResponses'; // Ensure this function is properly imported
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import {storeResponse,removeResponse} from '../storeResponse';
import { RiPieChartFill } from "react-icons/ri"



const Game = () => {
  const [responses, setResponses] = useState({});
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionStats, setQuestionStats] = useState(null); // For storing stats of current question

  const [toggleStats, setToggleStats] = useState(false);
  const history = useNavigate();



  useEffect(() => {
    const shuffledQuestions = [...initialQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  }, []);

  useEffect(() => {
    loadStats();
  }, [currentIndex,loadStats]); // Update stats when the index changes

  // const handleChoice = async (questionId, choice) => {
  //   const newResponse = {
  //     questionId,
  //     choice,
  //     timestamp: new Date().toISOString(),
  //   };

  //   await storeResponse(newResponse);
  //   setResponses(prevResponses => ({
  //     ...prevResponses,
  //     [questionId]: newResponse
  //   }));
  //   loadStats(); // Reload stats after answering
  //   // setCurrentIndex((prevIndex) => prevIndex + 1);
  // };
  // Save response and set session storage flag
// const handleChoice = async (questionId, choice) => {
//   if (sessionStorage.getItem(`voted-${questionId}`)) {
//     alert('You have already voted on this question.');
//     return;
//   }

//   const newResponse = {
//     questionId,
//     choice,
//     timestamp: new Date().toISOString(),
//   };

//   await storeResponse(newResponse);
//   sessionStorage.setItem(`voted-${questionId}`, true);

//   setResponses(prevResponses => ({
//     ...prevResponses,
//     [questionId]: newResponse
//   }));
//   loadStats();
//   // setCurrentIndex((prevIndex) => prevIndex + 1);
// };

const findcookie = (questionId) => {
  let allCookies = document.cookie;
  console.log('allCookies = document.cookie;', allCookies)

  const cookiesArray = allCookies.split(';');

  // Iterate through the cookies array to find the one with the matching questionId
  let foundCookie = null;
  for (let cookie of cookiesArray) {
    // Trim any leading or trailing whitespace
    cookie = cookie.trim();
    // console.log('cookie', cookie)
    // Split the cookie into its name and value parts
    const [name, value] = cookie.split('=');
    // Check if the name matches the expected pattern

    if (name == questionId && value !== null) {
      foundCookie = {
        name: name,
        value: value
      };
      console.log('foundCookie', foundCookie)
      break; // Exit the loop once the cookie is found
    }
  }
  return foundCookie
}

const handleChoice = async (questionId, choice) => {
  // console.log('cookiestored', Cookies.get(`response-${questionId}`,  responseRef.key))
  const foundcookie = findcookie(questionId)
  if ((foundcookie !== null) && foundcookie.name == questionId && foundcookie.value != null) {
    console.log('fc', foundcookie)
    document.cookie = `${foundcookie.name} = null`
    console.log('removing', foundcookie.value)
    await(removeResponse(foundcookie.value))
  }


  const newResponse = {
    // cookieid: Cookies.set(`voted-${questionId}`, true),
    questionId,
    choice,
    timestamp: new Date().toISOString(),
  };

  const responseRef = await storeResponse(newResponse);
  // console.log('rrr', responseRef, responseRef.key)
  document.cookie = `${questionId}=${responseRef}`;
 

  setResponses(prevResponses => ({
    ...prevResponses,
    [questionId]: newResponse
  }));
  loadStats();

  setToggleStats(true);

  
  // setCurrentIndex((prevIndex) => prevIndex + 1);

  // Optionally, clear the button disabled state after navigating to the next question

};

  const wrapText = (text, maxWidth) => {
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];

    words.slice(1).forEach(word => {
      const width = currentLine.length + word.length + 1;
      if (width < maxWidth) {
        currentLine += ` ${word}`;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    });
    lines.push(currentLine);
    return lines;
  };

  const next = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex + 1));
    setToggleStats(false);

  }

  const loadStats = async () => {
    const data = await getResponses();
    const questionId = questions[currentIndex]?.id;
    if (questionId) {
      const questionResponses = data.filter(response => response.questionId === questionId);
      const optionAResponses = questionResponses.filter(response => response.choice === 'optionA').length;
      const optionBResponses = questionResponses.filter(response => response.choice === 'optionB').length;
      setQuestionStats({ optionA: optionAResponses, optionB: optionBResponses });
    }
  };

  const renderPieChart = () => {
    const question = questions[currentIndex];
    if (!question || !questionStats) return null;

    // Determine the color based on the selected response
    const selectedChoice = responses[question.id]?.choice;
    let backgroundColors;
    if (selectedChoice === 'optionA') {
      backgroundColors = ['#ff6347', '#36A2EB']; // pink for A, blue for B
    } else if (selectedChoice === 'optionB') {
      backgroundColors = ['#36A2EB', '#ff6347']; // blue for A, pink for B
    } else {
      backgroundColors = ['#ff6347', '#36A2EB']; // default blue for both
    }

    const data = {
      labels: [question.optionAshort, question.optionBshort],
      datasets: [
        {
          data: [questionStats.optionA, questionStats.optionB],
          backgroundColor: backgroundColors,
          borderWidth: 0
        },
      ],
    };

     const options = {
      plugins: {
        legend: {
          labels: {
            color: 'white', // Set the legend labels color to white
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            textAlign:'left'
          },
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label;
              const fullText = label === question.optionAshort ? question.optionA : question.optionB;
              const count = label === question.optionAshort ? questionStats.optionA : questionStats.optionB;
              const wrappedText = wrapText(fullText, 40); // Adjust maxWidth as needed
              return wrappedText.map(line => ` ${line}`).concat([`Responses: ${count}`]);
            },
            
          },
        },
      },
    };

    return (
      <div id="ooop" style={{display:'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}> 
        <div key={question.id} className="stat">
          <h3>{question.text}</h3>
          <Pie data={data} options={options} />
          </div>
      </div>
    );
    // return <Pie data={data} />;
  };
  
  // const answered = () =>{
  //   const cookie = findcookie(questions[currentIndex].id)
  //   if (cookie && cookie.value !== 'null') {
  //     // Fetch response data from API
  //     const response = getResponses(); // Assuming getResponse is a function to fetch response data from the API
  //     // Check if the response matches one of the options
  //     console.log('response, ', response)
  //     return response && (response.choice === 'optionA' || response.choice === 'optionB');
  //   }
  //   return false;
  //   return (cookie.value != 'null')
  // }


  
  return (
    <div>
      <div style={{display:'flex', flexDirection: 'row'}}>
          {/* <button style={{'background-color':"RED"}}   > */}
            < RiPieChartFill id="piecharticon" onClick={() => history('/stats')} size={50} style={{color:"#FFF"}}  />
          {/* </button> */}

        <Logo></Logo>
      </div>
      <div id="game">


        {questions.length > 0 && currentIndex < questions.length && (
          <div>
            <div id="questionWrapper">
              <button className="arrow" onClick={() =>  setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))} disabled={currentIndex === 0}>
                <MdArrowBackIos size={30}/>
              </button>
              <Question
                question={questions[currentIndex]}
                onRespond={(choice) => handleChoice(questions[currentIndex].id, choice)}
                response={responses[questions[currentIndex].id]}
              />
              <button className="arrow" onClick={() =>  next()} disabled={currentIndex === questions.length - 1}>
                <MdArrowForwardIos size={30} />
              </button>
            </div>
            <div >
              {toggleStats&& questionStats && renderPieChart()} 
            </div>
            <div className="navigation-buttons">
              {/* <button onClick={() => history('/stats')}>View All Stats</button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
