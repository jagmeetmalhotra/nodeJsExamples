var rect = require('./rect');

function solveRect(l,b){
	console.log("Solving the rectangle with l = " + l + " b = " +b );
	
	if ( l <  0 || b < 0 ){
		console.log("The rectangle cannot have length or breath less than ZERO");
	}
 	else {
		console.log( "Lenght = " + l + " Breadth = " + b + " Area = " + rect.area(l,b));
		console.log( "Lenght = " + l + " Breadth = " + b + " Perimeter = " + rect.perimeter(l,b));
	}
}

solveRect(2,4);
solveRect(5,10);
solveRect(-3,2);
solveRect(3,-2);	