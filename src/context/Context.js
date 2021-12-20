import { createContext, useState } from "react";

export const Contexts = createContext({
    todos: [], setTodos: () => { },
    title: '', setTitle: () => { },
    text: '', setText: () => { },
    timer: [], setTimer: () => { },
    // editable: false, setEditable: () => { },
    // todoTitle: '', setTodoTitle: () => { },

})

export const Context = ({ children }) => {

    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [timer, setTimer] = useState([]);
    // const [editable, setEditable] = useState(false);
    // const [todoTitle, setTodoTitle] = useState(title);

    return (
        <Contexts.Provider value={{
            todos, setTodos,
            title, setTitle,
            text, setText,
            timer, setTimer,
            // editable, setEditable,
            // todoTitle, setTodoTitle,
        }}>
            {children}
        </Contexts.Provider>
    )
}