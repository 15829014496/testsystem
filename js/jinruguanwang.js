window.onload = function() {
//========================游戏娱乐=====================================================
var oMsg = document.getElementById('msg'),
		oGames = document.getElementById('games');
		owanmeinav = document.getElementById('wanmei_nav');
        console.log(oMsg);
        console.log(oGames);
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
		oDiv = document.querySelector('.wanmei_ggbox_big');

		oLi.onmouseenter = function() {
			oDiv.style.display = 'block';
			oGames.style.display = 'none';
		}
		oDiv.onmouseenter = function() {
			oDiv.style.display = 'block';
			oGames.style.display = 'none';
		}
		oDiv.onmouseleave = function() {
			oDiv.style.display = 'none';
		}
		
		
		btn5.onclick = function (){
			alert('尽请期待')
		}

		

//=====================职业介绍=================================================
	let arrTi = document.querySelectorAll('.qy');
	let arrM = document.querySelectorAll('.role_cont');
	console.log(arrTi);
	console.log(arrM);
	for(let i = 0; i < arrTi.length; i++) {
		arrTi[i].onclick = function() {
			for(let j = 0; j < arrM.length; j++) {
				arrM[j].style.display = 'none';
				arrTi[j].classList.remove('on');
			}
			arrM[i].style.display = 'block';
			arrTi[i].classList.add('on');
		}
	}

	//	var oImg = document.querySelectorAll('.bd .dp li img');	
	//	var oPrev = document.querySelector('.lb1 .prev');
	//	var ONext = document.querySelector('.lb1 .next');
	//	console.log(oPrev)
	//	console.log(ONext)
	//	console.log(oImg)
	//  oPrev.onclick = function() {
	//		index--;
	//		if(index < 0) {
	//			index = oConts.length - 1;
	//		}
	//		for(var j = 0; j < oConts.length; j++) {
	//			oConts[j].classList.remove('slick-active');
	//			oDots[j].classList.remove('slick-active');
	//		}
	//		oConts[index].classList.add('slick-active');
	//		oDots[index].classList.add('slick-active');
	//	};

	//职业介绍

}