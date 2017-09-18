//variables
var addIcon =  "<img src='../img/add.png' srcset='../img/add.svg' class='icon'/>";
var fileIcon = "<img src='../img/file.png' srcset='../img/file.svg' class='icon'/>";
var addFileButton = "<a class='add-file'>" + addIcon + " Add file" + "</a>";
var chooseFile = "<li><input type='file' name='files[]' multiple='' accept='image/*'><li>";

var continueButton = "<li><button class='button--primary'>Continue</button></li>";
var resetButton = "<li><button class='button--secondary'>Reset</button></li>"


//on load, add an input button
$(document).ready(function(){
	$("#content").append("<ul id='image-list'></ul>");
	$("#image-list").append(chooseFile);
	$("#content").append(addFileButton);
	$("ul.utility__buttons").append(resetButton + continueButton);
});

//clicking "Add File" adds another Choose File option
$(document).on('click', '.add-file', function(){
	$("#image-list").append(chooseFile);
});