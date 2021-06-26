var	canvas = document.getElementById('myCanvas'),
	ctx = canvas.getContext('2d'),
	width = canvas.width,
	height = canvas.height,
	lastUpdate = new Date(),
	mouseUpdate = new Date(),
 lastMouse = [],
	particles = [],

 requestAnimFrame = (function () {
	  return  window.requestAnimationFrame ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame ||
		  window.oRequestAnimationFrame ||
		  window.msRequestAnimationFrame ||
		  function (callback) {
			   window.setTimeout(callback, 1000 / 60);
		  };
  })();

Math.randMinMax = function(min, max, round) {
	var val = min + (Math.random() * (max - min));
  
	return val;
};

Math.TO_RAD = Math.PI/180;

Math.getAngle = function( x1, y1, x2, y2 ) {
	
	var	dx = x1 - x2,
		dy = y1 - y2;
	
	return Math.atan2(dy,dx);
};

Math.getDistance = function( x1, y1, x2, y2 ) {
	
	var 	xs = x2 - x1,
		ys = y2 - y1;		
	
	xs *= xs;
	ys *= ys;
	 
	return Math.sqrt( xs + ys );
};


window.setTimeout(function() {
  
  setFullscreen();

  for(var i=0;i<40;i=i+1) {
    (function(i) {
      window.setTimeout(function() {
        createParticle({
          x: width/2 - 150 + ((i/40)*300),
          degree: Math.randMinMax(225,135)
        });
        },i*20);
    })(i);  
  }

  loop();
}, 100);


canvas.addEventListener('mousemove', function(e) {

	var 	thisUpdate = new Date(),
		thisMouse = [e.offsetX || e.layerX, e.offsetY || e.layerY],
		degree = 0, 
		distance = 0,
		hue = 180;
	

	if( thisUpdate - mouseUpdate < 20 ) return;

	degree = Math.getAngle( thisMouse[0], thisMouse[1], lastMouse[0], lastMouse[1] );
	degree /= Math.TO_RAD;
	degree += 180;

	distance = Math.getDistance( thisMouse[0], thisMouse[1], lastMouse[0], lastMouse[1] );
	if( distance < 1 ) distance = 1;

	hue = 180 * (degree / 360);

	createParticle({
		color: 'hsla('+ hue +', 100%, 50%, '+(Math.random().toFixed(2))+')',
		x: thisMouse[0],
		y: thisMouse[1],
		degree: degree,
		speed: distance*20,
		vs: -distance/3
	});

	mouseUpdate = thisUpdate;
	lastMouse  = thisMouse;
	
});
canvas.addEventListener('mousedown', function(e) {

	for(var i=0;i<40;i=i+1) {
		createParticle({
			x: e.offsetX || e.layerX,
			y: e.offsetY || e.layerY,
			color: 'hsla('+ Math.randMinMax(290, 360) +', 100%, 50%, '+(Math.random().toFixed(2))+')',
			speed: Math.randMinMax(100, 350)
		});
	}
});
window.addEventListener('resize', setFullscreen );



function createParticle( args ) {

	var options = {
		x: width/2,
		y: height/2,
		color: 'hsla('+ Math.randMinMax(160, 290) +', 100%, 50%, '+(Math.random().toFixed(2))+')',
		degree: Math.randMinMax(0, 360),
		speed: Math.randMinMax(200, 250),
		vd: Math.randMinMax(-90,90),
		vs: Math.randMinMax(-8,-5)
	};

	for (key in args) {
	  options[key] = args[key];
	}

	particles.push( options );
}


function loop() {

	var 	thisUpdate = new Date(),
		delta = (lastUpdate - thisUpdate) / 1000,
		amount = particles.length,
		size = 5,
		i = 0,
		p;

	ctx.fillStyle = 'rgba(0,0,0,0.25)';
	ctx.fillRect(0,0,width,height);

	for(;i<amount;i=i+1) {

		p = particles[ i ];

		p.degree += (p.vd * delta);
		p.speed += (p.vs);
		if( p.speed < 0 ) continue;

		p.x += Math.cos(p.degree * Math.TO_RAD) * (p.speed * delta);
		p.y += Math.sin(p.degree * Math.TO_RAD) * (p.speed * delta);

		if( p.x < 0 || p.x > width ) {
			p.degree = 180 - p.degree;
		}
		if( p.y < 0 || p.y > height ) {
			p.degree *= -1;
		}
  
		ctx.save();
	
		ctx.translate( p.x, p.y );
		ctx.rotate( p.degree * Math.TO_RAD );

		ctx.fillStyle = p.color;
		ctx.fillRect( -size, -size, size*2, size*2 );

		ctx.restore();
	}

	lastUpdate = thisUpdate;

	requestAnimFrame( loop );
}

function setFullscreen() {
	width = canvas.width = window.innerWidth;
 height = canvas.height = window.innerHeight;
};