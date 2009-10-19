function prefCookie()
{
	this.cookie = false;
	this.prefs = false;
	this.load();
}

prefCookie.prototype.get = function(reload)
{
	try 
	{
		if (!this.prefs || reload) 
		{
			// setup our default preferences
			this.prefs = 
			{
				// Global Group
				theme: 'palm-default',
				
				// Server Status Group
				statusPop: false,
				
				// Messages Group
				autoCap: true,
				autoReplace: true,
				messagesStyle: 'lefta',
				fontSize: '15',
				
				// Identity Scene
				nick1: '',
				nick2: '',
				nick3: ''
			};
			
			var cookieData = this.cookie.get();
			if (cookieData) 
			{
				for (i in cookieData) 
				{
					this.prefs[i] = cookieData[i];
				}
			}
			else 
			{
				this.put(this.prefs);
			}
		}
		
		return this.prefs;
	} 
	catch (e) 
	{
		Mojo.Log.logException(e, 'prefCookie#get');
	}
}

prefCookie.prototype.put = function(obj, value)
{
	try
	{
		this.load();
		if (value)
		{
			this.prefs[obj] = value;
			this.cookie.put(this.prefs);
		}
		else
		{
			this.cookie.put(obj);
		}
	} 
	catch (e) 
	{
		Mojo.Log.logException(e, 'prefCookie#put');
	}
}

prefCookie.prototype.load = function()
{
	try
	{
		if (!this.cookie) 
		{
			this.cookie = new Mojo.Model.Cookie('preferences');
		}
	} 
	catch (e) 
	{
		Mojo.Log.logException(e, 'prefCookie#load');
	}
}
