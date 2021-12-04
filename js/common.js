//获取请求地址的参数
function getParam(name) {
  　　  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
   　　 var r = window.location.search.substr(1).match(reg);
   　　 if(r != null) return decodeURIComponent(r[2]);
    　　return null;
}


//获取得到系统日期
function getDate(){
	var myDate = new Date();//获取系统当前时间
	var month = myDate.getMonth()+1;
	if(month<10){
		month =  "0"+month
	}
	var day = myDate.getDate();
	if(day<10){
		day =  "0"+day
	}
	return myDate.getFullYear()+"-"+month+"-"+day;
}

//获取得到系统时间(精确到秒)
function getTime(){
    //获取年月日
    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var day=time.getDate();
                
    //获取时分秒
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
                
    //检查是否小于10
    h=check(h);
    m=check(m);
    s=check(s);
    
    //星期
    var weekIndex = time.getDay();
    var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = weeks[weekIndex];
    return year+"年"+month+"月"+day+"日    "+h+":"+m+":"+s+"  "+week;
}

//时间数字小于10，则在之前加个“0”补位。
function check(i){
		if(i<10){
       i="0"+i;
    }
    return i;
}


//获取得到系统时间
function getTime2(){
    //获取年月日
    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var day=time.getDate();
                
    //获取时分秒
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
                
    //检查是否小于10
    h=check(h);
    m=check(m);
    s=check(s);
    
    //星期
    var weekIndex = time.getDay();
    var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = weeks[weekIndex];
    return year+"-"+month+"-"+day+" "+h+":"+m;
}

//比较指定的两个日期的大小
function compareDate(date1,date2){
    var start_time = new Date(date1.replaceAll("-", "/"));
		var end_time = new Date(date2.replaceAll("-", "/"));
		if(start_time >= end_time) {
        return false;
    }
		return true;
}





