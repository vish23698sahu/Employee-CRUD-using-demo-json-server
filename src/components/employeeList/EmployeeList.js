import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../../service/EmployeeService';
import EmployeeCard from './EmployeeCard';
import './EmployeeList.css';

const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const [refreshList, setRefreshList] = useState(true);
    const navigate = useNavigate();

    const fetchEmployees = async () => {
        try {
            const res = await EmployeeService.getEmployeesList();
            setEmployeeList(res.data);
        } catch (error) {
            console.log("Error : ", error);
        }
    }

    const refreshL = () => {
        setRefreshList((prevstate) => !prevstate);
    }

    useEffect(() => {
        console.log("fetching Employee List: ");
        fetchEmployees();
    }, [refreshList]);

    return (
        <div>
            <h2>Employee List</h2><br />
            {
                employeeList && employeeList.map((emp, i) => {
                    return (
                        <EmployeeCard refreshL={refreshL} key={i} emp={emp} />
                    )
                })
            }
            <br />
            <br />
            <Link onClick={() => navigate(-1)} className='goback__btn' >Go Back</Link>
        </div>
    )
}

export default EmployeeList