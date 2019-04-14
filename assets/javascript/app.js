
    var apiURL = "https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple";
    

    $.ajax({
        url: apiURL,
        method: "GET"
    }).then(function(Response){
        console.log(Response);
        var results = Response.results;
        console.log(results);
        for (i=0; i < results.length; i++){
        displayQ(results);
        console.log(i);
        }
    })

    function displayQ(results){
        grabTitle(results);
        grabQuestion(results);
    }

    function grabTitle(results){
       $("#qTitle").html(results[i].question);
    }

    function grabQuestion(results){
        for(var ia = 0; ia<results[i].incorrect_answers.length; ia++){
        var p = $("<p>").attr("id","question" + ia);
        //console.log(p);
        $("#questions").append(p);
        };
    };