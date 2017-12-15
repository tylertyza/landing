function ServerStatus(serverip) {
    $.getJSON('https://use.gameapis.net/mc/query/info/' + serverip, function (json) {

        if (json.status !== true) {
            $('#status').html("???");
        } else {
            $("#status").html(json.status ? 'online' : 'offline');

            var full_list = ""

            if (json.hover != null) {
                for (var i = 0; i < json.hover.length; ++i) {
                    full_list = full_list + "<img src=\"https://crafatar.com/renders/head/" + json.hover[i].name + "?overlay=True\" />"
                }

                $("#users-online").html(full_list);
            } else {
                $("#users-online").html('<center>Nobody :(</center>')
            }
        }

    });
}

ServerStatus('ilovebigdick.iceswag.com:28685');