import React, { Component } from 'react';
import fire from './components/fire.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
               <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Home;
