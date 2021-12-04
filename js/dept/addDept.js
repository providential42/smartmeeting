var deptJsonArray = window.parent.deptJsonArray;
function saveDept(){
	var dname = $("#name").val();
	
	var desc = $("#remark").val();
	
	var dept = {
		"did":deptJsonArray.length+1,
		"dname":dname,
		"desc":desc
	};
		
	deptJsonArray[deptJsonArray.length] = dept;
	alert("添加成功!");
 
	window.location.href="deptList.html";
}