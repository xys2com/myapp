
var canvas = document.getElementById("cvs");
var cvsarea=$("#cvsarea")
canvas.width = cvsarea.clientWidth;
canvas.height = cvsarea.clientHeight;
var ctx = canvas.getContext("2d");
//创建小球的构造函数
function Ball(x, y) {
    this.x = x || random(3, canvas.width - 3);
    this.y = y || random(3, canvas.height - 3);
    this.r = random(400,800);
    this.ball = randomBall();
    this.speedX = random(-3, 3) * 0.2;
    this.speedY = random(-3, 3) * 0.2;
    this.alpha = parseFloat(random(2, 10) / 10);
    this.symbol = -1;
    this.nextR=this.r
}
Ball.prototype = {
    //绘制小球
    draw: function (i) {
        //柔和版
        // this.alpha += parseFloat(.01 * this.symbol);
        // if (this.alpha > 1) {
        //     this.alpha = 1
        //     this.symbol = -1
        // }
        // if (this.alpha < .2) {
        //     this.alpha = .2
        //     this.symbol = 1
        // }
        ctx.globalAlpha =1// this.alpha;
        ctx.drawImage(this.ball, this.x - this.nextR / 2, this.y - this.nextR / 2, this.nextR, this.nextR);
        let nowR=parseFloat((window.arr[i*4]?window.arr[i*4]:window.arr[0])/256)*this.r
        this.nextR=nowR<100?100:nowR
        this.ball=randomBall(this.ball.hue)
    },
    //小球移动
    move: function () {
        this.x += this.speedX;
        this.y += this.speedY;
        //为了合理性,设置极限值
        if (this.x <= 3 || this.x > canvas.width - 3) {
            this.speedX *= -1;
        }
        if (this.y <= 3 || this.y >= canvas.height - 3) {
            this.speedY *= -1;
        }
    }
}
//存储所有的小球
var balls = [];
//创建200个小球
for (var i = 0; i < size/4; i++) {
    var ball = new Ball();
    balls.push(ball);
}

function main(arr) {
    window.arr=arr
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    //鼠标移动绘制线				
    mouseLine();
    //小球与小球之间自动画线
    drawLine();
    //使用关键帧动画，不断的绘制和清除
}

var mouseX;
var mouseY;

canvas.onmousemove = function (e) {
    var ev = event || e;
    mouseX = ev.offsetX;
    mouseY = ev.offsetY;
}

canvas.onclick = function () {
    var ball = new Ball(mouseX, mouseY);
    balls.push(ball);
}

function drawLine() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].draw(i);
        balls[i].move();
        for (var j = 0; j < balls.length; j++) {
            if (i != j) {
                if (Math.sqrt(Math.pow((balls[i].x - balls[j].x), 2) + Math.pow((balls[i].y - balls[j].y), 2)) <
                    140) {
                    ctx.beginPath();
                    ctx.moveTo(balls[i].x, balls[i].y);
                    ctx.lineTo(balls[j].x, balls[j].y);
                    var grd = ctx.createLinearGradient(balls[i].x, balls[i].y, balls[j].x, balls[j].y);
                    var clr = 'hsl(' + balls[i].ball.hue + ', 61%, 33%)'
                    var clr2 = 'hsl(' + balls[i].ball.hue + ', 64%, 33%)'
                    var clr3 = 'hsl(' + balls[j].ball.hue + ', 64%, 33%)'
                    var clr4 = 'hsl(' + balls[j].ball.hue + ', 61%, 33%)'
                    grd.addColorStop(0, clr);
                    grd.addColorStop(.25, clr2);
                    grd.addColorStop(.75, clr3);
                    grd.addColorStop(1, clr4);
                    ctx.strokeStyle = grd;
                    ctx.globalAlpha = 0.2;
                    ctx.stroke();
                }
            }
        }
    }
}
//使用鼠标移动划线
var a = true;

function mouseLine() {
    for (var i = 0; i < balls.length; i++) {
        if (Math.sqrt(Math.pow((balls[i].x - mouseX), 2) + Math.pow((balls[i].y - mouseY), 2)) < 100) {
            ctx.beginPath();
            ctx.moveTo(balls[i].x, balls[i].y);
            ctx.lineTo(mouseX, mouseY);
            var grd = ctx.createLinearGradient(balls[i].x, balls[i].y, mouseX, mouseY);
            var clr = 'hsl(' + balls[i].ball.hue + ', 61%, 33%)'
            var clr2 = 'hsl(' + balls[i].ball.hue + ', 64%, 33%)'
            grd.addColorStop(0, clr);
            grd.addColorStop(.6, clr2);
            grd.addColorStop(1, "white");
            ctx.strokeStyle = grd;
            ctx.globalAlpha = 0.8;
            ctx.stroke();
        }
    }
}
//随机函数

function randomNum(m, n) {
    return Math.floor(Math.random() * (n - m + 1) + m);
}
//随机颜色

function randomBall(h) {

    hue=arguments.length>0?h:random(360)

    //缓存成一个星尘对象 canvas2
    var canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;

    var half = canvas2.width / 2;
    //设定单个星尘的渐变规格 gradient2

    //createRadialGradient(x0,y0,r0,x1,y1,r1);
    //两个圆 x0,y0,r0 ；x1,y1,r1 渐变开始及结束

    var gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);

    if(arguments.length>0){
        hue--
        if(hue<=0){
            hue=360
        }
    }
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');//transparent

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    //arc(x,y,r,sAngle,eAngle,counterclockwise)
    //sAngle eAngle 起始弧度，counterclockwise 是否逆时针
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();
    canvas2.hue = hue;
    return canvas2;
}

function random(min, max) {
    //arguments用来判断方法传入的个数
    //此处是如果传入一个参数 自动就是最大值最小值默认为0
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }

    if (min > max) {
        var hold = max;
        max = min;
        min = hold;
    }
    //floor 向下取整
    return Math.floor(Math.random() * (max - min + 1)) + min;
}