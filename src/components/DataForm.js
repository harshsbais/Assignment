//Form Component to display in AddEmployee & EditEmployee Component
import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function DataForm(props) {
    const { avatar, address, phoneNumber, dob, email, fullName } = props.employee;
    return (
        <div>
            <div className='container center-box'>
                <div className="w-75 mx-auto shadow p-5">
                    <div className="text-center">
                        <h1>{props.actionKey} Employee</h1>
                    </div>
                    <Form onSubmit={(e) => props.onSubmit(e)}>
                        <Form.Group>
                            <Form.Label className="que-form-label">Name</Form.Label>
                            <input
                                type="text"
                                required
                                className="form-control form-control-lg"
                                placeholder="Enter Name"
                                name="fullName"
                                value={fullName ?? ""}
                                onChange={(e) => props.handleChange(e)}
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
                                onChange={(e) => props.handleChange(e)}
                            />
                            <center><img src={avatar} alt="Avatar" style={{ height: "400px", marginTop: "10px" }} /></center>
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
                                onChange={(e) => props.handleChange(e)}
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
                                onChange={(e) => props.handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="que-form-label">Phone Number</Form.Label>
                            <input
                                required
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone Number"
                                name="phoneNumber"
                                value={phoneNumber ?? ""}
                                onChange={(e) => props.handleChange(e)}
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
                                onChange={(e) => props.handleChange(e)}
                            />
                        </Form.Group>
                        <Button type='submit' className="btn btn-primary btn-block" on>{props.actionKey} Employee</Button>
                    </Form>
                </div>
            </div >
            <div style={{
                position: "fixed",
                top: "10px",
                right: "30px",
                color: "#ff394d",
                fontSize: "35px"
            }}>
                <Link to="/">
                    <i className="fa fa-times"></i>
                </Link>
            </div>
        </div>
    )
}

export default DataForm
