<%@ page language="java" contentType="text/plain; charset=ISO-8859-1" 
pageEncoding="ISO-8859-1"%><%

if( (Math.random() * 2) <= 1 ) {
	Thread.sleep(2000); //sleep for 3 seconds
} else {
	Thread.sleep(500);
}

String question = request.getParameter("q").substring(1);
String answer = request.getParameter("a");

try
{
	switch (Integer.parseInt(question)) //evaluates to an integer
	{
		case 1 :
			if (answer.equals("2"))
			{
				out.write("Right");
			}
			else
			{
				out.write("Wrong");
			}
			break;
		case 2 :
			if (answer.equals("3"))
			{
				out.write("Right");
			}
			else
			{
				out.write("Wrong");
			}
			break;
		case 3 :	
			if (answer.equals("1"))
			{
				out.write("Right");
			}
			else
			{
				out.write("Wrong");
			}
			break;
		default:
			out.write("Failed");
	}
}
catch (Exception e)
{
	out.write("Failed: " + e.toString());
}
%>