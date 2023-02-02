import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>

      <>
        <p>Good: {good}</p>

        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>
          Total:
          {total}
        </p>
        <p>Positive feedback:{positivePercentage} %</p>
      </>
    </div>
  );
};

Statistics.PropTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
