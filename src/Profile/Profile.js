import userImage from '../images/user.jpg';
import './Profile.css';
function Profile() {
  return (
    <div className='user'>
      <div className='user__info'>
        <img className='user__image' src={userImage} alt='user avatar' />
        <div className='user__details'>
          <p className='user__name'>Tarekul Islam</p>
          <p className='user__location'>Mirpur-1, Dhaka</p>
        </div>
      </div>
      <div className='user__summary'>
        <div className='user__item user__iq'>
          <p className='user__item--text'>IQ</p>
          <p className='user__item--value'>65</p>
        </div>
        <div className='user__item user__age'>
          <p className='user__item--text'>Age</p>
          <p className='user__item--value'>27</p>
        </div>
        <div className='user__item user__total-practice'>
          <p className='user__item--text'>Practice</p>
          <p className='user__item--value'>25 hrs</p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
