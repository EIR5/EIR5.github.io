var MenuData = '['+
        '{"name":"影视","img":"images/20230406_yu36rbd9a5q.png","type":"VideoNavi"},'+
        '{"name":"导航","img":"images/20230406_je2677qg5fb.png","type":"PortalNavi"},'+
        '{"name":"搜索","img":"images/20230406_nblqv4ia9z4.png","type":"SearchNavi"},'+
        '{"name":"学习","img":"images/20230406_xv4ans9q0zn.png","type":"StudyNavi"},'+
        '{"name":"工具","img":"images/20230406_ds3wkxdvuua.png","type":"ToolsNavi"}'+
        // '{"name":"图片工具","img":"images/20230406_2a8nx3hj8yp.png","type":"img"},'+
        // '{"name":"PDF转换工具","img":"images/20230406_1644201mmws.png","type":"pdf"},'+
        // '{"name":"数据换算工具","img":"images/20230406_nblqv4ia9z4.png","type":"data"},'+
        // '{"name":"生活娱乐工具","img":"images/20230406_ds3wkxdvuua.png","type":"life"},'+
        // '{"name":"教育工具","img":"images/20230406_y0lbjzlu59p.png","type":"education"},'+
        // '{"name":"文本工具","img":"images/20230406_je2677qg5fb.png","type":"text"},'+
        // '{"name":"文档转换工具","img":"images/20230406_o6yx66wdmgs.png","type":"doc"},'+
        // '{"name":"开发工具","img":"images/20230406_xv4ans9q0zn.png","type":"develop"},'+
        // '{"name":"视频工具","img":"images/20230406_yu36rbd9a5q.png","type":"video"}'+
        ']'
function initLeftNavi(){
    var mData = JSON.parse(MenuData)
    for(var v in mData){
        $(".category-container").append('<li class="category-entry-wrapper" data-actived="false" data-open="false" data-children="">'+
        '<a class="category-entry-item" href="javascript:void(0);" data-type="'+mData[v].type+'" data-log-eid="category-entry" data-open="false" data-actived="false" data-log-param="entry='+mData[v].type+'">'+
        '<img src="'+mData[v].img+'" ><span>'+mData[v].name+'</span></a></li>');
    }
}

