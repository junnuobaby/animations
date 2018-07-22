/**
 * Created by qianchen on 2017/10/14.
 */

function Shoot(x1, y1) {
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.strokeColor = '#ffffff';
    this.lineWidth = 1;
    this.shadowBlur = 0;
    this.shadowColor = '#ffffff';
    this.mass = 1; //质量

    this.x1 = x1 || 0;
    this.y1 = y1 || 0;

    this.vx = 0;       //x轴上的速度
    this.vy = 0;       //y轴上的速度
}

Shoot.prototype.draw = function (context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.strokeStyle = this.strokeColor;
    context.lineWidth = this.lineWidth;
    context.shadowBlur = this.shadowBlur;
    context.shadowColor = this.shadowColor;
    context.lineCap = 'round';

    context.beginPath();
    context.moveTo(this.x1, this.y1);
    context.lineTo(this.x1 + 2, this.y1 + 2);
    context.closePath();

    if(this.lineWidth > 0) {
        context.stroke();
    }

    context.restore();
};

