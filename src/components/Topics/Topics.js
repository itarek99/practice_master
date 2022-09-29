import { useEffect, useState } from 'react';
import Topic from '../Topic/Topic';

import './Topics.css';

function Topics({ practiceTimeHandler }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('learningTopics.json')
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);

  return (
    <div className='topics'>
      {topics.map((topic) => (
        <Topic key={topic._id} practiceTimeHandler={practiceTimeHandler} topic={topic}></Topic>
      ))}
    </div>
  );
}
export default Topics;
