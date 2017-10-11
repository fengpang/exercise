/*js  实现*/
// function gets() {
// 	var name = document.getElementById("name").value;
// 	var psd = document.getElementById("psd").value;           //获取输入框值
// 	var xxx;
// 	xxx = new XMLHttpRequest();                               //声明XMLHttpRequest实例对象xxx
// 	var text = "name=" + name +"&pwd=" +psd;
// 	xxx.open("Post","/carrots-admin-ajax/a/login",true);      //生成请求
// 	xxx.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// 	xxx.send(text);                                           //发送请求以及输入的数据
// 	xxx.onreadystatechange = function(){
// 		if (xxx.readyState==4 && xxx.status == 200) {         //如果服务器响应成功就执行下面函数
// 			var texts = JSON.parse(xxx.responseText);         //根据不同的返回值显示不同的文字
// 			if (texts.message === "success") {
// 				window.location.href = "welcome.html";
// 			}
// 			else {
// 				if (texts.message === "密码错误") {
// 					document.getElementById("message").innerHTML = "密码错误";
// 				}
// 				else {
// 					document.getElementById("message").innerHTML = "账号不存在";
// 				}
// 			}
// 		}
// 	}
// }


/*jq 实现*/
// $(document).ready(function(){
// 	$("button").click(function() {
// 	var name = $("input[name='num']").val();
// 	var psd = $("input[name='pass-word']").val();
// 	console.log(name,psd);
// 	var text = "name="+name+"&pwd="+psd;
// 	console.log(text);
// 		$.ajax({
// 			type: 'POST',
// 			url: "/carrots-admin-ajax/a/login",
// 			async: "true",
// 			data: text,
// 			success: function(result){
// 				var txt = JSON.parse(result);
// 				console.log(txt);
// 				if (txt.message === "success") {
// 					window.location.href = "welcome.html";
// 				}
// 				else {
// 					$("#message").text(txt.message);
// 				}
// 			}
// 		})
// 	})
// })

// /*angular实现*/
var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope,$http){
	$scope.names = "admin";
	$scope.pwds = "123456";
	$scope.get = function(){
		$http({
			method: 'POST',
			url: '/carrots-admin-ajax/a/login',
			params: {
				"name": $scope.names,
				"pwd" : $scope.pwds
			}
		}).then(function successCallback(response){
			console.log(response);
			if (response.data.message === "success") {
 				window.location.href = "welcome.html";
			}
			else {
 					document.getElementById("message").innerHTML = response.data.message;
 			}
		},function errorCallback(response){
			alert("shibai");
		});
	}
});







































