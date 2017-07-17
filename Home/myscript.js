$(document).ready(function() {
	
	$('#message').focus();

	$("#post-btn").click(function(){
	
		var newContainer = $("<div></div>");
	
		var img=$("<img/>")
			img.attr("src","http://zsb.info.bit.edu.cn/static/images/avatar.jpg")
		
		var span=$("<span></span>");
		var message = $("#message").val();
			span.text(  message  ) //
			//$ representt he object everything afterthing after 
			// that are the properties.
		
		newContainer.append(img);
		newContainer.append(span);
	
		$("#wall").append(newContainer);
		
	});
	
	
});