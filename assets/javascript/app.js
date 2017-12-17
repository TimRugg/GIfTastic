//create variables
var topics = ["football","soccer","lacrosse","hockey","tennis"];

//loop through the array displaying a button for each element in the topics array
for (var i=0; i<topics.length; i++) {
	console.log("index: " + i + " number of topics:" + topics.length + " topics:" + topics[i])
	//the following works too but the previous would be easier to edit
	// $('#displayButtons').append("<button class='topicButton' value=" + i + ">" + topics[i] + "</button>;");
	//create a variable and build the html for each button using jquery
	var buildButton = $("<button>");			//jquery will also insert the end tag
	buildButton.addClass("topicButton");		//insert a class of topicButton into each button
	buildButton.attr("topicValue", topics[i]); 	//insert a new attr named topicValue and set to current topic
	buildButton.text(topics[i]);				//text is the displayed lable on the button
	$("#displayButtons").append(buildButton);	//add button to display or to end of displayed buttons
}








//giphy api key = OAJw0fyFvlk0O3cfeAOeBttFwgm67zS9
//javascript, jQuery
// var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=OAJw0fyFvlk0O3cfeAOeBttFwgm67zS9&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });
// https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=OAJw0fyFvlk0O3cfeAOeBttFwgm67zS9&limit=5&rating=g;