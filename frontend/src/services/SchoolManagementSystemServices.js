import axios from 'axios';

const getStudentsForMarkAttendance = "http://localhost:8070/students/getStudentsByClassName"

class SchoolManagementSystemServices {

    //getStudentSForMarkAttendance
    GetAllStudentsForAttendanceMark(className) {
        return axios.get(getStudentsForMarkAttendance + '/' + className);
    }
}
export default new SchoolManagementSystemServices();