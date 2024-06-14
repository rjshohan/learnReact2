import SinglePlayer from "./SinglePlayer";
import { bangladeshSquad } from "./Utils";

export const PlayerList = () => {
  return (
    <div>
      {bangladeshSquad.map((player, index) => {
        return <SinglePlayer key={player.id} player={player} index={index}/>;
      })}
    </div>
  );
};
// export default PlayerList
// export {PlayerList}
