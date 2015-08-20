/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	//loads page contianing the sign up form
	'new': function(req, res){
		res.view();
	},
	
	//show server validation
	create: function(req, res, next){
		//creates a user with the parameters gained from the sign in form
		User.create( req.params.all(), function userCreated (err, User){
			
			if(err){
				console.log(err); //log the error
				//flash message displaying errors
				req.session.flash = {
					err: err
				}	
				//redirect user to new.ejs
				return res.redirect('/user/new');
			}
			//upon success show the user page
			res.redirect('/user/show/'+User.id);
		});
	},
	
	//render profile view
	show: function(req, res, next){
		User.findOne(req.param('id'), function foundUser(err, User){
			if(err) return next(err);
			if(!User) return next();
			res.view({
				User: User
			});
		});
	},
	
	//Index users
	index: function(req, res, next){
		//get array of all users in the users collection
		User.find(function foundUsers(err, users){
			if(err) return next(err);
			//pass the array down
			console.log(users);
			res.view({
				users: users
			});
		});
	},
	
	//edit user parameters
	edit: function(req, res, next){
		//get array of all users in the users collection
		User.findOne(req.param('id'), function foundUser(err, User){
			if(err) return next("User doesn\'t exist");
			//pass the array down
			
			//load the user page
			res.view({
				User: User
			});
		});
	},
	
	//update
  // process the info from edit view
  update: function(req, res, next) {
    User.update(req.param('id'), req.params.all(), function userUpdated(err) {
      if (err) {
        return res.redirect('/user/edit/' + req.param('id')); //redirect to edit page
      }

      res.redirect('/user/show/' + req.param('id')); //redirects to the user page
    });
  },
  
  //delete a user
  destroy: function(req, res, next){
		User.findOne(req.param('id'), function foundUser(err, user)
		{ console.log(2,user);
		  if (err) 
			  return res.serverError(err);
				console.log(3);
		  if (!user) 
			  return res.notFound('User doesn\'t exist.');
				console.log(4);
		
		  User.destroy({id:req.param('id')}).exec( function userDestroyed(err) {
		 console.log(5);
		if (err) {
				console.error(error)
				return serverError(err);
				}
				else
					res.redirect('/user');	
		  });        


		});
  }	
};

