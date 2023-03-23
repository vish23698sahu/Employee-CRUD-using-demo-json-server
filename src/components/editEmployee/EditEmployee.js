import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../../service/EmployeeService';
import './EditEmployee.css';

const EditEmployee = () => {
    const [emp, setEmp] = useState();
    const [updatedName, setUpdatedName] = useState('');
    const [updatedLastName, setUpdatedLastName] = useState('');
    const [validForm, setValidForm] = useState(true);
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        EmployeeService.getSingleEmployee(id)
            .then((res) => {
                setEmp(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    const handleEdit = () => {
        if (updatedName === '' || updatedLastName === '') {
            setValidForm(false);
            return;
        }
        const updatedEmp = {
            id,
            name: updatedName,
            lastname: updatedLastName,
            email: emp.email
        }

        EmployeeService.updateEmployee(updatedEmp, id)
            .then(() => {
                console.log("Data edited");
            })
            .catch((err) => {
                console.log("Error : ", err);
            });
        navigate(-1);
        setValidForm(true);
    }

    return (
        <div>
            <p>
                Edit Employee with ID : {id}
            </p>
            {
                validForm ? '' : <p className='edit__valid'>Please enter all the fields</p>
            }
            <form className="form__container">
                <div className="input__1">
                    <label className="item__1">First Name : </label>
                    <input className="item__2" id="name" name="name" value={updatedName} onChange={(e) => { setValidForm(true); setUpdatedName(e.target.value) }} type="text" /><br />
                </div>
                <div className="input__1">
                    <label className="item__1">Last Name : </label>
                    <input className="item__2" id="lastName" name="lastName" value={updatedLastName} onChange={(e) => setUpdatedLastName(e.target.value)} type="text" /><br />
                </div>
            </form><br />

            <div>
                <Link className="edit__btn" onClick={handleEdit} >Submit</Link><br />
            </div>

        </div>
    )
}

export default EditEmployee