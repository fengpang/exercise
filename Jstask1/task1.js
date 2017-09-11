function clear(){    
    for (var i=1 ; i<=9; i++ ) {
      document.getElementById(i).style.background = "#ff9800";
    }
  }
// 随机获取颜色
function colors(){
     var  r=Math.floor((Math.random()*256)+1);
     var  g=Math.floor((Math.random()*256)+1);
     var  b=Math.floor((Math.random()*256)+1);
      return "rgb("+r+","+g+","+b+")";
}
// 颜色位置配对
 function little() {
  clear();
      var i=0;
  for(i=0;i<1;i--){
  var    x=Math.floor((Math.random()*9)+1);
  var   y=Math.floor((Math.random()*9)+1);
  var   z=Math.floor((Math.random()*9)+1); 
  if (x != y && x != z && y != z ) {
        break;
    }
  }
  document.getElementById(x).style.background=colors();
  document.getElementById(y).style.background=colors();
  document.getElementById(z).style.background=colors();
  
}
var time;
// 开始闪函数
var flag = true ;
function myFunction() {
 if (flag) {
  little();
  flag=false;
 }
 else{
  clearInterval(time);
 }  
  time = setInterval(little,1000); 
}
// 开始
var b=1;                 //用来防止二次点击副作用
function start(){ 
  if(b==1){
    myFunction();
    b=2;
  }
 }

// 停止
function stop() {
  b=1                    //恢复b的值，解决停止后点击无反应bug
  clearInterval(time);
  clear();
}