var ListData = '[{"VideoNavi": [{"name": "Auete影视","url": "https://v.auete.com/","ico": "https://v.auete.com/favicon.ico"},'+
'{"name": "茶杯狐","url": "https://www.chabei1.com/","ico": "https://www.chabei1.com/favicon.ico"},'+
'{"name": "喵物次元","url": "https://www.mwcy.net/","ico": "https://www.mwcy.net/upload/site/20241103-1/0e9b2520a7f643e88a7f51412f6b4665.png"},'+
'{"音乐魔石": "喵物次元","url": "https://yym4.com/","ico": "https://yym4.com/favicon.ico"},'+
'{"name": "玩偶哥哥","url": "https://www.wogg.net/","ico": "https://www.wogg.net/favicon.ico"},'+
'{"name": "玩偶哥哥备用","url": "https://wogg.xxooo.cf","ico": "https://wogg.xxooo.cf/favicon.ico"},'+
'{"name": "厂长77","url": "https://www.czzy77.com/","ico": "https://www.czzy77.com/favicon.ico"},'+
'{"name": "厂长88","url": "https://www.czzy88.com/","ico": "https://www.czzy88.com//favicon.ico"},'+
'{"name": "在线之家","url": "https://www.zxzjhd.com/","ico": "https://www.zxzjhd.com/favicon.ico"},'+
'{"name": "广真多","url": "https://www.xb6v.com/","ico": "https://www.xb6v.com/favicon.ico"},'+
'{"name": "整挺好","url": "http://ztha.top/","ico": "http://ztha.top/favicon.ico"},'+
'{"name": "B站","url": "https://www.bilibili.com/blackboard/live/live-activity-player.html?cid=30902883&quality=1&frameborder=no&framespacing=1&scrolling=no&allowfullscreen=true","ico": "https://www.bilibili.com/.ico"},'+
'{"name": "整挺好","url": "http://ztha.top/","ico": "http://ztha.top/favicon.ico"}],'+
'"PortalNavi": [{"name": "TBox","url": "https://www.tboxn.com/","ico": "https://www.tboxn.com/favicon.ico"}],'+
'"SearchNavi": [{"name": "MSN","url": "https://www.msn.cn/zh-cn","ico": "https://www.msn.cn/favicon.ico"},'+
'{"name": "百度","url": "https://www.baidu.cn/","ico": "https://www.baidu.com/favicon.ico"}],'+
'"StudyNavi": [{"name": "Z-lib","url": "https://www.mwcy.net/","ico": "https://www.mwcy.net/favicon.ico"}],'+
'"ToolsNavi": [{"name": "帮小忙","url": "https://tool.browser.qq.com/","ico": "https://tool.browser.qq.com/favicon.ico"},'+
'{"name": "ICO图标","url": "https://www.ico51.cn/","ico": "https://www.ico51.cn/favicon.ico"},'+
'{"name": "QRBTF","url": "https://qrbtf.com/zh","ico": "https://qrbtf.com/favicon.ico"},'+
'{"name": "Matrix","url": "http://matrix.lamost.org/","ico": "http://matrix.lamost.org/favicon.ico"},'+
'{"name": "iconfont","url": "https://www.iconfont.cn/","ico": "https://www.iconfont.cn/favicon.ico"},'+
'{"name": "cobalt","url": "https://cobalt.tools/","ico": "https://cobalt.tools/favicon.ico"}]},'+
'{"updataTime": "2024年11月19日14:39:50","author": ""}]'
function initToolList(){
    var lData = JSON.parse(ListData)[0]
    for(var v in lData){
        for(var i in lData[v]){
            $(".toollist").append('<a class="tool-item" data-type="'+v+'" data-style="1" data-log-eid="tool-entry" data-log-param="entry='+v+'" href="'+lData[v][i].url+'" target="_blank" >'+
                    '<img class="tool-icon" src="'+lData[v][i].ico+'"  ><div class="name" data-need-charge="0">'+lData[v][i].name+'</div></a>')
        }
    }
}

