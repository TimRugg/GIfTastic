	//create variables
	var topics = ["football","soccer","lacrosse","hockey","tennis"];
	var apiKey = "OAJw0fyFvlk0O3cfeAOeBttFwgm67zS9";
	var apiResponseArray = [];

	//loop through the array displaying a button for each element in the topics array
	for (var i=0; i<topics.length; i++) {
console.log("index: " + i + " number of topics:" + topics.length + " topics:" + topics[i])
		//create a variable and build the html for each button using jquery
		var buildButton = $("<button>");			//jquery will also insert the end tag
		buildButton.addClass("topicButton");		//insert a class of topicButton into each button
		buildButton.attr("topicValue", topics[i]); 	//insert a new attr named topicValue and set to current topic
		buildButton.text(topics[i]);				//text is the displayed lable on the button
		$("#displayButtons").append(buildButton);	//add button to display or to end of displayed buttons
		//the following one line works too but the previous would be easier to edit
		// $('#displayButtons').append("<button class='topicButton' value=" + i + ">" + topics[i] + "</button>;");
	}
	//display images on page from giphy
	//clicking any of the topic buttons...
	$(".topicButton").on("click", function(event) {
		//get the topicValue for the clicked button
		var topicValue = $(this).attr("topicValue");
		//use the topicValue in the query for an ajax get
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicValue + "&api_key=" + apiKey + "&limit=10";
		//GET the search API from giphy using button clicked as search term
//Need to replace spaces with '+' in the topicValue
	    $.ajax({
	      url: queryURL,
	      method: 'GET'
	    }).done(function(response) {
console.log("response:",response);
			apiResponseArray = response.data;	//the data part of the API response is an array
			displayImages();					//function used for clarity - code in function could be here
// console.log("apiResponseArray:", apiResponseArray);
// console.log("length: ",apiResponseArray.length);
	    });
	});

	//loop through the list of gifs and display on screen
	function displayImages() {
	$("#displayGifs").empty(); //clear any images already displayed
console.log("apiResponseArray:", apiResponseArray);
console.log("length: ",apiResponseArray.length);
		for (var i=0; i<apiResponseArray.length; i++) {
			var buildImageDisplay = $("<img>");			//build an image container for the array of gifs
			buildImageDisplay.attr("id", "image-" + i); //each image will have a unique buildImageDisplay
			buildImageDisplay.attr("src", apiResponseArray[i].images.original_still.url);
console.log("displayGifs: ",buildImageDisplay);
			$("#displayGifs").append(buildImageDisplay);//add image to display
		}
	}


// console.log(response);


//giphy api key = OAJw0fyFvlk0O3cfeAOeBttFwgm67zS9
//javascript, jQuery
// var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=OAJw0fyFvlk0O3cfeAOeBttFwgm67zS9&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });
// https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=OAJw0fyFvlk0O3cfeAOeBttFwgm67zS9&limit=5&rating=g;