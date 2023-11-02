import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { Button } from 'react-bootstrap';

const customFieldNames = [
    'NE',
    'NT',
    'NP',
    'F',
    'Fra',
    'F1',
    'F2',
    'F3',
    'BC',
    'BO',
    'P',
    'FRQ',
    'CC',
    'TOP25',
    'PG',
    'PP',
    'RF',
    'CF',
    'NPP',
    'NHS',
    'NG',
    'MS',
    'NPHD',
    'RD',
    'NWS',
    'NWF',
    'NESC',
    'PCS OPT',
    'PR',
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

const ReviewForm = () => {

    const handleSubmit = async (values, { setSubmitting }) => {
        try {

            const response = await axios.post('http://localhost:8000/nirf', {
                NT: values.field_2,
                NP: values.field_3,
                P: values.field_11,
            });

            console.log('Server response:', response.data.finalValue);
        } catch (error) {
            console.error('Error:', error);
        }
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
                            <Row key={fieldName}>
                                <Col lg='3'>
                                    <label htmlFor={fieldName}>{customName}:</label>
                                </Col>
                                <Col>
                                    <Field
                                        type="number"
                                        step="0.01"
                                        name={fieldName}
                                        placeholder={customName}
                                    />
                                    <ErrorMessage name={fieldName} component="div" className="error" />
                                </Col>
                            </Row>
                        );
                    })}
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    )
}

export default ReviewForm
