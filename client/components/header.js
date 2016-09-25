import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
         	<div>
         		<div className="bar bar-nav">
                    <h1 className="title">Tom Scanlan's Posty</h1>
                 </div>
         	</div>
         )
    }
}

export default Header;
