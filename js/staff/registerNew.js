var employeeJsonArray = window.parent.employeeJsonArray;
var deptJsonArray = window.parent.deptJsonArray;

function saveStaff(){
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
	
	var staff = {
		"id":employeeJsonArray.length+1,
		"name":staffname,
		"cardid":staffcardid,
		"sex":staffsex,
		"email":staffemail,
		"education":staffeducation,
		"speciality":staffspeciality,
		"phone":staffphone,
		"password":staffpassword,
		"auditstatus":"1",
		"status":"0",
		"tel":stafftel,
		"party":staffparty,
		"qqnum":staffqqnum,
		"address":staffaddress,
		"postcode":staffpostcode,
		"birthday":staffbirthday,
		"race":staffrace,
		"remark":"无",
		"depid":staffdepid,
		"levelid":stafflevelid,
		"salary":staffsalary,
		"joindate":"2020-10-09"
	};
	employeeJsonArray[employeeJsonArray.length] = staff;

	alert("注册成功!等待审批!");
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