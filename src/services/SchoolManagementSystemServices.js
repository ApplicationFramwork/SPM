
import axios from 'axios';

const AddNewTeacherAPI = "http://localhost:8070/Teacher/add";
const GetAllSubjectsAPI = "http://localhost:8070/Subjects/GetAllSubjects";
const GetAllTeachersAPI = "http://localhost:8070/Teacher/GetAllTeacaher"

class SchoolManagementSystemServices {
    
    //get All Subjects
    getAllSubjects() {
        return axios.get(GetAllSubjectsAPI);
    }
    //Add New teacher
    addNewTeacher(teacher) {
        return axios.post(AddNewTeacherAPI,teacher);
    }
    //get All Teachers
    GetAllTeachers() {
        return axios.get(GetAllTeachersAPI)
    }
    
}
export default new SchoolManagementSystemServices();