var x;
function get() {
	x =  document.getElementById("number").value;
	console.log(x);
	allot();
	document.getElementById('killer').innerHTML=y;
	document.getElementById('people').innerHTML=z;
	shuffle();
}
function next() {
	if ( 18 >= x && x >= 4) {
    var url="ID.html";
/*    var sent = shuffle();
    window.location.assign(encodeURI(url + "?sent=" + sent));*/
    var sent = shuffle();
    window.location.href=url+"?,"+sent;
	}
	else{
		alert("请输入正经的玩家数量");
	}
}

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
		a.push ("0");
	}
	for(i =0; i < z; i++) {
		a.push ("1");
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
