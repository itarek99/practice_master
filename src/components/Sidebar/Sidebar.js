import './Sidebar.css';

import Break from '../Break/Break';
import Profile from '../Profile/Profile';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Profile></Profile>
      <Break></Break>
    </div>
  );
}
export default Sidebar;
