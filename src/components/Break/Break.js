import './Break.css';

function Break({ breakTimeHandler, breakTime }) {
  const breakTimes = [2, 5, 10, 15, 20];

  return (
    <div className='break'>
      <h3 className='break__title'>Add A Break</h3>
      <div className='break__times'>
        {breakTimes.map((time) => (
          <button
            onClick={() => breakTimeHandler(time)}
            className={`break__time ${breakTime === time ? 'break__time--active' : ''}`}
          >
            {time}m
          </button>
        ))}
      </div>
    </div>
  );
}
export default Break;
