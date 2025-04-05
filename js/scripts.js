// IFRAME MODAL
function openIframeModal(url) {
  const modal = document.getElementById("iframeModal");
  const iframe = document.getElementById("iframeModalSrc");
  iframe.src = url;
  modal.style.display = "block";
}

// Payment Modal
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

// Close any Modal
function closeModal() {
  document.getElementById("iframeModal").style.display = "none";
  document.getElementById("paymentModal").style.display = "none";
  if (document.getElementById("iframeModalSrc")) {
    document.getElementById("iframeModalSrc").src = "";
  }
}

// Toggle Comment Box
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
        text: "Check out Karol Ferrer's VIP site!",
        url: window.location.href,
      })
      .then(() => console.log("Thanks for sharing!"))
      .catch((error) => console.log("Share failed:", error));
  } else {
    alert("Sharing is not supported on your device.");
  }
}

// Show Care Message
function showCareMessage() {
  alert(
    "Only my subscribers can reach me through smart chat. Become one and let's have fun. Kisses!"
  );
}

// Live Cam Padlock After 3 Loops
document.addEventListener("DOMContentLoaded", function () {
  let liveCamLoops = 0;
  const liveCamVideo = document.getElementById("liveCamVideo");
  const liveOverlay = document.getElementById("liveOverlay");

  if (liveCamVideo) {
    liveCamVideo.addEventListener("ended", function () {
      liveCamLoops++;
      if (liveCamLoops >= 3) {
        liveOverlay.style.display = "flex"; // Show padlock overlay
        liveCamVideo.pause(); // STOP teaser video
      } else {
        liveCamVideo.currentTime = 0;
        liveCamVideo.play();
      }
    });
  }
});

// LIVE STREAM SYSTEM
let userBalance = 100.0;
let liveInterval = null;
let privateMode = false;
let chatOverlayTimeout;

function openLiveModal() {
  const modal = document.getElementById("liveModal");
  const video = document.getElementById("karolLiveVideo");
  modal.style.display = "block";
  video.play();
  startSpending();
}

function closeLiveModal() {
  const modal = document.getElementById("liveModal");
  const video = document.getElementById("karolLiveVideo");
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
  clearInterval(liveInterval);
  privateMode = false; // Reset private mode
}

function startSpending() {
  liveInterval = setInterval(() => {
    if (privateMode) {
      userBalance -= 4.99; // Private is more expensive
    } else {
      userBalance -= 1.99; // Normal public cam
    }

    if (userBalance <= 0) {
      userBalance = 0;
      closeLiveModal();
      alert("Your balance ran out, baby! Recharge to continue.");
    }
    updateBalanceDisplay();
  }, 60000); // Every 1 minute
}

function updateBalanceDisplay() {
  const balanceElement = document.getElementById("userBalance");
  if (balanceElement) {
    balanceElement.textContent = userBalance.toFixed(2);
  }
}

// Tip Karol
function tipKarol() {
  if (userBalance >= 10) {
    userBalance -= 10;
    updateBalanceDisplay();
    alert("You tipped Karol $10 ❤️");
  } else {
    alert("Not enough balance to tip, darling.");
  }
}

// Go to Private Cam
function goPrivate() {
  if (!privateMode) {
    privateMode = true;
    alert("You are now in PRIVATE CAM mode 💋 ($4.99 per minute)");
  }
}

// LIVE STREAM CHAT
function sendMessage() {
  const messageInput = document.getElementById("userMessage");
  const chatMessages = document.getElementById("chatMessages");
  const userText = messageInput.value.trim();

  if (userText !== "") {
    const userMsg = document.createElement("div");
    userMsg.classList.add("user-message");
    userMsg.textContent = userText;
    chatMessages.appendChild(userMsg);
    messageInput.value = "";

    showChatOverlay(); // Keep chat visible after typing

    // Auto reply from Karol after 2 sec
    setTimeout(() => {
      const karolReply = document.createElement("div");
      karolReply.classList.add("karol-message");
      karolReply.textContent = getRandomKarolReply();
      chatMessages.appendChild(karolReply);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 2000);
  }
}

function getRandomKarolReply() {
  const replies = [
    "You're making me blush 😘",
    "I love talking to you 💖",
    "Wish you were here right now 🔥",
    "You're so sweet 🥰",
    "I’m waiting for you baby 💋",
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// Live Chat Overlay Show/Hide
function showChatOverlay() {
  const chatOverlay = document.getElementById("liveChatOverlay");
  chatOverlay.classList.remove("hidden");

  clearTimeout(chatOverlayTimeout);
  chatOverlayTimeout = setTimeout(() => {
    chatOverlay.classList.add("hidden");
  }, 5000); // Hide after 5 seconds
}
