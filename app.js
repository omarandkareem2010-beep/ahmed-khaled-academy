// أكاديمية المؤرخ أحمد خالد

document.addEventListener("DOMContentLoaded", function () {

  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");

  // زر إنشاء الحساب
  if (signupBtn) {
    signupBtn.addEventListener("click", function () {
      alert("إنشاء حساب الطالب سيتم تفعيله في الخطوة القادمة.");
    });
  }

  // زر تسجيل الدخول
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      alert("تسجيل دخول الطالب سيتم تفعيله في الخطوة القادمة.");
    });
  }

  console.log("أكاديمية المؤرخ أحمد خالد جاهزة.");
});

