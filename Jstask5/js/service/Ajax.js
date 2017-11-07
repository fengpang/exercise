routerApp
	.factory('ajaxAddress',function(){
		return {
			/*搜索渲染*/
			searchUrl: '/carrots-admin-ajax/a/article/search',
			/*上下架*/
			upDownUrl: '/carrots-admin-ajax/a/u/article/status',
			/*新增*/
			addUrl: '/carrots-admin-ajax/a/u/article',
			/*编辑上传*/
			editor_sendUrl: function(id){
				return '/carrots-admin-ajax/a/u/article/'+id;
			},
			/*编辑请求数据*/
			editor_getUrl: function(id){
				return '/carrots-admin-ajax/a/article/' + id;
			},
			/*删除*/
			deleteUrl: function(id){
				return '/carrots-admin-ajax/a/u/article/'+id;
			}
		}
	})

	/*各种函数*/
	.factory('datas',function($stateParams,$state){
		return {
			/*article列表数据判断*/
			params: function(vm){
				vm.imageSrc = vm.imageSrc?vm.imageSrc:"";
				vm.status = $stateParams.status?$stateParams.status:'';
				vm.type = $stateParams.type?$stateParams.type:'';
				vm.upDate = $stateParams.startAt?$stateParams.startAt:'';
				vm.endDate = $stateParams.endAt?$stateParams.endAt:'';
				vm.page = $stateParams.page?$stateParams.page:1;
				vm.startAt = transdate(vm.upDate)?transdate(vm.upDate):'';
				vm.endAt = transdate(vm.endDate)?transdate(vm.endDate):'';
				vm.array = [];
				vm.params = {
				  "startAt": vm.startAt,
				  "endAt": vm.endAt,
				  "type": vm.type,
				  "status": vm.status,
				  "page": vm.page
				}
				return vm.params;
			},
			/*编辑params*/
			editParams: function(add,x){
					add.params = {
				     "title": add.addTitle,
				     "type": add.addType,
				     "url": add.url,
				     "industry": add.addType2,
				     "status": x,
				     "img": add.imageSrc,
				     "content": add.content,
				     "createAt": add.createAt
					}
					return add.params;
			},
			/*分页渲染*/
			pages: function(vm,res){
				vm.total = res.data.data.total;
				vm.size = res.data.data.size;
				vm.pageCont = Math.ceil(vm.total/vm.size);
				vm.pageCont2 =vm.pageCont          //页数
				 for (var i = 1; i<=vm.pageCont; i++) {
                vm.array.push(i);
            	}
				return vm.array
			},
			/*分页验证*/
			isdsabled: function(vm,x){
				if (vm.page == 1) {
				  x.isDisabled1 = true;
				}
				else {
				  x.isDisabled1 = false;
				}
				x.isDisabled = true;
				if (vm.page == vm.pageCont) {
				   x.isDisabled = true;
				}
				else {
				  x.isDisabled = false;
				}
			},
			/*分页传参*/
			request: function(vm,pageNth){
		        $state.go('article',{
		            "startAt": vm.upDate,
		            "endAt": vm.endDate,
		            "type": vm.type,
		            "status": vm.status,
		            "page": pageNth
		        })
    		},
    		/*新增数据判断是否存在*/
    		addDatas: function(add,res){
    			var data = res.data.data.article;
    			add.addTitle = data.title;
    			add.addType = data.type.toString();
    			add.addType2= data.industry.toString();
    			add.url = data.url;
    			add.imageSrc = data.img;
    			add.content = data.content;
    			add.createAt = data.createAt;
    		},
    		/*清除图片*/
    		clearImg: function(add,$scope){
    			add.uploaBtn = false;
    			add.imageSrc = "";
    			var input =$('#inputfile')[0];
    			input.value = "";
    			$("#name123").text("");
    			$("#size").text("");
    			add.imageSrc = null;
    			$("#progress")[0].value=0;
    			$("#progress")[0].style="display: none;";
    			$("#my-btn-delete")[0].style="display: none;";
    			$("#my-btn-upload")[0].style="display: none;";
    		},
    		/*图片上传*/
    		upImg: function(add,zz){
    			var input =$('#inputfile')[0];
    			file = input.files[0];
    			var formdata = new FormData();
    			formdata.append("file", file);
    			add.uploaBtn = true;
    			/*ajax*/
    			var img = new XMLHttpRequest();
    			img.upload.onprogress = function(evt){
    			    if (evt.lengthComputable) {
    			        var percent = evt.loaded/evt.total;
    			        var myProgress = document.getElementById("progress")
    			        myProgress.value=100*percent;
    			    }
    			}
    			img.open("Post","/carrots-admin-ajax/a/u/img/task",true);
    			img.send(formdata);
    			img.onreadystatechange = function(){
    			    if (img.readyState==4 && img.status == 200) {
    			        alert("上传成功")
    			        add.image = false;
    			        add.texts = JSON.parse(img.responseText).data.url;
    			        add.imageSrc = add.texts;
    			        add.image = false;
    			        document.getElementById("progress").style.background = "green";
    			       zz.$apply();
    			    }
    			};
    		}
		};
	})
	.factory('articleServise', function($http,ajaxAddress,datas,$state,$stateParams){
		return {
			/*请求列表数据*/
			getList: function(vm){
				return	$http.get(ajaxAddress.searchUrl,{params: datas.params(vm)})
			},
			/*删除*/
			delete: function(id){
				return  $http.delete(ajaxAddress.deleteUrl(id))
			},
			/*编辑上传数据*/
			editor_send: function(add,x){
				return	$http({method: "PUT",url:ajaxAddress.editor_sendUrl(add.id),params:datas.editParams(add,x)})
			},
			/*新增上传数据*/
			add_send: function(add,x){
				return $http({method: 'post',url: '/carrots-admin-ajax/a/u/article',params:datas.editParams(add,x)})
			},
			/*上下线*/
			upDown: function(x,y){
				y = (y==1)?2:1;
				var params = {"id": x,"status": y}
				return $http({method: "put",url: ajaxAddress.upDownUrl,params: params})
			},
			/*编辑请求数据*/
			editor_get: function(add){

				return	$http.get(ajaxAddress.editor_getUrl(add.id))
			},
			// /*搜索state.go传参*/
			search: function(vm){
					vm.date1 = vm.upDate?vm.upDate:"";
					vm.date2 = vm.endDate?vm.endDate:"";
			return		$state.go('article',{
					    "startAt": vm.date1,
					    "endAt": vm.date2,
					    "type": vm.type,
					    "status":vm.status,
					    "page": ""
					})
			},

			/*清空*/
			clear: function(vm){
				$state.go('article',{
				    "startAt": "",
				    "endAt": "",
				    "type": "",
				    "status": "",
				    "page": ""
				})
				vm.status = "";
				vm.type = "";
				vm.upDate = "";
				vm.endDate = "";
			},
			/*跳转到编辑并且传递id*/
			edit: function(x){
				$state.go('article.adding',{
				    "ID": x,
				    "startAt": "",
				    "endAt": "",
				    "type": "",
				    "status": "",
				    "page": ""
				})
			},
			/*编辑成功之后跳转到列表页*/
			editTurn: function(){
				  $state.go('article',{
				      "startAt": "",
				      "endAt": "",
				      "type": "",
				      "status": "",
				      "page": ""
				  },{reload:true})
			}
		}
	})

	/*时间转时间戳*/
	function transdate(strtime){
	var date = new Date(strtime);
	time2 = Date.parse(date);
	return time2
	};
	/*读取文件信息*/
	function readfile(x) {
	    var file = x.files[0];
	    var size = Math.ceil(file.size/1024)+"kb";
	    var name = file.name;
	    $("#name123").text(name);
	    $("#size").text(size);
	    $("#progress")[0].style="display: inline-block;";
	    $("#my-btn-delete")[0].style="display: inline-block;";
	    $("#my-btn-upload")[0].style="display: inline-block;";
	}