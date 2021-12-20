import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/main.scss';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginForm from './Form/LoginForm';
import SignUpForm from './Form/SignUpForm';
import Todo from './Todo/Todo';
import Landing from './Landing/Landing';


const App = () => {

    return (

        <div className='container-lg container-fluid'>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </div>
    );
}

export default App;