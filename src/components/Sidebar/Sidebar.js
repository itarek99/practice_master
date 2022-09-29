import './Sidebar.css';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import { addToLocalStorage, getTimeFromLocalStorage } from '../../utils/localDB';
import Break from '../Break/Break';
import PracticeDetails from '../PracticeDetails/PracticeDetails';
import Profile from '../Profile/Profile';

function Sidebar({ practiceTime }) {
  const [breakTime, setBreakTime] = useState(getTimeFromLocalStorage() || 2);

  const breakTimeHandler = (newTime) => {
    setBreakTime(newTime);
    addToLocalStorage(newTime);
  };

  useEffect(() => {
    setBreakTime(getTimeFromLocalStorage() || breakTime);
  }, [breakTime]);

  const notify = () => toast.success('Practice Complete', { theme: 'dark' });

  return (
    <div className='sidebar'>
      <Profile></Profile>
      <Break breakTime={breakTime} breakTimeHandler={breakTimeHandler}></Break>
      <PracticeDetails breakTime={breakTime} practiceTime={practiceTime}></PracticeDetails>
      <div>
        <button onClick={notify} className='complete-btn'>
          Practice Complete
        </button>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
}
export default Sidebar;
