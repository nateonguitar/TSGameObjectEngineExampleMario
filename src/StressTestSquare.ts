import { GameObject, Vector2, GameManager, Time } from 'game-object-engine/dist';

export class StressTestSquare extends GameObject {
	private speedX: number = (-0.5 + (Math.random())) / 100;
	private speedY: number = (-0.5 + (Math.random())) / 100;

	private useImage: boolean = false;

	// overrides
	public shapeFillStyle: string = '#';
	public shape: string = 'rectangle';

	constructor(imageSrc: string = null) {
		super({ imageSrc: imageSrc });

		if (imageSrc) {
			this.imageSrc = imageSrc;
			this.transform.size = new Vector2(1, 1).scale(1 + Math.random() * 3);
		}
		else {
			this.transform.size = new Vector2(1, 1).scale(Math.random() * 3);
			// set random color
			let allowedColorChars: string = '0123456789abcdef';
			for (let i=0; i<6; i++) {
				let randomCharIndex: number = Math.floor(Math.random() * 16);
				this.shapeFillStyle += allowedColorChars.charAt(randomCharIndex);
			}
		}
	}

	// override
	public update(): void {
		let unitSize = GameManager.currentLevel.unitSize;
		let screenWidth = GameManager.screenSize.x / unitSize;
		let screenHeight = GameManager.screenSize.y / unitSize;
		
		let p = this.transform.position;
		let s = this.transform.size;
		p.x += this.speedX * Time.deltaTime;
		p.y += this.speedY * Time.deltaTime;

		// collisions with the sides ofthe game window
		// left
		if (p.x - s.x/2 < -screenWidth / 2) {
			this.speedX *= -1;
			p.x = -screenWidth/2 + s.x/2;
		}
		// top
		if (p.y + s.y/2 > screenHeight/2) {
			this.speedY *= -1;
			p.y = screenHeight/2 - s.y/2;
		}
		// right
		if (p.x + s.x/2 > screenWidth/2) {
			this.speedX *= -1;
			p.x = screenWidth/2 - s.x/2;
		}
		// bottom
		if (p.y - s.y/2 < -screenHeight / 2) {
			this.speedY *= -1;
			p.y = -screenHeight/2 + s.y/2;
		}
	}
}
