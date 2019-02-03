import React from 'react';
import { connect } from 'react-redux';

// SongDetail will be a functional component
// the Redux connect component can work with functional components
const SongDetail = (props) => {
    console.log(props);
    return <div>Song Detail</div>;
};

// mapStateToProps function is called with the state object
const mapStateToProps = (state) => {
    // from the reducers combineReducers key: selectedSong
    return { song: state.selectedSong  }
};

export default connect(mapStateToProps)(SongDetail);