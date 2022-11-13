var follow = parseInt(document.getElementById("follow").value);
const followUpdate = document.getElementById("follow"),
followBtn = document.getElementById("followBtn");

var like = parseInt(document.getElementById("like").value);
var likeUpdate = document.getElementById("like");
const heartChange = document.getElementById("heartChange");

const overlay = document.getElementById("overlay"),
backgroundOverlay = document.getElementById("backgroundOverlay");

function change() {
    if (followBtn.value=="Follow"){
    follow++,
    followUpdate.value = follow,
    followBtn.value = "Following",
    followBtn.style.background = "rgb(209, 209, 209)",
    followBtn.style.borderColor = "rgba(0, 0, 0, 0.53)";

    }else {followBtn.value = "Follow",
    follow--,
    followUpdate.value = follow,
    followBtn.style.background = "rgb(4, 150, 255)",
    followBtn.style.borderColor = "rgba(0, 0, 0, 0.53)";
  }
}

function likes() {
    if (heartChange.style.fill=="red"){
    like--,
    likeUpdate.value = like,
    heartChange.style.fill = "rgba(0, 0, 0, 0.869)",
    heartChange.classList.remove("animateHeart"); 
    }else {heartChange.style.fill="rgba(0, 0, 0, 0.869)",
    like++,
    likeUpdate.value = like,
    heartChange.style.fill = "red",
    heartChange.classList.add("animateHeart");
  }   
}

function showImg() {
  overlay.style.display = "block";
  backgroundOverlay.style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function off() {
  overlay.style.display = "none";
  backgroundOverlay.style.display = "none";
  document.body.classList.remove("stop-scrolling");
}
    
