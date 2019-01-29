// can directly import the Component class
import React, { Component } from "react";
// import the connect function, notice lower case
import { connect } from "react-redux";
// import the action creator function: using curly braces
// since it was originally a named export from its file
import { selectSong } from "../actions";

// no longer need to use React.Component call
class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// named mapStateToProps by convention
// takes data from state object and converts those to props in the current
// component (in this case SongList)
const mapStateToProps = state => {
  console.log(state);
  // this state object will automatically become props in SongList
  return { songs: state.songs };
};

// valid JavaScript syntax using connect on SongList
// "A function that returns a function, calling this function"
// ES2015 Syntax do not need selectSong: selectSong key:value pair
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
