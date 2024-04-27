import {Component} from 'react'

import Item from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isChecked: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isChecked: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isChecked: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isChecked: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isChecked: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isChecked: false,
  },
]

class SimpleTodos extends Component {
  state = {todoItemList: initialTodosList, input: ''}

  deleteClick = id => {
    const {todoItemList} = this.state
    const result = todoItemList.filter(eachItem => {
      return eachItem.id !== id
    })
    this.setState({todoItemList: result})
  }

  oninputChange = event => {
    const {value} = event.currentTarget
    this.setState({input: value})
  }

  onCheck = id => {
    const {todoItemList} = this.state
    const result = todoItemList.map(eachOne => {
      if (eachOne.id === id) {
        return {...eachOne, isChecked: !eachOne.isChecked}
      } else {
        return eachOne
      }
    })
    console.log(result)
    this.setState({todoItemList: result})
  }

  onAdd = () => {
    const {input} = this.state
    const {todoItemList} = this.state
    const newObject = {
      id: todoItemList.length + 1,
      title: input,
      isChecked: false,
    }
    this.setState(prevState => ({
      todoItemList: [...prevState.todoItemList, newObject],
      input: '',
    }))
  }

  onSaveClick = (id, text) => {
    const {todoItemList} = this.state
    const result = todoItemList.filter(eachOne => {
      if (eachOne.id === id) {
        return {...eachOne, title: text}
      } else {
        return eachOne
      }
    })
    console.log(result)
    this.setState({todoItemList: result})
  }

  render() {
    const {todoItemList, input, isChecked} = this.state
    return (
      <div className="page-container">
        <div className="list-container">
          <h1>Simple Todos</h1>
          <div>
            <input
              className="input"
              type="text"
              value={input}
              onChange={this.oninputChange}
              placeholder="Enter todo item"
            />
            <button className="add-button" onClick={this.onAdd}>
              Add
            </button>
          </div>
          <ul className="ul-container">
            {todoItemList.map(eachItem => (
              <Item
                listItems={eachItem}
                onSaveClick={this.onSaveClick}
                key={eachItem.id}
                onCheck={this.onCheck}
                checked={isChecked}
                deleteClick={this.deleteClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
