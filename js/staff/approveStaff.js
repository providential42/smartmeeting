var employeeJsonArray = window.parent.employeeJsonArray;
var deptJsonArray = window.parent.deptJsonArray;
$(function(){
	showSearchList();
});

function showSearchList(){
	$("#staffList").html("");
	$(".pagination-container").html("");
	
	var sname = $("#searchname").val();
	
	for(var i=0;i<employeeJsonArray.length;i++){
		var staff = employeeJsonArray[i];
		if(staff != undefined){
			var inShow = false;
			if(sname!=""){
				if(staff.name == sname){
					inShow=true;
				}
			}else{
				if(staff.status == "0"){
					inShow=true;
				}
			}
			
			if(inShow){
				var trStr = "<tr>"+
					"<td><input type='checkbox' name='id' value='"+staff.id+"'  /></td>"+
					"<td>"+staff.id+"</td>"+
					"<td>"+staff.name+"</td>"+
					"<td>"+staff.sex+"</td>"+
					"<td>"+staff.party+"</td>"+
					"<td>"+staff.phone+"</td>"+
					"<td>"+staff.address+"</td>"+
					"<td>"+staff.depid+"</td>"+
					"<td>"+staff.salary+"</td>"+
					"<td><img onclick='approve("+staff.id+")' src='../img/通过.png' /><img onclick='nonapprove("+staff.id+")' src='../img/不通过.png' /></td>"+
					"</tr>";
				$("#staffList").append(trStr);
			}
		}
	}
	setPage();
}

function showSearchList1(){
	$("#staffList").html("");
	$(".pagination-container").html("");
	
	var depid = $("#searchdepid").val();
	
	for(var i=0;i<employeeJsonArray.length;i++){
		var staff = employeeJsonArray[i];
		if(staff != undefined){
			var inShow = false;
			if(staff.status == "1" && staff.depid == depid){
					inShow=true;
			}
			
			if(inShow){
				var trStr = "<tr>"+
					"<td><input type='checkbox' name='id' value='"+staff.id+"'  /></td>"+
					"<td>"+staff.id+"</td>"+
					"<td>"+staff.name+"</td>"+
					"<td>"+staff.sex+"</td>"+
					"<td>"+staff.party+"</td>"+
					"<td>"+staff.phone+"</td>"+
					"<td>"+staff.address+"</td>"+
					"<td>"+staff.depid+"</td>"+
					"<td>"+staff.salary+"</td>"+
					"<td><img onclick='approve("+staff.id+")' src='../img/通过.png' /> <img onclick='nonapprove("+staff.id+")' src='../img/不通过.png' /></td>"+
					"</tr>";
				$("#staffList").append(trStr);
			}
		}
	}
	setPage();
}

//使用分页插件，进行分页展现
function setPage(){
 $('.table tbody').paginathing({
   perPage: 10,//每页展现条数
   insertAfter: '.table',
   pageNumbers: true
 });
}

function checkAll(){
	var isChecked = $("#checkAll").prop("checked");
	var checkboxes = $("input[name='id']");
	for(var i=0;i<checkboxes.length;i++){
		var idCheckbox = checkboxes[i];
		if($(idCheckbox).parent().parent("tr").css("display")=="table-row"){
			$(idCheckbox).prop("checked",isChecked);
		}
	}
}

function showEditstaff(id){
		window.location.href = "editStaff.html?id="+id;
}

function body_load(){//当页面加载时触发执行
	//首先生成部门下拉选项
	for(var i=0;i<deptJsonArray.length;i++){
		var dept = deptJsonArray[i];
		if(dept!=undefined){
			$("#searchdepid").append("<option value='"+dept.did+"'>"+dept.dname+"</option>");
		}
	}
}
function approve(id){
	for(var i=0;i<employeeJsonArray.length;i++){
		var staff = employeeJsonArray[i];
		if(staff.id == id){
			staff.status = "1";
		}
	}
	alert("审批通过");
	showSearchList();
	
}
function nonapprove(id){
	for(var i=0;i<employeeJsonArray.length;i++){
		var staff = employeeJsonArray[i];
		if(staff.id == id){
			staff.status = "2";
		}
	}
	alert("审批不通过");
	showSearchList();
	
}