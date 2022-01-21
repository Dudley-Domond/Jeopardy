import './App.css';
import Header from './components/Header';
import GetQuestion from './components/GetQuestion';
import Score from './components/Score';
import React, {useState, useEffect} from 'react';

function App() {
  const [question, setQuestion] = useState(
    {question: '', category: {title: ''} },
  );

  function getAnswer() {
    fetch('http://jservice.io/api/random')
      .then(res => res.json())
       .then(data => {
          console.log(data)
           setQuestion(data[0])
       })
  }

  return (
    <div className="App">
      <Header />
      <Score question={question} />
      <GetQuestion question={question} getAnswer={getAnswer} />
      {console.log(question)}
    </div>
  );
}

export default App;
