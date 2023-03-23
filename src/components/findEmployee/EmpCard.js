import React from 'react';
import './EmpCard.css';

const EmpCard = (props) => {

    return (
        <div className="card__container">
            <div className="card__header">
                <span className="item__one">{props.emp.name}</span>
                <span className="item__two">{props.emp.lastname}</span>
                <span className="item__three">{props.emp.email}</span>
            </div>
        </div>
    );
}

export default EmpCard;