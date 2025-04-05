function openIframeModal(url) {
  const modal = document.getElementById("iframeModal");
  const iframe = document.getElementById("iframeModalSrc");
  iframe.src = url;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("iframeModal").style.display = "none";
  document.getElementById("iframeModalSrc").src = ""; // Clean iframe
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

  liveCamVideo.addEventListener("ended", function () {
    liveCamLoops++;
    if (liveCamLoops >= 3) {
      liveOverlay.style.display = "flex"; // Show padlock overlay
      liveCamVideo.pause(); // STOP video
    } else {
      liveCamVideo.currentTime = 0; // Reset video time
      liveCamVideo.play(); // Play again manually
    }
  });
});

function openPaymentModal() {
  const modal = document.getElementById("paymentModal");
  modal.style.display = "block";
}

function selectDonation(amount) {
  alert("You selected to donate $" + amount);
}

function payMethod(method) {
  alert(
    "You selected " +
      method +
      " as your payment method. We will contact you shortly!"
  );
  closeModal();
}

function closeModal() {
  document.getElementById("iframeModal").style.display = "none";
  document.getElementById("paymentModal").style.display = "none";
  if (document.getElementById("iframeModalSrc")) {
    document.getElementById("iframeModalSrc").src = "";
  }
}
