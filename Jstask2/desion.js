/*获取数组参数*/
var ss = JSON.parse(sessionStorage.getItem('numbers'));
var stA = new Array();
stA = JSON.parse(sessionStorage.getItem("statusArr"));
/*获取死亡玩家信息*/
var deadMan = JSON.parse(sessionStorage.getItem("deadMan"));
console.log(deadMan);
/*建对象*/
function Player(num,status,alive) {
	return {
		num:num,
		status:status,
		aliive: alive
	}
}

/*给每个玩家一个1表示存活，再把死掉得改为0*/
$(document).ready(function() {
var status = [];
for (var s=0; s<ss.length; s++) {
	status.push(1);
}
for (var z=0; z<deadMan.length; z++){
	status[(deadMan[z].num)-1] = 0;
	console.log(status);
	sessionStorage.setItem("statusArr",JSON.stringify(status));
}
})


var alive = ["0","1"];                            // 死活数组，1是活，0是死
var ss2 = copyArr(ss);                            // 身份数组，判断身份
function copyArr(ss) {
	let res = [];
	for (let i = 0; i < ss.length; i++) {
		res.push(ss[i]);
	}
	return res;
}

/*把0 1 转化为杀手平民*/
for(var j=0;j<ss.length;j++){
	if(ss[j] == "1"){
		ss[j] = "平民"
	}
	else{
		ss[j] ="杀手"
	}
}

/*显示相应的块*/
   for(var i=ss.length; i>=1; i--){
 	$(".avatar-container").after('<div id="'+i+'" class="avatar">\
					<p class="id">水民</p>\
					<p class="number">1号</p>\
					<div class="icons"></div>\
				   </div>')
   }
	for (var i=1; i <= ss.length; i++) {
	// document.getElementById(i).style.display="block";
	document.getElementById(i).innerHTML="<p>" + ss[i-1] + "</p>" +"<p class =num>"+i+"号</p>";
	console.log(i);
    }

/*让死完玩家变为灰色*/
$(document).ready(function() {
	for (var gray=0; gray<deadMan.length; gray++){
		var d = "#"+deadMan[gray].num;
			$(d).css("background","gray");
		}
})

/*获取点击元素id*/
var id;
var heading = document.getElementsByClassName("avatar");
console.log(stA);
var deadGray = JSON.parse(sessionStorage.getItem("deadMan"));
for(var i = 0; i<heading.length; i++) {
	heading[i].onclick = function() {
        var stA = JSON.parse(sessionStorage.getItem("statusArr"));
     	id = this.id;
		var z = document.getElementById(id);
		if (stA[id-1] == 0) {
			alert("死了还不放过？")
		}
		else {
         /*恢复所有颜色*/
	     for(var j = 1; j<=heading.length; j++) {
	     	document.getElementById(j).style.background = "#f5c97b";
	     	document.getElementById(j).style.border = "solid 1vw #fff";
	     }
	     /*再次让死掉的变灰色*/
	     for (var j2 = 0; j2 < deadGray.length; j2++){
	     	var d = "#"+deadGray[j2].num;
	     	$(document).ready(function() {
	     		$(d).css("background","gray");
	     	})
	     }
         /*改变点击元素的属性*/
		     var p3 =  Player(id,ss2[id-1],alive[0]);
		     z.style.border = "solid 1vw #eb8d8d";
		     z.style.background = "pink";
		     sessionStorage.setItem("votedead",JSON.stringify(p3));  //储存死掉对象的信息
		     console.log(p3);
		}
    }
}

/*返回*/
$(document).ready(function(){
	$('button').click(function(){
		var h = sessionStorage.getItem("votedead");
		console.log(h);
		if (h){

			/*设置每一次投票后天数i都会加一*/
			var i = sessionStorage.getItem("i");
			console.log(i);
			i++;
			sessionStorage.setItem("i",i);

            /*每天的步骤*/
            var dayArr = JSON.parse(sessionStorage.getItem("step"));
            if (dayArr == null) {
				var dayArr = [];
				dayArr.push(1);
				sessionStorage.setItem("step",JSON.stringify(dayArr));
			}
			else {
				dayArr.push(1);
				sessionStorage.setItem("step",JSON.stringify(dayArr));
			}


 	        /*死者数组*/
	        var deadMan = JSON.parse(sessionStorage.getItem("deadMan"));
	        var p3 = JSON.parse(sessionStorage.getItem("votedead"));
	        if (deadMan == null) {
				var deadMan = [];
				deadMan.push(p3);
				sessionStorage.setItem("deadMan",JSON.stringify(deadMan));
				/*返回主页*/
				window.location.href = "firstday.html";
			}
			else {
				deadMan.push(p3);
				sessionStorage.setItem("deadMan",JSON.stringify(deadMan));
				/*把死掉的杀手和平民推到两个数组里*/
				var killist = JSON.parse(sessionStorage.getItem("deadMan"));
				var killer = new Array;
				var people = new Array;
				for (let l = 0; l<killist.length; l++){
					if (killist[l].status == 1) {
						people.push(1);
					}
					else {
						killer.push(0);
					}
				}
				var y = (Math.floor(ss.length/3))-killer.length;  //活着的杀手数量
				var z = ss.length-Math.floor(ss.length/3)-people.length;  //活着的平民数量
				if (z == 0 || y ==0) {
					window.location.href = "result.html";
					var winner = {kill: y, noemalman: z};
					sessionStorage.setItem("winner",JSON.stringify(winner));
				}
				else {
					window.location.href = "firstday.html";
				}
			}
		}
		else {
			alert("请选择票数最多的玩家")
		}
	})
})

