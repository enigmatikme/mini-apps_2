// var $ = require('jquery');

$("form").submit(function(e) {
    console.log("fired");
    console.log($)
    e.preventDefault();
    $.ajax({
        url: 'http://localhost:3000/data',
        method: "POST",
        data: "",
        dataType: "json",
        success: function() {
            console.log("Success");
        }, 
        error: function() {
            console.log("Error");
        }
    });
});