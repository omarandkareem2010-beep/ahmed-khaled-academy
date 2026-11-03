const SUPABASE_URL = "https://kjwocuzjcraxhtkokhrj.supabase.co";
const SUPABASE_KEY = "ضع_PUBLISHABLE_KEY_هنا";
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

      const password = prompt("أنشئ كلمة مرور:");
      if (!password) return;

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName }
        }
      });

      if (error) {
        alert("حدث خطأ: " + error.message);
      } else {
        alert("تم إنشاء الحساب. راجع بريدك الإلكتروني إذا طُلب منك تأكيده.");
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
        email,
        password
      });

      if (error) {
        alert("تعذر تسجيل الدخول: " + error.message);
      } else {
        alert("تم تسجيل الدخول بنجاح!");
      }
    });
  }
});
