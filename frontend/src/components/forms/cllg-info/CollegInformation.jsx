import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './CollegeInformation.css';

const initialValues = {
  tlr: '',
  rpc: '',
  go: '',
  oi: '',
  perception: '',
};

const validationSchema = Yup.object().shape({
  tlr: Yup.number().required('TLR is required'),
  rpc: Yup.number().required('RPC is required'),
  go: Yup.number().required('GO is required'),
  oi: Yup.number().required('OI is required'),
  perception: Yup.number().required('Perception is required'),
});

const CollegeInformation = () => {
  const handleSubmit = (values) => {
    // Handle data submission here (e.g., store data in a database)
    console.log('Submitted data:', values);
  };

  return (
    <div>
      <div className="container">
        <h1>College Information</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <label htmlFor="tlr">TLR:</label>
              <Field type="number" id="tlr" name="tlr" />
              <ErrorMessage name="tlr" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="rpc">RPC  :</label>
              <Field type="number" id="rpc" name="rpc" />
              <ErrorMessage name="rpc" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="go">GO  :</label>
              <Field type="number" id="go" name="go" />
              <ErrorMessage name="go" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="oi">OIinclude  :</label>
              <Field type="number" id="oi" name="oi" />
              <ErrorMessage name="oi" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="perception">Perception:</label>
              <Field type="number" id="perception" name="perception" />
              <ErrorMessage name="perception" component="div" className="error" />
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CollegeInformation;
