import React, { useState } from 'react'
import { addEmployee } from "./dataHelpers";
import { Toast } from 'react-bootstrap';
import DataForm from './DataForm';
const AddEmployee = () => {
    const [employee, setEmployee] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailure, setShowFailure] = useState(false);
    const handleChange = (e) => {
        let check = e.target.value;
        if (e.target.name === "fullName") {
            if (check.match(/^[a-zA-Z ]*$/) !== null)
                setEmployee({ ...employee, [e.target.name]: e.target.value })
        }
        else
            setEmployee({ ...employee, [e.target.name]: e.target.value })
    }
    const onSubmit = async e => {
        e.preventDefault();
        console.log(employee);
        await addEmployee(employee).then(async res => {
            console.log(res);
        }).then(res => {
            console.log("done");
            setShowSuccess(true);
            setEmployee({});
        }).catch((err) => {
            console.log(err);
            setShowFailure(true);
        })
    }
    return (
        <>
            <Toast className="custom-toast-success" onClose={() => setShowSuccess(false)} show={showSuccess} delay={3000} autohide>
                <Toast.Body>Success</Toast.Body>
            </Toast>
            <Toast className="custom-toast-failure" onClose={() => setShowFailure(false)} show={showFailure} delay={3000} autohide>
                <Toast.Body>Failure</Toast.Body>
            </Toast>
            <DataForm onSubmit={onSubmit} employee={employee} handleChange={handleChange} />
        </>
    )
};

export default AddEmployee;