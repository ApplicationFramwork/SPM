import axios from 'axios';
//Student Management Services URL
//get all students
const Student_API_GET_ALL = "http://localhost:8070/students/allStudents";
//Add new Student
const Student_API_ADD_STUDENT = "http://localhost:8070/students/addStudents";
//delete Student
const Student_API_DELETE = "http://localhost:8070/students/delete"
//Notices Management
//get all Notices
const Notices_API_GET_ALL = "http://localhost:8070/notices/allNotices";
//delete Notices
const Notices_API_DELETE = "http://localhost:8070/notices/delete"
class SchoolManagementSystemServices{
    //get all students
    getAllStudents(){
        return axios.get(Student_API_GET_ALL);
    }
    //add a new student
    addStudent(student){
        return axios.post(Student_API_ADD_STUDENT, student);
    }
    //delete a student
    deleteStudent(id){
        return axios.delete(Student_API_DELETE + '/' + id);
    }

    //get all notices
    getAllNotices(){
        return axios.get(Notices_API_GET_ALL);
    }
    //delete Notice
    deleteNotice(id){
        return axios.delete(Notices_API_DELETE + '/' + id);
    }


}
export default new SchoolManagementSystemServices();