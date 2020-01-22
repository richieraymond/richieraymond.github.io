var postTitile = document.getElementById('postTitle');
var postBody= document.getElementById('postBody');
var submitButton= document.getElementById('submitButton');
var table= document.getElementById('blogTable');

var postArray=[]=[];
var title;
var body;
postTitile.addEventListener('change',(e)=>{
	title = e.target.value;
});
postBody.addEventListener('change',(e)=>{
	body = e.target.value;
});
submitButton.addEventListener('click',(e)=>{
	let postObj = {title:title,body:body};
	postArray.push(postObj);
	localStorage.setItem('blogPosts',JSON.stringify(postArray))
	console.log(localStorage.getItem('blogPosts'))
});

