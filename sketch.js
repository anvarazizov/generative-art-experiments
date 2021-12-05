var c;

var tileCount = 120;
var actRandomSeed = 0;
const width = window.innerWidth;
const height = window.innerHeight;
var shape = ['ellipse', 'rect'];
var translationHeightRatio = 500;
var posXRatio = 2;
var gridYRatio = 4;
var gridXIncremeter = '1';

function setup() {
	createCanvas(width, height);

	var gui = createGui('GUI');
	sliderRange(10, 400, 1);
	gui.addGlobals('tileCount', 'shape', 'translationHeightRatio');

	sliderRange(0.5, 5, 0.1);
	gui.addGlobals('posXRatio', 'gridXIncremeter');
	sliderRange(0.5, 20, 0.1);
	gui.addGlobals('gridYRatio');

	frameRate(10);
}

function draw() {
	background(0);
	smooth();
	noFill();
	noStroke();

	randomSeed(actRandomSeed);
	translate(-width / 2, width - translationHeightRatio);
	rotate(-PI / 2);

	for (let gridY = 0; gridY < width / 2; gridY += random(1.5, 2.5)) {
		for (let gridX = 0; gridX < tileCount; gridX++) {

			const posX = width / tileCount * gridX;
			const posY = height / tileCount * gridY;

			const toggle = parseInt(random(0, 10));
			c = color(posX / posXRatio, gridY / gridYRatio, tileCount / (gridX + gridXIncremeter));
			if (toggle == 0 || toggle == 4 || toggle == 6 || toggle == 7 || toggle == 10) {
				fill(c);
				switch (shape) {
					case 'ellipse':
						ellipse(posX, posY, posX + width / tileCount, posY + width / tileCount * 2);		
						break;
					case 'rect':
						rect(posX, posY, posX + width / tileCount, posY + width / tileCount * 2);
					default:
						break;
				}
				
				rotate(-PI);

				actRandomSeed = random(10000);
			}
		}
	}
}