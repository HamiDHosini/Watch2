// ایمپورت Firebase از CDN (ماژول ES)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// تنظیمات Firebase (مقادیر خودت رو وارد کن)
const firebaseConfig = {
  apiKey: "AIzaSyCfp3p2FwaO0mzhII9XCcbk1j8v9oDnx_8",
  authDomain: "ansar-900ae.firebaseapp.com",
  projectId: "ansar-900ae",
  storageBucket: "ansar-900ae.appspot.com",
  messagingSenderId: "397643058604",
  appId: "1:397643058604:web:9f08fa16433c68e8f27e09",
  measurementId: "G-NTML0W8ZJY"
};

// مقداردهی اولیه Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// متغیرهای سراسری
let username = localStorage.getItem("username") || "";
let player; // شی YouTube Player

// تابع ثبت نام کاربر
window.setUsername = function() {
  const input = document.getElementById("username").value.trim();
  if (input) {
    username = input;
    localStorage.setItem("username", username);
    document.getElementById("username-container").classList.add("d-none");
    document.getElementById("video-container").classList.remove("d-none");
  } else {
    alert("لطفاً نام خود را وارد کنید.");
  }
};

// این تابع زمانی فراخوانی می‌شود که IFrame API آماده باشد
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'dQw4w9WgXcQ', // آیدی ویدیوی یوتیوب (می‌توانید تغییر دهید)
    events: {
      'onReady': onPlayerReady
    }
  });
};

// زمانی که پلیر آماده شد، رویدادهای دکمه‌ها را تنظیم می‌کنیم
function onPlayerReady(event) {
  document.getElementById("play-btn").addEventListener("click", () => {
    player.playVideo();
    syncVideo("play");
  });
  document.getElementById("pause-btn").addEventListener("click", () => {
    player.pauseVideo();
    syncVideo("pause");
  });
}

// تابع همگام‌سازی وضعیت ویدیو: ارسال وضعیت به Firebase
function syncVideo(action) {
  set(ref(database, "video/state"), {
    action: action,
    timestamp: Date.now()
  });
}

// گوش دادن به تغییرات وضعیت ویدیو از Firebase
onValue(ref(database, "video/state"), (snapshot) => {
  const data = snapshot.val();
  if (data && player) {
    // اگر وضعیت ویدیو play است و پلیر در حالت پخش نیست، پخش کن
    if (data.action === "play" && player.getPlayerState() !== YT.PlayerState.PLAYING) {
      player.playVideo();
    }
    // اگر وضعیت ویدیو pause است و پلیر در حالت توقف نیست، متوقف کن
    if (data.action === "pause" && player.getPlayerState() !== YT.PlayerState.PAUSED) {
      player.pauseVideo();
    }
  }
});
window.openVideo = function() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };
  // اضافه کردن API یوتیوب
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// متغیر پلیر


// تابع آماده شدن API
function onYouTubeIframeAPIReady() {
    console.log("YouTube API Ready"); // چک کن که این پیام در کنسول نمایش داده می‌شود
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'dQw4w9WgXcQ', // یک ویدیو تستی
        events: {
            'onReady': onPlayerReady
        }
    });
}

// تابعی که بعد از آماده شدن پلیر اجرا می‌شود
function onPlayerReady(event) {
    console.log("Player is ready");
}

  
