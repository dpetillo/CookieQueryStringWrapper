function Cookies() {
	var cookieData = [];
	
	this.Read = function()
	{
		var pairs = new String(window.document.cookie).split(";");	
		var tmp, cookieName, keyName;
		for (var i=0 ; i<pairs.length; i++)
		{
			tmp = pairs[i].split("=");
			
			if (tmp.length == 3)
			{
				cookieName = new String(tmp[0]);
				cookieName = cookieName.replace(" ", "");
				
				if (cookieData[cookieName] == null)
					cookieData[cookieName] = [];
				cookieData[cookieName][tmp[1]] = unescape(tmp[1]);
			}
			else //length = 2
			{
				keyName = tmp[0];
				keyName = keyName.replace(" ", "");
				if (keyName.substring(0,12)!="ASPSESSIONID") 
				{
					if (cookieData[""] == null)
						cookieData[""] = [];
					cookieData[""][keyName] = unescape(tmp[1]);
				}
			}	
		}	
		
	}
	
	this.GetValue = function( cookie, key )
	{
		if (cookieData[cookie] != null)
			return cookieData[cookie][key];
		else
			return null;
	}
	this.SetValue = function( cookie, key, value )
	{
		if (cookieData[cookie] == null)
			cookieData[cookie] = [];
		cookieData[cookie][key] = value;
	}
	this.Write = function()
	{
	
		var toWrite;
		var thisCookie;
		var expireDateKill = new Date();
		var expireDate = new Date();
		expireDate.setYear(expireDate.getFullYear() + 10);
		expireDateKill.setYear(expireDateKill.getFullYear() - 10);


		var pairs = new String(window.document.cookie).split(";");	
		var tmp, cookieName, keyName;
		for (var i=0 ; i<pairs.length; i++)
		{
			tmp = pairs[i].split("=");
			if (tmp.length == 3)	
			{		
				window.document.cookie = tmp[0] + "=" + tmp[1] + "='';expires=" + expireDateKill.toGMTString();
			}
			else
			{
				keyName = tmp[0];
				keyName = keyName.replace(" ", "");
				if (keyName.substring(0,12)!="ASPSESSIONID") 
					window.document.cookie = keyName + "='';expires=" + expireDateKill.toGMTString();
			}
		}

		for (var cookie in cookieData)
		{
			toWrite = "";
			thisCookie = cookieData[cookie];
			for (var key in thisCookie)
			{
				if (thisCookie[key] != null)
				{
					if (cookie == "")
						toWrite = key + "=" + thisCookie[key];
					else
						toWrite = cookie + "=" + key + "=" + escape(thisCookie[key]);						
					toWrite += "; expires=" + expireDate.toGMTString();
					window.document.cookie = toWrite;	
				}
			}
		}
	}
}
