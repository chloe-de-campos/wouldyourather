import React from 'react';

const Question = ({ question, onRespond, response, disabledbutton }) => {
  const handleClick = (choice) => {
    onRespond(choice);
  };

  return (
    <div className="question">

      <button 
        style={{maxWidth:"240px"}}
        onClick={() => handleClick('optionA')}
        className={response && response.choice === 'optionA' ? 'selected' : ''}
        disabled ={disabledbutton}
      >
        {question.optionA}
      </button>
      
      <h2 style={{padding:"20px", color:"#FFA500"}}> 
        or 
      </h2>
 
      <button
       style={{maxWidth:"240px"}}
        onClick={() => handleClick('optionB')}
        className={response && response.choice === 'optionB' ? 'selected' : ''}
        disabled = {disabledbutton}
      >
        {question.optionB}
      </button>
    </div>
  );
};

export default Question;
