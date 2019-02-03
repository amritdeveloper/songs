import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
// selectSong is a named import, so the bracket syntax
// But we will not be using this import, just demonstration
// import { selectSong } from "../actions";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
