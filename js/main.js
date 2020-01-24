var postTitle = document.getElementById('postTitle');
var postBody= document.getElementById('postBody');
var submitButton= document.getElementById('submitButton');
var table= document.getElementById('blogTable');
var viewButton = document.getElementById('viewButton');
var confirmDelete = document.getElementById('confirmAction');
var declineAction =document.getElementById('declineAction');
var postArray=[]=[];
var rowIndex;
var title;
var body;

postTitle.addEventListener('change',(e)=>{
	title = e.target.value;
});
postBody.addEventListener('change',(e)=>{
	body = e.target.value;
});
submitButton.addEventListener('click',(e)=>{
	let postObj = {blogTitle:title,blogBody:body};
	postArray.push(postObj);
	let blogs = JSON.parse(localStorage.getItem('blogPosts'));
	blogs.push(postArray);
	localStorage.setItem('blogPosts',JSON.stringify(blogs))
	postTitle.value='';
	postBody.value='';
	console.log(localStorage.getItem('blogPosts'))
});

confirmDelete.addEventListener('click',(e)=>{
	let blogs = JSON.parse(localStorage.getItem('blogPosts'));
	let index = parseInt(rowIndex)-1;
	blogs.slice(index,1)
	localStorage.setItem('blogPosts',JSON.stringify(blogs))
	document.getElementById('alertContent').innerHTML="Post Deleted Successfully";
	setTimeout(val=>{
		document.getElementById('alert').style.display="none";
		window.location = "index.html";
	},1000)
});

declineAction.addEventListener('click',(e)=>{
	document.getElementById('modal-center').style.display="none"
});

function  getId(element) {
	rowIndex = element.closest('tr').rowIndex;
	console.log(rowIndex)
}

viewButton.addEventListener('click',(e)=>{
	let blogs = JSON.parse(localStorage.getItem('blogPosts'));
	document.getElementById('totalPosts').innerHTML=blogs.length;

	var tableBody='';
	let i = 0;
	blogs.forEach(val=>{
		i+=1;
		tableBody=tableBody+'<tr>'+
		'<td>'+i+'</td>'+
		'<td>'+val.blogTitle+'</td>'+
		'<td>'+val.blogBody+'</td>'+
		'<td>'+ '<a class="uk-icon-link" uk-icon="trash" onclick="getId(this)" href="#modal-center" uk-toggle></a>'+   '<a href="#" class="uk-icon-link uk-margin-small-right" uk-icon="file-edit"></a>'+'</td>'+
	'</tr>';
	})
	console.log(tableBody)
	document.getElementById('tableBody').innerHTML=tableBody;
})



