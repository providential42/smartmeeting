//初始化一系列数据
//代表当前登录的用户对象
//初始化员工列表
var loginUser

var employeeJsonArray;//员工json员工列表
//ajax 是异步请求，特点是：当将请求发送到需要读取文件时，会有一定的时间消耗
//修改：将异步请求修改为同步请求，当我们执行完之后，再进行下面的
$.ajax({
	url:"json/employees.json",
	dataType:"json",
	async:false,
	success:function(resp){
		employeeJsonArray = resp;
	}
});


//初始化部门列表
var deptJsonArray;//代表部门列表
$.ajax({
	url:"json/depts.json",
	dataType:"json",
	success:function(resp){
		deptJsonArray = resp;
 }
});

//初始化会议室列表
var meetingroomJsonArray;//代表部门列表
$.ajax({
	url:"json/meetingrooms.json",
	dataType:"json",
	success:function(resp){
		meetingroomJsonArray = resp;
 }
});
//初始化会议列表
var meetingJsonArray;
$.ajax({
	url:"json/meetings.json",
	dataType:"json",
	success:function(resp){
		meetingJsonArray = resp;
 }
});

