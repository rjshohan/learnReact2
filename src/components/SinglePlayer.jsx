import React from "react";

const SinglePlayer = ({ player, index }) => {
  console.log({ player });
  return (
    <div style={{ marginBottom: "5px",display:"flex",alignItems:"center" ,gap:"10px"}}>
        <p>{index + 1}.</p>
        <img src={player.img} alt="player" style={{height:"30px",width:"30px",borderRadius:"50%"}}/>
      <p style={{fontSize:"20px"}}>{player.playerName}</p>
    </div>
  );
};

export default SinglePlayer;
