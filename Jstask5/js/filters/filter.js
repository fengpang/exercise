/*过滤器*/
routerApp.filter('type',function() {
    return function(type) {
        if(type == "0"){
            type = "首页banner";
        return type;
        }
        if(type == "1"){
            type = "找职位banner";
        return type;
        }
        if(type == "2"){
            type = "找精英banner";
        return type;
        }
        if(type == "3"){
            type = "行业大图";
        return type;
        }
    }
});
routerApp.filter('status',function() {
    return function(type) {
        if(type == "1"){
            type = "草稿";
        return type;
        }
        if(type == "2"){
            type = "上线";
        return type;
        }
    }
});
routerApp.filter('status2',function() {
    return function(type) {
        if(type == "2"){
            type = "下线";
        return type;
        }
        if(type == "1"){
            type = "上线";
        return type;
        }
    }
});