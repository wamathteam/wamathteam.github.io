function rename() {
	var name=document.getElementById("tabFrame").contentWindow.document.title;
	name="Westford Academy Math Team: "+name;
	document.title=name;
	console.log(name);
}