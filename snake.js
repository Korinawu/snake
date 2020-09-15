	var canvas = document.getElementById("canvas");
    var snakegame = canvas.getContext("2d");
    
    
	snakegame.moveTo(0,0);
	snakegame.lineTo(350,350);
	var c=document.getElementById("canvas");
    var snakegame=c.getContext("2d");
    snakegame.beginPath();
    snakegame.moveTo(0,0);
    snakegame.lineTo(350,350);
    snakegame.stroke();
 

    var snake =[];
    var snakebody = 6;
	var foodx =0;
	var foody =0;
    var gogo =0;
    function drawtable()
    {


    	for(var i=0;i<60;i++)
    	{
    		snakegame.strokeStyle="#ffc7e6";
    		snakegame.beginPath();
    		snakegame.moveTo(15*i,0);
    		snakegame.lineTo(15*i,600);
    		snakegame.closePath();
    		snakegame.stroke();
    	}
        for(var j=0;j<40;j++)
    	{
    		snakegame.strokeStyle="#ffc7e6";
    		snakegame.beginPath();
    		snakegame.moveTo(0,15*j);
    		snakegame.lineTo(700,15*j);
    		snakegame.closePath();
    		snakegame.stroke();
    	}
    	
    	for(var k=0;k<snakebody;k++)
			{
			snakegame.fillStyle="#000";
			if (k==snakebody-1)
			{
				snakegame.fillStyle="black";
			}
			snakegame.fillRect(snake[k].x,snake[k].y,15,15);
			
			}
			
    		snakegame.fillStyle ="red";
        snakegame.fillRect(foodx,foody,15,15);
        snakegame.fill();
    	
    }

    
    function start()
    {
    	
		
		for(var k=0;k<snakebody;k++)
    		{
    			snake[k]={x:k*15,y:0};
    			
            }
			
		  drawtable();
          addfood();

    }

    function addfood()
	{
	foodx = Math.floor(Math.random()*60)*15; //隨機產生一個0-1之間的數
	foody = Math.floor(Math.random()*40)*15;
		
		for (var k=0;k<snake;k++)
		{
			if (foodx==snake[k].x&&foody==sanke[k].y)//防止食物在蛇身上
			{	
			addfood();
			}
		}
	
	
	}	
    		
   function move()
   {
	switch (gogo)
	{
	case 1: snake.push({x:snake[snakebody-1].x-15,y:snake[snakebody-1].y}); break;
	case 2: snake.push({x:snake[snakebody-1].x,y:snake[snakebody-1].y-15}); break;
	case 3: snake.push({x:snake[snakebody-1].x+15,y:snake[snakebody-1].y}); break;
	case 4: snake.push({x:snake[snakebody-1].x,y:snake[snakebody-1].y+15}); break;
	case 5: snake.push({x:snake[snakebody-1].x-15,y:snake[snakebody-1].y-15}); break;
	case 6: snake.push({x:snake[snakebody-1].x+15,y:snake[snakebody-1].y+15}); break;
	default: snake.push({x:snake[snakebody-1].x+15,y:snake[snakebody-1].y});
	}

    snake.shift();
    snakegame.clearRect(0,0,900,600);
   	isEat();
	isDead();
	drawtable();
   } 			
   
   function keydown(e)
   {
   switch(e.keyCode)
		{
         case 37: gogo=1; break;
		 case 38: gogo=2; break;
		 case 39: gogo=3; break;
		 case 40: gogo=4; break;
		 case 65: gogo=5; break;
		 case 68: gogo=6; break;
		}
   }
   
   function isEat()
   {
    if(snake[snakebody-1].x==foodx&&snake[snakebody-1].y==foody)
   {
		addfood();
		snakebody++;
		snake.unshift({x:-15,y:-15});
   }
   
   }
   
   function isDead()
   {
    if (snake[snakebody-1].x>885||snake[snakebody-1].y>585||snake[snakebody-1].x<0||snake[snakebody-1].y<0)
		{
		alert("你輸了!!!!");
		window.location.reload();
		}
   }


   
    document.onkeydown=function(e)
{
	keydown(e);

} 
window.onload = function()
{ 
	start();
	setInterval(move,150);
	drawtable();
	
	

}
           