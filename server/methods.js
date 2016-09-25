Meteor.methods({
	addPost(words, name){
		Posts.insert({
			post: words,
			name: name
		})
	}
});
