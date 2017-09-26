/*获取数组参数*/
var arr = JSON.parse(sessionStorage.getItem('numbers'));
var deadone = JSON.parse(sessionStorage.getItem('dead'));
var dead2 = JSON.parse(sessionStorage.getItem('votedead'));
var i = sessionStorage.getItem("btn");
if(i){
	$(document).ready(function(){
		$("button").text("返回");
	})
}



/*把0 1 转化为杀手平民*/
for(var j=0;j<arr.length;j++){
	if(arr[j] == "1"){
		arr[j] = "平民"
	}
	else{
		arr[j] ="杀手"
	}
}

/*显示相应的块*/
$(document).ready(function(){
   for(var i=arr.length; i>=1; i--){
 	$(".avatar-container").after('<div id="'+i+'" class="avatar">\
					<p class="id">水民</p>\
					<p class="number">1号</p>\
					<div class="icons"></div>\
				   </div>')
   }
	for (var i=1; i <= arr.length; i++) {
	// document.getElementById(i).style.display="block";
	document.getElementById(i).innerHTML="<p>" + arr[i-1] + "</p>" +"<p class =num>"+i+"号</p>";
	console.log(i);
    }
    i = 1;
    sessionStorage.setItem("btn",i);
})
/*死者变为灰色*/
var deadMan = JSON.parse(sessionStorage.getItem("deadMan"));
if (deadMan) {
	/*让死完玩家变为灰色*/
	$(document).ready(function() {
		for (var gray=0; gray<deadMan.length; gray++){
			var d = "#"+deadMan[gray].num;
				$(d).css("background","gray");
			}
	})
}
