function openModal() {
  document.getElementById("donateModal").style.display = "block";
}

function closeModal() {
  document.getElementById("donateModal").style.display = "none";
}

function toggleCommentBox() {
  const commentBox = document.getElementById("commentBox");
  commentBox.style.display =
    commentBox.style.display === "block" ? "none" : "block";
}
