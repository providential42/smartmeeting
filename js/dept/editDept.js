//接受地址栏传递的参数。
//从部门信息列表中查询指定部门编号的部门信息
var did = getParam("did");
//将编号与depts.json进行匹配。
//本页面是 login.html的子页面
var deptJsonArray = window.parent.deptJsonArray;
//当页面加载完成时才进行for循环
$(function(){
	for(var i=0;i<deptJsonArray.length;i++){
		var dept=deptJsonArray[i];
		if(dept.did == did){
			$("#name").val(dept.dname);
			$("#remark").val(dept.desc);
			break;
		}
	}
});

function updateDept(){
	//得到用户输入的修改后的部门信息
	var dname = $("#name").val();
	var desc =$("#remark").val();
	for(var i=0;i<deptJsonArray.length;i++){
		var dept=deptJsonArray[i];
		if(dept.did == did){
			dept.dname=dname;
			dept.desc=desc;
			alert("修改成功");
			window.location.href="deptList.html";
		}
	}
	
}