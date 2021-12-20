import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { createdTimeFormatter } from '../../common/TimeFormatter';
// import { Contexts } from './../../context/Context';

const TodoForm = (props) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    // const { timer, setTimer } = useContext(Contexts)

    const handleSetTodo = (e) => {
        e.preventDefault();
        if (title && text) {
            let newTodo = {
                title,
                text,
                id: uuidv4(),
                isChecked: false,
                createdTime: createdTimeFormatter(new Date()),
                date: Date.now()
            }
            props.setTodos([...props.todos, newTodo]);
            setTitle('');
            setText('');
            // setInterval(() => {
            //     let time = stopWatchFormatter(((Date.now() - newTodo.date) / 1000).toFixed());
            //     setTimer([...timer, time]);
            // }, 1000);
        }
        else {
            toast.error('Inputs are Empty', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (

        <form
            onSubmit={handleSetTodo}
            className='todo-form d-flex flex-column justify-content-center'>
            <h1>Todo Form</h1>
            <div className="mb-3">
                <label className="form-label">TITLE</label>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">info</label>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    );
}

export default TodoForm;