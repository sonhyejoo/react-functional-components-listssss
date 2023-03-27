import "./PokeMoveCard.css";
const PokeMoveCard = ({ id, type, move, level }) => {
  return (
    <li className="poke-move-card">
      <h3>Move {id}</h3>
      <h4>{move.toUpperCase()}</h4>
      <p>
        Type: {type[0].toUpperCase()}
        {type.slice(1)}
      </p>
      <p>Level: {level}</p>
    </li>
  );
};

export default PokeMoveCard;
