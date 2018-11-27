function lightning()
{
	this.startX =  Math.random() * app.canvas.width;;
	this.startY = 0;
	this.nextX = 0;
	this.nextY = 0;
	this.nodeNum = 1;


	this.update = function()
	{
		this.maxNode =  (Math.random() * 8) + 3;
		if(this.nodeNum < this.maxNode)
		{
			if(this.nextX = this.startX + ((Math.random() * 6) + 3) < app.canvas.width)
			{
				this.nextY = this.startY + (Math.random() * 6) + 3;
				this.nextX = this.startX + (Math.random() * 6) + 3;
			}
			else if (this.startX - ((Math.random() * 6) + 3) > 0)
			{
				this.nextY = this.startY + (Math.random() * 6) + 3;
				this.nextX = this.startX - (Math.random() * 6) + 3;
			}
			else
			{
				this.nextX = this.startX;
				this.nextY = this.startX;
			}
			this.startY = this.nextY;
			this.startX = this.nextX;
			this.nodeNum++;
		}
	}
	this.draw = function()
	{
		//draw path from startX and y to nextX and y
	}
}