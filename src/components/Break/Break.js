import './Break.css';

function Break() {
  const breakTimes = [2, 5, 10, 15, 20];

  return (
    <div className='break'>
      <h3 className='break__title'>Add A Break</h3>
      <div className='break__times'>
        {breakTimes.map((time) => (
          <button className='break__time'>{time}m</button>
        ))}
      </div>
    </div>
  );
}
export default Break;
