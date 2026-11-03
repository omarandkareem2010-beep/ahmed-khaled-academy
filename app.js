const SUPABASE_URL = "https://kjwocuzjcraxhtkokhrj.supabase.co";

// ضع هنا مفتاح Publishable الحقيقي من Supabase
const SUPABASE_KEY = "sb_publishable_oUzH9-zF1vxPKiGN2h3LXQ_AovJUn_Q";
console.log("APP JS LOADED");
const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

document.addEventListener("DOMContentLoaded", function () {
  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");

  if (signupBtn) {
    signupBtn.addEventListener("click", async function () {
      const fullName = prompt("اكتب اسم الطالب:");
      if (!fullName) return;

      const email = prompt("اكتب البريد الإلكتروني:");
      if (!email) return;

      const password = prompt("أنشئ كلمة مرور لا تقل عن 6 أحرف:");
      if (!password) return;

      if (password.length < 6) {
        alert("كلمة المرور قصيرة.");
        return;
      }

      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
        options: {
          data: { full_name: fullName.trim() }
        }
      });

      if (error) {
        alert("حدث خطأ: " + error.message);
      } else {
        alert("تم إرسال طلب إنشاء الحساب. راجع بريدك الإلكتروني إذا طُلب تأكيده.");
      }
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", async function () {
      const email = prompt("اكتب البريد الإلكتروني:");
      if (!email) return;

      const password = prompt("اكتب كلمة المرور:");
      if (!password) return;

      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password
      });

      if (error) {
        alert("تعذر تسجيل الدخول: " + error.message);
      } else {
        alert("تم تسجيل الدخول بنجاح!");
      }
    });
  }
});
