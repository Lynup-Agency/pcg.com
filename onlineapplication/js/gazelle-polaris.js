function 	setApplicationId()
{
	//alert('inside - ' + window.location.href + ';' + window.location.search);
	var appidVal = window.location.search.split('=')[1];
	//alert(appidVal);
	var appid = document.getElementById('applicationId');
	appid.value = (appidVal == null) ? '' : appidVal;
	//alert(appid.value + ":" + appidVal);
}