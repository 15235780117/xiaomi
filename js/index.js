let banner = document.querySelectorAll(".img_box li");
let btn = document.querySelectorAll(".btn_box li");
let datupians = document.querySelector(".datupian");
btn.forEach(function (val, index) {
    val.onclick = function () {
        for (i = 0; i < banner.length; i++) {
            btn[i].classList.remove("active");
            banner[i].classList.remove("active")
        }
        this.classList.add("active");
        banner[index].classList.add("active");
        n = index;
    };
});
let n = 0;

function bannerfen(dir = "right") {
    if (dir == "right") {
        n++;
        if (n === btn.length) {
            n = 0;
        }
    }
    if (dir == "left") {
        n--;
        if (n === -1) {
            n = btn.length - 1;
        }
    }
    for (i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
        banner[i].classList.remove("active");
    }
    btn[n].classList.add("active");
    banner[n].classList.add("active")
}

let st = setInterval(bannerfen, 2000);
datupians.onmouseover = function () {
    clearInterval(st);
};
datupians.onmouseout = function () {
    st = setInterval(bannerfen, 2000)
};


//箭头
let arrleft = document.querySelector(".bannerleft");
let arr_right = document.querySelector(".bannerright");

arrleft.onclick = function () {
    bannerfen("left")
};
arr_right.onclick = function () {
    bannerfen()
};
// 箭头结束

//明星单品
{
    let prev = document.querySelector(".fanye .zuo");
    let next = document.querySelector(".fanye .you");
    let num = document.querySelector(".tp");
    prev.onclick = function () {
        next.classList.add("hot");
        this.classList.remove("hot");
        num.style.transform = "translateX(-1240px)";
    };
    next.onclick = function () {
        prev.classList.add("hot");
        this.classList.remove("hot");
        num.style.transform = "translateX(0px)";
    };
    let f = 1;

    function dpfn() {
        f++;
        if (f % 2 === 0) {
            next.onclick();
        } else {
            prev.onclick();
        }
    }

    let minxin = document.querySelector(".mingxing")
    let t = setInterval(dpfn, 2000);
    minxin.onmouseover = function () {
        clearInterval(t);
    }
    minxin.onmouseout = function () {
        t = setInterval(dpfn, 2000);
    }
}
//明星单品结束


// var num=1;
// var num1=setInterval(function () {
//     num++;
//     console.log(num);
//     if(num===15){
//         clearInterval(num1)
//     }
// },200);


//bilibili  箭头
{
    // let nrdp = document.querySelectorAll(".nrdp");
    // nrdp.forEach(function(ele){
    //    lunboFn(ele);
    // });
    // function lunboFn(context) {
        let n = 0;
        let left = document.querySelector(".arrow");
        let right = document.querySelector(".arrow_right");
        let packs = document.querySelector(".pack");
        let spot = document.querySelectorAll(".diandian1 li");
        let max = spot.length;
        right.onclick = function () {
            n++;
            if (n >= max) {
                n = max - 1;
                return;
            }
            for (i = 0; i < spot.length; i++) {
                spot[i].classList.remove("active");
            }
            spot[n].classList.add("active");
            packs.style.marginLeft = -n * 296 + "px"
        };
        left.onclick = function () {
            n--;
            if (n < 0) {
                n = 0;
                return;
            }
            for (i = 0; i < spot.length; i++) {
                spot[i].classList.remove("active");
            }
            spot[n].classList.add("active");
            packs.style.marginLeft = -[n] * 296 + "px";
        }
        spot.forEach(function (ele, index) {
            ele.onclick = function () {
                for (i = 0; i < spot.length; i++) {
                    spot[i].classList.remove("active");
                }
                spot[index].classList.add("active");
                packs.style.marginLeft = -index * 296 + "px";
                n = index;
            }
        });
    // }
}
//bilibili  箭头

//选项卡
{

    let table = document.querySelectorAll(".youhezi");
    let btn = document.querySelectorAll(".dpbiaoqian");
    btn.forEach(function (ele, index) {
        ele.onmouseover = function () {
            for (let i = 0; i < table.length; i++) {
                btn[i].classList.remove("tab");
                table[i].classList.remove("table");
            }
            this.classList.add("tab");
            table[index].classList.add("table");
        }
    })

}
//选项卡结束













