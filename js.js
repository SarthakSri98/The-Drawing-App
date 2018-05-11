var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var drag = false;
var z;
var x;

function init()
{ 
  
  
  function engage(e)
  {
    drag = true;
    draw(e);   //for letting the draw function to execute even after clicking
  }
  function disengage()
  {
    drag = false;
    ctx.beginPath(); //so that every time we have disengaged our drawing will start from new place
  }
  function draw(e)
  { if(drag)
    // this is for the thickness
    { 
      $(document).ready(function()
   {   
    $('#sub-rad').on('click',function()
      {              
       var rad = parseInt('' + $('#rad').val(),10);
        x = rad;
      });  //end of the jquery thickness
        $('#sub-col').on('click',function()
      {              
       var col = $('#col').val();
        z = col;
      });     //for the color
   
    $('#clear').on('click',function()  // for eraser I have simply set the color to white
      {              
      z = 'white';
      });   
      
     });
       console.log(z);
      ctx.lineWidth = x*2;             //for the line which keeps a bond between the circles
      
    var xPos = e.clientX - canvas.offsetLeft;   //for the mouse positions
    var yPos = e.clientY - canvas.offsetTop;    //for the mouse positions
     //canvas methods for drawing 
      ctx.strokeStyle = z;
      ctx.lineTo(xPos,yPos);
      ctx.stroke();
      ctx.fillStyle = z;
     
      ctx.beginPath();
      ctx.arc(xPos,yPos,x,0,2*Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(xPos,yPos);
      
     }
  }
  document.addEventListener('mousedown',engage);
  document.addEventListener('mousemove',draw);
  document.addEventListener('mouseup',disengage); 
  
}
window.addEventListener('load',function(){
  init();
});