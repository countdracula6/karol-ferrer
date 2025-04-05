function openIframeModal(url) {
  document.getElementById("iframeModal").style.display = "block";
  document.getElementById("iframeModalSrc").src = url;
}

function openPaymentModal() {
  document.getElementById("paymentModal").style.display = "block";
}

function closeModal() {
  document.getElementById("iframeModal").style.display = "none";
  document.getElementById("paymentModal").style.display = "none";
  document.getElementById("iframeModalSrc").src = ""; // Clear URL
}

function toggleCommentBox() {
  const commentBox = document.getElementById("commentBox");
  commentBox.style.display =
    commentBox.style.display === "block" ? "none" : "block";
}
