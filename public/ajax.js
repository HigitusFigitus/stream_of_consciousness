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
  var newThought = "<div class='thought-body'>" + thought.text + "</div>"
  $("#thoughts-target").prepend(newThought);
}

$("#thought").click(function(){
  $.ajax({
    type: "POST",
    url: "/thoughts",
    contentType: "application/json",
    data: JSON.stringify({thought: $("#new-thought").val()}),
    success: function(data){
      prependNewThought(data);
      $("#new-thought").val("");
    }
  });
});