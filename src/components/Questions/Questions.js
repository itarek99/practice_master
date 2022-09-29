import Question from '../Question/Question';
import './Questions.css';

function Questions() {
  return (
    <section className='container'>
      <div className='questions'>
        <Question
          question='How does React work?'
          answer={`ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.`}
        ></Question>
        <Question
          question='React props vs state?'
          answer={`State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.`}
        ></Question>
        <Question
          question='Why is useEffect used?'
          answer={`The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects`}
        ></Question>
      </div>
    </section>
  );
}
export default Questions;
