///Author: David Price
///Known Bugs: Buttons work but switching weather states from the buttons does not at this moment use first line of main to change weather 

app = {}
var rains = [];
var snw = [];
var weather;
const weathers = {
	Water: "water",
	Sun: "sun",
	Fog: "fog",
	Snow: "snow",
	Lightning: "lightning"
};
   
function main()
{
	///Change weather state, these are the available options 
	///weather = weathers.Snow;
	///weather = weathers.Sun;	
	weather = weathers.Water;


	//Creates a new canvas element 
    app.canvas = document.createElement("canvas");
    //Adds the canvas element to the document 
    document.body.appendChild(app.canvas);
    app.canvas.width = window.innerWidth;
    app.canvas.height = window.innerHeight;
    app.ctx = app.canvas.getContext("2d");

    ///Html buttons
	var buttonOne = document.getElementById("Sunny");
    var buttonTwo = document.getElementById("Rainy");
	var buttonThree = document.getElementById("Snowy");
	
	///click events 
	buttonOne.addEventListener("click", function(){
    weather = weathers.Sun;
    console.log("Sun Pressed");
    });
    buttonTwo.addEventListener("click", function(){
    weather = weathers.Water;
    console.log("Rain Pressed");
	}); 
	buttonThree.addEventListener("click", function(){
    weather = weathers.Snow;
    console.log("Snow Pressed");
     });
	
	//create weather types depending on current weather
	switch (weather) 
	{
     	case weathers.Water: 
    		for(var i = 0; i < 300; i++)
    		{
				rains[i] = new rain();
			}
			break;

		case weathers.Lightning: 
			//new lightning(); not implemented yet
			break;
		case weathers.Fog: 
			//new fog();	not implemented yet
			break;
		case weathers.Snow: 
			for(var i = 0; i < 400; i++)
    		{
    			snw[i] = new snow();
    		}
    		break;
    	case weathers.Sun: 
			suns = new sun();
			break;
		default:
			weather  = weathers.Water;
			break;
	}
	init();


	function rgb(r, g, b) 
	{ 
		return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
	}

	function clamp(value, min, max)
	{ 
		if(max<min) 
		{ 
			var temp = min; 
			min = max; 
			max = temp; 
		}
		return Math.max(min, Math.min(value, max)); 
	}
}

function init()
{
	///clear the screen when the init function is called, update and draw current weather
	app.ctx.clearRect(0, 0, app.canvas.width, app.canvas.height);
		switch (weather) 
		{
     		case weathers.Water: 
				for(var k = 0; k < rains.length; k++)
				{
					rains[k].update();
					rains[k].draw();
				}
				break;
			case weathers.Lightning: 
				break;
			case weathers.Fog: 
				break;
			case weathers.Snow: 
				for(var k = 0; k < snw.length; k++)
				{
					snw[k].update();
					snw[k].draw();
				}
				break;
			case weathers.Sun: 
				suns.update();
				suns.draw();
				break;
			default:
			///weather = weathers.Water;
			break;
		}
			requestAnimationFrame(init);
};
