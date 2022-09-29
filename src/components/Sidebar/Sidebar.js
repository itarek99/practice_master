import './Sidebar.css';

import { useEffect, useState } from 'react';
import { addToLocalStorage, getTimeFromLocalStorage } from '../../utils/localDB';
import Break from '../Break/Break';
import PracticeDetails from '../PracticeDetails/PracticeDetails';
import Profile from '../Profile/Profile';

function Sidebar({ practiceTime }) {
  const [breakTime, setBreakTime] = useState(2);

  const breakTimeHandler = (newTime) => {
    setBreakTime(newTime);
    addToLocalStorage(newTime);
  };

  useEffect(() => {
    const localStorageTime = getTimeFromLocalStorage();
    setBreakTime(+localStorageTime);
  }, []);

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
