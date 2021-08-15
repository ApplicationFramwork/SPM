
import axios from 'axios';

const AddNewTeacherAPI = "http://localhost:8070/Teacher/add";
const AddNewSubjectrAPI = "http://localhost:8070/Subjects/add";
const AssignSubjectTeacherAPI = "http://localhost:8070/Teacher/assgin"
const DeleteTeacherAPI = "http://localhost:8070/Teacher/Delete";
const DeleteSubjectAPI = "http://localhost:8070/Subjects/Delete";
const GetAllSubjectsAPI = "http://localhost:8070/Subjects/GetAllSubjects";
const GetAllOneSubjectsAPI = "http://localhost:8070/Subjects/GetSubject";
const GetAllTeachersAPI = "http://localhost:8070/Teacher/GetAllTeacaher";
const GetAllOneTeachersAPI = "http://localhost:8070/Teacher/GetTeacher";
const UpdateTeacherAPI = "http://localhost:8070/Teacher/update"


class SchoolManagementSystemServices {
  
    //Add New teacher
    addNewTeacher(teacher) {
        return axios.post(AddNewTeacherAPI,teacher);
    }
    //Add New Subect
    addNewSubject(subject) {
        return axios.post(AddNewSubjectrAPI, subject);
    }
    //assign subjects to teacher
    assginsubjects(assignSubjects, id) {
        return axios.put(AssignSubjectTeacherAPI + '/' + id, assignSubjects);
    }
    //delete teacher
    Deleteteacher(id, profile_Picture) {
        return axios.delete(DeleteTeacherAPI + '/' + id + '/' + profile_Picture);
    }
    //delete subject
    Deletesubjects(id,) {
        return axios.delete(DeleteSubjectAPI + '/' + id);
    }
    //get All Subjects
    getAllSubjects() {
        return axios.get(GetAllSubjectsAPI);
    }
    //get All Teachers
    GetAllTeachers() {
        return axios.get(GetAllTeachersAPI);
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
    
    
}
export default new SchoolManagementSystemServices();