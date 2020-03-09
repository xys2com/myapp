//计算最远点到中心的直线距离
function maxOrbit(x, y) {
    var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
}
//静止类型的星星构造函数
function StaticStar(options) {
    var s_width = options["width"];
    var s_height = options["height"];
    var max = options["max"]
    this.x = random(3, s_width - 3);
    this.y = random(3, s_height - 3);
    this.r = random(8, 20);
    this.alpha = parseFloat(random(2, 10) / 10); //初始透明度
    this.star = createStar(this.r); //一个canvas 对象
    this.rd = random(1, max)
}
//移动类型的星星构造函数
function MoveStar(options) {
    let s_width = options["width"]
    let s_height = options["height"]

    //路径相关属性
    this.orbitRadius = random(maxOrbit(s_width, s_height));
    this.radius = random(60, this.orbitRadius) / 10;
    this.orbitX = s_width / 2;
    this.orbitY = s_height / 10 * 8;
    this.timePassed = random(0, 300);
    this.speed = random(this.orbitRadius) / 3000000;
    //自身相关属性
    this.x = random(3, s_width - 3);
    this.y = random(3, s_height - 3);
    this.r = random(5, 15);
    this.cycle = random(100, 800); //闪烁周期
    this.alpha = parseFloat(random(2, 10) / 10); //初始透明度
    this.symbol = -1; //闪烁标识
    this.star = createStar(this.r); //一个canvas 对象
}
/*
 * @angle 角度 从正x轴开始顺时针
 * @ratio 比例 流星的大小为ratio*100 ratio为1-10的整数
 */
//流星构造函数
function Meteor() {
    this.ratio = random(200, 400)
    this.angle = random(335, 340)
    this.x = random(1920 / 2 - this.ratio / 2, 1920 + this.ratio)
    this.y = random(-100, -this.ratio)
    this.star = createMeteor(this.angle, this.ratio)

    this.ex = Math.cos(Math.PI * 2 * this.angle / 360) * this.ratio / 25 //x 轴移动量
    this.ey = Math.sin(Math.PI * 2 * this.angle / 360) * this.ratio / 25 //y 轴移动量
}

//音频可视化构造函数
var MusicView = function (cv) {
    this.cv_w = cv.width
    this.cv_h = cv.height
    this.cv = cv
    this.hue = random(360)
}
/**绘制所有音频相关 
 * @彩色线条
 * @彩色方块
 * @波动光晕
 */
