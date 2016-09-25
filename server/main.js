Posts = new Mongo.Collection('posts');

Meteor.publish('allPosts', ()=>{
	return Posts.find();
});

