import React, {Component} from 'react';

class Main extends Component {
	constructor(props){
		super(props)

		this.state = {
			logon: false
		}

	}
	isLogin() {
        return Meteor.userId() ? true : false
    }
	register(event){
		event.preventDefault();
		var uno = this.refs.email.value.trim();
		var dos = this.refs.password.value.trim();
		Accounts.createUser({
			email: uno,
			password: dos
		})
	}

	login(event){
		event.preventDefault();
		var uno2 = this.refs.email2.value.trim();
		var dos2 = this.refs.password2.value.trim();
		Meteor.loginWithPassword(uno2, dos2);
		this.setState({ logon: true});
	}
	
	logout(event){
		event.preventDefault();
		Meteor.logout();
		this.setState({ logon: false});
	}

  render(){
  	if(!this.state.logon){
  		return(
  			<div>
		        <form>
		        	<input type="text" ref="email"/>
		        	<input type="password" ref="password"/>
		        	<input onClick={this.register.bind(this)} type="submit" value="register"/>
		        </form>
		        <br/>
		        <form>
		        	<input type="text" ref="email2"/>
		        	<input type="password" ref="password2"/>
		        	<input onClick={this.login.bind(this)} type="submit" value="Login"/>
		        </form>
  			</div>
  		);
  	}else{
  		return(
  			<div>
  				<button onClick={this.logout.bind(this)}>Logout</button>
  			</div>
  		);
  	}
    
}


}

export default Main;
