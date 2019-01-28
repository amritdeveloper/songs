import React from "react";
import SongList from './SongList';
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
      </div>
    </div>
  );
};

export default App;
