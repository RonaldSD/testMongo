/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	//prevent private info from being saved to the database
	schema: true, 

  attributes: {
		name: {
			type: 'string',
			required: true
		},
		title: {
			type: 'string',
		},
		email: {
			type: 'string',
			unique: true,
			required: true			
		},
		password: {
			type: 'string',
			required: true
		},
		
		//prevents private information from being sent to the client
		toJSON: function(){
			var obj = this.toObject();
			delete obj.password;
			delete obj.confirmation;
			delete obj.encryptedPassword;
			delete obj._csrf;
			return obj;
		}
  }
};

