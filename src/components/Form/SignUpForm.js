import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import FormInput from './FormInput';

const SignUpForm = () => {

    return (
        <div className="row justify-content-center">
            <div className="col-xl-6 col-md-8 col-10 login-container">
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        passwordRepeat: ''
                    }}

                    validate={values => {
                        const errors = {};

                        if (!values.firstName) {
                            errors.firstName = 'Required';
                        } else if (values.firstName.match(/\d+/g)) {
                            errors.firstName = 'It should be a text'
                        }

                        if (!values.lastName) {
                            errors.lastName = 'Required';
                        } else if (values.firstName.match(/\d+/g)) {
                            errors.lastName = 'It should be a text'
                        }

                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length < 6) {
                            errors.password = 'Must be at least 6 characters';
                        }

                        if (!values.passwordRepeat) {
                            errors.passwordRepeat = 'Required';
                        } else if (values.passwordRepeat !== values.password) {
                            errors.passwordRepeat = 'Passwords are not the same';
                        }

                        return errors;
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form>
                        <FormInput
                            label="First Name"
                            for="firstName"
                            id="firstName"
                            name="firstName"
                            placeholder="Ali"
                            type="text"
                        />
                        <FormInput
                            label="Last Name"
                            for="lastName"
                            id="lastName"
                            name="lastName"
                            placeholder="Khalilian"
                            type="text"
                        />
                        <FormInput
                            label="Email"
                            for="email"
                            id="email"
                            name="email"
                            placeholder="Ali@gmail.com"
                            type="email"
                        />
                        <FormInput
                            label="Password"
                            for="password"
                            id="password"
                            name="password"
                            placeholder="******"
                            type="password"
                        />
                        <FormInput
                            label="Repeat Password"
                            for="passwordRepeat"
                            id="passwordRepeat"
                            name="passwordRepeat"
                            placeholder="******"
                            type="password"
                        />
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <button type="submit" className="btn btn-primary text-center w-75">Sign Up</button>
                            <p className="text-black text-center py-2 m-0">Already signed up ?</p>
                            <Link to="/login">
                                <h6 className="text-center sign-button">Log In</h6>
                            </Link>
                        </div>
                    </Form>
                </Formik>
            </div>
            <Link to="/">
                <button className=" btn btn-secondary backtohome">Landing Page</button>
            </Link>
            <Link to="/todo">
                <button className=" btn btn-secondary todoapp">Todo App</button>
            </Link>
        </div>
    )
}

export default SignUpForm;