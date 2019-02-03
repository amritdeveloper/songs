import React from 'react';
import { connect } from 'react-redux';

// SongDetail will be a functional component
// the Redux connect component can work with functional components
// again the use of destructuring for props
const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>
    }
    return <div>{song.title}</div>;
};

// mapStateToProps function is called with the state object
const mapStateToProps = (state) => {
    // from the reducers combineReducers key: selectedSong
    return { song: state.selectedSong  }
};

export default connect(mapStateToProps)(SongDetail);