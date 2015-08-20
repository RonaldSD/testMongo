// test policy created for client side vaildation testing


module.exports = function(req, res, next) {
	res.locals.flash = {}; //assign to empty obect

	if(!req.session.flash) return next();

	res.locals.flash = _.clone(req.session.flash);

	// clear flash
	req.session.flash = {}; //assign to empty object

	next();
};