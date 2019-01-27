// can directly import the Component class
import React, { Component } from 'react';
// import the connect function, notice lower case
import { connect } from 'react-redux';

// no longer need to use React.Component call
class SongList extends Component {
    render() {
        return <div>SongList</div>;
    }
};

// valid JavaScript syntax using connect on SongList
// "A function that returns a function, calling this function"
export default connect()(SongList);