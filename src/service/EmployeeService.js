import axios from "axios";

const EMPLOYEE_API_BASE_URL = 'http://localhost:7000/employees';

class EmployeeService {

    getEmployeesList() {
        return axios.get(EMPLOYEE_API_BASE_URL + '/list');
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + '/create', employee);
    }

    getSingleEmployee(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + `/get/${employeeId}`, employeeId);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_API_BASE_URL + `/update/${employeeId}`, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + `/delete/${employeeId}`, employeeId);
    }

}


export default new EmployeeService();