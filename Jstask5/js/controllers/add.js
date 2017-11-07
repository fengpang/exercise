routerApp.controller('addCtrl', function($scope,$http,$state,$stateParams,articleServise,datas){
	var add = this;
	/*王富文本编辑器*/
	var E = window.wangEditor;
	var editor = new E("#editor");
	editor.create();
	add.id = $stateParams.ID?$stateParams.ID:"";
	/*判断如果为编辑，则请求单个article数据，并赋值*/
	if (add.id) {
		articleServise.editor_get(add).then(function(res){
	    	datas.addDatas(add,res);
	    	editor.txt.html(add.content);
	    	add.isImage();
		})
	}
	/*清除图片*/
	$scope.demo2 = function(){
	    datas.clearImg(add);
	}
	/*新增按钮*/
	$scope.saveON = function(x){
	    add.addType2 = add.addType2?add.addType2:"";
	    add.content = editor.txt.text();
	    /*判断是编辑还是新增*/
	    if (add.id) {
	    	add.content = add.content?add.content:"";
	    	articleServise.editor_send(add,x).then(function(res){
	    	    alert("编辑成功");
	    	 	articleServise.editTurn();
	    	 })
	    }
	    else {
		    articleServise.add_send(add,x).then(function(res){
		        alert("新增成功");
		       	articleServise.editTurn();
		    })
		}
	}
	/*图片验证*/
	add.isImage = function(){
		if (add.imageSrc) {
		    add.image = false;
		}
		else{
		    add.image = true;
		}
	};
	add.isImage();
	/*图片上传*/
	$scope.demo = function(){
	        datas.upImg(add,$scope);
	}
})