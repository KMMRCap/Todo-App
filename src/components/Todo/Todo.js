import React, { useEffect, useState } from "react";
import TodoForm from './TodoForm';
import TodoCard from './TodoCard';
import { Link } from 'react-router-dom';
// import { Contexts } from './../../context/Context';

const Todo = (props) => {

    const [todos, setTodos] = useState([]);
    // const {timer} = useContext(Contexts)


    useEffect(() => {
        let data = localStorage.getItem('todos');
        let savedTodos = JSON.parse(data);
        if (data) {
            setTodos(savedTodos)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // useEffect(() => {
    //     console.log(timer);
    // }, [timer])

    return (
        <div className='row justify-content-lg-between align-items-lg-start align-items-center flex-lg-row flex-column'>
            <div className="col-xxl-5 col-lg-6 col-md-8 col-sm-10 col-12 pt-lg-0 pt-5 mt-lg-0 mt-5 pb-lg-0 pb-3">
                <Link to="/login">
                    <button className="btn btn-secondary logout">Log Out</button>
                </Link>
                <Link to="/">
                    <button className=" btn btn-secondary backtohome">Landing Page</button>
                </Link>
                <TodoForm
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>
            <div className='col-xxl-5 col-lg-6 col-md-8 col-sm-10 col-12'>
                {
                    (todos && todos?.length !== 0) ? todos.map(todo => (
                        <TodoCard
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            text={todo.text}
                            active={todo.active}
                            isChecked={todo.isChecked}
                            createdTime={todo.createdTime}
                            date={todo.date}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    )) : <h1>Add New Todos</h1>
                }
            </div>
        </div>
    );
}

export default Todo;