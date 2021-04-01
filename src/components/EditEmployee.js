import React, { useState, useEffect } from 'react'
import { editEmployee, getEmployee } from "./dataHelpers";
import { useParams, useHistory } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import DataForm from './DataForm';
const EditEmployee = () => {
    const [employee, setEmployee] = useState({});
    const history = useHistory();
    const { id } = useParams();
    const [showFailure, setShowFailure] = useState(false);
    useEffect(() => {
        getEmployee(id)
            .then((data) => {
                setEmployee(data.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
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
        await editEmployee(employee, id).then(async res => {
            console.log(res);
        }).then(res => {
            console.log("done");
            history.push("/");
            setEmployee({});
        }).catch((err) => {
            console.log(err);
            setShowFailure(true);
        })
    }
    return (
        <>
            <Toast style={{ float: 'right', position: 'fixed', backgroundColor: '#52af50', color: 'white', zIndex: '1' }} className="custom-toast-failure" onClose={() => setShowFailure(false)} show={showFailure} delay={3000} autohide>
                <Toast.Body>Failure Response</Toast.Body>
            </Toast>
            <DataForm onSubmit={onSubmit} employee={employee} handleChange={handleChange} />
        </>
    )
};

export default EditEmployee;