
import axios from 'axios';

const AddNewTeacherAPI = "http://localhost:8070/Teacher/add";
const AssignSubjectTeacherAPI = "http://localhost:8070/Teacher/assgin"
const GetAllSubjectsAPI = "http://localhost:8070/Subjects/GetAllSubjects";
const GetAllTeachersAPI = "http://localhost:8070/Teacher/GetAllTeacaher";
const GetAllOneTeachersAPI = "http://localhost:8070/Teacher/GetTeacher";
const DeleteTeacherAPI = "http://localhost:8070/Teacher/Delete";

class SchoolManagementSystemServices {
    
    //get All Subjects
    getAllSubjects() {
        return axios.get(GetAllSubjectsAPI);
    }
    //Add New teacher
    addNewTeacher(teacher) {
        return axios.post(AddNewTeacherAPI,teacher);
    }
    //assign subjects to teacher
    assginsubjects(assignSubjects, id) {
        return axios.put(AssignSubjectTeacherAPI + '/' + id, assignSubjects);
    }
    //get All Teachers
    GetAllTeachers() {
        return axios.get(GetAllTeachersAPI);
    }
    //get One Teachers
    GetOneTeachers(ID) {
        return axios.get(GetAllOneTeachersAPI + '/' + ID);
    }
    //delete teacher
    Deleteteacher(id) {
        return axios.delete(DeleteTeacherAPI + '/' + id);
    }
    
}
export default new SchoolManagementSystemServices();