var AC = new window.AudioContext() || new window.webkitAudioContext() || new AudioContext();
var gainNode = AC[AC.createGain ? "createGain" : "creatGainNode"]();
gainNode.connect(AC.destination);

var source = null;
var count = 0; //播放计数
var analyser = AC.createAnalyser(); //音频
var size = 256
analyser.fftSize = size * 2;
analyser.connect(gainNode)

window.onresize = () => {
    $("#canvas-stars").width = document.body.offsetWidth
    $("#canvas-moon").width = document.body.offsetWidth
}
var cvsStars = $("#canvas-stars"),
    cvsMoon = $("#canvas-moon");

cvsStars.width = cvsMoon.width = document.body.offsetWidth;
cvsStars.height = document.body.offsetHeight;
cvsMoon.height = document.body.offsetHeight / 2;
var starsCtx = cvsStars.getContext("2d");
var moonCtx = cvsMoon.getContext("2d")
var moveStarsOptions = {
    "width": cvsStars.width,
    "height": cvsStars.height,
}
//初始化可移动的星星
var stars = []
for (var i = 0; i < 800; i++) {
    let star = new MoveStar(moveStarsOptions);
    stars.push(star);
}
//初始化静态的星星
var staticStars = []
for (var i = 0; i < 20; i++) {
    let star = new StaticStar({
        "width": cvsMoon.width,
        "height": cvsMoon.height,
    });
    staticStars.push(star);
}
//初始化流星
var meteors = []
for (var i = 0; i < 5; i++) {
    let meteor = new Meteor()
    meteors.push(meteor)
}
//页面失去焦点停止添加流星， 聚焦重新开始添加流星 防止卡顿
var isVisibilityState = true
document.addEventListener('visibilitychange', function () {
    // 页面变为不可见时触发 
    if (document.visibilityState == 'hidden') {
        isVisibilityState = false
    }
    // 页面变为可见时触发 
    if (document.visibilityState == 'visible') {
        isVisibilityState = true
        loopMeteor()
    }
});
//不定时添加  流星
function loopMeteor() {
    let t = random(100, 400)
    if (isVisibilityState) {
        setTimeout(() => {
            for (var i = 0; i < random(1, 2); i++) {
                let meteor = new Meteor()
                meteors.push(meteor)
            }
            loopMeteor()
        }, t);
    }
}
//绘制移动类型的星星 及流星
function drawMoveStars() {
    starsCtx.globalCompositeOperation = 'source-over';
    starsCtx.clearRect(0, 0, cvsStars.width, cvsStars.height);
    starsCtx.globalCompositeOperation = 'lighter';
    for (let i in stars) {
        stars[i].draw(starsCtx)
    }
    //同时绘制 流星
    for (let i in meteors) {
        if (meteors[i].x < -500 || meteors[i].y > 1500) {
            meteors.splice(i, 1)
        } else {
            meteors[i].draw(starsCtx)
        }
    }
    window.requestAnimationFrame(drawMoveStars)
}
//绘制静态的星星
function drawStaticStars() {
    moonCtx.globalCompositeOperation = 'source-over';
    moonCtx.globalCompositeOperation = 'lighter';
    for (let i in staticStars) {
        staticStars[i].draw(moonCtx)
    }
    var newImg = new Image()
    newImg.src = "/images/boat.png"
    let imgw = 952 / 10
    let imgh = 430 / 10

    
    var newImg2 = new Image()
    let pharosw = 361
    let pharosh = 382 
    newImg2.src = "/images/pharos.png"

    newImg.onload = function () {
        // moonCtx.drawImage(newImg, moonCtx.canvas.width/2  - imgw / 2, moonCtx.canvas.height - imgh + 5, imgw, imgh)
        drawMoonShadow({ //绘制月亮及倒影
            canvas: cvsMoon,
            callback: shadow
        });
    }
}
//水中月
function shadow() {
    //月亮光晕
    var aperture = moonCtx.createRadialGradient(cvsStars.width / 2, cvsStars.height / 5 * 3, 0, cvsStars
        .width / 2, cvsStars.height / 2, cvsStars.height)
    aperture.addColorStop(.0025, "#fff")
    aperture.addColorStop(.1, "rgba(255,255,255,.5)")
    aperture.addColorStop(.2, "rgba(255,255,255,.4)")
    aperture.addColorStop(.3, "rgba(255,255,255,.3)")
    aperture.addColorStop(.4, "rgba(255,255,255,.2)")
    aperture.addColorStop(.6, "rgba(255,255,255,.1)")
    aperture.addColorStop(1, 'transparent');
    moonCtx.globalAlpha = .5
    moonCtx.arc(cvsStars.width / 2, cvsStars.height / 5 * 3, cvsStars.height, 0, 2 * Math.PI);
    moonCtx.fillStyle = aperture
    moonCtx.fill()

    //将月亮及光晕
    var base64Url = getBase64Url(cvsMoon)
    var newImg = new Image()
    newImg.src = base64Url;
    newImg.style.height = cvsMoon.height;
    newImg.style.width = "100%";
    newImg.style.position = "absolute";
    newImg.style.top = cvsMoon.height / 4 * 6;
    newImg.style.background = "linear-gradient(to bottom,#080339,#050d2b,#040416)";
    newImg.id = "moon-shadow"
    document.body.appendChild(newImg)
    cvsMoon.style.top = cvsMoon.height
    //绘制水域部分

    moonCtx.clearRect(0, 0, cvsMoon.width, cvsMoon.height)
    var backgroundGradient = moonCtx.createLinearGradient(0, 0, 0, cvsMoon.height)
    backgroundGradient.addColorStop(0, "rgba(0,0,0,.4)")
    backgroundGradient.addColorStop(.2, "rgb(13,25,84)")
    backgroundGradient.addColorStop(1, "rgb(4,4,38)")
    moonCtx.fillStyle = backgroundGradient;
    moonCtx.fillRect(0, 0, cvsMoon.width, cvsMoon.height);

    // $('#moon-shadow').
    undulate({
        'speed': .8,
        'scale': 1,
        'height': 1 / 2 //从图片的哪个高度开始计算
    }, newImg);
    document.body.removeChild(newImg)
    // $('#moon-shadow').remove()
}
//播放下一首歌
function nextMusic() {
    let nextDom = $(".play").nextElementSibling ? $(".play").nextElementSibling : $(".play").parentNode.firstElementChild
    var musiclist = $("#musics li")
    for (let j in musiclist) {
        musiclist[j].className = ""
    }
    musicLoading()
    nextDom.className = "play"
    musicPlay({
        title: nextDom.title,
        type: nextDom.type
    })
}
//随机播放一首
function randomMusic() {
    let musiclist = $("#musics li")
    let rd = random(0, musiclist.length - 1)
    let playdom = musiclist[rd]
    for (let j in musiclist) {
        musiclist[j].className = ""
    }
    musicLoading()
    playdom.className = "play"
    musicPlay({
        title: playdom.title,
        type: playdom.type
    })
}
//播放上一首歌
function prevMusci() {
    let nextDom = $(".play").previousElementSibling ? $(".play").previousElementSibling : $(".play").parentNode.lastElementChild
    var musiclist = $("#musics li")
    for (let j in musiclist) {
        musiclist[j].className = ""
    }
    musicLoading()
    nextDom.className = "play"
    musicPlay({
        title: nextDom.title,
        type: nextDom.type
    })
}
//解析数据流 并播放
function getAudio(arraybuffer, n) {
    if (n != count) return;
    AC.decodeAudioData(arraybuffer, function (buffer) {
        if (n != count) return;
        gainNode.gain.value = .5
        var bufferSource = AC.createBufferSource();
        bufferSource.buffer = buffer;
        bufferSource.connect(analyser)
        // 2.bufferSource.connect(gainNode)
        // 1.bufferSource.connect(AC.destination)
        bufferSource[bufferSource.start ? "start" : "noteOn"](0)
        source = bufferSource;
        removeLoading()
        let playBtn = $("#play_pause")
        playBtn.src = "/images/pause.png"
        playBtn.setAttribute("status", 1)
        AC.resume();
    }, function (err) {
        console.log(err)
    })
}
//按钮跳动
function btnsDance(arr, dom) {
    // let rd=random(1,5)
    var options = [{
        x: 0,
        y: 0,
        height: "150%",
        width: "150%"
    }, {
        x: 0,
        y: 38.5,
        height: "100%",
        width: "150%"
    }, {
        x: 0,
        y: 0,
        height: "150%",
        width: "150%"
    }]
    if (danceKey) {
        danceKey = false //当前动画执行完成后 才能再次执行
        active(options, dom, 600, function () {
            danceKey = true
        })
    }
}
//获得音频数据
function visualizer() {
    var arr = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(arr)
    requestAnimationFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame;

    var cv = $("#canvas-view")
    cv.width = document.body.offsetWidth
    cv.height = document.body.offsetHeight
    var musicView = new MusicView(cv)

    function vn() {
        analyser.getByteFrequencyData(arr)
        //绘制实时可视化
        musicView.drawAllView(arr)
        requestAnimationFrame(vn);
        if (arr[0] == 0 && nextKey) { //自动播放下一首歌
            //执行一次
            nextKey = false
            window.setTimeout(() => {
                if (arr[0] == 0) {
                    nextMusic()
                } else {
                    nextKey = true
                }
            }, 3000)
        }
        arr[0] > 0 ? nextKey = true : nextKey = false
    }
    requestAnimationFrame(vn)
}
//音乐加载时的动画
function musicLoading() {
    var svgDom = new Image()
    svgDom.src = '/images/music.svg'
    svgDom.id = "music_loading"
    svgDom.style.zIndex = '9999'
    svgDom.style.width = 100
    svgDom.style.height = 100
    svgDom.style.position = "absolute"
    $(".musiclist").appendChild(svgDom)
    svgDom.style.top = svgDom.parentNode.offsetHeight * .6
    svgDom.style.left = svgDom.parentNode.offsetWidth / 2 - 50
}
//隐藏加载动画
function removeLoading() {
    var svgDom = $('#music_loading')
    if (svgDom.length > 1) {
        for (let i in svgDom) {
            svgDom[i].parentNode.removeChild(svgDom[i])
        }
    } else {
        svgDom.parentNode.removeChild(svgDom)
    }
}
//播放指定音乐
function musicPlay(option, fun) {
    ajaxReq("/media/" + option.title + "." + option.type, {
        method: "GET",
        type: "arraybuffer"
    }, function (arraybuffer) {
        var n = ++count;
        source && source[source.stop ? "stop" : "noteOff"]();
        getAudio(arraybuffer, n)
        if (typeof(fun) === 'function'){
            fun()
        }
    })
}

