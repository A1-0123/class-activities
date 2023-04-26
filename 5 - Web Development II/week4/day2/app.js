// CLICK

// $("#first-btn").click(() => {
//     console.log("Hello");
//     alert("Hello developers!");
// })

// $("h1").click(() => {
//     alert("Hello")
// })
// js way to add event listener
// document.querySelector("#first-btn").addEventListener('click', () => {
//     console.log("Hello");
// })

// ON

// $("#first-btn").on("click", (event) => {
//     // $(this)
//     $(event.currentTarget).css("background-color", "yellow")
//     console.log("clicked!");
// });

// $("#first-btn").off("click");

// $("h1").on("mouseover", (ev) => {
//     $(ev.currentTarget).css("color", "red");
// })

// $("#first-btn").trigger("click");
// $("h1").trigger("mouseover")
// $("#first-btn").off("click");

// $("#first-btn").on("dblclick", (event) => {
//     // $(this)
//     $(event.currentTarget).css("background-color", "yellow")
//     console.log("clicked!");
// });


$("#first-input").focus((ev) => {
    // $(ev.currentTarget).css("height", "40px")
})

$("#custom-form").submit((ev) => {
    ev.preventDefault();
    console.log($("#first-input").val());
    console.log($("#second-input").val());
    console.log("form submitted!");

    // $("#first-btn").show();
    $(ev.currentTarget).trigger("reset");
})

$("#first-select").change((ev) => {
    console.log(ev.currentTarget.value);
    console.log("Option changed!");
});

$("h1").hover(() => {
    // $("#first-btn").hide();
})

$( "#target" ).on("blur", function(ev) {
    // if()
    console.log($(ev.currentTarget).val());
    if($(ev.currentTarget).val() === ""){
        $(ev.currentTarget).trigger("focus")
    }else{
        return;
    }
    // alert( "Handler for `blur` called." );
} );

$(window).on("resize", (ev) => {
    console.log("resized!");
    $("h1").text("Window width is " + ev.currentTarget.outerWidth)
    console.log(ev.currentTarget.outerWidth);
})

$(".container").hover(() => {
    $(".box").show();
}, () => {
    $(".box").hide();
})

