// import $ from 'jquery-1.11.0.js'
			function checkLogin(){
				//获得用户名输入框值
				//1.得到id=phone标签对象
				//var phoneEle = document.getElementById("phone");
				var phoneEle=$("#phone");
				//2.获取值
				// var phone=phoneEle.value;
				var phone=phoneEle.val();
				//为空，错误提示
				if(phone==""){
					// alert("请输入用户名");
					//document.getElementById("errorSpan").innerHTML="请输入用户名";
					$("#errorSpan").html("请输入用户名");
					return false;
				}
				//获得密码
				// var pwd=document.getElementById("password").value;
				var pwd=$("#password").val();
				//判断密码是否为空
				if(pwd==""){
					//alert("密码");
					// document.getElementById("errorSpan").innerHTML="密码";
					$("#errorSpan").html("请输入密码");
					return false;
				}
				return true;
			}
			
function focusLogin(){
	$("#errorSpan").html("")
}

function blurPhone(){
	//如果该输入框为空则给出错误提示
	var phone = $("#phone").val();
	if(phone==""){
		$("#errorSpan").html("请输入用户名");
	}
}

function blurPwd(){
	//如果该输入框为空则给出错误提示
	var pwd = $("#password").val();
	if(pwd==""){
		$("#errorSpan").html("请输入密码");
	}
}


//实现登陆功能
function login(){
	//获取得到登录名的输入框的值，密码值
	//验证员工的登录名和密码
	//循环遍历列表得到员工对象
	var phone=$("#phone").val();
	var password=$("#password").val();	
	for (var i = 0;i<employeeJsonArray.length;i++){
		var employee=employeeJsonArray[i];
		if(employee.phone==phone
		&& employee.password==password
		&& employee.auditstatus=="1"){
			//判断权限
			if(employee.status=="1"){
				window.location.href = "adminIndex.html?loginUserId="+employee.id; //把当前登录的用户的编号传入
			}else{
				window.location.href = "userIndex.html?loginUserId="+employee.id;
			}
		}
	}
	$("#errorSpan").html("失败");
}