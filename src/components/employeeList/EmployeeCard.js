import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../../service/EmployeeService';
import './EmployeeCard.css';

const EmployeeCard = (props) => {

    const handleDelete = (deleteId) => {
        console.log("Deletion ");
        EmployeeService.deleteEmployee(deleteId)
            .then(props.refreshL())
            .catch((Err) => console.log("Error : ", Err))
    }

    return (
        <div className="card__container">
            <div className="card__header">
                <span className="item__one">{props.emp.name}</span>
                <span className="item__two">{props.emp.lastname}</span>
                <span className="item__three">{props.emp.email}</span>
                <span className="item__four">
                    <Link to={`/edit/${props.emp.id}`} className="edit__button" >Edit</Link>
                    <button onClick={() => { handleDelete(props.emp.id) }} className="delete__button">Delete</button>
                </span>
            </div>
        </div>
    );
}

export default EmployeeCard;