MusicView.prototype.drawAllView = function (arr) {
    this.hue = this.hue - 1
    if (this.hue <= 0) {
        this.hue = 360
    }
    var clr = 'hsl(' + this.hue + ', 61%, 33%)'
    var ctxv = this.cv.getContext("2d")
    var grdv = ctxv.createLinearGradient(0, this.cv_h / 2 * 1.2, 0, 0) //
    grdv.addColorStop(0, "rgba(24,35,80," + .01 + ")")
    grdv.addColorStop(.2, "rgba(24,35,80," + .1 + ")")
    grdv.addColorStop(1, clr)

    ctxv.clearRect(0, 0, this.cv_w, this.cv_h)
    let w = (this.cv_w - 200) / size;
    /**
     * 渐变彩色模块
     */
    ctxv.beginPath()

    ctxv.moveTo(0, this.cv_h / 2)
    ctxv.lineTo(0, this.cv_h / 2 - 20)
    ctxv.lineTo(250, this.cv_h / 2 - 20)
    ctxv.lineJoin = "round";
    for (let i = 0; i < size; i += 3) {
        let h = this.cv_h / 2 - arr[i] / size * this.cv_h / 2 * .6
        if (h > (this.cv_h / 2 - 20)) {
            h = this.cv_h / 2 - 20
        }
        // let pre_h=this.cv_h / 2 - arr[(i/2+1)] / size * this.cv_h / 2 * .8
        // let pre_w=i%2==0?(i/2+1)*w:(i/2)*w
        // let vx=random(0,9)%2==0?random(1.5,3):-random(1.5,3)
        // let vh=random(0,9)%2==0?random(1.5,3):-random(1.5,3)
        ctxv.lineTo(300 + i * w, h)
        // ctxv.quadraticCurveTo(300+pre_w,pre_h,300+i*w,h)
    }
    ctxv.lineTo(this.cv_w, this.cv_h / 2 - 100);
    ctxv.lineTo(this.cv_w, this.cv_h / 2)
    ctxv.lineTo(0, this.cv_h / 2);
    ctxv.fillStyle = grdv
    ctxv.fill();
    ctxv.closePath()
    /**
     * 渐变彩色线条
     */
    ctxv.beginPath()
    ctxv.lineWidth = 1
    // ctxv.moveTo(100,arr[0]/size * this.cv_h/2)
    var lineGrd = ctxv.createLinearGradient(0, 0, (this.cv_w - 200) * .8, 0) //
    lineGrd.addColorStop(0, 'hsl(' + this.hue + ', 61%, 33%)')
    lineGrd.addColorStop(1, 'hsl(' + (360 - this.hue) + ', 61%, 33%)')
    ctxv.moveTo(0, this.cv_h / 2 - 70)
    ctxv.lineTo(250, this.cv_h / 2 - 70)
    ctxv.lineWidth = 2
    for (let i = 1; i < size; i++) {
        let h = arr[i] / size * this.cv_h / 2 * .6
        if (h > (this.cv_h / 2 - 70)) {
            h = this.cv_h / 2 - 70
        }
        let vx = random(0, 9) % 2 == 0 ? random(1, 3) : -random(1, 3)
        let vh = random(0, 9) % 2 == 0 ? random(1, 3) : -random(1, 3)
        if (h < this.cv_h / 2 - 70 && h > 0) {
            ctxv.lineTo(300 + i * w + vx, this.cv_h / 2 - h - 70 + vh)
        } else if (h < 70) {
            ctxv.lineTo(300 + i * w + vx, this.cv_h / 2 - 70)
            break;
        }
    }
    ctxv.lineTo(this.cv_w, this.cv_h / 2 - 70)
    ctxv.lineJoin = "round";
    ctxv.strokeStyle = lineGrd //"rgba(255,255,255,.5)"
    ctxv.stroke()
    ctxv.closePath()
    /**
     * 弹动光晕
     */
    let ran = random(0, 10)
    var musicHalo = ctxv.createRadialGradient(this.cv_w / 2, this.cv_h / 2, 0, this.cv_w / 2, this.cv_h / 2, this.cv_w * .4 + arr[ran] / 256 * 100 * 2)
    musicHalo.addColorStop(0, "transparent")
    musicHalo.addColorStop(.6, "rgba(255,239,180,.075)")
    musicHalo.addColorStop(.65, "rgba(255,239,180,.05)")
    musicHalo.addColorStop(.665, "rgba(255, 180, 200,.04)")
    musicHalo.addColorStop(.68, "rgba(255, 100, 215,.03)")
    musicHalo.addColorStop(.695, "rgba(255, 0, 255,.015)")
    musicHalo.addColorStop(.71, "rgba(0,0,255,.015)")
    musicHalo.addColorStop(.725, "rgba(0, 255, 255,.015)")
    musicHalo.addColorStop(.74, "rgba(0,255,0,.015)")
    musicHalo.addColorStop(.755, "rgba(255,255,0,.015)")
    musicHalo.addColorStop(.77, "rgba(255, 125, 0,.015)")
    musicHalo.addColorStop(.785, "rgba(255,0,0,.015)")
    musicHalo.addColorStop(.8, "rgba(255,239,180,.01)")
    musicHalo.addColorStop(1, "transparent")
    ctxv.beginPath()
    ctxv.fillStyle = musicHalo
    ctxv.arc(this.cv_w / 2, this.cv_h / 2, this.cv_w * .4 + arr[ran] / 256 * 100 * 2, 0, Math.PI * 2)
    ctxv.fill()
    ctxv.closePath()




    let arc_x = this.cv_w / 2
    let arc_y = this.cv_h / 2
    let arc_r = 300
    let quantity = 128
    musicArc(arc_x, arc_y, arc_r, quantity, 'hsl(' + this.hue + ', 61%, 33%)')

    /**
     * 
     * @param {*圆心} arc_x 
     * @param {*圆心} arc_y 
     * @param {*圆半径} arc_r 
     * @param {*有音量值的数量} quantity 
     * @param {*圆线的颜色} c 
     */
    function musicArc(arc_x, arc_y, arc_r, quantity, c) {
        ctxv.beginPath();
        ctxv.lineJoin = "round";
        ctxv.lineWidth = .3
        for (let i = 0; i < quantity; i++) {
            let angle = 360 / quantity * i
            let rate = ((arr[i] / 256 * 100 < .5 ? .65 : arr[i] / 256 * 100) + random(1, 10) / 100 + (arr[quantity - i] / 256 * 100 < .5 ? .65 : arr[quantity - i] / 256 * 100) + random(1, 10) / 100) / 2
            if (angle > 0 && angle < 90) {
                let v_x = arr[0] > 0 ? Math.cos(Math.PI * 2 * angle / 360) * rate : 0
                let v_y = arr[0] > 0 ? Math.sin(Math.PI * 2 * angle / 360) * rate : 0
                ctxv.lineTo(arc_x + v_x + Math.cos(Math.PI * 2 * angle / 360) * arc_r, arc_y + v_y + Math.sin(Math.PI * 2 * angle / 360) * arc_r)
            } else if (angle > 90 && angle < 180) {

                let v_x = arr[0] > 0 ? Math.sin(Math.PI * 2 * (angle - 90) / 360) * rate : 0
                let v_y = arr[0] > 0 ? Math.cos(Math.PI * 2 * (angle - 90) / 360) * rate : 0
                ctxv.lineTo(arc_x - v_x - Math.sin(Math.PI * 2 * (angle - 90) / 360) * arc_r, arc_y + v_y + Math.cos(Math.PI * 2 * (angle - 90) / 360) * arc_r)

            } else if (angle > 180 && angle < 270) {

                let v_x = arr[0] > 0 ? Math.cos(Math.PI * 2 * (angle - 180) / 360) * rate : 0
                let v_y = arr[0] > 0 ? Math.sin(Math.PI * 2 * (angle - 180) / 360) * rate : 0
                ctxv.lineTo(arc_x - v_x - Math.cos(Math.PI * 2 * (angle - 180) / 360) * arc_r, arc_y - v_y - Math.sin(Math.PI * 2 * (angle - 180) / 360) * arc_r)

            } else if (angle > 270 && angle < 360) {

                let v_x = arr[0] > 0 ? Math.sin(Math.PI * 2 * (angle - 270) / 360) * rate : 0
                let v_y = arr[0] > 0 ? Math.cos(Math.PI * 2 * (angle - 270) / 360) * rate : 0
                ctxv.lineTo(arc_x + v_x + Math.sin(Math.PI * 2 * (angle - 270) / 360) * arc_r, arc_y - v_y - Math.cos(Math.PI * 2 * (angle - 270) / 360) * arc_r)

            }
        }
        let angle = 360 / quantity * 1
        let rate = ((arr[1] / 256 * 100 < .5 ? .65 : arr[1] / 256 * 100) + random(1, 10) / 100 + (arr[quantity - 1] / 256 * 100 < .5 ? .65 : arr[quantity - 1] / 256 * 100) + random(1, 10) / 100) / 2
        let v_x = arr[0] > 0 ? Math.cos(Math.PI * 2 * angle / 360) * rate : 0
        let v_y = arr[0] > 0 ? Math.sin(Math.PI * 2 * angle / 360) * rate : 0
        ctxv.lineTo(arc_x + v_x + Math.cos(Math.PI * 2 * angle / 360) * arc_r, arc_y + v_y + Math.sin(Math.PI * 2 * angle / 360) * arc_r)
        ctxv.strokeStyle = c ? c : "#fff"
        ctxv.stroke()
        ctxv.closePath()
    }
}
//绘制移动类型单个星星的下一帧位置
MoveStar.prototype.draw = function (canvasCtx) {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
    this.alpha += parseFloat(this.cycle / 30000 * this.symbol);
    if (this.alpha > 1) {
        this.alpha = 1
        this.symbol = -1
    }
    if (this.alpha < .4) {
        this.alpha = .4;
        this.symbol = 1;
    }
    canvasCtx.globalAlpha = this.alpha;
    canvasCtx.drawImage(this.star, x - this.radius, y - this.radius / 2, this.r, this.r);
    this.timePassed -= this.speed;
}
//绘制静态星星
StaticStar.prototype.draw = function (canvasCtx, arr) {
    if (arr)
        canvasCtx.drawImage(this.star, this.x, this.y + 10 * arr[this.rd] / 256, this.r, this.r);
    else
        canvasCtx.drawImage(this.star, this.x, this.y, this.r, this.r);
}
//绘制流星下一帧
Meteor.prototype.draw = function (canvasCtx) {
    canvasCtx.globalAlpha = 1;
    canvasCtx.drawImage(this.star, this.x, this.y, this.ratio, this.ratio)
    this.x = this.x - this.ex * 5
    this.y = this.y - this.ey * 5
    this.star = createMeteor(this.angle, this.ratio)
}
// 绘制星星对象
function createStar(R) {
    let c = document.createElement("canvas");
    let ctx = c.getContext("2d")

    c.width = R * 3;
    c.height = R * 3;

    let r = R / 4
    let x = R,
        y = R;
    ctx.save();
    ctx.lineWidth = .5;
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(random(0, 360), x, y)
    for (var i = 0; i < 4; i++) {
        ctx.lineTo(Math.cos(((1 / 4 + i) * 2 * Math.PI / 4)) * R, -Math.sin(((1 / 4 + i) * 2 * Math.PI / 4)) * R);
        ctx.lineTo(Math.cos(((3 / 4 + i) * 2 * Math.PI / 4)) * r, -Math.sin(((3 / 4 + i) * 2 * Math.PI / 4)) * r);
    }
    ctx.strokeStyle = "rgba(255,255,255,.4)";
    ctx.fillStyle = "rgba(255,255,255,.4)"
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    //绘制星星主体

    var grd = ctx.createRadialGradient(R, R, 0, R, R, R);
    grd.addColorStop(0.025, '#fff');
    grd.addColorStop(0.1, '#fff');
    grd.addColorStop(0.15, 'rgba(255,255,255,.4)');
    grd.addColorStop(0.25, 'rgba(255,255,255,.3)');
    grd.addColorStop(0.4, 'rgba(255,255,255,.2)');
    grd.addColorStop(1, 'transparent');

    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.arc(R, R, R, 0, Math.PI * 2);
    ctx.fill();
    //绘制星星的光晕
    return c;
}
//绘制月亮及月亮光晕
function drawMoonShadow(options) {
    let canvas = options['canvas']
    let callback = options['callback']
    let canvasCtx = canvas.getContext("2d")

    let c = document.createElement("canvas");
    let ctx = c.getContext("2d")
    let img = new Image()
    img.src = "/images/moon.png" //getImgUrl()
    img.onload = function () {
        c.width = 400;
        c.height = 400;
        crc_x = c.width / 2
        crc_y = c.height / 2
        let R = c.height / 2

        ctx.drawImage(img, c.width / 4, c.height / 4, crc_x, crc_y);

        let grd = ctx.createRadialGradient(R, R, 0, R, R, c.width / 2);
        //月亮光晕
        grd.addColorStop(.5, 'rgba(255,239,180,.4)');
        grd.addColorStop(.6, 'rgba(255,239,180,.25)');
        grd.addColorStop(.7, 'rgba(255,239,180,.125)');
        grd.addColorStop(.8, 'rgba(255,239,180,.0625)');
        grd.addColorStop(.9, 'rgba(255,239,180,.03)');
        grd.addColorStop(1, 'transparent');

        ctx.fillStyle = grd
        ctx.beginPath();
        ctx.arc(R, R, R, 0, Math.PI * 2);
        ctx.fill();

        canvasCtx.globalCompositeOperation = 'destination-over';
        canvasCtx.globalAlpha = 1;
        canvasCtx.drawImage(c, canvas.width / 2 - c.width / 2, canvas.height - c.height * 2 / 3, c.width, c.height);
        if (typeof (callback) === 'function') {
            callback()
        }
    }
}
//绘制流星主体
function createMeteor(angle, ratio) {
    var c = document.createElement("canvas")
    var c_w, c_h;
    c_w = c_h = c.width = c.height = ratio;
    aCtr = c_w / 2
    var ctx2 = c.getContext('2d')
    var aClr = ctx2.createRadialGradient(aCtr, aCtr, 0, aCtr, aCtr, aCtr)
    aClr.addColorStop(0, "rgba(255,255,255,1)")
    aClr.addColorStop(.025, "rgba(255,255,255,1)")
    aClr.addColorStop(.2, "rgba(255,255,255,.6)")
    aClr.addColorStop(.6, "rgba(255,255,255,.4)")
    aClr.addColorStop(.8, "rgba(255,255,255,.15)")
    aClr.addColorStop(1, "transparent")
    // 绘制流星尾 
    for (let i = 0; i < random(3, 5); i++) {
        let randomV = random(.5, 1.5)
        let angleV = angle + random(-1, 1)
        let x1 = Math.cos(Math.PI * 2 * (angleV + randomV) / 360) * aCtr + c_w / 2
        let y1 = Math.sin(Math.PI * 2 * (angleV + randomV) / 360) * aCtr + c_w / 2
        let x_1 = Math.cos(Math.PI * 2 * (angleV - randomV) / 360) * aCtr + c_w / 2
        let y_1 = Math.sin(Math.PI * 2 * (angleV - randomV) / 360) * aCtr + c_w / 2
        ctx2.beginPath()
        ctx2.moveTo(aCtr, aCtr)
        ctx2.lineTo(x1, y1)
        ctx2.lineTo(x_1, y_1)
        ctx2.lineTo(aCtr, aCtr)
        ctx2.fillStyle = aClr
        ctx2.fill()
        ctx2.closePath()
    }
    return c

    // var besAng=15

    // besX1=Math.sqrt(x1*x1+y1*y1)*Math.cos(besAng)*Math.sin(90-besAng-Math.abs(angle-360))
    // besY1=Math.sqrt(x1*x1+y1*y1)*Math.cos(besAng)*Math.cos(90-besAng-Math.abs(angle-360))
    // besX2=Math.sqrt(x2*x2+y2*y2)*Math.cos(besAng)*Math.sin(90-besAng-Math.abs(angle-360))
    // besY2=Math.sqrt(x2*x2+y2*y2)*Math.cos(besAng)*Math.cos(90-besAng-Math.abs(angle-360))
    // ctx2.quadraticCurveTo(besX1,besY1,x1,y1)
    // ctx2.quadraticCurveTo(besX2,besY2,aCtr,aCtr)
}
//绘制光柱
function drawPillar() {
    var c = document.createElement("canvas")
    var c_w, c_h;
    c_w = c_h = c.width = c.height = 100;
    aCtr = c_w / 2
    var ctx = c.getContext('2d')
    var grd = ctx.createRadialGradient(aCtr, aCtr, 0, aCtr, aCtr, aCtr)
    return c
}
//接受一张图片来改变图片高度的起始的水面波动效果
var undulate = function (options, img) {
    var settings = {
        'speed': options['speed'] || 1,
        'scale': options['scale'] || 1,
        'waves': options['waves'] || 10,
        'image': options['image'] || true,
        'height': options['height'] || 1 / 2
    }

    var waves = settings['waves'];
    var speed = settings['speed'] / 4;
    var scale = settings['scale'];
    var height = settings['height'];

    var ca = document.createElement('canvas');
    var c = ca.getContext('2d');
    var img = img
    var img_loaded = false;

    img.parentNode.insertBefore(ca, img);

    var w, h, dw, dh;

    var offset = 0;
    var frame = 0;
    var max_frames = 0;
    var frames = [];

    img.onload = function () {
        c.save();

        c.canvas.width = img.width;
        c.canvas.height = img.height * 2;
        c.canvas.style.zIndex = "5"

        c.drawImage(img, 0, 0);

        c.scale(1, -1);
        c.drawImage(img, 0, -img.height * 2);

        img_loaded = true;

        c.restore();

        w = c.canvas.width;
        h = c.canvas.height;
        dw = w;
        dh = h * height;

        var id = c.getImageData(0, h * height, w, h).data;
        var end = false;
        c.save();
        while (!end) {
            var odd = c.getImageData(0, h * height, w, h);
            var od = odd.data;
            var pixel = 0;
            for (var y = 0; y < dh; y++) {
                for (var x = 0; x < dw; x++) {
                    var displacement = (scale * 10 * (Math.sin((dh / (y / waves)) + (-offset)))) | 0;
                    var j = ((displacement + y) * w + x + displacement) * 4;
                    if (j < 0) {
                        pixel += 4;
                        continue;
                    }
                    var m = j % (w * 4);
                    var n = scale * 10 * (y / waves);
                    if (m < n || m > (w * 4) - n) {
                        var sign = y < w / 2 ? 1 : -1;
                        od[pixel] = od[pixel + 4 * sign];
                        od[++pixel] = od[pixel + 4 * sign];
                        od[++pixel] = od[pixel + 4 * sign];
                        od[++pixel] = od[pixel + 4 * sign];
                        ++pixel;
                        continue;
                    }

                    if (id[j + 3] != 0) {
                        od[pixel] = id[j];
                        od[++pixel] = id[++j];
                        od[++pixel] = id[++j];
                        od[++pixel] = id[++j];
                        ++pixel;
                    } else {
                        od[pixel] = od[pixel - w * 4];
                        od[++pixel] = od[pixel - w * 4];
                        od[++pixel] = od[pixel - w * 4];
                        od[++pixel] = od[pixel - w * 4];
                        ++pixel;
                    }
                }
            }

            if (offset > speed * (6 / speed)) {
                offset = 0;
                max_frames = frame - 1;
                frame = 0;
                end = true;
            } else {
                offset += speed;
                frame++;
            }
            frames.push(odd);
        }
        c.restore();
        if (!settings.image) {
            c.height = c.height / 2;
        }
    };
    setInterval(function () {
        if (img_loaded) {
            if (!settings.image) {
                c.putImageData(frames[frame], 0, 0);
            } else {
                c.putImageData(frames[frame], 0, h * height);
            }
            if (frame < max_frames) {
                frame++;
            } else {
                frame = 0;
            }
        }
    }, 33);
    return img;
}
//获得canvas图片64位编码
function getBase64Url(cvs) {
    var imgUrl = cvs.toDataURL("image/png").replace("image/png", "image/octet-stream");
    return imgUrl
}