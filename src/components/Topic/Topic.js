import './Topic.css';
function Topic({ topic }) {
  const { title, about, img, practiceTime } = topic;

  return (
    <div className='card'>
      <img className='card__image' src={img} alt='title' />
      <div className='card__body'>
        <h3 className='card__title'>{title}</h3>
        <p className='card__text'>{about.length > 80 ? about.slice(0, 75) + '...' : about}</p>
        <p className='practice__time'>Practice Time: {practiceTime} min.</p>
      </div>
      <button className='add__btn'>Add a Session</button>
    </div>
  );
}
export default Topic;
