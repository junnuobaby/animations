/**
 * Created by qianchen on 2017/10/14.
 */

function Wave(startX, startY) {
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = '#ff0000';
    this.strokeColor = '#fff';
    this.lineWidth = 1;
    this.shadowBlur = 0;
    this.shadowColor = 'rgba(255, 255, 255, 1)';
    this.centerY = startY|| 0;

    this.startX = startX || 0;
    this.startY = startY || 0;
    this.currentX = startX || 0;
    this.currentY = startY || 0;
    this.nextX = 0;
    this.nextY = 0;
}

Wave.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.fillStyle = this.color;
    context.strokeStyle = this.strokeColor;
    context.lineWidth = this.lineWidth;
    context.shadowBlur = this.shadowBlur;
    context.shadowColor = this.shadowColor;

    context.beginPath();
    context.moveTo(this.currentX, this.currentY);
    context.lineTo(this.nextX, this.nextY);

    this.currentX = this.nextX;
    this.currentY = this.nextY;

    if(this.lineWidth > 0) {
        context.stroke();
    }

    context.restore();
};


