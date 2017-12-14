function ServerStatus(serverip){
	$.getJSON('http://mcapi.ca/query/' + serverip + '/extensive', function(json){
		if (json.status !== true) {
			$('#status').html("???");
		} else {
			$("#status").html(json.status ? 'online' : 'offline');	



			var full_list = ""

			if(json.list != null){
				for(var i=0; i<json.list.length; ++i){
					full_list = full_list + "<img src=\"https://use.gameapis.net/mc/images/avatar/" + json.list[i] + "/48/true\" />"
				}

				$("#users-online").html(full_list);	
			} else {
				$("#users-online").html('<center>Nobody :(</center>')
			}
		}
	});
}