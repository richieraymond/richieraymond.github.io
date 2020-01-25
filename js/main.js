var postTitle = document.getElementById('postTitle');
var postBody= document.getElementById('postBody');
var submitButton= document.getElementById('submitButton');
var table= document.getElementById('blogTable');
var viewButton = document.getElementById('viewButton');
var confirmDelete = document.getElementById('confirmAction');
var addPost = document.getElementById('addPost');
var editButton = document.getElementById('addPost');

var clearForm = document.getElementById('clearForm');
localStorage.clear();
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
	if(title==null || body==null){
		showAlert('alertDanger','Both post title and body are required','alertDangerContent');
		return;
	}
	postObj={blogTitle:title,blogBody:body};
	if(rowIndex){
		let itemIndex = parseInt(rowIndex)-1;
		postArray.splice(itemIndex,1,postObj)
	}else{
		postArray.push(postObj);
	}
	localStorage.setItem('blogPosts',JSON.stringify(postArray))
	postTitle.value='';
	postBody.value='';
	showAlert('alert','Post Added Successfully','alertContent');
	document.getElementById('blogform').style.display="none"
	console.log(localStorage.getItem('blogPosts'))
});

function showAlert(alertId,alertMessage,alertMessageId){
	document.getElementById(alertMessageId).innerHTML=alertMessage;
	document.getElementById(alertId).style.display="block";
	setTimeout(val=>{
		closeNotification(alertId);
	},1000)

}
function closeNotification(alertId){
	document.getElementById(alertId).style.display="none";
}

confirmDelete.addEventListener('click',(e)=>{
	let itemIndex = parseInt(rowIndex)-1;
	postArray.splice(itemIndex,1)
	localStorage.setItem('blogPosts',JSON.stringify(postArray))
	showAlert('alert','Record Deleted Successfully!','alertContent')
	document.getElementById('modal-center').style.display="none";
	viewButton.click();
});

function edit(){
	let itemIndex = parseInt(rowIndex)-1;
	console.log(postArray)
	if(postArray.length>0){
		let postToEdit = postArray[itemIndex];
		postTitle.value=postToEdit.blogTitle;
		postBody.value=postToEdit.blogBody;
		document.getElementById('blogTable').style.display="none";
		document.getElementById('blogform').style.display="inline";
	}


}
	

declineAction.addEventListener('click',(e)=>{
	document.getElementById('modal-center').style.display="none"
});

function  getId(element) {
	rowIndex = element.closest('tr').rowIndex;
	console.log(rowIndex)
}

viewButton.addEventListener('click',(e)=>{
	let blogs = JSON.parse(localStorage.getItem('blogPosts'));
	if(blogs){
		document.getElementById('totalPosts').innerHTML=blogs.length;
		console.log(blogs)
		var tableBody='';
		let i = 0;
		blogs.forEach(val=>{
			i+=1;
			tableBody=tableBody+'<tr>'+
			'<td>'+i+'</td>'+
			'<td>'+val.blogTitle+'</td>'+
			'<td>'+val.blogBody+'</td>'+
			'<td>'+ '<a class="uk-icon-link" uk-icon="trash" onclick="getId(this)" href="#modal-center" uk-toggle></a>'+   '<a href="#" class="uk-icon-link uk-margin-small-right" uk-icon="file-edit" onclick="getId(this);edit()"></a>'+'</td>'+
		'</tr>';
		})
		console.log(tableBody)
		document.getElementById('tableBody').innerHTML=tableBody;
		document.getElementById('blogform').style.display="none";
		document.getElementById('blogTable').style.display="inline";
	}else{
		document.getElementById('totalPosts').innerHTML=0;
	}
})
addPost.addEventListener('click',(e)=>{
	document.getElementById('blogform').style.display="inline";
	document.getElementById('blogTable').style.display="none";

})

clearForm.addEventListener('click',(e)=>{
	postTitle.value="";
	postBody.value="";

})


