import { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFirestore } from '../../../context/FirestoreContext';

import { CllgDts } from '../../../.data/CollegeData'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const initialValues = {
    instituteId: '',
    instituteName: '',
    city: '', // To store the City
    state: '', // To store the State
};

const validate = (values) => {
    const errors = {};

    if (!values.instituteId) {
        errors.instituteId = 'Institute ID is required';
    }

    if (!values.instituteName) {
        errors.instituteName = 'Institute Name is required';
    }

    // You can add more validation rules for the fields here.

    return errors;
};

function MyVerticallyCenteredModal(props) {

    const { createCollectionAndDocument } = useFirestore();

    const onSubmit = async (values) => {
        const collegeById = CllgDts.find((college) => college['Institute Id'] === values.instituteId);

        const collegeByName = CllgDts.find((college) => college['Institute Name'] === values.instituteName);

        if (collegeById || collegeByName) {
            await createCollectionAndDocument(values.instituteId, 'collegeDetails', {
                instituteName: collegeById ? collegeById['Institute Name'] : collegeByName['Institute Name'],
            });
        }

    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                Institute Registration
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validate={validate}
                >
                    <Form>
                        <div className="my-3">
                            <Field type="text" id="instituteId" name="instituteId" />
                            <ErrorMessage name="instituteId" component="div" className="error" />
                        </div>
                        <div className="my-3">
                            <Field type="text" id="instituteName" name="instituteName" />
                            <ErrorMessage name="instituteName" component="div" className="error" />
                        </div>
                        <Button className='btn btn-danger' onClick={props.onHide}>Close</Button>
                        <Button className='btn btn-primary' type="submit">Submit</Button>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

function CollegeReg() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Check Your College Id
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default CollegeReg;