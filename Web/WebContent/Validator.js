function Validator(FORM)
{
	try
	{
		this.form = (typeof FORM == "string") ? document.getElementById(FORM) : FORM;
		var i=0;
		while (this.form.nodeName.toLowerCase() != "form" && i < 10)
		{
			this.form = this.form.parentNode;
			i++;
		}
		this.errors = new Array();
		if (i >= 10)
		{
			throw "Error.  Cannot find form element.";	
		}
	}
	catch (e)
	{
		alert("Error in Validator(): " + e.message);	
	}
}

Validator.prototype.checkLength=function(NAME,MIN,MAX,MSG)
{
	try
	{
		var min = MIN || 1;
		var max = MAX || 10000;
		var elem = this._getElem(NAME);
		var value = elem.value;
	
		if (value.length < min || value.length > max)
		{
			this.errors.push(MSG);
			return false;
		}
		return true;
	}
	catch(e)
	{
		alert("Error in Validator() -> checkLength(): " + e.message);
		return false;
	}
}

/*
	Add the following function to Validator:

	Function Name: checkEmail
	Arguments: 
		NAME (the name of the email form element)
		MSG (the error message if there's a problem found)
	Returns:
		false if EMAIL has fewer than 6 characters
		false if EMAIL does not contain @ symbol 
		false if EMAIL does not contain a period (.)
		false if the last @ symbol comes after the last period (.)
		true otherwise
		
		Each time the function returns false it should add a new item to the this.errors array.
*/

Validator.prototype.checkEmail=function(NAME,MSG)
{
	try
	{
		var elem = this._getElem(NAME);
		var email = elem.value;
		if (!this.checkLength(NAME,6,undefined,"Email is too short."))
		{
			return false;
		}
		else if (email.indexOf("@") == -1)
		{
			this.errors.push(MSG);
			return false;
		}
		else if (email.indexOf(".") == -1)
		{
			this.errors.push(MSG);
			return false;
		}
		else if (email.lastIndexOf(".") < email.lastIndexOf("@"))
		{
			this.errors.push(MSG);
			return false;
		}
		return true;
	}
	catch(e)
	{
		alert("Error in Validator() -> checkEmail(): " + e.message);
		return false;
	}
}

Validator.prototype.submitForm=function()
{
	try
	{
		if (this.errors.length > 0)
		{
			var errorMsg = "Please correct the following " + this.errors.length + " error(s):\n";
			for (var i=0; i<this.errors.length; i++)
			{
				errorMsg += "\n * " + this.errors[i];	
			}
			alert(errorMsg);
			return false;
		}
		else
		{
			return true;	
		}
	}
	catch(e)
	{
		alert("Error in Validator() -> submitForm(): " + e.message);	
		return false;
	}
}

Validator.prototype._getElem=function(NAME)
{
	try
	{
		var elem = eval("this.form." + NAME);
		return elem;
	}
	catch(e)
	{
		alert("Error in Validator() -> _getElem(): " + e.message);	
	}
}