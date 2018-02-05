// check off specific todos by clicking
// select pre-existing parent (ul) and listen to li only (for future items)
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event){
    // fadeout span parent li
    $(this).parent().fadeOut(500, function(){
        // remove li
        $(this).remove()
    });
    // stop click bubbling up to parent elements (and styling li)
    event.stopPropagation();
});

// manipulate input
$("input[type='text']").keypress(function(event){
    // check for enter key
    if(event.which === 13){
        // grab new todo text from input
        var todoText = $(this).val();
        // clear input
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

// toggle add todo
$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle();
});