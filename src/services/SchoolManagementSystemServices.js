import axios from 'axios';
//Student Management Services URL
//get all students
const Student_API_GET_ALL = "http://localhost:8070/students/allStudents";
//Add new Student
const Student_API_ADD_STUDENT = "http://localhost:8070/students/addStudents";
//delete Student
const Student_API_DELETE = "http://localhost:8070/students/delete";
//get student by ID
const Student_API_GET_STUDENT_BY_ID = "http://localhost:8070/students/get"
//update student without image
const Student_API_UPDATE = "http://localhost:8070/students/update"
//Notices Management
//get all Notices
const Notices_API_GET_ALL = "http://localhost:8070/notices/allNotices";
//delete Notices
const Notices_API_DELETE = "http://localhost:8070/notices/delete"
//get notice by ID
const Notices_API_GET_BY_ID = "http://localhost:8070/notices/get";
const UpdateNoticeAPI = "http://localhost:8070/notices/update"
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
    //get student by ID
    getStudentByID(id){
        return axios.get(Student_API_GET_STUDENT_BY_ID + '/' + id);

    }
    //update student
    updateStudentWithoutImage(students,ID) {
        return axios.put(Student_API_UPDATE + '/' + ID, students);
    }

    //get all notices
    getAllNotices(){
        return axios.get(Notices_API_GET_ALL);
    }
    //delete Notice
    deleteNotice(id){
        return axios.delete(Notices_API_DELETE + '/' + id);
    }
    //get notice by ID
    //get conference events by ID
    getNoticeByID(id){
        return axios.get(Notices_API_GET_BY_ID + '/' + id);

    }
    //update notice without new image
    updateNoticeWithoutImage(notices,ID) {
        return axios.put(UpdateNoticeAPI + '/' + ID, notices);
    }


}
export default new SchoolManagementSystemServices();