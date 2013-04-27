/**
 * @author Pat Long
 */

var defaultTitle = "WA Math Team";
var currTitle = "";
var header = "";

function doneLoading(data, textStatus, jqXHR) {
	$("#body").html(data);
	document.title = currTitle;
	$("header").html("<h1>" + header + "</h1>");
}

function load(page, title) {
	$("#body").html("Loading . . .");
	currTitle = defaultTitle + " - " + title;
	header = title;
	$.ajax({
		url: "pages/" + page + ".html",
		dataType: "html",
		cache: false,
		success: doneLoading,
		errot: function() {
			$("#body").html("Error. Requested page could not be loaded.");
		}
	});
}

$(document).ready(function() {
	load("index", "Index");
	$("nav a:first").addClass("selected");
	$("a").click(function() {
		if($(this).attr("href") == "pages/old_index.html") return true;
		load($(this).attr("href"), $(this).html());
		$("nav a").removeClass("selected")
		$(this).addClass("selected")
		return false;
	});
});
