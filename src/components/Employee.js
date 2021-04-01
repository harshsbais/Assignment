import React, { useEffect, useState } from "react";
import { Button, Popover, OverlayTrigger, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getEmployees, deleteEmployee } from "./dataHelpers";
const Employee = (props) => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const del = (e) => {
        console.log(e)
        deleteEmployee(e);
        setShowToast(true);
        document.body.click();
        let result = employees.filter(employee => employee.id !== e);
        setEmployees(result);
    }
    useEffect(() => {
        getEmployees()
            .then((data) => {
                setEmployees(data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <Toast style={{
                float: 'right', position: 'fixed', backgroundColor: '#52af50', color: 'white', zIndex: '1'
            }} onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                <Toast.Body>Employee Data Deleted Successfully</Toast.Body>
            </Toast>
            <Link to='/add'><Button className='btn-primary p-1 mb-3' style={{ width: "50px", height: "50px" }}><i class="fa fa-plus" aria-hidden="true" style={{ color: "white" }} /></Button></Link>
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
                                                <tr key={employee.id}>
                                                    <td className="text text-muted">{`${idx + 1}`}</td>
                                                    <td className="text ins-title">{employee.fullName}</td>
                                                    <td className="text ins-content"><img src={employee.avatar} style={{ height: "100px" }} alt={`Avatar of ${employee.fullName}`} /></td>
                                                    <td className="text ins-content">{(employee.email)}</td>
                                                    <td className="text ins-content">{(employee.address)}</td>
                                                    <td className="text ins-content">{(employee.phoneNumber)}</td>
                                                    <td className="text ins-content">{(employee.dob)}</td>
                                                    <td className='text'>
                                                        <Link to={`/edit/${employee.id}`}><Button variant='success' className='mr-2'><i class="fa fa-pencil-square-o" aria-hidden="true" style={{ color: "white" }}></i></Button></Link>
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
                                {
                                    loading && <table className="table table-striped table-hover">
                                        <tbody>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(el => {
                                                return <tr>
                                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(td => {
                                                        return <td>
                                                            <SkeletonTheme color="#B4B3B3" highlightColor="#D0D0D0">
                                                                <Skeleton width={100} />
                                                            </SkeletonTheme>
                                                        </td>
                                                    })}
                                                </tr>
                                            })
                                            }
                                        </tbody>
                                    </table>
                                }
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