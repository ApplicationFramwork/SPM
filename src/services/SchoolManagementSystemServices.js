
import axios from 'axios';

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

  
class SchoolManagementSystemServices {
  
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
    //maleesha
    //getStudentSForMarkAttendance
    GetAllStudentsForAttendanceMark(className) {
        return axios.get(getStudentsForMarkAttendance + '/' + className);
    }
}
export default new SchoolManagementSystemServices();