import React, { useEffect, useState } from "react";
import Heart from "./Heart";

const TodoCard = ({ avatar, label, text, color, dataId, deleteData, show }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    if (window.innerWidth <= 765) {
      setStyle({
        marginBottom: "0.58rem",
        display: "flex",
        flexDirection: "row",
        height: "6rem",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        backgroundColor: color,
      });
    } else {
      setStyle({
        flexShrink: "0",
        flexBasis: "1",
        height: "21rem",
        position: "relative",
        width: "15rem",
        backgroundColor: color,
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        cursor: "auto",
        marginRight: "1.25rem",
        userSelect: "none",
      });
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 765) {
        setStyle({
          marginBottom: "0.58rem",
          display: "flex",
          flexDirection: "row",
          height: "6rem",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          backgroundColor: color,
        });
      } else {
        setStyle({
          flexShrink: "0",
          flexBasis: "1",
          height: "21rem",
          position: "relative",
          width: "15rem",
          backgroundColor: color,
          borderRadius: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
          marginRight: "1.25rem",
          userSelect: "none",
        });
      }
    });
  }, []);

  return (
    <>
      <div className="cardContainer " style={style}>
        <div className="cardAvatar">{avatar ? <p>{avatar}</p> : <p>💙</p>}</div>
        <div className="cardTitle">
          <div className="label">{label}</div>
          <div className="note">{text}</div>
        </div>
        <div className="action">
          <span
            onClick={() => {
              show(dataId);
            }}
            className="edit btn"
          >
            <i className="fa-solid fa-eye" style={{color: "#000000",}}></i>
          </span>

          <span
            onClick={() => {
              deleteData(dataId);
            }}
            className="delete btn"
          >
            <i className="fa-solid fa-trash" style={{ color: "#000" }}></i>
          </span>
        </div>
        <Heart />
      </div>
    </>
  );
};

export default TodoCard;
