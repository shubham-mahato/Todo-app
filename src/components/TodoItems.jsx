import PropTypes from 'prop-types';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';
import "../App.css";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="todo-item">
      <div className="flex items-center cursor-pointer" onClick={() => toggle(id)}>
        <img src={isComplete ? tick : not_tick} alt="Status Icon" className="w-6" />
        <p className={`ml-4 text-lg ${isComplete ? "completed" : ""}`}>{text}</p>
      </div>
      <img src={delete_icon} alt="Delete Icon" className="delete-btn" onClick={() => deleteTodo(id)} />
    </div>
  );
};

// ✅ Adding PropTypes Validation
TodoItems.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isComplete: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default TodoItems;


