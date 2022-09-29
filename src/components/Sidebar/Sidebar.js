import './Sidebar.css';

import Break from '../Break/Break';
import PracticeDetails from '../PracticeDetails/PracticeDetails';
import Profile from '../Profile/Profile';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Profile></Profile>
      <Break></Break>
      <PracticeDetails></PracticeDetails>
      <button className='complete-btn'>Practice Complete</button>
    </div>
  );
}
export default Sidebar;
