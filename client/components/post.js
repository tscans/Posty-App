import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Posts = new Mongo.Collection('posts');

export default class Post extends TrackerReact(Component){
    constructor(props) {
        super(props);

        this.state = {
            subscription: {
                posts: Meteor.subscribe('allPosts')
            }
        }
    }

    componentWillUnmount(){
        this.state.subscription.posts.stop();
    }

    posts() {
        return Posts.find().fetch();
    }

    addPost(event){
        event.preventDefault();
        var words = this.refs.wordy.value.trim();
        var name = Meteor.user().profile.name;
        
        if(words == ""){

        }
        else{
            Meteor.call('addPost', words, name, (error, data) => {
                if(error){
                console.log("there was an error");
                console.log(error.error);

                }else{
                    this.refs.wordy.value = "";
                }

            })
        }

    }

    render() {
        let not = this.state.subscription.posts;
        if (!not){
            return(<div>Loading...</div>);
        }
        return (
        	<div>
                <form onSubmit={this.addPost.bind(this)}>
                  <input type="text" ref="wordy" placeholder="Post Text"/>
                  <button className="btn btn-primary btn-block">Post</button>
                </form>
                <ul className="table-view">
                  <li className="table-view-divider div-center"></li>
                    {this.posts().reverse().map( (post) => {
                        return <div className="table-view-cell" key={post._id}>{post.name}: {post.post}</div>
                    })}
                </ul>
        	</div>
        );
    }
}

