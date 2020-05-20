import io from "./sock.js";
var socket = io();
socket.on("welcome", function (msg) {
  console.info(
    "Connected RELOAD.JS\nhttps://github.com/Sharkbyteprojects/reload.js"
  );
});
socket.on("reload", (msg) => {
  console.info("Reload");
  document.location.reload();
});
