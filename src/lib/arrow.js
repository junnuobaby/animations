
/**
 * Created by qianchen on 2017/10/14.
 */

function Arrow() {
    this.x = 0;                    //箭头中心点的x坐标
    this.y = 0;                    //箭头中心点的x坐标
    this.rotation = 0;

    this.color = "#fff";            //箭头的填充色
    this.strokeColor = "#000";      //箭头的边框线颜色
    this.lineWidth = 1;             //边框线的宽度

    this.width = 50;                //箭头非端点处的宽度
    this.height = 10;               //箭头非端点处的高度
    this.endWidth = 30;             //箭头端点处的宽度
    this.endHeight = 30;            //箭头端点处的高度
    this.endAngle = 1/3 * Math.PI;  //箭头端点处的倾斜角度
    this.double = false;             //是否双向

}

Arrow.prototype.draw = function (context) {

    context.save();

    context.translate(this.x, this.y);
    context.rotate(this.rotation);

    context.fillStyle = this.color;
    context.strokeStyle = this.strokeColor;
    context.lineWidth = this.lineWidth;

    context.beginPath();
    context.lineTo(-this.width, -this.height/2);
    context.lineTo(0, -this.height/2);
    context.lineTo((this.endAngle==1/2 * Math.PI) ? 0 : (-this.endHeight/2) / Math.tan(this.endAngle), -(this.height/2 + this.endHeight/2));
    context.lineTo(this.endWidth, 0);
    context.lineTo((this.endAngle==1/2 * Math.PI) ? 0 : (-this.endHeight/2) / Math.tan(this.endAngle), this.height/2 + this.endHeight/2);
    context.lineTo(0, this.height/2);
    context.lineTo(-this.width, this.height/2);

    if (this.double) {
        context.lineTo(-(this.width-(this.endHeight/2) / Math.tan(this.endAngle)), this.height/2 + this.endHeight/2);
        context.lineTo(-(this.width + this.endWidth), 0);
        context.lineTo(-(this.width-(this.endHeight/2) / Math.tan(this.endAngle)), -(this.height/2 + this.endHeight/2));
    } else {
        context.lineTo(-this.width, -this.height/2);
    }
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
};