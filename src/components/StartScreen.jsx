import styles from './StartScreen.module.css';

// eslint-disable-next-line react/prop-types
const StartScreen = ({ startGame }) => {
  return (
    <>
      <div className={styles.start}>
        <h1>Secret Word</h1>
        <p>Click the button below to start playing</p>
        <button onClick={startGame}>Start the game</button>
      </div>
    </>
  );
};

export default StartScreen;
