function BuildContact(html, css){
	// Include contact's style sheet
	var contactCss = document.createElement("link");
	contactCss.setAttribute("rel", "stylesheet");
	contactCss.setAttribute("type", "text/css");
	contactCss.setAttribute("href", css);
	document.head.appendChild(contactCss);

	// Buildind
	var contact = document.createElement("div");
	contact.setAttribute("id", "contact");
	var contactLink = document.createElement("a");
	contactLink.setAttribute("href", html);
	contactLink.setAttribute("title", "Contact");
	var contactText = document.createTextNode("Me contacter");

	// Placing
	contactLink.appendChild(contactText);
	contact.appendChild(contactLink);
	document.body.appendChild(contact);
}