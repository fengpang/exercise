
/*控制器*/
routerApp.controller('articleCtrl', function($rootScope,$scope,$http,$state,$stateParams,articleServise,datas){
    var vm = this;
    /*第一次请求*/
    $scope.list = function(){
        /*请求数据渲染*/
        articleServise.getList(vm).then(function successCallback(res){
            $scope.dataset = res.data.data.articleList;      //渲染数据赋值
            vm.array = datas.pages(vm,res)                   //渲染分页
            datas.isdsabled(vm,$scope);
            },
            function  errorCallback(res){
                alert("请求失败");
            })
    };
    $scope.list();
    /*搜索传参*/
    $scope.search2 = function(){
        articleServise.search(vm);
    };
    /*分页跳转*/
    $scope.pages = function(x) {
        $scope.pageNth = x;
        datas.request(vm,$scope.pageNth);
    }
    /*上一页*/
    $scope.nextPage = function() {
        if (vm.page == vm.pageCont) {

        }
        else{
            vm.page = $stateParams.page?$stateParams.page:1;
            $scope.pageNth = parseFloat(vm.page)+1;
            datas.request(vm,$scope.pageNth);
        }
    }
    /*下一页*/
    $scope.lastPage = function() {
        if (vm.page == 1) {

        }
        else{
        vm.page = $stateParams.page?$stateParams.page:1;
        $scope.pageNth = vm.page-1;
        datas.request(vm,$scope.pageNth);
        }
    }
    /*清空*/
    $scope.reloadRoute = function () {
        articleServise.clear(vm);
    };

    /*article列表删除按钮*/
    $scope.delete = function(x) {
        articleServise.delete(x).then(function(res){
            if (res.data.message === "success") {
                alert("删除成功")
                $scope.list();
            }
        })
    }

    /*article列表上下线按钮*/
    $scope.upDown = function(x,y,z) {
        articleServise.upDown(x,y).then(function(res){
            var status123 = res.config.params.status;
                z.X.status = status123;
            alert("修改成功");
        })
    }

    /*article列表编辑按钮*/
    $scope.edit = function(x){
        articleServise.edit(x);
    }

    /*新增清除数据*/
    $scope.clearadd = function(){
        articleServise.clear(vm);
    }
});






