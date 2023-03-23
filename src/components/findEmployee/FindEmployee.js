import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../../service/EmployeeService';
import EmpCard from './EmpCard';
import './FindEmployee.css';

const FindEmployee = () => {
    const [id, setId] = useState('');
    const [empData, setempData] = useState([]);
    const [validForm, setValidForm] = useState(true);
    const [empty, setEmpty] = useState(false);
    const navigate = useNavigate();

    const onIdChange = (e) => {
        setId(e.target.value);
        setEmpty(false);
    }

    const onFindClick = (empId) => {
        if (id === '') {
            setValidForm(false);
            return;
        }
        EmployeeService.getSingleEmployee(empId)
            .then((res) => {
                let { id, name, lastname, email } = res.data;
                let newEmp = {
                    id, name, lastname, email
                }
                setEmpty(false);
                setempData([newEmp]);
            })
            .catch((Err) => {
                console.log("Error : ", Err);
                setEmpty(true);
                setempData([]);
            })
        console.log("Emp : ", empData);
        setValidForm(true);
    }

    return (
        <div className='find__container' >
            <h2>Look up an Employee</h2><br />

            {
                validForm ? '' : <p className='valid__find'>Please enter ID to search Employee</p>
            }

            <form className="findemp__form">
                <div className="input__1">
                    <label className="item__1" >Enter ID : </label>
                    <input className="item__2" name="name" value={id} placeholder="enter ID to search" onChange={onIdChange} type="number" /><br />
                </div>
            </form>

            {
                empty ? <p>No Employee found with ID: {id}</p> : ''
            }

            {
                empData && empData.map((emp, i) => {
                    return (
                        <EmpCard key={i} emp={emp} />
                    )
                })
            }

            <div className='find__btns'>
                <Link onClick={() => navigate(-1)} className='find__goback' >Go Back</Link>
                <Link className="find__btn" onClick={() => onFindClick(id)} >Find</Link>
            </div>
        </div>
    )
}

export default FindEmployee;