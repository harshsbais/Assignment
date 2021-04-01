import React, { useState } from 'react'
import { addEmployee } from "./dataHelpers";
import { Form, Button, Toast } from 'react-bootstrap';
const AddEmployee = () => {
    const [employee, setEmployee] = useState({});
    const { name, avatar, address, phoneNumber, dob, email } = employee;
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailure, setShowFailure] = useState(false);
    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }
    const onSubmit = async e => {
        e.preventDefault();
        console.log(employee);
        // await addPayment(payment).then(async res => {
        //     console.log(res);
        // }).then(res => {
        //     console.log("done");
        //     setShowSuccess(true);
        //     setPayment({ name: '', duration: '', price: '' })
        // }).catch((err) => {
        //     console.log(err)
        //     setShowFailure(true);
        // })
    }
    return (
        <>
            <Toast className="custom-toast-success" onClose={() => setShowSuccess(false)} show={showSuccess} delay={3000} autohide>
                <Toast.Body>Success</Toast.Body>
            </Toast>
            <Toast className="custom-toast-failure" onClose={() => setShowFailure(false)} show={showFailure} delay={3000} autohide>
                <Toast.Body>Failure</Toast.Body>
            </Toast>
            <div className='container center-box'>
                <div className="w-75 mx-auto shadow p-5">
                    <div className="text-center">
                        <h1>Add Employee</h1>
                    </div>
                    <Form onSubmit={(e) => onSubmit(e)}>
                        <Form.Group>
                            <Form.Label className="que-form-label">Name</Form.Label>
                            <input
                                type="text"
                                required
                                className="form-control form-control-lg"
                                placeholder="Enter Name"
                                name="name"
                                value={name}
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
                                value={avatar}
                                onChange={(e) => handleChange(e)}
                            />
                            <center><img src={avatar} alt="Avatar" style={{ height: "400px", marginTop: "10px", display: avatar.match(/^http.*\.(jpeg|jpg|gif|png)$/) ? '' : 'none' }} /></center>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="que-form-label">Address</Form.Label>
                            <input
                                required
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Address"
                                name="address"
                                value={address}
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
                                value={phoneNumber}
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
                                value={dob}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="que-form-label">Email</Form.Label>
                            <input
                                required
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email"
                                name="email"
                                value={email}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Button type='submit' className="btn btn-primary btn-block" on>Add Employee</Button>
                    </Form>
                </div>
            </div >
        </>
    )
};

export default AddEmployee;