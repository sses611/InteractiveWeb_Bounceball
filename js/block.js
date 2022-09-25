export class Block {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = width + y;
    }

    draw(ctx) {
        const xGap = 80;
        const yGap = 60;

        ctx.fillStyle = '#ff384e';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height); 
        ctx.fill();

        ctx.fillStyle = '#030E38';
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.maxY); 
        ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();

        // ctx.fillStyle = '#000000'
        // ctx.beginPath();
        // ctx.moveTo(this.x, this.y);
        // ctx.lineTo(this.x, this.maxY);
        // ctx.lineTo(this.x - xGap, this.maxY + yGap);
        // ctx.lineTo(this.x - xGap, this.maxXY + yGap - this.height);
        // ctx.fill();

    }
}