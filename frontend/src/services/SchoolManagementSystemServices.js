import axios from 'axios';

const getStudentsForMarkAttendance = "http://localhost:8070/students/getStudentsByClassName";
const addAttendanceDetails = "http://localhost:8070/attendance/mark";
const viewAttendanceByClassName = "http://localhost:8070/attendance";
const deleteAttendance = "http://localhost:8070/attendance/delete";

class SchoolManagementSystemServices {

    //getStudentSForMarkAttendance
    GetAllStudentsForAttendanceMark(className) {
        return axios.get(getStudentsForMarkAttendance + '/' + className);
    }

    //Mark Attendance
    MarkAttendance(attendance){
        return axios.post(addAttendanceDetails,attendance);
    }

    //View Attendance by class name
    ViewAttendance(className){
        return axios.get(viewAttendanceByClassName + '/' + className);
    }

    DeleteAttendance(attId){
        return axios.delete(deleteAttendance +'/'+ attId);
    }
}
export default new SchoolManagementSystemServices();