import React from "react";
import {useFormik} from 'formik';
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      alert('Login successful');
    },
    validate: values => {
      let errors = {};
      if (!values.emailField) errors.emailField = 'Field required';
      if (!values.pswField) errors.pswField = 'Field required';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) errors.emailField = 'Invalid email address';
      return errors;
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div id="emailError" style={{color: 'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField ? <div id="pswError" style={{color: 'red'}}>{formik.errors.pswField}</div>: null}
        <div>
          <button type="submit" id="submitBtn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
