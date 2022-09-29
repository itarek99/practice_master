import './Sidebar.css';

import { useState } from 'react';
import Break from '../Break/Break';
import PracticeDetails from '../PracticeDetails/PracticeDetails';
import Profile from '../Profile/Profile';

function Sidebar({ practiceTime }) {
  const [breakTime, setBreakTime] = useState(2);

  const breakTimeHandler = (newTime) => {
    setBreakTime(newTime);
  };

  return (
    <div className='sidebar'>
      <Profile></Profile>
      <Break breakTime={breakTime} breakTimeHandler={breakTimeHandler}></Break>
      <PracticeDetails breakTime={breakTime} practiceTime={practiceTime}></PracticeDetails>
      <button className='complete-btn'>Practice Complete</button>
    </div>
  );
}
export default Sidebar;
