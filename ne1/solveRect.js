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
solveRect(5000,10000);
solveRect(2,4);
solveRect(5,10);
solveRect(3,2);

	