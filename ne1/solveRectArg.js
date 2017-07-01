var argv = require('yargs')
    .usage('Usage: node $0 --l=[num] --b=[num]')
	.demand(['l','b'])
	.argv;
	
var rect = require('./rectCallback');

function solveRect(l,b){
	console.log("Solving the rectangle with l = " + l + " b = " +b );
	
	rect(l,b, function(err, rectangle){
		if(err != null)
		{
			console.log(err);
		}
		else
		{
			console.log("The area of a rectangle of dimensions length = "
                 + l + " and breadth = " + b + " is " + rectangle.area());
            console.log("The perimeter of a rectangle of dimensions length = "
                 + l + " and breadth = " + b + " is " + rectangle.perimeter());
		}
		
		
	});
}
solveRect(argv.l,argv.b);


	