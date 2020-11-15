/* var articles = document.getElementsByClassName("article-js");

for (var i = 0; i < articles.length; i++){
	var div1 = document.createElement("div");
	div1.setAttribute("id", articles[i].name + "Article");
	div1.setAttribute("class", "article anime");

	var div2 = document.createElement("div");
	div2.setAttribute("class", "articleReflet anime");

	var div3 = document.createElement("div");
	div3.setAttribute("class", "articleTitle lightFont anime");

	var title = document.createTextNode(articles[i].text);

	articles[i].removeChild(articles[i].firstChild);

	div3.appendChild(title);
	div2.appendChild(div3);
	div1.appendChild(div2);
	articles[i].appendChild(div1);
} */

function DeveloppeArticles(elements, loc){
	for (var i = 0; i < elements.length; i++){

		var corps = document.createElement("a");
		corps.setAttribute("href", elements[i][2]);

		var div1 = document.createElement("div");
		div1.setAttribute("id", elements[i][0] + "Article");
		div1.setAttribute("class", "article anime");

		var div2 = document.createElement("div");
		div2.setAttribute("class", "articleReflet anime");

		var div3 = document.createElement("div");
		div3.setAttribute("class", "articleTitle lightFont anime");

		var titre = document.createTextNode(elements[i][1]);

		div3.appendChild(titre);
		div2.appendChild(div3);
		div1.appendChild(div2);
		corps.appendChild(div1);
		document.getElementById(loc).appendChild(corps);
	}
}