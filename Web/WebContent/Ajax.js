function GetReq()
{
	try
	{
		xmlhttp = new XMLHttpRequest();
	}
	catch(exc1)
	{
		var ieXmlHttpVersions = new Array();
		ieXmlHttpVersions[ieXmlHttpVersions.length] = "MSXML2.XMLHttp.5.0";
		ieXmlHttpVersions[ieXmlHttpVersions.length] = "MSXML2.XMLHttp.4.0";
		ieXmlHttpVersions[ieXmlHttpVersions.length] = "MSXML2.XMLHttp.3.0";
		ieXmlHttpVersions[ieXmlHttpVersions.length] = "MSXML2.XMLHttp";
		ieXmlHttpVersions[ieXmlHttpVersions.length] = "Microsoft.XMLHttp";
	
		var i;
		for (i=0; i < ieXmlHttpVersions.length; i++)
		{
			try
			{
				xmlhttp = new ActiveXObject(ieXmlHttpVersions[i]);
				break;
			}
			catch (exc2)
			{
				alert(ieXmlHttpVersions[i] + " not supported.");
			}
		}
	}
	return xmlhttp;
}