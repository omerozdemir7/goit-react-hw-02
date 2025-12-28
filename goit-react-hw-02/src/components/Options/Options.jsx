import styles from "./Options.module.css";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div className={styles.optionsContainer}>
      <button
        className={styles.btn}
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
      <button
        className={styles.btn}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={styles.btn}
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>

      {totalFeedback > 0 && (
        <button className={styles.resetBtn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;