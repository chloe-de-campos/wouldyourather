// import React, { useEffect, useState } from 'react';
// import getResponses from '../getResponses';
// import { Pie } from 'react-chartjs-2';
// import 'chart.js/auto';
// import '../App.css';
// import { useNavigate } from 'react-router-dom';

// const Statistics = ({ questions }) => {
//   const [responses, setResponses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sortedQuestions, setSortedQuestions] = useState(questions);
//   const history = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getResponses();
//         console.log('Fetched responses in Statistics:', data);
//         setResponses(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching responses:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const calculateStats = (questionId) => {
//     const questionResponses = responses.filter(response => response.questionId === questionId);
//     const optionAResponses = questionResponses.filter(response => response.choice === 'optionA').length;
//     const optionBResponses = questionResponses.filter(response => response.choice === 'optionB').length;
//     return { optionA: optionAResponses, optionB: optionBResponses };
//   };

//   const sortQuestions = (sortType) => {
//     let sorted = [...questions];
//     switch (sortType) {
//       case 'closestTo50-50':
//         sorted.sort((a, b) => {
//           const statsA = calculateStats(a.id);
//           const statsB = calculateStats(b.id);
//           const diffA = Math.abs(statsA.optionA - statsA.optionB);
//           const diffB = Math.abs(statsB.optionA - statsB.optionB);
//           return diffA - diffB;
//         });
//         break;
//       case 'farthestFrom50-50':
//         sorted.sort((a, b) => {
//           const statsA = calculateStats(a.id);
//           const statsB = calculateStats(b.id);
//           const diffA = Math.abs(statsA.optionA - statsA.optionB);
//           const diffB = Math.abs(statsB.optionA - statsB.optionB);
//           return diffB - diffA;
//         });
//         break;
//       case 'mostAnswered':
//         sorted.sort((a, b) => {
//           const statsA = calculateStats(a.id);
//           const statsB = calculateStats(b.id);
//           const totalA = statsA.optionA + statsA.optionB;
//           const totalB = statsB.optionA + statsB.optionB;
//           return totalB - totalA;
//         });
//         break;
//       case 'leastAnswered':
//         sorted.sort((a, b) => {
//           const statsA = calculateStats(a.id);
//           const statsB = calculateStats(b.id);
//           const totalA = statsA.optionA + statsA.optionB;
//           const totalB = statsB.optionA + statsB.optionB;
//           return totalA - totalB;
//         });
//         break;
//       default:
//         sorted = [...questions];
//     }
//     setSortedQuestions(sorted);
//   };

//   const backtoquestions = () => {
//     history('/');
//   };

