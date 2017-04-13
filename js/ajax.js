var $={
	ajax:function(opts){
		var xhr;
		var asyncs=(typeof opts.async==='undefined')?true:opts.async
		try{
			xhr=new XMLHttpRequest();
		}catch(e){
			try{
				xhr=new ActiveXobject("Msxml2.XMLHTTP")
			}catch(e){
				try{
					xhr=new ActiveXobject("Microsoft.XMLHTTP")
				}catch(e){
					alert('浏览器有毛病')
				}
			}
		}
		if(!opts.data){
			opts.data=null
		}
		if(opts.type=='opst'){
			xhr.setRequestHeader('content-Type','application/x-www-form-urlencoded')
		}

		xhr.open(opts.type || 'get',opts.url,asyncs) ;

		xhr.send(opts.data);

		xhr.onreadystatechange=function(){		
			if(xhr.readyState==4&&xhr.status==200){
				var datas=null;
				if(opts.datatype=='json'){
					var zhi=xhr.responseText;
					datas=eval("("+zhi+")")
				}
				else if(opts.datatype=='xml'){
					datas=xhr.responseXML;
				}
				else{
					datas=xhr.responseText;
				}

				return opts.success(datas)
			}			
		}
	}
}