var MAX_PARTICLES = 500,
    MIN_ALPHA = 0.01,
    FPS = 30,
    
    canvas, context, stageWidth, stageHeight,
    
    mouseX = 0,
    mouseY = 0,
    lastX = 0,
    lastY = 0,
    active = false,
    particles = [];

$(document).ready(init);
init();
  
function init() {
  canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  resize();
  
  mouseX = stageWidth * 0.5;
  mouseY = stageHeight * 0.5;
  idleBurst();

  $(window).resize(resize);
  $(window).mousemove(function(event) {
    if(!active) {
      $('.start').fadeOut(600);
    }
    active = true;
    lastX = mouseX;
    lastY = mouseY;
		mouseX = event.pageX;
		mouseY = event.pageY;
		if(particles.length < MAX_PARTICLES) createParticle();
	});
	$(window).mousedown(function(event) {
		createBurst();
	});
	
	setInterval(onEnterFrame, 1000 / FPS);
}

function idleBurst() {
	if(!active) {
		createBurst();
		setTimeout(idleBurst, 1200);
	}
}

function resize() {
	stageWidth = $(window).width();
	stageHeight = $(window).height();
	canvas.width = stageWidth;
	canvas.height = stageHeight;
}

function createParticle(burst) {
	var particle = {
		size: 3 + (Math.random() * 8),
		bounce: Math.random(),
		color: "#"+((1<<24)*Math.random()|0).toString(16),
		alpha: 1,
		fade: 0.93 + (Math.random() * 0.05),
		x: 0,
		y: 0,
		vx: 0,
		vy: 0,
		rotate: Math.random() * 360,
		rotateDir: (Math.random > 0.5) ? 7 : -7
	};
	particle.x = mouseX;
	particle.y = mouseY;
	particle.vx = (burst) ? (0.5 - Math.random()) * 20 : lastX - mouseX;
	particle.vy = (burst) ? (0.5 - Math.random()) * 20 : lastY - mouseY;
	particles.push(particle);
}

function createBurst() {
	var i = 40;
	while(--i > -1 && particles.length < MAX_PARTICLES) {
		createParticle(true);
	}
}

function onEnterFrame() {
	context.clearRect(0, 0, stageWidth, stageHeight);
	/*context.fillStyle = '#000000';
	context.globalAlpha = 0.1;
	context.fillRect(0, 0, stageWidth, stageHeight);*/
	
	var points = 5;
	var step, halfStep, start, n, dx, dy, outerRadius, innerRadius, angle;
	var particle;
	var i = particles.length;
	while(--i > -1) {
		particle = particles[i];
		particle.x += particle.vx;
		particle.y += particle.vy;
		
		if(particle.x - particle.size < 0) {
			particle.x = particle.size;
			particle.vx = -particle.vx * particle.bounce;
		}
		else if(particle.x + particle.size > stageWidth) {
			particle.x = stageWidth - particle.size;
			particle.vx = -particle.vx * particle.bounce;
		}
		
		if(particle.y - particle.size < 0) {
			particle.y = particle.size;
			particle.vy = -particle.vy * particle.bounce;
		}
		else if(particle.y + particle.size > stageHeight) {
			particle.y = stageHeight - particle.size;
			particle.vy = -particle.vy * particle.bounce;
		}
		
		context.fillStyle = particle.color;
		context.globalAlpha = particle.alpha;
		context.beginPath();
		
		outerRadius = particle.size;
		innerRadius = particle.size * 0.3;
		step = (Math.PI * 2) / points;
		halfStep = step / 2;
		start = (particle.rotate / 180) * Math.PI;
		context.moveTo( particle.x + (Math.cos( start ) * outerRadius), 
						particle.y - (Math.sin( start ) * outerRadius) );
		
		for(n = 1; n <= points; ++n) {
			dx = particle.x + Math.cos(start + (step * n) - halfStep) * innerRadius;
			dy = particle.y - Math.sin(start + (step * n) - halfStep) * innerRadius;
			context.lineTo( dx, dy );
			dx = particle.x + Math.cos(start + (step * n)) * outerRadius;
			dy = particle.y - Math.sin(start + (step * n)) * outerRadius;
			context.lineTo(dx, dy);
		}
		context.closePath();
		context.fill();
		
		particle.alpha *= particle.fade;
		particle.rotate += particle.rotateDir;
		
		if(particle.alpha <= MIN_ALPHA) {
			particles = particles.slice(0,i).concat(particles.slice(i+1));
		}
	}
}