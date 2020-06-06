$(document).ready(function(){
    $(".devour-form").on("submit", event => {
        event.preventDefault();

        let burger_id = $(this).children(".burger_id").val();
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(data => {
            location.reload();
        });
    });
});