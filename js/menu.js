//当点击部门管理时，触发的事件
function deptSearch(){
	checkMenu("deptSearch");
	//让id="myFrame"的链接指向到用户列表页面
	$('#myFrame').attr('src', "dept/deptList.html");
}

//改变选中菜单样式
function checkMenu(menuA){
	//找到当前活跃的二级菜单
	var subactive = $(".sub-menu>li>a.subactive");
	//如果现在点击的菜单不是当前活跃的菜单，证明需要改变样式
	if(subactive.text()!=$("#"+menuA).text()){
		$(subactive).parent().css("background","#35404D");
		$(subactive).removeClass("subactive");
		$("#"+menuA).attr("class","subactive");
		$(menuA).parent().css("background","rgb(82 100 121)");
	}
}
//
function preMeeting(){
	checkMenu("preMeeting");
	$('#myFrame').attr('src', "preMeeting/preMeeting.html");
} 
//
function registerNew(){
	checkMenu("registerNew");
	//让id="myFrame"的链接指向到用户列表页面
	$('#myFrame').attr('src', "staff/registerNew.html");
}
//
function staffList(){
	checkMenu("staffList");
	//让id="myFrame"的链接指向到用户列表页面
	$('#myFrame').attr('src', "staff/staffList.html");
}
function approveStaff(){
	checkMenu("approveStaff");
	//让id="myFrame"的链接指向到用户列表页面
	$('#myFrame').attr('src', "staff/approveStaff.html");
}