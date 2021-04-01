import React, { useState } from 'react'
import { addEmployee } from "./dataHelpers";
import { Toast } from 'react-bootstrap';
import DataForm from './DataForm';
const AddEmployee = () => {
    const [employee, setEmployee] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailure, setShowFailure] = useState(false);
    const handleChange = (e) => {
        if (e.target.name === "fullName") {
            // checking if the value that is entered in 
            // the text box matches with the given 
            // soecification that name should not contain
            // any special character
            if (e.target.value.match(/^[a-zA-Z ]*$/) !== null)
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
            <Toast style={{ float: 'right', position: 'fixed', backgroundColor: '#52af50', color: 'white', zIndex: '1' }} className="custom-toast-success" onClose={() => setShowSuccess(false)} show={showSuccess} delay={3000} autohide>
                <Toast.Body>Employee Added Successfully</Toast.Body>
            </Toast>
            <Toast style={{ float: 'right', position: 'fixed', backgroundColor: '#f34636', color: 'white', zIndex: '1' }} className="custom-toast-failure" onClose={() => setShowFailure(false)} show={showFailure} delay={3000} autohide>
                <Toast.Body>Failure</Toast.Body>
            </Toast>
            {/* Using a single DataForm component to display form in both
            add employee and edit employee component thus reducing
            redundancy */}
            <DataForm onSubmit={onSubmit} employee={employee} handleChange={handleChange} actionKey={"Add"} />
        </>
    )
};

export default AddEmployee;