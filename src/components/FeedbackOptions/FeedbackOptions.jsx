import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {/* {console.log(options)} */}
      <h2>Plese leave feedback</h2>
      <ul className="d-flex">
        {options.map((name, inx) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={inx}
            >
              <button
                name={name}
                type="button"
                className="btn btn-primary p-3 m-3"
                onClick={onLeaveFeedback}
              >
                {name[0].toUpperCase() + name.substring(1)}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
