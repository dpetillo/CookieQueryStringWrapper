# JavaScript Cookie and Query String Wrapper Classes

## Introduction
Any web programmer will have good tools to manipulate, read, and write query strings and cookies on the server side. A while back, when trying to utilize this information on the client side, I found the available JavaScript functions cumbersome for retrieving and "storing" multiple pieces of cookie and query string data. They lacked what the server side model has, which is an associative array to retrieve cookie and query string key/value pairs. So I developed the two classes Cookies and QueryString which wrap up the related JavaScript functions and provide you with similar functionality.

## Using the code
Instantiate global instances of these classes and initialize them:

```javascript
window.gCookies = new Cookies();
window.gQueryString = new QueryString();
gCookies.Read();
gQueryString.Read();
```

Retrieving some sample data from these objects:

```javascript
var iObjId = parseInt(gCookies.GetValue("","myObjId"));
var reportId = gQueryString.GetValue("reportId");
```

These data structures can store and retrieve data safely until it is later utilized by writing out the cookie to the document (Cookie's Write method), or reassembling the query string (ToString method) and navigating to another page with it.

```javascript
myQueryString.Clear();
myQueryString.SetValue("workspaceId", workspaceId);
...
myLink.href = document.location.pathname + 
              myQueryString.ToString();
```

The QueryString class is emptied of all key/values by calling the Clear method. The Cookie class does not have a clear Clear method. To destroy a cookie, you must set its value to null, and once Write() is called, it will be forced to expire.

```javascript
gCookies.SetValue("", "MyIntegerOption", 1);
gCookies.SetValue("", "MyCookieToExpire", null)
gCookies.Write();
```



