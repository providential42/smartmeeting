var id = getParam("id");
var employeeJsonArray = window.parent.employeeJsonArray;
var deptJsonArray = window.parent.deptJsonArray;

$(function(){
	for(var i=0; i<employeeJsonArray.length;i++){
		var staff = employeeJsonArray[i];
		if(staff.id == id){
			$("#name").val(staff.name);
			$("#sex").val(staff.sex);
			$("#cardid").val(staff.cardid);
			$("#race").val(staff.race);
			$("#party").val(staff.party);
			$("#education").val(staff.education);
			$("#speciality").val(staff.speciality);
			$("#phone").val(staff.phone);
			$("#password").val(staff.password);
			$("#email").val(staff.email);
			$("#tel").val(staff.tel);
			$("#address").val(staff.address);
			$("#postcode").val(staff.postcode);
			$("#qqnum").val(staff.qqnum);
			$("#birthday").val(staff.birthday);
			$("#depid").val(staff.depid);
			$("#levelid").val(staff.levelid);
			$("#salary").val(staff.salary);
		}
	}
});

function updateStaff(){
	var staffname = $("#name").val();
	var staffsex = $("#sex").val();
	var staffcardid = $("#cardid").val();
	var staffrace = $("#race").val();
	var staffparty = $("#party").val();
	var staffeducation = $("#education").val();
	var staffspeciality = $("#speciality").val();
	var staffphone = $("#phone").val();
	var staffpassword = $("#password").val();
	var staffemail = $("#email").val();
	var stafftel = $("#tel").val();
	var staffaddress = $("#address").val();
	var staffpostcode = $("#postcode").val();
	var staffqqnum = $("#qqnum").val();
	var staffbirthday = $("#birthday").val();
	var staffdepid = $("#depid").val();
	var stafflevelid = $("#levelid").val();
	var staffsalary = $("#salary").val();
	
	for(var i=0 ;i<employeeJsonArray.length ; i++){
		var staff = employeeJsonArray[i];
		if(staff.id == id){
			staff.name = staffname;
			staff.sex = staffsex;
			staff.cardid = staffcardid;
			staff.race = staffrace;
			staff.party = staffparty;
			staff.education = staffeducation;
			staff.speciality = staffspeciality;
			staff.phone = staffphone;
			staff.password = staffpassword;
			staff.email = staffemail;
			staff.tel = stafftel;
			staff.address = staffaddress;
			staff.postcode = staffpostcode;
			staff.qqnum = staffqqnum;
			staff.birthday = staffbirthday;
			staff.depid = staffdepid;
			staff.levelid = stafflevelid;
			staff.salary = staffsalary;
			
			alert("修改成功");
			window.location.href="staffList.html";
		}
	}
}

function returnStaff(){
	window.location.href="staffList.html";
}


function body_load(){//当页面加载时触发执行
	//首先生成部门下拉选项
	for(var i=0;i<deptJsonArray.length;i++){
		var dept = deptJsonArray[i];
		if(dept!=undefined){
			$("#depid").append("<option value='"+dept.did+"'>"+dept.dname+"</option>");
		}
	}
}