// 旋转
function rotate(d,deg){
    d.style.transform="rotate("+deg+"deg)"
}
//弹动
function springing(dom) {
    const {
        styler,
        spring,
        listen,
        pointer,
        value
    } = window.popmotion;

    const ball = dom;
    const divStyler = styler(ball);
    const ballXY = value({
        x: 0,
        y: 0
    }, divStyler.set);

    listen(ball, 'mousedown touchstart')
        .start((e) => {
            e.preventDefault();
            pointer(ballXY.get()).start(ballXY);
        });

    listen(document, 'mouseup touchend')
        .start(() => {
            spring({
                from: ballXY.get(),
                velocity: ballXY.getVelocity(),
                to: {
                    x: 0,
                    y: 0
                },
                stiffness: 200,
                // mass: 1,
                // damping: 10
            }).start(ballXY);
        });
}
//随音乐跳动的按钮
function active(o,d,t,c){
    const { easing, keyframes, styler } = window.popmotion;
    const divStyler = styler(d);
    let vl=[]
    for(let i in o){
        vl.push({ 
            x: o[i].x, 
            y:o[i].y, 
            rotateX: o[i].rx?o[i].rx:0,
            rotateY: o[i].ry?o[i].ry:0,
            height:o[i].height?o[i].height:"100%",
            width:o[i].width?o[i].width:"100%"
        })
    }
    // console.log(vl)
    keyframes({
    values:vl,
    duration: t,
    easings: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut,easing.easeInOut],
    loop: false,
    //   times: [0, .4,.8 , 1.2, 1.6,2]
    }).start(divStyler.set);
    if(typeof(c)==="function"){
        setTimeout(()=>{
            c();
        },t);
    }
}