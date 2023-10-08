function Divider({ angle }) {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: -1, 
      }}
    >
      <div
        id="divider"
        style={{
          transform: `rotate(${angle}deg)`,
          backgroundColor: "rgba(0,0,0,0.2)",
          height: "2px",
          width: "100%",
          margin: "10vw 0vw",
        }}
      ></div>
    </div>
  );
}

export default Divider;
