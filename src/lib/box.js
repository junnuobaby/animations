/**
 * Created by qianchen on 2017/10/14.
 */

function Box(width, height, color) {
    this.x = 0;
    this.y = 0;
    this.width = width || 50;
    this.height = height || 50;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = color || '#ff0000';
    this.strokeColor = '#000';
    this.lineWidth = 1;

    //animation params
    this.vx = 0;       //x轴上的速度
    this.vy = 0;       //y轴上的速度
}

Box.prototype.draw = function (context) {

    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);

    context.fillStyle = this.color;
    context.strokeStyle = this.strokeColor;
    context.lineWidth = this.lineWidth;

    context.beginPath();
    context.rect(0, 0, this.width, this.height);
    context.closePath();
    context.fill();

    if(this.lineWidth > 0) {
        context.stroke();
    }

    context.restore();
};


