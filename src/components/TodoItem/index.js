// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, deleteList} = props
  const {id, title} = todoList

  const onDelete = () => {
    deleteList(id)
  }

  return (
    <li className="list-container">
      <p>{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
