import { useEffect, useState } from 'react';
import Topic from '../Topic/Topic';

import './Topics.css';

function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('learningTopics.json')
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);

  return (
    <div className='topics'>
      {topics.map((topic) => (
        <Topic topic={topic}></Topic>
      ))}
    </div>
  );
}
export default Topics;
