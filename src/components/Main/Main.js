import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topics from '../Topics/Topics';

import './Main.css';

function Main() {
  const [practiceTime, setPracticeTime] = useState(0);

  const practiceTimeHandler = (time) => {
    setPracticeTime((prevState) => prevState + time);
  };

  return (
    <main className='container'>
      <div className='wrapper'>
        <Topics practiceTimeHandler={practiceTimeHandler}></Topics>
        <Sidebar practiceTime={practiceTime}></Sidebar>
      </div>
    </main>
  );
}
export default Main;
