


			var full_list = ""

			if(json.list != null){
				for(var i=0; i<json.list.length; ++i){
					full_list = full_list + "<img src=\"https://crafatar.com/avatars/" + json.list[i] + "?overlay=true\" />"
				}

				$("#users-online").html(full_list);	
			} else {
				$("#users-online").html('<center>Nobody :(</center>')
			}
		}
	});
}
