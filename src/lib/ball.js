/**
 * Created by qianchen on 2017/10/14.
 */

function Ball(radius, color) {
    this.x = 0;
    this.y = 0;
    this.radius = radius || 40;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.color = color || '#ff0000';
    this.strokeColor = '#000';
    this.lineWidth = 1;
    this.shadowBlur = 0;
    this.shadowColor = '#ffffff';
    this.mass = 1; //质量

    //ball animation params
    this.vx = 0;       //x轴上的速度
    this.vy = 0;       //y轴上的速度
}

Ball.prototype.draw = function (context) {
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
    context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    context.fill();

    if(this.lineWidth > 0) {
        context.stroke();
    }

    context.restore();
};

//返回一个恰好能容纳小球的矩形，即小球在画布上的边界值
Ball.prototype.getBounds = function () {
    return {
        x: this.x - this.radius,
        y: this.y - this.radius,
        width: this.radius * 2,
        height: this.radius * 2
    }
};


