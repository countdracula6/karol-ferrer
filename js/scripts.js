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

// Bookmark Karol
function bookmarkKarol() {
  alert("Karol Ferrer has been bookmarked in your heart!");
}

// Share Karol Profile
function shareKarol() {
  if (navigator.share) {
    navigator
      .share({
        title: "Karol Ferrer VIP",
        text: "Check out Karol Ferrer VIP site!",
        url: window.location.href,
      })
      .then(() => console.log("Thanks for sharing!"))
      .catch((error) => console.log("Share failed:", error));
  } else {
    alert("Sharing is not supported on your device.");
  }
}

function showCareMessage() {
  alert(
    "Only my subscribers can reach me through smart chat. Become one and let's have fun. Kisses!"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  let liveCamLoops = 0;
  const liveCamVideo = document.getElementById("liveCamVideo");
  const liveOverlay = document.getElementById("liveOverlay");

  liveCamVideo.addEventListener("timeupdate", function () {
    if (liveCamVideo.currentTime > 0 && liveCamVideo.currentTime < 0.1) {
      // Every time it loops back to 0 seconds
      liveCamLoops++;
      if (liveCamLoops >= 3) {
        liveOverlay.style.display = "flex"; // Show padlock overlay
        liveCamVideo.pause(); // Stop video
      }
    }
  });
});
