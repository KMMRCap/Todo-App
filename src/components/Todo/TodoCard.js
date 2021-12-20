import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faSave, faCheck } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
// import { Contexts } from './../../context/Context';

const TodoCard = (props) => {

    const [editable, setEditable] = useState(false);
    const [todoTitle, setTodoTitle] = useState(props.title);
    // const { timer } = useContext(Contexts)

    const inputElement = useRef()

    const handleDeleteTodo = (id) => {
        const filteredTodos = props.todos.filter(todo => todo.id !== id);
        props.setTodos(filteredTodos);
    }

    const handleEditTodo = (id) => {
        setEditable(!editable);
        inputElement.current.focus();
    }

    const handleSaveTodo = (id) => {
        setEditable(!editable);
        const changedTodos = props.todos.filter(todo => todo.id === id);
        let editedTodo = {
            ...changedTodos[0],
            title: todoTitle,
            id: uuidv4(),
            isChecked: false,
        }
        const filteredTodos = props.todos.filter(todo => todo.id !== id);
        let savedTodos = [...filteredTodos, editedTodo];

        props.setTodos(savedTodos.sort((a, b) => a.time - b.time));
    }

    const handleCheckTodo = (id) => {
        let checkedList = props.todos.map(item => {
            if (item.id === id) {
                return { ...item, isChecked: true }
            }
            else {
                return { ...item }
            }
        })

        props.setTodos(checkedList);

    }

    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title d-flex align-items-center  justify-content-between px-2 px-sm-4"
                    style={{ background: props.isChecked ? "green" : "red" }}>
                    <input
                        type="text"
                        ref={inputElement}
                        value={todoTitle}
                        onChange={e => setTodoTitle(e.target.value)}
                        style={{ pointerEvents: editable ? "unset" : "none" }}
                    />
                    <button className='btn' onClick={() => handleDeleteTodo(props.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    {!editable ?
                        <button className='btn' onClick={() => handleEditTodo(props.id)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        :
                        <button className='btn' onClick={() => handleSaveTodo(props.id)}>
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                    }
                    <button className='btn' onClick={() => handleCheckTodo(props.id)}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </h5>
                <div className="d-flex flex-row justify-content-between align-content-center">
                    <span className="card-text px-2 px-sm-4 py-3">{props.text}</span>
                    <span className="card-text px-2 px-sm-4 py-3">{props.createdTime}</span>
                </div>
                {/* <div className="d-flex flex-row justify-content-between align-content-center">
                    <h6 className="px-4 align-self-center">{timer.at(-1)}</h6>
                </div> */}
            </div>
        </div>
    );
}

export default TodoCard;