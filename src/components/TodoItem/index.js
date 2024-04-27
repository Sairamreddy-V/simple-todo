import {useState} from 'react'
import './index.css'

const Item = props => {
  const {listItems, deleteClick, onSaveClick, onCheck} = props
  const {title, id, isChecked} = listItems
  const [text, setValue] = useState(title)
  const [isEditClicked, setEdit] = useState(false)

  const OnDelete = () => {
    deleteClick(id)
    console.log(id)
  }

  const onEdit = event => {
    const {value} = event.currentTarget
    console.log(value)
    setValue(value)
    setEdit(true)
  }

  const onEditChange = event => {
    const val = event.currentTarget.value
    setValue(val)
  }

  const onSave = () => {
    onSaveClick(id, text)
    setEdit(false)
  }

  const onCheckbox = () => {
    onCheck(id)
  }

  return (
    <li className="item-container">
      <input type="checkbox" onChange={onCheckbox} />
      {isEditClicked ? (
        <input
          className="input"
          type="text"
          onChange={onEditChange}
          value={text}
        />
      ) : (
        <p className={isChecked ? 'text-underline' : 'text'}>{text}</p>
      )}
      <button type="button" onClick={OnDelete}>
        Delete
      </button>
      {isEditClicked ? (
        <button value={text} onClick={onSave}>
          Save
        </button>
      ) : (
        <button value={text} onClick={onEdit}>
          Edit
        </button>
      )}
    </li>
  )
}

export default Item
