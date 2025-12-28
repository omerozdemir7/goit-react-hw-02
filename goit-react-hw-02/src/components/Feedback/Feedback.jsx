import styles from "./Feedback.module.css";

const Feedback = ({ feedback, total, positivePercentage }) => {
  return (
    <div className={styles.feedbackContainer}>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {feedback.good}</li>
        <li className={styles.item}>Neutral: {feedback.neutral}</li>
        <li className={styles.item}>Bad: {feedback.bad}</li>
        <li className={styles.item}>Total: {total}</li>
        <li className={`${styles.item} ${styles.positive}`}>
          Positive: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

export default Feedback;