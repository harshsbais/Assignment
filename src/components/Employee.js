import React, { useEffect, useState } from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEmployees, deleteEmployee } from "./dataHelpers";
const Employee = (props) => {
    const [employees, setEmployees] = useState([]);
    const del = (e) => {
        console.log(e)
        deleteEmployee(e);
        document.body.click();
        let ins = [];
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === e)
                continue;
            ins.push(employees[i]);
            console.log(employees[i])
        }
        setEmployees(ins);
    }
    useEffect(() => {
        getEmployees()
            .then((data) => {
                setEmployees(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <Button className='btn-primary p-1 mb-3' style={{ width: "50px", height: "50px" }}><Link to='/add'><i class="fa fa-plus" aria-hidden="true" style={{ color: "white" }} /></Link></Button>
            <div className="app-main__inner">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card">
                            <div className="table-responsive text-center">
                                <table
                                    id="table"
                                    className="align-middle mb-0 table table-borderless table-striped table-hover"
                                    style={{ padding: "10px" }}>
                                    <thead>
                                        <tr>
                                            <th className="text-center">#</th>
                                            <th className="text-center">Full Name</th>
                                            <th className="text-center">Avatar</th>
                                            <th className="text-center">E Mail</th>
                                            <th className="text-center">Address</th>
                                            <th className="text-center">Phone Number</th>
                                            <th className="text-center">DOB</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees.map((employee, idx) => {
                                            return (
                                                <tr>
                                                    <td className="text text-muted">{`${idx + 1}`}</td>
                                                    <td className="text ins-title">{employee.fullName}</td>
                                                    <td className="text ins-content"><img src={employee.avatar} style={{ height: "100px" }} alt={`Avatar of ${employee.fullName}`} /></td>
                                                    <td className="text ins-content">{(employee.email)}</td>
                                                    <td className="text ins-content">{(employee.address)}</td>
                                                    <td className="text ins-content">{(employee.phoneNumber)}</td>
                                                    <td className="text ins-content">{(employee.dob)}</td>
                                                    <td className='text'>
                                                        <Button variant='success' className='mr-2'><Link to={`/edit/${employee.id}`}><i class="fa fa-pencil-square-o" aria-hidden="true" style={{ color: "white" }}></i></Link></Button>
                                                        <OverlayTrigger
                                                            trigger="click"
                                                            key={idx}
                                                            rootClose={true}
                                                            placement="top"
                                                            overlay={
                                                                <Popover id={`popover-positioned-${idx}`}>
                                                                    <Popover.Title as="h3">Are you sure ?</Popover.Title>
                                                                    <Popover.Content>
                                                                        <Button variant="warning" onClick={e => { del(employee.id) }}>Confirm Delete</Button>
                                                                    </Popover.Content>
                                                                </Popover>
                                                            }
                                                        >
                                                            <Button variant="danger"><i class="fa fa-trash-o" aria-hidden="true"></i></Button>
                                                        </OverlayTrigger>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive"></div>
                </div>
            </div>
        </>
    )
}


export default Employee;