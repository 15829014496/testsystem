window.onload = function() {

var oMsg = document.getElementById('msg'),
		oGames = document.getElementById('games');
		owanmeinav = document.getElementById('wanmei_nav');
//      console.log(oMsg);
//      console.log(oGames);
		oMsg.onmouseenter = function() {
			oGames.style.display = 'block';
		}
		oGames.onmouseenter = function() {
			oGames.style.display = 'block';
		}
		owanmeinav.onmouseleave = function() {
			oGames.style.display = 'none';
		}
		
	var oLi = document.getElementById('hand'),
		oBiv = document.querySelector('.wanmei_ggbox_big');
//		console.log(oLi)
		oLi.onmouseenter = function() {
			oBiv.style.display = 'block';
			oGames.style.display = 'none';
		}
		oBiv.onmouseenter = function() {
			oBiv.style.display = 'block';
			oGames.style.display = 'none';
		}
		oBiv.onmouseleave = function() {
			oBiv.style.display = 'none';
		}


//=============================================================
var oLi = document.getElementsByClassName('ss '),
	oDiv = document.getElementsByClassName('dy');
//	oTopnav = document.getElementsByClassName('top_nav');
	console.log(oLi);
	console.log(oDiv)
//	console.log(oTopnav)
	for(var i = 0; i < oLi.length; i++) {
		oLi[i].index = i;
		oLi[i].onmouseover = function() {
			oDiv[this.index].style.display = 'block';
		}
		
		oLi[i].onmouseout = function() {
			oDiv[this.index].style.display = 'none';
		}
	}


//================进度条=================================
var oBtn = document.getElementsByClassName('bbtn');
var oRose = document.getElementsByClassName('rose');
//console.log(oBtn);
//	console.log(oRose)

for(i = 0; i < oBtn.length; i++){
	oBtn[i].index = i;
		oBtn[i].onmouseover = function() {
			oRose[this.index].style.width = '291px';
		}
		oBtn[i].onmouseout = function() {
			oRose[this.index].style.width = '0px';
		}
}



//================进度条=================================
var oBbtn = document.getElementsByClassName('btn');
var oJindu = document.getElementsByClassName('jindu');
//console.log(oBbtn);
//	console.log(oJindu)

for(i = 0; i < oBbtn.length; i++){
	oBbtn[i].index = i;
		oBbtn[i].onmouseover = function() {
			oJindu[this.index].style.width = '145px';
		}
		oBbtn[i].onmouseout = function() {
			oJindu[this.index].style.width = '0px';
		}
}



//===============最新======================================
	let arrTi = document.querySelectorAll('.qy');
	let arrM = document.querySelectorAll('.tab_cont ');

//		console.log(arrTi);
//		console.log(arrM);
	for(let i = 0; i < arrTi.length; i++) {
		arrTi[i].onmouseover = function() {
			for(let j = 0; j < arrM.length; j++) {
				arrM[j].style.display = 'none';
				arrTi[j].classList.remove('on');
			}
			arrM[i].style.display = 'block';
			arrTi[i].classList.add('on');
		}
	}

	//===========活动日历========================================
	let arrEf = document.querySelectorAll('.ef');
	let arrCont = document.querySelectorAll('.week_cont ');

	//	console.log( arrEf );
	//	console.log(arrCont);
	for(let i = 0; i < arrEf.length; i++) {
		arrEf[i].onclick = function() {
			for(let j = 0; j < arrCont.length; j++) {
				arrCont[j].style.display = 'none';
				arrEf[j].classList.remove('on');
			}
			arrCont[i].style.display = 'block';
			arrEf[i].classList.add('on');
		}
	}

	//============社区推荐======================================
	let arrDs = document.querySelectorAll('.ds');
	let arrBbs = document.querySelectorAll('.bbs_cont  ');

	//	console.log( arrDs );
	//	console.log( arrBbs);
	for(let i = 0; i < arrDs.length; i++) {
		arrDs[i].onmouseover = function() {
			for(let j = 0; j < arrBbs.length; j++) {
				arrBbs[j].style.display = 'none';
				arrDs[j].classList.remove('on');
			}
			arrBbs[i].style.display = 'block';
			arrDs[i].classList.add('on');
		}
	}

	//=============职业介绍=======================================
	let arrHh = document.querySelectorAll('.hh');
	let arrRole = document.querySelectorAll('.role_cont');

//	console.log(arrHh);
//	console.log(arrRole);
	for(let i = 0; i < arrHh.length; i++) {
		arrHh[i].onmouseover = function() {
			for(let j = 0; j < arrRole.length; j++) {
				arrRole[j].style.display = 'none';
				arrHh[j].classList.remove('on');
			}
			arrRole[i].style.display = 'block';
			arrHh[i].classList.add('on');
		}
	}

	let arrPp = document.querySelectorAll('.pp');
	let arrRen = document.querySelectorAll('.cont_ren ');

//	console.log(arrPp);
//	console.log(arrRen);
	for(let i = 0; i < arrPp.length; i++) {
		arrPp[i].onmouseover = function() {
			for(let j = 0; j < arrRen.length; j++) {
				arrRen[j].style.display = 'none';
				arrPp[j].classList.remove('on');
			}
			arrRen[i].style.display = 'block';
			arrPp[i].classList.add('on');
		}
	}



	var oBox = document.getElementsByClassName('btn')
//	console.log(oBox)
	oBox.onmouseover = function(dx) {
		if(isNaN(dx) || dx > this.length) {
			return false;
		}
		for(var i = 0, n = 0; i < this.length; i++) {
			if(this[i] != this[dx]) {
				this[n++] = this[i]
			}
		}
		this.length -= 1
	}

	oBox.onmouseout = function() {
		$(this).find('a').stop().animate({
			'opacity': 0
		}, 300);
		$(this).find('.jindu').stop().animate({
			'width': '0px'
		}, 300);
	}

	//	var goUp = document.getElementById("demo1");
	//  var goDown = document.getElementById("demo2");
	////  var pic = document.getElementById("pic");
	//  var dist = 0;
	//  var timerId = null;
	//	console.log(goUp)
	//  goUp.onmouseover = function () {
	//      clearInterval(timerId);
	//      timerId = setInterval(function () {
	//          dist--;
	//          if (dist > -1070) {
	//              demo1.style.top = dist + "px";
	//          } else {
	//              clearInterval(timerId);
	//          }
	//      }, 15);
	//  };
	//
	//  goDown.onmouseover = function () {
	//      clearInterval(timerId);
	//      timerId = setInterval(function () {
	//          dist++;
	//          if (dist <= 0) {
	//              demo1.style.top = dist + "px";
	//          } else {
	//              clearInterval(timerId);
	//          }
	//      }, 15);
	//  };
	//
	//  demo1.parentNode.onmouseout = function () {
	//      clearInterval(timerId);
	//  };



//================选项卡========================
//1、找人
			let arrA = document.getElementsByClassName('fi');
			//获取到所有的a元素
			console.log(arrA)
			let arrImg = document.querySelectorAll('.hh img');
			//获取到所哟的img
			console.log(arrImg)

			//2、绑定事件  (告诉这个人 借钱)  点击/鼠标悬停
			//    arrA[0]  第一个a      arrA[0]点击
			//    arrA[1]  2个a    重复执行 的时候 用循环    for(;;){}

			for(let i = 0; i < arrA.length; i++) {
				arrA[i].onclick = function() {
					//            3、 事件驱动  告诉这个人具体怎么操作 才能借到钱
					for(let j = 0; j < arrImg.length; j++) {
						arrImg[j].style.display = 'none';
						arrA[j].classList.remove('now');
					}
					arrImg[i].style.display = 'block';
					arrA[i].classList.add('now');
				}
			}









}