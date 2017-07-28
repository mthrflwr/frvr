$(function($) {
    $('iframe').Lazy();
});

window.onload = function() {

var dumbJumbo = document.querySelector("div.jumbotron");
 
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
 
var delay = 0;
 
function changeColor() {
    delay++;
     
    if (delay > 3) {
        dumbJumbo.style.backgroundColor = getRandomColor();
        delay = 0;
    }
 
    requestAnimationFrame(changeColor);
}
changeColor();           
 
function getRandomColor() {
    // creating a random number between 0 and 255
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
     
    // going from decimal to hex
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);
     
    // making sure single character values are prepended with a "0"
    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }
     
    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }
 
    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }
 
    // creating the hex value by concatenatening the string values
    var hexColor = "#" + hexR + hexG + hexB;
    return hexColor.toUpperCase();
}





			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			
			var camera, scene, renderer;
			var geometry, material, mesh;

			function setup() {

				var W = window.innerWidth, H = window.innerHeight;
				renderer = new THREE.WebGLRenderer();
				renderer.setSize( W, H );
				document.body.appendChild( renderer.domElement );

				camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
				camera.position.z = 500;

				scene = new THREE.Scene();
				
				
geometry = new THREE.Geometry();
				for ( i = 0; i < 5000; i ++ ) {
					var vertex = new THREE.Vector3();
					vertex.x = 1000 * Math.random() - 500;
					vertex.y = 1000 * Math.random() - 500;
					vertex.z = 1000 * Math.random() - 500;
					geometry.vertices.push( vertex );
				}
				material = new THREE.ParticleBasicMaterial( { size: 3, sizeAttenuation: false, transparent: true } );
				material.color.setHex( 0xff00ff );
				particles = new THREE.ParticleSystem( geometry, material );
				particles.sortParticles = true;
				scene.add( particles );


			}

			function draw() {

				requestAnimationFrame( draw );
				
				particles.rotation.y = Date.now() * 0.00005;
				var time = Date.now() * 0.0005;
				h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
				material.color.setHSL( h, 0.5, 0.5 );
				renderer.render( scene, camera );

			}

			setup();
			draw();

	}