/*获取当前步数步骤*/
var pan = JSON.parse(sessionStorage.getItem("step"));
if (pan == null) {
	var dayArr = [1];
	sessionStorage.setItem("step",JSON.stringify(dayArr));
}
else {
	var dayArr = JSON.parse(sessionStorage.getItem("step"));
}

/*原型对象*/
var status,num;
function Player(num,status,alive) {
	return {
		num:num,
		status:status,
		aliive: alive
	}
}


/*规定天数i*/
var i = sessionStorage.getItem("i");
if (i == null) {
var i = 1;
}
sessionStorage.setItem("i",i);
console.log(i);

/*步骤到最后一步生成第二天，以及遍历之前的函数*/
var m = JSON.parse(sessionStorage.getItem("step"))[i-1];
var c = JSON.parse(sessionStorage.getItem("step"))[i-2];
if (c>= 6) {
	$(document).ready(function(){
		for (var j=1; j<i; j++) {

            var day = "#day" + j;
			var s = j+1;
			$(day).after(
			'<div id="day'+s+'"><p id="title'+s+'" class="days">第'+s+'天</p><div id="games'+s+'" class="games"><p id="kill'+s+'" class="kill" id="kill">杀手杀人</p><p class="last-word" id="last-word'+s+'">亡灵发表遗言</p><p class="speaking" id="speaking'+s+'">玩家依次发言</p><p id="vote'+s+'" class="vote">全民投票</p></div></div>');
			if (i>1) {
			}
		}

		/*遍历之前的天数，变成灰色，不让点，以及隐藏*/
		for(var j=1; j<i; j++){
			var k ="#kill"+j;
			var l ="#last-word"+j;
			var s ="#speaking"+j;
			var v ="#vote"+j;
			var g ="#games"+j;
			$(k).css("background","gray");
			$(l).css("background","gray");
			$(s).css("background","gray");
			$(v).css("background","gray");
			$(k).click(function(){
				alert("请进行下一步")
			})
			$(l).click(function(){
				alert("请进行下一步")
			})
			$(s).click(function(){
				alert("请进行下一步")
			})
			$(v).click(function(){
				alert("请进行下一步")
			})
			$(g).hide();
		}
	})
}

/*把当前天数变为灰色*/
if (m>=2) {
	$(document).ready(function(){
		$(kill).css("background","gray");
	})
}
if (m>=3) {
	$(document).ready(function(){
		$(last).css("background","gray");
	})
}
if (m>=4) {
	$(document).ready(function(){
		$(speak).css("background","gray");
	})
}
if (m>=5) {
	$(document).ready(function(){
		$(vote).css("background","gray");
	})
}

/*游戏顺序*/
var games = "#games" + i;
var kill = "#kill" + i;
var last = "#last-word" + i;
var speak = "#speaking" + i;
var vote = "#vote" + i;
$(document).ready(function(){
	 /*杀手杀人*/
	$(kill).click(function(){
		var s = JSON.parse(sessionStorage.getItem("step"))[i-1];
		console.log(s);
		if (s == 1) {
		 dayArr[i-1] = 2;
		 $(kill).css("background","gray");
		sessionStorage.setItem("step",JSON.stringify(dayArr));
		window.location.href="killing.html";
		}
		if (s > 1) {
			alert("请进行下一项");
		}
	})

	/*死人发言*/
	$(last).click(function(){
	 	var s = JSON.parse(sessionStorage.getItem("step"))[i-1];
	 	if (s == 2) {
	 		var z = confirm("请死亡玩家表明身份，并发表遗言？")
	 		if (z == true) {
			 	dayArr[i-1] = 3;
			 	$(last).css("background","gray");
				sessionStorage.setItem("step",JSON.stringify(dayArr));
			}
	 		}
	  	if (s > 2) {
	 		alert("请进行下一项")
	 	}
	  	if (s < 2) {
	  		alert("请按照顺序进行游戏")
	  	}
	})

	/*依次发言*/
	$(speak).click(function(){
	 	var s = JSON.parse(sessionStorage.getItem("step"))[i-1];
		console.log(s);
	 	if (s == 3) {
 			var z = confirm("请玩家依次发言？")
	 		if (z == true) {
				dayArr[i-1] = 4;
				$(speak).css("background","gray");
				sessionStorage.setItem("step",JSON.stringify(dayArr));
			}
		}
	 	if (s > 3) {
			alert("请进行下一项")
		}
		if (s < 3) {
			alert("请按照顺序进行游戏")
		}
	})

	/*投票*/
	$(vote).click(function(){
	 	var s = JSON.parse(sessionStorage.getItem("step"))[i-1];
		if (s == 4) {
			dayArr[i-1] = 6;
			$(vote).css("background","gray");
			sessionStorage.setItem("step",JSON.stringify(dayArr));
			window.location.href="desion.html";
		}
		if (s < 4) {
			alert("请按照顺序进行游戏")
		}
		if (s > 4) {
			alert("请进行下一项")
		}
	})
})

/*淡入淡出*/
$(document).ready(function(){
	var heading = $(".days");
	for(var z = 0; z < heading.length; z++) {
		heading[z].onclick = function() {
	     	var id =this.id;
	     	var n =id.replace(/[^0-9]/ig,"");
	     	id2 = "#games"+n;
	     	miss(id2);
		}
	}
})
function miss(id){
	$(id).slideToggle();
}

/*结束游戏*/
$(document).ready(function(){
	$("#again").click(function(){
		var z = confirm("是否结束游戏？")
		if (z == true) {
		window.location.href = "headpage.html";
		sessionStorage.clear();
			}
	})

/*法官日志*/
$("#share").click(function(){
	window.location.href = "vote.html";
})
})


/*获取死亡数组*/
var deadMan = JSON.parse(sessionStorage.getItem("deadMan"));
if (deadMan) {
	console.log(deadMan);
	$(document).ready(function(){
		for (var a=0,b=Math.floor(deadMan.length/2); a<b; a++){
			let dID = "#kill" + (a+1);
			$(dID).after('<p id ="death">'+deadMan[2*a].num+'号玩家被杀死，他的真实身份是平民</p>');
		}
	})
	$(document).ready(function(){
		for (var a=0,b=Math.floor(deadMan.length/2); a<b; a++){
			let vID = "#vote" + (a+1);
			if (deadMan[(2*a)+1].status == 1) {
				inform = "平民";
			}
			else {
				inform = "杀手";
			}
			$(vID).after('<p id="death">'+ deadMan[(2*a)+1].num + '号玩家被投死,他的真实身份是'+inform+ '</P>');
		}
	})
}
/*当天死亡玩家*/
var gg = JSON.parse(sessionStorage.getItem("dead"));
var vv = JSON.parse(sessionStorage.getItem("votedead"));
if (gg) {
	var gMan = "#kill"+i;
	var vMan = "#vote"+i;
	$(document).ready(function(){
		$(gMan).after('<p id ="death">'+gg.num+'号玩家被杀死，他的真实身份是平民</p>');
		window.sessionStorage.removeItem('dead');
	})
}
if (vv) {
	let v;
	if (vv.status == 1) {
	 	 v = "平民"
	}
	else {
		 v = "杀手"
	}
	$(document).ready(function(){
		$(vMan).after('<p id ="death">'+vv.num+'号玩家被杀死，他的真实身份是'+v+'</p>');
		window.sessionStorage.removeItem('votedead');
	})
}
