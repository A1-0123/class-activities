$("#btn-qoute").click(() => {
    $.ajax({
        url:"https://api.quotable.io/random",
        success: function (data) {
            console.log(data);
            $("#qoute").html(
                "<p>" + data.content + "</p><h4>" + data.author + "</h4> - " + "<p>" + data.dateAdded + "</p>"
            )
        }
    })
})