import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Button } from 'react-bootstrap';

const customFieldNames = [
    'Custom Field 1',
    'Custom Field 2',
    'Custom Field 3',
];

const initialValues = Object.fromEntries(
    customFieldNames.map((name, index) => [`field_${index + 1}`, ''])
);

const validationSchema = Yup.object().shape(
    Object.fromEntries(
        Array.from({ length: 50 }, (_, index) => {
            const fieldName = `field_${index + 1}`;
            return [fieldName, Yup.number().typeError('Invalid number').nullable(true)];
        })
    )
);

const Dashboard = () => {

    const handleSubmit = (values, { setSubmitting }) => {
        // Handle form submission with the values
        console.log(values);
    };

    return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        {customFieldNames.map((customName, index) => {
                            const fieldName = `field_${index + 1}`;
                            return (
                                <div key={fieldName}>
                                    <label htmlFor={fieldName}>{customName}:</label>
                                    <Field
                                        type="number"
                                        step="0.01"
                                        name={fieldName}
                                    />
                                    <ErrorMessage name={fieldName} component="div" className="error" />
                                </div>
                            );
                        })}
                        <Button type="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
    )
}

export default Dashboard
