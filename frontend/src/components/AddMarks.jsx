import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Adm from "./Admin-SideNavBar";
import AdminHeader from "./AdminHeader";

function AddMarks(){
    const [inputFields, setInputFields] = useState([
        {subjectName : '', mark:''},
    ]);

    const handleChangeInput = (index, event) =>{
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }
    const handleAddFields = () =>{
        setInputFields([...inputFields,{subjectName: '',mark: ''}])
    }
    const handleRemoveFields = (index) =>{
        const values = [...inputFields];
        values.splice(index,1);
        setInputFields(values);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Input Fields", inputFields);
    }
    return(
        <Container class="background">
            <div className="row">
                <div className="col-sm-3">
                    <Adm />
                </div>
                <div className="col-sm-9">
                    <AdminHeader />

                    <div className="row">
                        <h3><b>Add Student Marks</b></h3>
                    </div>

                    <div className="row m-2 searchRow">
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Search By Class ID" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col-sm-4">
                            <button className="MarkAttendanceSearch">Search</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3 m-2">
                            <div className="row">
                                <div className="card crdDetailsMarks">
                                    <i className=" userImage fas fa-user-alt"></i>
                                    <h6>Name  : Amal Perera</h6>
                                    <h6>Grade : 10-B </h6>
                                </div>
                            </div>
                            <div className="row  mt-2">
                                <div className="card crdDetailsMarks p-2">
                                    <input type="text" className="mt-2 p-2 form-control" placeholder="Enter Grade" aria-label="Username"
                                           aria-describedby="basic-addon1"/>
                                    <input type="text" className="mt-2 form-control p-2" placeholder="Enter Term" aria-label="Username"
                                           aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 marksBody m-2">
                            <form onSubmit={handleSubmit}>
                                {inputFields.map((inputField,index)=>(
                                    <div key={index}>
                                        <div className="row">
                                            <div className="col-sm-10">
                                                <TextField
                                                    name={"subjectName"}
                                                    label={"Subject Name"}
                                                    variant={"filled"}
                                                    value={inputField.subjectName}
                                                    onChange={event => handleChangeInput(index, event)}
                                                />
                                                <TextField
                                                    name={"mark"}
                                                    label={"Mark"}
                                                    variant={"filled"}
                                                    value={inputField.mark}
                                                    onChange={event => handleChangeInput(index, event)}
                                                />
                                            </div>
                                            <div className="col-sm-2">
                                                <i onClick={()=>handleRemoveFields(index)} className="removeIcon fas fa-minus-circle"></i>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                                <i onClick={()=>handleAddFields()} className="addIcon fas fa-plus-circle"></i>

                            </form>
                            <button onClick={handleSubmit} className={"addMarksBtn m-2"}>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default AddMarks;