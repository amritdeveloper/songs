// can directly import the Component class
import React, { Component } from "react";
// import the connect function, notice lower case
import { connect } from "react-redux";

// no longer need to use React.Component call
class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return <div className="item" key={song.title}>
        <div className="right floated content">
          <button className="ui button primary">
            Select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>;
    });
  }

  render() {
    return <div>SongList</div>;
  }
}

// named mapStateToProps by convention
// takes data from state object and converts those to props in the current
// component (in this case SongList)
const mapStateToProps = state => {
  // this state object will automatically become props in SongList
  return { songs: state.songs };
};

// valid JavaScript syntax using connect on SongList
// "A function that returns a function, calling this function"
export default connect(mapStateToProps)(SongList);
