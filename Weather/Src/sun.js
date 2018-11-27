///Author: David Price
///Known Bugs: None

function sun()
{
	///set the alpha of the program to 1 to allow it to be updated 
	app.ctx.globalAlpha = 1;
	this.img = new Image();
	this.img.src = "../Resources/sun.png";
	
	///image position
	this.x = app.canvas.width/2;
	this.y = -110
	this.width = 471;
	
	this.moveSpeed = (Math.random() * 1.6) + 1;
	
	///Update Funtion
	this.update = function()
	{
		this.x = this.x+ this.moveSpeed;
		/// if the image leaves the right of the screen
		if(this.x > app.canvas.width)
		{
			//move it to the left side of the screen
			this.x = 0 - this.width;
			//give it a random speed and alpha so simulate different intensity of sunlight
			app.ctx.globalAlpha = (Math.random() * 1) + 0.3;
			this.moveSpeed = (Math.random() * 1.6) + 1;
		}
	}
	///Draw function
	this.draw = function()
	{
		app.ctx.drawImage(this.img, this.x, this.y);
	}
};