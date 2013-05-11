var Schema, mongoose, PostSchema;

mongoose = require('mongoose');
Schema = mongoose.Schema;

PostSchema = new Schema({
	id:	Number,
	title:	String,
	content:	String,
	userId	:	Number,
	createDate:	Number,
	comments:		Array
});

mongoose.model('Post', PostSchema);