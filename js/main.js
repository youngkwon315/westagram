const commentUl = document.body.querySelector(".commentList");
const commentInput = document.body.querySelector(".commentDesc");
const commentBtn = document.body.querySelector(".commentBtn");

const uploadComment = () => {
  if (commentInput.value) {
    let liNew = document.createElement("li");
    liNew.innerHTML = `<span class="commentId">youngkwon315</span>
    <span class="commentDetail">${commentInput.value}</span>`;
    commentUl.appendChild(liNew);
    commentInput.value = "";
  }
};

commentBtn.addEventListener("click", uploadComment);
commentInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    uploadComment();
  }
});
