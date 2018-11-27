///Author: David Price 
///Known Bugs: None

function rain()
{
	///starting position and fandom speed
	this.x = Math.random() * app.canvas.width;
	this.y = (Math.random() * 80) - 500;
	this.height = (Math.random() * 5) + 5;
	this.fallSpeed = (Math.random() * 6) + 3;


	///Update Function
	this.update = function()
	{
		///if the y position isnt at the bottom of the screen keep moving down
		if(this.y < app.canvas.height)
		{
			this.y += this.fallSpeed;
		}

		//if it is off the screen reset the height 
		if(this.y + this.height > app.canvas.height)
		{
			this.y = (Math.random() * 80) - 80;
		}
	}
	///Draw Function
	this.draw = function()
	{
		//Draw a line from (x,y) to (x,y + height)
		app.ctx.beginPath();
		app.ctx.moveTo(this.x, this.y);
		if(this.y + this.height < app.canvas.height)
		{
			app.ctx.lineTo(this.x, this.y + this.height);
		}
			app.ctx.strokeStyle = "blue";
			app.ctx.strokeSize = (Math.random() * 3) - 5;	//each drop has a random size
			app.ctx.stroke();
	}
};