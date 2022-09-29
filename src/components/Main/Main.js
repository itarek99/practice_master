import Sidebar from '../Sidebar/Sidebar';
import Topics from '../Topics/Topics';

import './Main.css';

function Main() {
  return (
    <main className='container'>
      <div className='wrapper'>
        <Topics></Topics>
        <Sidebar></Sidebar>
      </div>
    </main>
  );
}
export default Main;