$('img').on("error", function() {
    $(this).attr('src', 'images/sleepcat.gif');  // 替换为默认图片
});
window.onload = function(){
    var lData = JSON.parse(ListData)
    console.log('内容更新时间：'+lData[1]["updataTime"]);
    initLeftNavi();//加载左侧菜单
    initToolList();//加载内容列表
    var t = document.querySelector(".header .menu");
    if (t) {
        var e = document.querySelector(".left-nav");
        if (e) {
            var n = document.createElement("div");
            n.classList.add("category-mask"),
            t.addEventListener("click", (function(t) {
                e.classList.add("open"),
                document.body.style.position = "fixed",
                document.body.appendChild(n),
                t.preventDefault(),
                t.stopPropagation(),
                e.addEventListener("transitionend", (function(t) {
                    // t.target === Et && Lt("instant")
                }))
            })),
            document.body.addEventListener("click", (function(t) {
                e.classList.contains("open") && !1 === e.contains(t.target) && (e.classList.remove("open"),
                document.body.style.position = "unset",
                document.body.removeChild(n))
            }))
        }
    }



    // var yl = document.querySelectorAll('.category-container li[data-actived="true"]');
    // var ya = document.querySelectorAll('.category-container a[data-actived="true"]');
    // Et = document.querySelector(".left-nav"), 
    // xt = document.querySelector(".left-nav-inner"), 
    // _t = document.querySelectorAll('.category-entry-wrapper[data-children="true"]'),
    // var _t = document.querySelectorAll('.category-entry-wrapper[data-children="true"]')
    // ([].slice.call(_t) || []).forEach((function(t) {

    var yt = document.querySelectorAll('.category-container .category-entry-wrapper a');
    yt.forEach((function(t) {
        null == t || t.addEventListener("click", (function(t) {
            var kt = document.querySelector('.category-container a[data-actived="true"]')
            t.stopPropagation();//用于阻止事件在捕获和冒泡阶段的进一步传播。它不会阻止事件的默认行为
            var e = t.currentTarget;
            e.setAttribute("data-open", "true");
            e.setAttribute("data-actived", "true");
            kt.setAttribute("data-open", "false")
            kt.setAttribute("data-actived", "false")
            
            

            // !0 === ("true" === e.getAttribute("data-open")) ? 
            // (e.setAttribute("data-open", "false"),e.setAttribute("data-actived", "false")) :
            // (e.setAttribute("data-open", "true"),e.setAttribute("data-actived", "true"))

            

            //展示对应所选菜单内容即更改相关a标签样式为data-dp = 0显示 1隐藏 
            document.querySelector(".category-name").innerHTML=e.querySelector("span").innerHTML;
            var ta = document.querySelectorAll(".toollist a");
            var nt = 0;
            ta.forEach((function(t) {
                if(e.getAttribute("data-type")==='all'){
                    t.setAttribute("data-dp","0");
                    nt++
                }else{
                    if(e.getAttribute("data-type")===t.getAttribute("data-type")){
                        t.setAttribute("data-dp","0")
                        nt++
                    }else{
                        t.setAttribute("data-dp","1")
                    }
                } 
                   
            }))
            console.log("当前工具数量为："+nt+"个");

            //折叠左侧菜单栏
            var n = document.querySelector(".category-mask");
            document.querySelector(".left-nav").classList.contains("open") && !1 === document.querySelector(".left-nav").contains(document.querySelector(".header .menu").target) && (document.querySelector(".left-nav").classList.remove("open"),
            document.body.style.position = "unset",
            document.body.removeChild(n))

        }))
    }
    ));

    document.onkeydown = function (e) {
        if (e.keyCode == 123) {
          return false
        }
    }
    // 禁用右键菜单
    document.oncontextmenu = function () {
        return false
    }
    // addEventListener
    // 禁用右键菜单
    document.addEventListener('contextmenu',function(e){
        e.preventDefault();  // 阻止默认事件
    });
    // 禁止键盘F12键
    document.addEventListener('keydown',function(e){
        if(e.key == 'F12'){
            e.preventDefault(); // 如果按下键F12,阻止事件
        }
    });

}




try {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

    } else {
        var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.lineWidth = .3;
        ctx.strokeStyle = (new Color(150)).style;
        var mousePosition = {
            x: 30 * canvas.width / 100,
            y: 30 * canvas.height / 100
        };
        var dots = {
            nb: 250,
            distance: 100,
            d_radius: 150,
            array: []
        };
        function colorValue(min) {
            return Math.floor(Math.random() * 255 + min);
        }
        function createColorStyle(r, g, b) {
            return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
        }
        function mixComponents(comp1, weight1, comp2, weight2) {
            return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
        }
        function averageColorStyles(dot1, dot2) {
            var color1 = dot1.color,
                color2 = dot2.color;
            var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
                g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
                b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
            return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
        }
        function Color(min) {
            min = min || 0;
            this.r = colorValue(min);
            this.g = colorValue(min);
            this.b = colorValue(min);
            this.style = createColorStyle(this.r, this.g, this.b);
        }
        function Dot() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = -.5 + Math.random();
            this.vy = -.5 + Math.random();
            this.radius = Math.random() * 2;
            this.color = new Color();
        }
        Dot.prototype = {
            draw: function() {
                ctx.beginPath();
                ctx.fillStyle = this.color.style;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            }
        };
        function createDots() {
            for (i = 0; i < dots.nb; i++) {
                dots.array.push(new Dot());
            }
        }
        function moveDots() {
            for (i = 0; i < dots.nb; i++) {
                var dot = dots.array[i];
                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vx = dot.vx;
                    dot.vy = -dot.vy;
                } else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        }
        function drawDots() {
            for (i = 0; i < dots.nb; i++) {
                var dot = dots.array[i];
                dot.draw();
            }
        }
        function animateDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            moveDots();
            drawDots();

            requestAnimationFrame(animateDots);
        }
        createDots();
        requestAnimationFrame(animateDots);
    }
} catch (e) {}




