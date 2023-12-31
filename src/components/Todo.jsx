import { useState, useEffect } from "react";
import Tags from "./Tags";
import Spinner from "./Spinner";
import TodoCard from "./TodoCard";
import { Link } from "react-router-dom";
import Note from "./Note";
const Todo = ({ Data, deleteData }) => {
  // For Random Card Color
  let prevColor = "";
  const colorArray = [
    "#e4d447",
    "#66FF00",
    "#00FFFF",
    "#0BDA51",
    "#FBCEB1",
    "#E3FF00",
    "#007FFF",
    "#00B9E8",
    "#E23D28",
    "#8A2BE2",
    "#D473D4",
  ];
  const createColor = () => {
    let color = "";
    let randIdx = Math.floor(Math.random() * (colorArray.length + 1));
    color = colorArray[randIdx];
    if (prevColor !== color) {
      prevColor = color;
      return color;
    } else {
      createColor();
    }
  };
  // -----------------------------------------

  // For Random Avatar
  let prevAvatar = "";
  const avatarArray = [
    "😀",
    "😁",
    "😂",
    "😃",
    "😄",
    "😅",
    "😆",
    "😇",
    "😈",
    "👿",
    "😉",
    "😊",
    "😋",
    "😌",
    "😍",
    "😎",
    "😏",
    "😐",
    "😑",
    "😒",
    "😓",
    "😔",
    "😕",
    "😖",
    "😗",
    "😘",
    "😙",
    "😚",
    "😛",
    "😜",
    "😝",
    "😞",
    "😟",
    "😠",
    "😡",
    "😢",
    "😣",
    "😤",
    "😥",
    "😦",
    "😧",
    "😨",
    "😩",
    "😪",
    "😫",
    "😬",
    "😭",
    "😮",
    "😯",
    "😰",
    "😱",
    "😲",
    "😳",
    "😴",
    "😵",
    "😶",
    "😷",
    "😸",
    "😹",
    "😺",
    "😻",
    "😼",
    "😽",
    "😾",
    "😿",
    "🙀",
  ];
  const createAvatar = () => {
    let avatar = "";
    let randIdx = Math.floor(Math.random() * (avatarArray.length + 1));
    avatar = avatarArray[randIdx];
    if (prevAvatar !== avatar) {
      prevAvatar = avatar;
      return avatar;
    } else {
      createAvatar();
    }
  };
  // -----------------------------------------
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  function findObjectByValue(arr, key, value) {
    // Use the find method to get the first object that matches the key and value
    const foundObject = arr.find((obj) => obj[key] === value);
  
    return foundObject || null;
  }
  
  
  const [modalData,setModalData]=useState({});
  const show = (dataId) => {
    setModalData(findObjectByValue(Data,"key",dataId));
    document.querySelector(".show").click();
  };
  return (
    <>
      <div className="container">
        <div className="title">
          My <br />
          Notes
        </div>
        <div className="tags">
          <Tags active="1" value="siddhant" />
          <Tags active="0" value="home" />
          <Tags active="0" value="work" />
          <Tags active="0" value="college" />
        </div>
        <div className="todoBody">
          {loading ? (
            <Spinner />
          ) : Data.length > 0 ? (
            Data.map((e) => {
              return (
                <TodoCard
                  show={show}
                  key={e.key}
                  color={createColor()}
                  label={e.label}
                  avatar={createAvatar()}
                  text={e.title}
                  dataId={e.key}
                  deleteData={deleteData}
                />
              );
            })
          ) : (
            <div className="emptyInfo">
              <p>No Notes 😭</p>
            </div>
          )}
        </div>
        <Link to="/add">
          <div className="addBtn">
            <p>+</p>
          </div>
        </Link>
      </div>
      <Note data={modalData} />
    </>
  );
};

export default Todo;
