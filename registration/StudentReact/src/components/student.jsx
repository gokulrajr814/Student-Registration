import axios from 'axios';
import { useEffect, useState } from "react";
import './style.css';
 
function Student()
{

//Logic

  const [user, setUsers] = useState([]);
  const [studentName, setStudentName] = useState('');
  const [studyClass,setStudyClass ] = useState('');
  const [division, setDivision] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

 
  const [id, setId] = useState('');
    


 
useEffect(() => {
  (async () => await Load())();
  }, []);
 
 
  async function  Load()
  {
     const result = await axios.get("http://localhost:8089/getall");
         setUsers(result.data);
         console.log(result.data);
  }
 

  
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8089/save",
        {
          id:id,
        studentName: studentName,
        studyClass: studyClass,
        division: division,
        dob:dob,
        gender:gender
        });
           alert('User saved successfully');
           setId('');
           setStudentName('');
           setStudyClass ('');
           setDivision('');
           setDob('');
           setGender('')
           Load();
      }catch(err)
        {
          console.log("User Registation Failed");
        }
   }

 
   




//Design

  return (

    <div>
       <h1 className="heading-poppins">STUDENT PORTAL</h1>
       <div className="container">

       <div className="container mt-4">
       <div className="form-container">
        
          <form>
             
              <div class="form-group">

                <label>Student Name</label>
                <input  type="text"  class="form-control" id="studentName" 
                value={studentName}
                onChange={(event) =>
                  {
                    setStudentName(event.target.value.replace(/[^A-Za-z\s]/g, ''));      
                  }}
                />
              </div>
               <div  class="form-group"><label for="classSelect">Select Class:</label>
    <select id="studyClass"
    className="form-control"
    value={studyClass}
                onChange={(event) =>
                  {
                    setStudyClass(event.target.value);      
                  }}
                >
        <option value=""></option>
        <option value="I">I</option>
        <option value="II">II</option>
        <option value="III">III</option>
        <option value="IV">IV</option>
        <option value="V">V</option>
        <option value="V1">V1</option>
        <option value="V11">V11</option>
        <option value="V111">V111</option>
        <option value="1X">1X</option>
        <option value="X">X</option>
        <option value="X11">X11</option>
        <option value="X12">X12</option>
    </select>
    </div>
    <div  class="form-group"><label for="division">Division</label>
    <select id="division"
     className="form-control"
     value={division}
                onChange={(event) =>
                  {
                    setDivision(event.target.value);      
                  }}
                >
        <option value=""></option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        
    </select>
    </div>

              <div class="form-group">
                <label>DOB</label>
                
                <input type="date" class="form-control" id="dob" 
                  value={dob}
                onChange={(event) =>
                  {
                    setDob(event.target.value);      
                  }}
                />
              </div>
              <div className="form-group" class="form-control">
          <label>Gender</label>
          <div>
            <input
              type="radio"
              id="male"
              value="Male"
              checked={gender === "Male"}
              onChange={(event) => setGender(event.target.value)}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              value="Female"
              checked={gender === "Female"}
              onChange={(event) => setGender(event.target.value)}
            />
            <label htmlFor="female">Female</label>
          </div>
          </div>
  
              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}
             >Register</button>

          
              </div>   
            </form>
          </div>
                <br/>
                
                <div className="table-container">
          <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Class</th>
      <th scope="col">Division</th>
      <th scope="col">DOB</th>
      <th scope="col">Gender</th>
      <th scope="col">Admission no</th>
    </tr>
  </thead>
       {user.map(function fn(user)
       {
            return(
            <tbody>
                <tr>
                <td>{user.studentName}</td>
                <td>{user.studyClass}</td>
                <td>{user.division}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>
                <td>R00{user.id}</td>        
                <td>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
       </div>
       </div>
       </div>
      
            );
        }
  
  export default Student;