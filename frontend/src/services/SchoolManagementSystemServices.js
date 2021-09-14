import axios from 'axios';

const getStudentsForMarkAttendance = "http://localhost:8070/students/getStudentsByClassName";
const addAttendanceDetails = "http://localhost:8070/attendance/mark";
const addMarks = "http://localhost:8070/marks/add";
const viewAttendanceByClassName = "http://localhost:8070/attendance";
const deleteAttendance = "http://localhost:8070/attendance/delete";
const login = "http://localhost:8070/users/login";
const viewMark = "http://localhost:8070/marks/report";

class SchoolManagementSystemServices {

    ViewMarks(id){
        return axios.get(viewMark + '/' + id);
    }

    AddMarks(marks){
        return axios.post(addMarks,marks);
    }
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

    Login(user){
        return axios.post(login,user);
    }
}
export default new SchoolManagementSystemServices();