function swapTab(newTab,highlight) {
	var iframe=document.getElementById("tabFrame");
	iframe.src=newTab;
	var tabs=document.getElementsByClassName("selectedTabCell");
	for(var i=0;i<tabs.length;i++) {
		tabs[i].className="tabCell";
	}
	highlight.className="selectedTabCell";
}

function swapTabFromFrame(newTab,tabName) {
	var iframe=window.parent.document.getElementById("tabFrame");
	iframe.src=newTab;
	var tabs=window.parent.document.getElementsByClassName("selectedTabCell");
	for(var i=0;i<tabs.length;i++) {
		tabs[i].className="tabCell";
	}
	window.parent.document.getElementById(tabName).className="selectedTabCell";
}