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
//Get student by admission number
const Student_API_GETBY_ADMISSIONNUMBER = "http://localhost:8070/students/getStudent";
//Get student by section
const Student_API_GET_STUDENT_BY_SECTION = "http://localhost:8070/students/getStudentBySection";
//Get student by class
const Student_API_GET_STUDENT_BY_CLASS = "http://localhost:8070/students/getStudentByClass";
//Get student by firstname
const Student_API_GET_STUDENT_BY_NAME = "http://localhost:8070/students/getStudentByName";
//Notices Management
//get all Notices
const Notices_API_GET_ALL = "http://localhost:8070/notices/allNotices";
//delete Notices
const Notices_API_DELETE = "http://localhost:8070/notices/delete"
//get notice by ID
const Notices_API_GET_BY_ID = "http://localhost:8070/notices/get";
const UpdateNoticeAPI = "http://localhost:8070/notices/update"
//get notice by title
const Notices_API_GET_NOTICE_BY_TITLE = "http://localhost:8070/notices/getNotice";


const AddNewTeacherAPI = "http://localhost:8070/Teacher/add";
const AddNewSubjectrAPI = "http://localhost:8070/Subjects/add";
const AddNewLectureNoticeAPI = "http://localhost:8070/lectureslides/add";
const AssignSubjectTeacherAPI = "http://localhost:8070/Teacher/assgin"
const DeletelectureNoticeAPI = "http://localhost:8070/lectureslides/Deletenotice";
const DeletelectureslidesAPI = "http://localhost:8070/lectureslides/Deletelectures";
const DeleteTeacherAPI = "http://localhost:8070/Teacher/Delete";
const DeleteSubjectAPI = "http://localhost:8070/Subjects/Delete";
const GetoneStudentSubjectUsingSectionAPI = "http://localhost:8070/Subjects/GetSubjectusignSection";
const GetAllStudentUsingSectionAPI = "http://localhost:8070/students/getpStudentUsingSection";
const GetAllSubjectsAPI = "http://localhost:8070/Subjects/GetAllSubjects";
const GetAllLectureNotices = "http://localhost:8070/lectureslides/getsubjectNotices"
const GetAllLectureslides = "http://localhost:8070/lectureslides/getsubjeclectureslides"
const GetAllOneSubjectsAPI = "http://localhost:8070/Subjects/GetSubject";
const GetAllTeachersUsingGradeAPI = "http://localhost:8070/Teacher/GetAllTeacaherUsingGrade";
const GetAllTeachersAPI = "http://localhost:8070/Teacher/GetAllTeacaher";
const GetAllOneTeachersAPI = "http://localhost:8070/Teacher/GetTeacher";
const UpdateTeacherAPI = "http://localhost:8070/Teacher/update"

const getStudentsForMarkAttendance = "http://localhost:8070/students/getStudentsByClassName";
const addAttendanceDetails = "http://localhost:8070/attendance/mark";
const addMarks = "http://localhost:8070/marks/add";
const viewAttendanceByClassName = "http://localhost:8070/attendance";
const deleteAttendance = "http://localhost:8070/attendance/delete";
const login = "http://localhost:8070/users/login";
const viewMark = "http://localhost:8070/marks/report";
const updateAttendance =  "http://localhost:8070/attendance/editAttendance";

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
    //get student by admission number
    getStudentByAdmissionNumber(admissionNumber){
        return axios.get(Student_API_GETBY_ADMISSIONNUMBER + '/' + admissionNumber);
    }
    //get student by section
    getStudentBySection(section){
        return axios.get(Student_API_GET_STUDENT_BY_SECTION + '/' + section);
    }
    //get student by class
    getStudentByClass(className){
        return axios.get(Student_API_GET_STUDENT_BY_CLASS + '/' + className);
    }
    //get student by name
    getStudentByName(firstName){
        return axios.get(Student_API_GET_STUDENT_BY_NAME + '/' + firstName);
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
    //get notice by name
    getNoticeByTitle(title){
        return axios.get(Notices_API_GET_NOTICE_BY_TITLE + '/' + title);

    }

    //Add New teacher
    addNewTeacher(teacher) {
        return axios.post(AddNewTeacherAPI,teacher);
    }
    //Add New Subect
    addNewSubject(subject) {
        return axios.post(AddNewSubjectrAPI, subject);
    }
    //Add New lectureslide notice
    addNewLectueNotice(notice) {
        return axios.post(AddNewLectureNoticeAPI, notice);
    }
    //assign subjects to teacher
    assginsubjects(assignSubjects, id) {
        return axios.put(AssignSubjectTeacherAPI + '/' + id, assignSubjects);
    }
    //delete leturenotice
    Deleteleturenotice(id) {
        return axios.delete(DeletelectureNoticeAPI + '/' + id );
    }
    //delete leture slide
    Deletelectureslides(id, lectureslides) {
        return axios.delete(DeletelectureslidesAPI + '/' + id + '/' + lectureslides);
    }
    //delete teacher
    Deleteteacher(id, profile_Picture) {
        return axios.delete(DeleteTeacherAPI + '/' + id + '/' + profile_Picture);
    }
    //delete subject
    Deletesubjects(id,) {
        return axios.delete(DeleteSubjectAPI + '/' + id);
    }
    //get All subject Using Section
    getAllsubjectUsingSection(section) {
        return axios.get(GetoneStudentSubjectUsingSectionAPI + "/" + section);
    }
    //get All Student Using Section
    getAllStudentUsingSection(section) {
        return axios.get(GetAllStudentUsingSectionAPI + "/" + section);
    }
    //get All Subjects
    getAllSubjects() {
        return axios.get(GetAllSubjectsAPI);
    }
    //get All lecture notices
    getalllecturenotices(id) {
        return axios.get(GetAllLectureNotices + '/' + id);
    }
    //get All lecture slides
    getalllectureslides(id) {
        return axios.get(GetAllLectureslides + '/' + id);
    }
    //get All Teachers
    GetAllTeachers() {
        return axios.get(GetAllTeachersAPI);
    }
    //get all the teachers using grade
    getallteachersUsingGrade(Grade) {
        return axios.get(GetAllTeachersUsingGradeAPI + '/' + Grade);
    }
    //get One Subject
    GetOneSubject(ID) {
        return axios.get(GetAllOneSubjectsAPI + '/' + ID);
    }
    //get One Teachers
    GetOneTeachers(ID) {
        return axios.get(GetAllOneTeachersAPI + '/' + ID);
    }
    //update teacher without new image
    updateTeacherwithoutimage(Teacher,ID) {
        return axios.put(UpdateTeacherAPI + '/' + ID, Teacher);
    }

    UpdateAttendance(attendance){
        return axios.post(updateAttendance,attendance);
    }

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