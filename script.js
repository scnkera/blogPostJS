console.log("JS Linked on homepage");

// #18 Go to localStorage and get the item out with a key of posts.
const postsAsString = window.localStorage.getItem("posts");
// #19 Localstorage returns out value as a stirng, so we need to parse (convert the string back to an object)
//using JSON.
let posts = JSON.parse(postsAsString);
// #20 Test to make sure we can access keys in the object, because if it were a string, we wouldn't be able to.
console.log(posts);

let generatedHTML = "";

if (!postsAsString) {
	generatedHTML = "No posts exist yet";
} else {
	posts = posts.sort((a, b) => {
		return b.timestamp - a.timestamp;
	});
	// #21 Create a large template literal that represents the HTML for a single post and drop in
	//the parsed data from the object that came from localstorage (#18 & #19). The keys of this data
	//line up with the object we created in #13.
	for (let post of posts) {
		generatedHTML += `
<div class="col-4">
	<div class="card">
		<!-- <img src="..." class="card-img-top" alt="..." /> -->
		<div class="card-body">
			<h5 class="card-title">${post.title}</h5>
			<div class="card-text">
				<div class="author">by ${post.author}</div>
				<div class="timestamp">${new Date(post.timestamp).toLocaleTimeString()}</div>
				<p>${post.content}</p>
			</div>
			<a href="#" class="btn btn-primary">Read more</a>
			<!-- End of card-body -->
		</div>
		<!-- End of card -->
	</div>
	<!-- end of the col -->
</div>`;
	}
}

//alternative to using a template litertal which we did above using string concatentation
// let generatedHTML =
// 	'<div class="col-4"><div class="card"><div class="card-body"><h5 class="card-title">' +
// 	post.title +
// 	'</h5><div class="card-text"><div class="author">by ' +
// 	post.author +
// 	'</div><div class="timestamp">' +
// 	new Date(post.timestamp).toLocaleTimeString() +
// 	"</div><p>" +
// 	post.content +
// 	'</p></div><a href="#" class="btn btn-primary">Read more</a></div></div></div>';

// #22 Get the posts element from our HTML and set the contents of it equal to our template literal from #21.
document.getElementById("posts").innerHTML = generatedHTML;
