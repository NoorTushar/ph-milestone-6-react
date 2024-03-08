import { useState } from "react";

export default function Team() {
   const [teamPlayers, setTeamPlayers] = useState(11);

   const teamStyles = {
      margin: "20px",
      padding: "20px",
      borderRadius: "15px",
      border: "2px solid lime",
   };

   const buttonStyle = {
      marginRight: "5px",
      marginRight: "5px",
      border: "2px solid lime",
   };

   const handleAdd = () => {
      const newTeam = teamPlayers + 1;
      setTeamPlayers(newTeam);
   };

   const handleRemove = () => {
      setTeamPlayers(teamPlayers - 1);
   };

   return (
      <div style={teamStyles}>
         <h3>Players: {teamPlayers}</h3>
         <button onClick={handleAdd} style={buttonStyle}>
            Add Player
         </button>
         <button onClick={handleRemove} style={buttonStyle}>
            Remove Player
         </button>
      </div>
   );
}
