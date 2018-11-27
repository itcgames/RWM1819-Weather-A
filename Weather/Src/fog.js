function fog()
{
	this.x = -10;
	this.y = app.canvas.height;
	this.height = app.canvas.height - 3;
	this.width = app.canvas.width;
	
	this.moveSpeed = (Math.random() * 6) + 3;

	this.circX =  Math.random() * app.canvas.width;
	this.circY = app.canvas.height -  Math.random() * this.height;
	this.size = (Math.random() * 4) + 3;
	

	this.update = function()
	{
		this.height -= this.moveSpeed; 
	}
	this.draw = function()
	{
		//draw circles along the length of the rectangle 
		var circle = new Path2D();
    	circle.moveTo(this.x, this.y);
    	circle.arc(this.circX, this.circY, this.size, 0, 2 * Math.PI);
    	app.ctx.fillStyle="#EDEDED";
    	app.ctx.fill(circle);

		//change opacity of circles







		///circles overlap with eachother
	}
};