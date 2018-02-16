'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	var projectURL = "/project/" + idNumber;

	// call AJAX endpoint
	$.get(projectURL, addProject);


	console.log("User clicked on project " + idNumber);
	console.log("GET " + projectURL);
}

function addProject(result) {
	// empty for now
	console.log(result);
	//var selector = "#"+ result["id"] +".details";
  var selector = "#project" + result["id"] + " .details";
	var projectHTML = '<img src="' + result["image"] + '" class="detailsImage">'
	  + '<h3>' + result["title"] + '</h3>' + '<h4>' + result["date"] + '</h4>' +
		'<p>' + result["summary"] + '</p>';

	console.log(selector);
	console.log(projectHTML);

  $(selector).html(projectHTML);
}