//   return (
//     <div>
//       <div  className="navigation-buttons"> 
//           <button onClick={backtoquestions}>Answer more questions</button>
//       </div>
//       <h2>Statistics</h2>
//       <div className="statistics">
//         {/* <div>
//           <button onClick={() => sortQuestions('closestTo50-50')}>Sort Closest to 50-50</button>
//           <button onClick={() => sortQuestions('farthestFrom50-50')}>Sort Farthest from 50-50</button>
//           <button onClick={() => sortQuestions('mostAnswered')}>Sort Most Answered</button>
//           <button onClick={() => sortQuestions('leastAnswered')}>Sort Least Answered</button>
//         </div> */}
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           sortedQuestions.map(question => {
//             const stats = calculateStats(question.id);
//             const data = {
//               labels: [question.optionAshort, question.optionBshort],
//               datasets: [
//                 {
//                   data: [stats.optionA, stats.optionB],
//                   backgroundColor: ['#FFA500', '#36A2EB'],
//                 },
//               ],
//             };

//             const options = {
//               plugins: {
//                 legend: {
//                   labels: {
//                     color: 'white' // Set the legend labels color to white
//                   },
//                 },
//                 tooltip: {
//                   callbacks: {
//                     label: function(context) {
//                       const label = context.label;
//                       const fullText = label === question.optionAshort ? question.optionA : question.optionB;
//                       return fullText;
//                     },
//                   },
//                 },
//               },
//             };

//             return (
//               <div key={question.id} className="stat">
//                 <h3>{question.text}</h3>
//                 <Pie data={data} options={options} />
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default Statistics;


import React, { useEffect, useState } from 'react';
import getResponses from '../getResponses';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { TiArrowBack } from "react-icons/ti";


const Statistics = ({ questions }) => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortedQuestions, setSortedQuestions] = useState(questions);
  const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getResponses();
        console.log('Fetched responses in Statistics:', data);
        setResponses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching responses:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const calculateStats = (questionId) => {
    const questionResponses = responses.filter(response => response.questionId === questionId);
    const optionAResponses = questionResponses.filter(response => response.choice === 'optionA').length;
    const optionBResponses = questionResponses.filter(response => response.choice === 'optionB').length;
    return { optionA: optionAResponses, optionB: optionBResponses };
  };

  const sortQuestions = (sortType) => {
    let sorted = [...questions];
    switch (sortType) {
        case 'closestTo50-50':
        sorted.sort((a, b) => {
            const statsA = calculateStats(a.id);
            const statsB = calculateStats(b.id);
            const diffA = Math.abs(statsA.optionA - statsA.optionB);
            const diffB = Math.abs(statsB.optionA - statsB.optionB);
            return diffA - diffB;
        });
        break;
        case 'farthestFrom50-50':
        sorted.sort((a, b) => {
            const statsA = calculateStats(a.id);
            const statsB = calculateStats(b.id);
            const diffA = Math.abs(statsA.optionA - statsA.optionB);
            const diffB = Math.abs(statsB.optionA - statsB.optionB);
            return diffB - diffA;
        });
        break;
        case 'mostAnswered':
        sorted.sort((a, b) => {
            const statsA = calculateStats(a.id);
            const statsB = calculateStats(b.id);
            const totalA = statsA.optionA + statsA.optionB;
            const totalB = statsB.optionA + statsB.optionB;
            return totalB - totalA;
        });
        break;
        case 'leastAnswered':
        sorted.sort((a, b) => {
            const statsA = calculateStats(a.id);
            const statsB = calculateStats(b.id);
            const totalA = statsA.optionA + statsA.optionB;
            const totalB = statsB.optionA + statsB.optionB;
            return totalA - totalB;
        });
        break;
        default:
        sorted = [...questions];
    }
    setSortedQuestions(sorted);
    };

  const handleSortChange = (event) => {
    sortQuestions(event.target.value);
  };

  const backtoquestions = () => {
    history('/');
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

  return (
    <div>
      <button className="arrow" style={{width: 'auto', position: 'fixed', top: '30px', left:'30px'}} onClick={backtoquestions}>
        <TiArrowBack size={60} />
      </button>
      <Logo style={{'width':'50vh'}}></Logo>
      <div style={{display:'flex', justifyContent:'right', marginRight:'16%'}}>
          <select className = "sort-select" onChange={handleSortChange} defaultValue="">
            
            <option value="" disabled>Sort Graphs</option>
            <option value="closestTo50-50">Closest to 50-50</option>
            <option value="farthestFrom50-50">Farthest from 50-50</option>
            <option value="mostAnswered">Most Answered</option>
            <option value="leastAnswered">Least Answered</option>
          </select>
        </div>
      <div className="statistics">
       
        {loading ? (
          <p>Loading...</p>
        ) : (
          sortedQuestions.map(question => {
            const stats = calculateStats(question.id);
            const data = {
              labels: [question.optionAshort, question.optionBshort],
              datasets: [
                {
                  data: [stats.optionA, stats.optionB],
                  backgroundColor: ['#ff6347', '#36A2EB'],
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
                      const count = label === question.optionAshort ? stats.optionA : stats.optionB;
                      const wrappedText = wrapText(fullText, 40); // Adjust maxWidth as needed
                      return wrappedText.map(line => ` ${line}`).concat([`Responses: ${count}`]);
                    },
                  },
                },
              },
            };

            return (
              <div key={question.id} className="stat">
                <h3>{question.text}</h3>
                <Pie data={data} options={options} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Statistics;
