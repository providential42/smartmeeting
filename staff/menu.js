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

//当点击个人通知时，触发的事件
function messageSearch(loginUserId){
	checkMenu("messageSearch");
	//让id="myFrame"的链接指向到用户列表页面
	// alert("log"+loginUserId)
	$('#myFrame').attr('src', "mymessage/newMessage.html?loginUserId="+loginUserId);
}

//当点击我的预定时，触发的事件
function mySearch(loginUserId){
	checkMenu("mySearch");
	//让id="myFrame"的链接指向到用户列表页面
	// alert("log"+loginUserId)
	$('#myFrame').attr('src', "mymessage/myMeetingMessage.html?loginUserId="+loginUserId);
}

//当点击我的预定时，触发的事件
function mySchedule(loginUserId){
	checkMenu("mySchedule");
	//让id="myFrame"的链接指向到用户列表页面
	// alert("log"+loginUserId)
	$('#myFrame').attr('src', "mymessage/mySchedule.html?loginUserId="+loginUserId);
}


function closewindow(){
	window.location.href = "login.html";
}


$(function () { $("[data-toggle='popover']").popover(); });

function updatePwd(){
	var oldPwd = $("#oldPwd").val();
	var newPwd = $("#newPwd").val();
	var newPwd1 = $("#newPwd1").val();
	
	if(loginUser.password == oldPwd && newPwd == newPwd1){
		employeeJsonArray[loginUser.id-1].password = newPwd1;
		alert("修改完毕！");
		window.location.href = "login.html";
	}
	else if(newPwd=="")
	{
		alert("新密码不能为空！");
	}
	else if(newPwd1=="")
	 {
		 alert("确认密码不能为空！");
	 }
	 else if(newPwd!=newPwd1)
	 {
		 alert("新密码和确认密码必须一致！");
	 }
	 else if(oldPwd!=loginUser.password)
	 {
		 alert("当前密码有误！");
	 }
}

function showUpdate(){
 $('#myModal').modal();
}