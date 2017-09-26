$(document).ready(function() {
/*获取参数*/
var sent= window.location.search;
var arr = sent.split(",");
arr.shift();
sessionStorage.setItem('numbers',JSON.stringify(arr));/*传参到本地*/

/*把0 1 转化为杀手平民*/
for(var j=0;j<arr.length;j++){
	if(arr[j] == "1"){
		arr[j] = "平民"
	}
	else{
		arr[j] ="杀手"
	}
}



var i = 1;                               /*判断点击次数*/
/*点击函数*/
$("#look").click(function() {
	var last = (arr.length*2) - 1;       /*按钮变化的临界值*/
	var m = (arr.length)-1;              /*最后一个身份的下标*/
	var number = (Math.floor(i/2)) + 1;  /*获得身份号数*/
	var l = number + 1;                  /*得到传递给下一个号数*/

	/*最后一次查看身份*/
	if (i === last) {
		$("#kingimage").hide();
		$("#turn-box").show();
		$("#look").text("法官查看");
		$("#status").text(arr[m]);
		i++;
		return i ;
	}
	/*最后一次点击页面跳转*/
	if (i > last) {
		window.location.href="vote.html";
	}


	/*查看身份循环*/
	else {
		if( i%2 !== 0 ) {
			$("#kingimage").hide();
			$("#turn-box").show();  /*隐藏本来的图片，显示身份*/
			$("#look").text("隐藏并传递给"+ l +"号");/*修改按钮内容*/
			$("#status").text(arr[number-1]);
		}
		else {
			$("#kingimage").show();
			$("#turn-box").hide();  /*盖住身份，显示卡背*/
			$("#look").text("查看"+ number +"号身份");
		}
			$("#circle").text(number);
			i++;
			return i;
		}
});
});

