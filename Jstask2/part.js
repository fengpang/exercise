var x;
function get() {
	x =  document.getElementById("number").value;
	console.log(x);
	if ( 18 >= x && x >= 4) {
	allot();
	document.getElementById('killer').innerHTML=y;
	document.getElementById('people').innerHTML=z;
	shuffle();
	}
	else{
		alert("请输入正经的玩家数量");		
	}
}

/* 玩家数量<=4时，杀手数量1，<=8,>4时，2个。<=11,>8时，3个；
 >11，<=15时，4个。>15时，5个；*/
 var y;/*杀手数量*/
 var z;/*平民数量*/
 /*确定杀手平民数量*/
 function allot() {
	y = Math.floor(x/3);
	z = x - y;
	console.log(y);
	console.log(z);
}
/*随机分配身份*/
var a = [];
var b = [];
function shuffle() {
	var b = [] ;
	var a = [] ;
	for(i = 0; i < y; i++) {
		a.push ("杀手");
	}
	for(i =0; i < z; i++) {
		a.push ("平民");
	}
	while (a.length) {
		var index = ~~(Math.random()*a.length);
		b.push(a[index]);
		a.splice(index,1);
	}
	console.log(a);
	console.log(b);
	return b;
	
}
