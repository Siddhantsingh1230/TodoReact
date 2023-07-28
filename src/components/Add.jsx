import { Link } from "react-router-dom";
const Add = ({ exit,addData}) => {
    const pushData=()=>{
        let title=document.getElementById('noteTitle');
        let desc=document.getElementById('noteDesc');
        let label=document.getElementById('noteLabel');
        if(title.value && desc.value && label.value){
            addData(title.value,label.value,desc.value);
            document.getElementById('goBackLink').click();
        }
    }
  return (
    <>
      <div className="addFormContainer">
        <div className="form">
          <p className="form-title">Add Note</p>
          <div className="input-container">
            <input placeholder="Enter Note Name" id="noteTitle" type="text" />

            <span>
              <i className="fa-solid fa-infinity" style={{ color: "#000000" }}></i>
            </span>
          </div>
          <div className="input-container">
            <input placeholder="Note Description" id="noteDesc" type="text" />
            <span>
              <i className="fa-solid fa-ghost" style={{ color: "#000000" }}></i>
            </span>
          </div>
          <div className="input-container">
            <input placeholder="Enter Note Label" id="noteLabel" type="text" />

            <span>
              <i className="fa-solid fa-star" style={{ color: "#000000" }}></i>
            </span>
          </div>
          <button onClick={()=>{
            pushData();
          }} className="submit">Add</button>
        </div>
        <div  className="back">
          <Link to="/">
            <i id="goBackLink" className="fa-solid fa-arrow-left" style={{ color: "#fff" }}></i>    
          </Link>
        </div>
      </div>
    </>
  );
};

export default Add;
