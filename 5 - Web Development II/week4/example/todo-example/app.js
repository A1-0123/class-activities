$("#btn-add").click(() => {
    let task = $("#input-text").val();
    if(task){
        $("#task-list").append("<li>" + task + "</li>")
        $("#input-text").val("");
    }
});

$("#task-list").on("click", "li", (ev) => {
    $(ev.currentTarget).toggleClass("completed")
})