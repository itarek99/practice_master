import './Question.css';

function Question({ question, answer }) {
  return (
    <div className='question-card'>
      <h3 className='question-card__question'>{question}</h3>
      <p className='question-card__answer'>{answer}</p>
    </div>
  );
}
export default Question;
