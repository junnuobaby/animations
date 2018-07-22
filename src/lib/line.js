/**
 * Created by qianchen on 2017/10/14.
 */

function Line(x1, y1, x2, y2) {
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.x1 = x1 || 0;
    this.x2 = x2 || 0;
    this.y1 = y1 || 0;
    this.y2 = y2 || 0;

    this.strokeColor = '#ddd';
    this.lineWidth = 1;
}

Line.prototype.draw = function (context) {

    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.strokeStyle = this.strokeColor;
    context.lineWidth = this.lineWidth;

    context.beginPath();
    context.moveTo(this.x1, this.y1);
    context.lineTo(this.x2, this.y2);
    context.closePath();

    if(this.lineWidth > 0) {
        context.stroke();
    }

    context.restore();
};

Line.prototype.getBounds = function () {
    if (this.rotation === 0) {

        var minX = Math.min(this.x1, this.x2);
        var maxX = Math.max(this.x1, this.x2);
        var minY = Math.min(this.y1, this.y2);
        var maxY = Math.max(this.y1, this.y2);

        return {
            x: this.x + minX,
            y: this.y + minY,
            width: maxX - minX,
            height: maxY - minY
        }

    } else {
        var sin = Math.sin(this.rotation);
        var cos = Math.cos(this.rotation);
        var x1r = this.x1 * cos + this.y1 * sin;
        var x2r = this.x2 * cos + this.y2 * sin;
        var y1r = this.y1 * cos + this.x1 * sin;
        var y2r = this.y2 * cos + this.x2 * sin;

        return {
            x: this.x + Math.min(x1r, x2r),
            y: this.y + Math.min(y1r, y2r),
            width: Math.max(x1r, x2r) - Math.min(x1r, x2r),
            height:  Math.max(y1r, y2r) - Math.min(y1r, y2r),
        }
    }

};














