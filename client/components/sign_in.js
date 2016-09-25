import React, {Component} from 'react';

var currentUser = Meteor.userId();

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            register: false
        }
    }

    reglogswitch(){
        this.setState({ register: !this.state.register })
    }

    register(event){
        event.preventDefault();
        var uno = this.refs.firston.value.trim();
        var dos = this.refs.emailon.value.trim();
        var tres = this.refs.passwordon.value.trim();
        if(uno == "" || dos == "" || tres == ""){
            console.log("enter data");
        }
        else{
            Accounts.createUser({
                email: dos,
                password: tres,
                profile: {
                    name: uno
                }
            })
        }

    }

    login(event){
        event.preventDefault();
        var uno2 = this.refs.emailin.value.trim();
        var dos2 = this.refs.passwordin.value.trim();
        Meteor.loginWithPassword(uno2, dos2);
          
    }

    render() {
        console.log(this.state.register)
        if(this.state.register == false){
            return (
            	<div> 
                    <div className="div-center">
                        Log In!
                    </div>
                    <div>
                        <img className="logo-size" src="https://openclipart.org/image/2400px/svg_to_png/191356/Shamrock.png"/>
                    </div>
            		<form onSubmit={this.login.bind(this)}>
                      <input type="text" ref="emailin" placeholder="Email"/>
                      <input type="password" ref="passwordin" placeholder="Password"/>
                      <button className="btn btn-positive btn-block">Sign In</button>
                    </form>
                    <a className="div-center" onClick={this.reglogswitch.bind(this)}>New User? Click Here To Register.</a>
                    <a href="#myModalexample" className="btn">Open modal</a>
                    <div id="myModalexample" className="modal">
                      <header className="bar bar-nav">
                        <a className="icon icon-close pull-right" href="#myModalexample"></a>
                        <h1 className="title">Modal</h1>
                      </header>

                      <div className="content">
                        <p className="content-padded">The contents of my modal go here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                      </div>
                    </div>
            	</div>
            );
        }else{
            return(
                <div> 
                    <div className="div-center">
                        Register!
                    </div>
                    <div>
                        <img className="logo-size" src="https://openclipart.org/image/2400px/svg_to_png/191356/Shamrock.png"/>
                    </div>
                    <form onSubmit={this.register.bind(this)}>
                      <input type="text" ref="firston" placeholder="First Name"/>
                      <input type="text" ref="emailon" placeholder="Email"/>
                      <input type="password" ref="passwordon" placeholder="Password"/>
                      <button className="btn btn-positive btn-block">Register</button>
                    </form>
                    <a className="div-center" onClick={this.reglogswitch.bind(this)}>Have An Account? Log In!</a>
                </div>
            );
        }

    }
}

export default SignIn;
