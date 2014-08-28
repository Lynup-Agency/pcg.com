function 	setApplicationId()
{
	//alert('inside - ' + window.location.href + ';' + window.location.search);
	var appidVal = window.location.search.split('=')[1];
	//alert(appidVal);
	var appid = document.getElementById('applicationId');
	appid.value = (appidVal == null) ? '' : appidVal;
	//alert(appid.value + ":" + appidVal);
}
function 	setApplicationIdForFileUpload()
{
	//alert('inside - ' + window.location.href + ';' + window.location.search);
	var appidVal = window.location.search.split('=')[1];
	//alert(appidVal);
	var appid = document.getElementById('applicationId2');
	appid.value = (appidVal == null) ? '' : appidVal;
	//alert(appid.value + ":" + appidVal);
	var uftval = document.getElementById('uploadFileType');
	var cp = document.getElementById('currentPage');
	document.forms[0].action = document.forms[0].action + "?applicationId=" + appid.value + "&uploadFileType="+uftval.value + "&currentPage="+cp.value;
}