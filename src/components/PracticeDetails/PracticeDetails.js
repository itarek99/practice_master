import './PracticeDetails.css';

function PracticeDetails() {
  return (
    <div className='practice-details'>
      <h3 className='practice-details__title'>Practice Details</h3>
      <div className='practice-details__item practice-details__time'>
        <p className='practice-details__text'>Practice Time</p>
        <p>0 mins</p>
      </div>
      <div className='practice-details__item practice-details__break'>
        <p className='practice-details__text'>Break Time</p>
        <p>0 mins</p>
      </div>
    </div>
  );
}
export default PracticeDetails;
