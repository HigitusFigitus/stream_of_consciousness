$.ajax({
  type: "/GET",
  url: "/thoughts",
  success: function(data){
    for(var i = 0; i < data.thoughts.length; i += 1){
      prependNewThought(data.thoughts[i]);
    }
  }
});

function prependNewThought(thought){
  ("#thoughts-target").prepend(thought);
}