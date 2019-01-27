import React from "react";
import SongList from './SongList';
// selectSong is a named import, so the bracket syntax
// But we will not be using this import, just demonstration
// import { selectSong } from "../actions";

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
};

export default App;
