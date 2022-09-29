import logo from '../../images/logo.png';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='brand'>
          <img className='brand__logo' src={logo} alt='brand logo' />
          <h3 className='brand__name'>Practice Master</h3>
        </div>
      </div>
    </header>
  );
}
export default Header;
