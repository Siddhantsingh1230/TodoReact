const Tags = ({ active, value }) => {
  return (
    <>
      <div
        className="tagContainer"
        style={{
          padding: "0.3rem 1rem",
          color: "white",
          outline: "1.45px solid white",
          fontSize: "1.25rem",
          borderRadius: "2rem",
          margin: "1.85rem 0",
          marginRight: "0.45rem",
          opacity:active==="1"?"1":"0.75",
        }}
      >
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </div>
    </>
  );
};

export default Tags;
