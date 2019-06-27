function Ajax(object) {
	
	xhr = new XMLHttpRequest();
	console.log(xhr);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var status = xhr.status;

			if (status >= 200 && status < 300) {
				object.success(xhr.responseText);
			} else {
				object.fail(xhr.status);
			}
		}
	};

	if (object.type == 'get') {
		xhr.open("get", object.url, object.async);
		xhr.send(null);
	} else if (object.type == 'post') {
		xhr.open("post", object.url, object.async);

		var obj = JSON.stringify(object.data); //将一个js对象转化为JSON字符串
		xhr.send(obj);
	}
}

export{
	Ajax
}