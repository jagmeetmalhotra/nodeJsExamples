var express = require('express');
var bodyParser = require('body-parser');
var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req, res, next){
	res.writeHead(200, {'Content-Type':'text\plain'});
	next();
})
.get(function(req, res, next){
	res.end('Will send all the dishes to you');
})
.post(function(req, res, next){
	res.end('Will add the dish: ' + req.body.name + ' With Description : ' + req.body.description );   
})
.delete(function(req,res, next){
	res.end('Deleted all the dishes');
});

dishRouter.route('/:dishId')
.all(function(req,res,next){
	res.writeHead(200, {'Content-Type':'text/plain'});
	next();
})	
.get(function(req,res,next){
	res.end('Will send you the deatils for dish : ' + req.params.dishId);
})
.put(function(req,res, next){
	res.end('Will update the detais of dish ' + req.params.dishId + ' with name : ' + req.body.name + ' and description: ' + req.body.description);   
})
.delete(function(req,res,next){
	res.end('Deleting dish: '+ req.params.dishId);
});

module.exports = dishRouter;