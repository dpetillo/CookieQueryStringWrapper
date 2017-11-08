function QueryString() {
	var data = [];
	this.Read = function() 
	{
		var aPairs, aTmp;
		var queryString = new String(window.location.search);
		queryString = queryString.substr(1, queryString.length); //remove "?"
		aPairs = queryString.split("&");	
		
		for (var i=0 ; i<aPairs.length; i++)
		{
			aTmp = aPairs[i].split("=");
			data[aTmp[0]] = aTmp[1];
		}
	}
	
	this.GetValue = function( key )
	{
		return data[key];
	}
	this.SetValue = function( key, value )
	{
		if (value == null)
			delete data[key];
		else 
			data[key] = value;
	}
	this.ToString = function()
	{
		var queryString = new String(""); 
		
		for (var key in data)
		{	
			if (queryString != "")
				queryString += "&"
			if (data[key])
				queryString += key + "=" + data[key];		
		}
		if (queryString.length > 0)
			return "?" + queryString;
		else
			return queryString;
	}
	this.Clear = function()
	{
		delete data;
		data = [];
	}
}
