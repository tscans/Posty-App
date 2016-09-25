import React, {Component} from 'react';

class Logout extends Component {
    constructor(props) {
        super(props);
    }

    logout(event){
        event.preventDefault();
        Meteor.logout();
    }
    
    render() {
        return(
	        <div>
	        	<div>
                    <div className="div-center">
                        You Are Logged In!
                    </div>
                    <div>
                        <img className="logo-size" src="https://openclipart.org/image/2400px/svg_to_png/191356/Shamrock.png"/>
                    </div>
                    <button onClick={this.logout.bind(this)} className="btn btn-positive btn-block">Log Out</button>
                </div>
	        </div>
        )
    }
}

export default Logout;
