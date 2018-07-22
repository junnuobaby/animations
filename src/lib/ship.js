
/**
 * Created by qianchen on 2017/10/14.
 */

function Ship() {
    this.x = 0;                    //箭头中心点的x坐标
    this.y = 0;                    //箭头中心点的x坐标
    this.rotation = 0;

    this.color = "#fff";            //箭头的填充色
    this.flameColor = "#ff0909";            //箭头的填充色
    this.strokeColor = "#000";      //箭头的边框线颜色
    this.lineWidth = 1;             //边框线的宽度

    this.width = 20;                //箭头非端点处的宽度
    this.height = 20;               //箭头非端点处的高度
    this.showFlame = false;             //是否双向

}

Ship.prototype.draw = function (context) {

    context.save();

    context.translate(this.x, this.y);
    context.rotate(this.rotation);

    context.fillStyle = this.color;
    context.strokeStyle = this.strokeColor;
    context.lineWidth = this.lineWidth;

    context.beginPath();
    context.moveTo(this.width/2,0);
    context.lineTo(-this.width/2, this.height/2);
    context.lineTo(-this.width/4, 0);
    context.lineTo(-this.width/2, -this.height/2);
    context.lineTo(this.width/2, 0);
    context.stroke();

    if (this.showFlame) {
        context.fillStyle = this.flameColor;
        context.beginPath();
        context.moveTo(-7.5, -5);
        context.lineTo(-15, 0);
        context.lineTo(-7.5, 5);
        context.stroke();
        context.fill();
    }

    context.restore();
};