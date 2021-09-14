import React, {Component} from 'react';
import cms from '../services/SchoolManagementSystemServices';
class ViewMarks extends Component {
    constructor(props){
        super(props)
        this.state = {
            marks: [],
            id : '',
        }
        this.changeStudentIdHandeler = this.changeStudentIdHandeler.bind(this);
    }
    changeStudentIdHandeler = (event) =>{
        if(event.target.value != ""){
            cms.ViewMarks(event.target.value).then((res) =>{
                this.setState({marks : res.data})
                console.log(this.state.marks)
            });
        }else{
            console.log("ID is empty")
        }
    }
    render() {
        return (
            <div>
                <input type={"text"} value={this.state.StudentId} onChange={this.changeStudentIdHandeler}/>

                <div>
                    {
                        this.state.marks.map(
                            mark =>
                                <div key = {mark.StudentId}>
                                    <small>{mark.StudentId}</small>
                                    <small>{mark.Grade}</small>
                                    <small>{mark.Name}</small>
                                    <small>{mark.Term}</small>
                                    <table>
                                        <tr>
                                            <th>Subject Name</th>
                                            <th>Mark</th>
                                        </tr>
                                        {
                                            mark.marks.map(
                                                row =>
                                                    <tr key = {row._id}>
                                                        <td>{row.subjectName}</td>
                                                        <td>{row.mark}</td>
                                                    </tr>
                                            )
                                        }
                                    </table>
                                </div>
                        )}
                </div>
            </div>
        );
    }
}

export default ViewMarks;