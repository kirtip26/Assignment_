module.exports.ChatbotReply = function(message)
	{
		this.Bot_University = "SURAT";
		this.Bot_Country = "India";
		
		message= message.toLowerCase()

		if(message.indexOf("hi") > -1 || 
			message.indexOf("hello") > -1 || 
			message.indexOf("welcome") > -1 )
		{
			return "Hi!";
		}
		else if (message.indexOf("how") > -1 && 
			message.indexOf("are") && 
			message.indexOf("you"))
		{
			return "I'm Good."
		}
		else if(message.indexOf("where") > -1 
			&& message.indexOf("live") && 
			message.indexOf("you"))
		{
			return "I live in " + this.Bot_Country;
		}
		return "Sorry, I didn't get it :( ";
	}