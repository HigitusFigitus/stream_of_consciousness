$.ajax({
  type: "GET",
  url: "/thoughts",
  success: function(data){
    for(var i = 0; i < data.thoughts.length; i += 1){
      prependNewThought(data.thoughts[i]);
    }
  }
});

function prependNewThought(thought){
  var newThought = "<li class='collection-item'>" + thought.text + "</li>"
  $(".collection").prepend(newThought);
}

$("#thought").click(function(){
  $.ajax({
    type: "POST",
    url: "/thoughts",
    contentType: "application/json",
    data: JSON.stringify({thought: $("#new-thought").val()}),
    success: function(response){
      console.log("Ajax request successful");
      var parsedResponse = JSON.parse(response);
      var newThought = "<li class='collection-item'>" + parsedResponse.text + "</li>"
      $(".collection").prepend(newThought);
      $("#new-thought").val("");
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
     console.log("Ajax request unsuccessful");
    }
  });
});
