/**
 * Created by qianchen on 2017/10/11.
 */

(function (win) {
    var _utils = {};


    /**
     * 计算鼠标在canvas上的相对坐标
     */
    _utils.captureMouse = function (element) {
        var mouse = {x: 0, y: 0};

        element.addEventListener('mousemove', function (event) {
            var x, y;
            if (event.pageX || event.pageY) {
                x = event.pageX;
                y = event.pageY;
            } else {
                x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }

            x -= element.offsetLeft;
            y -= element.offsetTop;

            mouse.x = x;
            mouse.y = y;
        }, false);

        return mouse;
    };

    /**
     * 计算两点之间的距离
     */
    _utils.getDistance = function (x1, y1, x2, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return  Math.sqrt(dx * dx + dy * dy);
    };


    /**
     * 在起点和终点确定的情况下，获取穿过指定点的曲线的控制点（针对quadraticCurveTo）
     * x1, y1 —— 起点坐标
     * x2, y2 —— 终点坐标
     * xt, yt —— 目标点坐标
     */
    _utils.getCtrlPoint = function (x1, y1, x2, y2, xt, yt) {

        return  {
            x: xt * 2 - (x1 + x2) / 2,
            y: yt * 2 - (y1 + y2) / 2
        }
    };

    /**
     * 接受一个表示颜色值的数字或十六进制字符串作为输入参数，然后抽取出各个独立的三原色，并拼接为一个css风格的函数作为返回值
     * 如 _utils.colorToRGB(0xFFFF00, 0.5)将返回"rgba(255, 255, 0, 0.5)"
     */
    _utils.colorToRGB = function (color, alpha) {
        if (typeof color === 'string' && color[0] === '#') {
            color = window.parseInt(color.slice(1), 16);
        }

        alpha = alpha || 1;

        var r = color >> 16 & 0xff;
        var g = color >> 8 & 0xff;
        var b = color & 0xff;
        var a = (alpha < 0) ? 0 : ((alpha > 1 ? 1 : alpha));

        if (a == 1) {
            return 'rgb(' + r + "," + g + "," + b + ")";
        } else {
            return 'rgba(' + r + "," + g + "," + b + "," + a + ")";
        }
    };

    /**
     * 实现颜色在数值和字符串之间的相互转换
     */
    _utils.parseColor = function (color, toNumber) {

        if (toNumber === true) {
            if (typeof color === 'number') {
                return (color | 0);
            }

            if (typeof color === 'string' && color[0] === '#') {
                color = color.slice(1);
            }

            return window.parseInt(color, 16);
        } else {

            if (typeof color === 'number') {
                color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
            }

            return color;
        }
    };

    /**
     * 判断指定的坐标位置(x,y)是否位于矩形的边界内，rect是一个拥有x、y、width、height属性的矩形对象
     */
    _utils.containsPoint = function (rect, x, y) {
        return !(x < rect.x || x > rect.x + rect.width || y < rect.y || y > rect.y + rect.height);
    };


    /**
     * 两个物体间的碰撞检测，通过检测两个对象的边界框是否相交来判断
     */
    _utils.intersects = function (rectA, rectB) {
        return !(rectA.x + rectA.width < rectB.x
        || rectB.x + rectB.width < rectA.x
        || rectA.y + rectA.height < rectB.height
        || rectB.y + rectB.height < rectA.height);
    };





    win.Utils = _utils;
    
})(window);



