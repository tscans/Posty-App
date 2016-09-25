import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
	        <div>
	        	<div className="bar bar-tab">
                    <a className="tab-item" href="/">
                        <span className="icon icon-home"></span>
                        <span className="tab-label">Home</span>
                    </a>
                    <a className="tab-item" href="/signin">
                        <span className="icon icon-person"></span>
                        <span className="tab-label">Sign In</span>
                    </a>
                    <a className="tab-item" href="/post">
                        <span className="icon icon-plus"></span>
                        <span className="tab-label">Post</span>
                    </a>
                    <a className="tab-item" href="/maps">
                        <span className="icon icon-pages"></span>
                        <span className="tab-label">Maps</span>
                    </a>
                 </div>
	        </div>
        );
    }
}

export default Footer;
