import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
                <div>
                    <img className="logo-size" src="https://openclipart.org/image/2400px/svg_to_png/191356/Shamrock.png"/>
                </div>
                 <div className="card">
                    <div className="div-center">
                        Welcome to the Posty app
                    </div>
                 </div>
                 <div className="card">
                    Select Home to be at this page!
                 </div>
                 <div className="card">
                    Select Sign In to login in to your account on Posty!
                 </div>
                 <div className="card">
                    Select Post to post to the Posty app!
                 </div>         
        	</div>
        );
    }
}

export default Home;

