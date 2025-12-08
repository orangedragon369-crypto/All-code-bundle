import "./App.css";
import {whos} from "./App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

export default function BoardBtn({tile, handleClick}) {
  if (tile === -1){
    return (
      <button className="board reset" onClick={handleClick}>
        <FontAwesomeIcon icon={faRotateRight} />
      </button>
    );
  } else {
    return (
      <button className="board" onClick={() => handleClick(tile)}>
        {whos[tile]}
      </button>
    );
  }
}