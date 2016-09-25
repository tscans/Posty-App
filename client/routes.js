import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/main_layout';
import Main from './components/main';
import Home from './components/home';
import SignIn from './components/sign_in';
import Post from './components/post';
import Logout from './components/logout';
import Maps from './components/maps';

FlowRouter.route('/', {
	action() {
		mount (MainLayout, {
			content: (<Home />)
		})
	}
});

FlowRouter.route('/signin', {
	action() {
		if(Meteor.userId()){
			console.log('user not signed in')
			mount (MainLayout, {
				content: (<Logout />)
			})
		}else{
		mount (MainLayout, {
			content: (<SignIn />)
		})
	  }
	}
});

FlowRouter.route('/post', {
	action(){
		if(!Meteor.userId()){
			console.log('access denied, not signed in');
			mount (MainLayout, {
				content: (<Home />)
			})
		}else{
			mount (MainLayout, {
				content: (<Post />)
			})
		}	
	}
});

FlowRouter.route('/maps', {
	action() {
		mount (MainLayout, {
			content: (<Maps />)
		})
	}
});