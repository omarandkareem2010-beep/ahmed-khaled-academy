// أكاديمية المؤرخ أحمد خالد

document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll("button");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      console.log("تم الضغط على: " + button.textContent);
    });
  });

});
