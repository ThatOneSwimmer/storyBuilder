import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: '10vh',
        }}
      >
        <h1>Story Builder</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: '20vh',
        }}
      >
        <button onClick={() => navigate('/readinglvl')}>
          Start
        </button>
      </div>
    </>
  );
};

export default Main;