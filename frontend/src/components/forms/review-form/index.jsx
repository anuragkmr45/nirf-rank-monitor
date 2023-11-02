import React from 'react'
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
            // Send the form data to your FastAPI server
            const response = await axios.post('http://localhost:8000/nirf', {
                NE: values.field_1,
                NT: values.field_2,
                NP: values.field_3,
                F: values.field_4,
                Fra: values.field_5,
                F1: values.field_6,
                F2: values.field_7,
                F3: values.field_8,
                BC: values.field_9,
                BO: values.field_10,
                P: values.field_11,
                FRQ: values.field_12,
                CC: values.field_13,
                TOP25: values.field_14,
                PG: values.field_15,
                PP: values.field_16,
                RF: values.field_17,
                CF: values.field_18,
                NPP: values.field_19,
                NHS: values.field_20,
                NG: values.field_21,
                MS: values.field_22,
                NPHD: values.field_23,
                RD: values.field_24,
                NWS: values.field_25,
                NESC: values.field_26,
                PCS: values.field_27,
                PCSOPT: values.field_28,
                PR: values.field_29,
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

export default ReviewForm
