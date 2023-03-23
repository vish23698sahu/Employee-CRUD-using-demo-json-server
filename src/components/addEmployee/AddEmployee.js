import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../../service/EmployeeService';
import './AddEmployee.css';

const AddEmployee = () => {
    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [formVNotalid, setFormNotValid] = useState(false);
    const navigate = useNavigate();

    const submitEmployee = () => {
        if (id === '' || name === '' || lastName === '' || email === '') {
            setFormNotValid(true)
            return;
        }
        let newEmp = {
            id,
            name,
            lastname: lastName,
            email
        }
        setFormNotValid(false);
        EmployeeService.createEmployee(newEmp);
        navigate(-1);
    }

    return (
        <div>
            <h1>Add New Employee</h1><br />

            <div className="create__container">
                {
                    formVNotalid ? <p className="valid__form">Please enter all Employee Details:</p> : ''
                }
                <form className="form__container">
                    <div className="input__1">
                        <label className="item__1" >id : </label>
                        <input className="item__2" name="id" value={id} onChange={(e) => setId(e.target.value)} type="number" /><br />
                    </div>
                    <div className="input__1">
                        <label className="item__1">First Name : </label>
                        <input className="item__2" id="firstName" name="firstName" value={name} onChange={(e) => setName(e.target.value)} type="text" /><br />
                    </div>
                    <div className="input__1">
                        <label className="item__1">Last Name : </label>
                        <input className="item__2" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" /><br />
                    </div>
                    <div className="input__1">
                        <label className="item__1">Email : </label>
                        <input className="item__2" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" /><br />
                    </div>
                </form>
                <div className="create__btns">
                    <Link onClick={() => navigate(-1)} className='create__btn ' >Go Back</Link>
                    <Link className="create__btn2" onClick={submitEmployee} >Submit</Link><br />
                </div>
            </div>

        </div>
    )
}

export default AddEmployee;