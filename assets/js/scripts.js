
//toggle strike through to-do
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on x to delete to-do
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){ //the this here refers to the span element
		$(this).remove();//the this refers to the li (parent)
	});
	event.stopPropagation(); //stops bubbling up
});

//listener to text input
$("input[type='text']").keypress(function(e){
	if(e.which === 13) { //check if user hits the enter key
		var todoText = $(this).val(); //grab new todo text from input
		console.log("added new to-do: " + $(this).val());
		$(this).val(""); //clears out the input text after to-do is added
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"); //adds to do onto ul list
		
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});