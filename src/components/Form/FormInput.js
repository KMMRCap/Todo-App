import { React } from 'react';
import { Field, ErrorMessage } from 'formik';

const FormInput = (props) => {
    return (
        <div className="mb-3">
            <label className="form-label text-black" htmlFor={props.for}>{props.label}</label>
            <Field
                className="form-control"
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                type={props.type}
            />
            <span className="text-danger">
                <ErrorMessage name={props.name} />
            </span>
        </div>
    );
}

export default FormInput;