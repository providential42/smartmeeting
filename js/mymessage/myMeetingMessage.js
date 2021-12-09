var meetingJsonArray = window.parent.meetingJsonArray;

$(function(){
	// for(var i=0; i<deptJsonArray.length;i++){
	// 	var dept = deptJsonArray[i];
		
	// 	var trStr = "<tr>"+
	// 		"<td><input type='checkbox' /></td>"+
	// 		"<td>"+dept.dname+"</td>"+
	// 		"<td>"+dept.desc+"</td>"+
	// 		"<td><img src='../img/update.gif' /></td>"+
	// 		"</tr>";
	// 	$("#deptList").append(trStr);
	// }
	showSearchList();
});

function showSearchList(){
	$("#newMessage").html("");
	
	$(".pagination-container").html("");
	
	var name = $("#name").val();
	// alert(time)
	for(var i=0;i<meetingJsonArray.length;i++){
		var meeting = meetingJsonArray[i];
		if(meeting != undefined){
			var inShow = false;
				if(name!=""){
					// alert(time)
					if(meeting.title.indexOf(name)!=-1&&meeting.participants.indexOf(loginUserId)!=-1){
						if(compareDate(meeting.endtime,time)){
							inShow=true;
						}
					}
				}else{
					if(meeting.title.indexOf(name)!=-1&&meeting.participants.indexOf(loginUserId)!=-1){
						if(compareDate(meeting.endtime,time)){
							inShow=true;
						}
					}
				}
				
				if(inShow){
					// 生成部门信息tr
					var trStr = "<tr>"+
						"<td><input type='checkbox' name='id' value='"+meeting.id+"'/></td>"+
						"<td>"+meeting.title+"</td>"+
						"<td>"+meeting.mid+"</td>"+
						"<td>"+meeting.starttime+"</td>"+
						"<td>"+meeting.endtime+"</td>"+
						// "+dept.did+"符号拼接
						"<td><img onclick='showMeetingDetail("+meeting.id+")' src='../img/修改信息.png' /></td>"+ 
						"</tr>";
					$("#newMessage").append(trStr);
				}
			}
			
		}
		setPage();

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

//使用分页插件，进行分页展现
function setPage(){
	$('.table tbody').paginathing({
		perPage: 3,//每页展现条数
		insertAfter: '.table',
		pageNumbers: true
	});
}

function showAddDept(){
	window.location.href = "addDept.html";
}
//无论是什么数据类型，都用var声明。而在括号的形参，则不需写var
function showEditDept(did){
	//跳转到修改部门页面时，想要传递一个标识，能够区分想要修改的指定部门
	//传入指定要修改的部门的部门编号
	//传递部门编号
	window.location.href = "editDept.html?did="+did;
}

//全选操作
function checkAll(){
	//得到选中状态
	var isChecked = $("#checkAll").prop("checked"); 
	//得到所有选择,使用的是属性选择器，选中所有input的对象且name属性值为id的input对象
	var checkboxes = $("input[name='id']");
	for(var i=0;i<checkboxes.length;i++){
		var idCheckbox = checkboxes[i];
		//
		if($(idCheckbox).parent().parent("tr").css("display")=="table-row"){
			$(idCheckbox).prop("checked",isChecked);
		}
	}
}


//删除选中
function delChecked(){
	//得到所有name=id的标签且复选框被选中
	var checkeds = $("input[name='id']:checked");
	if(checkeds.length>0){
		//确认框
		var flag = window.confirm("确定要删除吗？");
		if(flag){
			// alert("用户点击了确定删除");
			//用户点击了确定删除，从deptJsonArray删除
			for(var i=0;i<checkeds.length;i++){
				var thisChecked = checkeds[i];
				var delDid = $(thisChecked).val();  //得到当前复选框的值
				delJson(delDid);
				alert("删除成功");
			}
			//删除成功，展示部门信息
			showSearchList();
		}
	}else{
		alert("请选择要删除的数据");
	}
	
}
//从Json数组中删除制定编号的部门信息
function delJson(delDid){
	for(var i=0;i<deptJsonArray.length;i++){
		var dept = deptJsonArray[i];
		if(dept.did==delDid){
			delete deptJsonArray[i];
			return;
		}
	}
}

//无论是什么数据类型，都用var声明。而在括号的形参，则不需写var
function showMeetingDetail(id){
	//跳转到修改部门页面时，想要传递一个标识，能够区分想要修改的指定部门
	//传入指定要修改的部门的部门编号
	//传递部门编号
	window.location.href = "showMeetingDetail.html?id="+id;
}