import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Header  } from 'semantic-ui-react';
 class ContactForm extends Component {

     render() {
         return (
             <div>
             <Header  content="chucha"/>
            <Form >
                <Form.Group>
                   <Field
                   component={inputField}
                   name="userName"
                   label="User Name"
                   width={16}
                   placeholder="type user name"
                   />
                </Form.Group>
                 <Field
                     component={inputField}
                     name="userName"
                     label="User Name"
                     width={16}
                     placeholder="type user name"
                 />

            </Form>
             </div>
        );
    }

 }

const inputField = ({
    label,
    input,
    placeholder,
    width,
    type,
    nameError,
    handleChange,
    meta: { touched, error }
}) => {
    return (
        <React.Fragment>
            <Form.Input
                {...input}
                label={label}
                placeholder={placeholder}
                width={width}
                onInput={handleChange}
                error={touched ? error ? Boolean(error) : (nameError ? Boolean(nameError) : false) : false}
                type={type || 'text'}
            />
            {touched &&
                (error && nameError === undefined && <p className="error" style={{ alignSelf: 'flex-end' }}>{error}</p>)}
            {touched &&
                (nameError !== undefined && <p className="error" style={{ alignSelf: 'flex-end' }}>{nameError}</p>)}
        </React.Fragment>
    );
};
// Decorate the form component
ContactForm = reduxForm({
    form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;