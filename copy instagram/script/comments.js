const textarea = document.querySelector('textarea');
const submit = document.querySelector('#submit');
const comments = document.getElementById('commentBox');

const commentsArray = [];

function saveComments() {
  let list = '';
  commentsArray.forEach(comment => {
    list += `<p>${comment}</p>`
  });
  comments.innerHTML = list;
}

submit.onclick = function(event) {
    event.preventDefault();
    const content = textarea.value;
    if(content.length > 0){
      commentsArray.unshift(content);
      saveComments();
      textarea.value = '';
    }
}