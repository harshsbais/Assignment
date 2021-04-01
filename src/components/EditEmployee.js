import React, { useState, useEffect } from 'react'
import { editEmployee, getEmployee } from "./dataHelpers";
import { useParams, useHistory } from 'react-router-dom';
import { Form, Button, Toast } from 'react-bootstrap';
const EditEmployee = () => {
    const [employee, setEmployee] = useState({});
    const history = useHistory();
    const { id } = useParams();
    const { avatar, address, phoneNumber, dob, email, fullName } = employee;
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
            <Toast className="custom-toast-failure" onClose={() => setShowFailure(false)} show={showFailure} delay={3000} autohide>
                <Toast.Body>Failure</Toast.Body>
            </Toast>
            <div className='container center-box'>
                <div className="w-75 mx-auto shadow p-5">
                    <div className="text-center">
                        <h1>Edit Employee</h1>
                    </div>
                    <Form onSubmit={(e) => onSubmit(e)}>
                        <Form.Group>
                            <Form.Label className="que-form-label">Name</Form.Label>
                            <input
                                type="text"
                                required
                                className="form-control form-control-lg"
                                placeholder="Enter Name"
                                name="fullName"
                                value={fullName ?? ""}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="que-form-label">Avatar</Form.Label>
                            <input
                                required
                                type="url"
                                className="form-control form-control-lg"
                                placeholder="Enter Avatar"
                                name="avatar"
                                value={avatar ?? ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <center><img src={avatar} alt="Avatar" style={{ height: "400px", marginTop: "10px", display: (avatar ?? "").match(/^http.*\.(jpeg|jpg|gif|png)$/) ? '' : 'none' }} /></center>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="que-form-label">Email</Form.Label>
                            <input
                                required
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email"
                                name="email"
                                value={email ?? ""}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="que-form-label">Address</Form.Label>
                            <input
                                required
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Address"
                                name="address"
                                value={address ?? ""}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="que-form-label">Phone Number</Form.Label>
                            <input
                                required
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone Number"
                                name="phoneNumber"
                                value={phoneNumber ?? ""}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="que-form-label">Date of Birth</Form.Label>
                            <input
                                required
                                type="date"
                                className="form-control form-control-lg"
                                placeholder="Enter Date of Birth"
                                name="dob"
                                value={dob ?? ""}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Button type='submit' className="btn btn-primary btn-block" on>Edit Employee</Button>
                    </Form>
                </div>
            </div >
        </>
    )
};

export default EditEmployee;