var winner = JSON.parse(sessionStorage.getItem("winner"));
var killist = JSON.parse(sessionStorage.getItem("deadMan"));
console.log(winner);
console.log(killist);

/*结果文字*/
$(document).ready(function(){
	$(".winner").after('<p class="lastman">剩余玩家</p><p class="killer">杀手'+winner.kill+'人</p><p class="people">平民'+winner.noemalman+'人</p>')
})

/*游戏过程文字*/
$(document).ready(function(){
	var num,status,id,id2,id3;
	if (killist.length%2 == 0) {
		for(var i=Math.ceil(killist.length/2); i>0; i--){
			if (killist[((2*i)-2)].status == 1){
				id = "平民";
			}
			if (killist[((2*i)-2)].status == 0){
				id = "杀手";
			}
			if (killist[((2*i)-1)].status == 1){
				id2 = "平民";
			}
			if (killist[((2*i)-1)].status == 0){
				id2 = "杀手";
			}
			$(".main-top").after('<div class="row"><p class="first-day">第'+i+'天</p>\
				<p class="night">晚上：'+killist[((2*i)-2)].num+'号被杀手杀死，他\
				是'+id+'</p><p class="day">白天：'+killist[((2*i)-1)].num+'号被全民投\
				票投死，他是'+id2+'</p></div>')
		}
	}
	else{
		for(var i=Math.ceil((killist.length/2)-1); i>0; i--){
			if (killist[((2*i)-2)].status == 1){
				id = "平民";
			}
			if (killist[((2*i)-2)].status == 0){
				id = "杀手";
			}
			if (killist[((2*i)-1)].status == 1){
				id2 = "平民";
			}
			if (killist[((2*i)-1)].status == 0){
				id2 = "杀手";
			}
			$(".main-top").after('<div class="row" id="row'+i+'"><p class="first-day">第'+i+'天</p>\
				<p class="night">晚上：'+killist[((2*i)-2)].num+'号被杀手杀死，他\
				是'+id+'</p><p class="day">白天：'+killist[((2*i)-1)].num+'号被全民投\
				票投死，他是'+id2+'</p></div>')
		}
		var r = "#row"+ Math.floor(killist.length/2);
			if (killist[killist.length-1].num == 0) {
				id3 = "杀手";
			}
			else {
				id3 = "平民";
			}
			$(r).after('<div class="row" id="row'+i+'"><p class="first-day">第'+(Math.floor(killist.length/2)+1)+'天</p>\
				<p class="night">晚上：'+killist[killist.length-1].num+'号被杀手杀死，他\
				是'+id3+'</p><p class="day">')

	}
})
/*再来一局*/
$(document).ready(function(){
	$(".again").click(function(){
		window.location.href = "headpage.html";
		sessionStorage.clear();
	})
});