// قائمة المستخدم المنسدلة وتسجيل الخروج
document.addEventListener('DOMContentLoaded', function() {
  const userMenuToggle = document.getElementById('user-menu-toggle');
  const userMenu = document.getElementById('user-menu');
  if (userMenuToggle && userMenu) {
    userMenuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', function() {
      userMenu.style.display = 'none';
    });
    userMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  // تسجيل الخروج
  const logoutLink = document.getElementById('logout-link');
  if (logoutLink) {
    logoutLink.addEventListener('click', function(e) {
      e.preventDefault();
      localStorage.removeItem('realestate_username');
      localStorage.removeItem('realestate_avatar');
      localStorage.removeItem('realestate_profile');
      window.location.href = 'login.html';
    });
  }
  // إعدادات الحساب
  const accountSettingsLink = document.getElementById('account-settings-link');
  if (accountSettingsLink) {
    accountSettingsLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'user-profile.html';
    });
  }
});
// تفعيل نموذج تسجيل الدخول في الصفحة الرئيسية وتخزين اسم العميل
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('.login-main-section .login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const nameInput = loginForm.querySelector('input[name="name"], input[name="username"]');
      if (nameInput && nameInput.value.trim()) {
        localStorage.setItem('realestate_username', nameInput.value.trim());
      }
      alert('تم تسجيل الدخول بنجاح!');
      loginForm.reset();
    });
  }

  // إظهار اسم العميل في الشريط العلوي إذا كان مسجلاً
  const userMenuWrapper = document.getElementById('user-menu-wrapper');
  const userMenuToggle = document.getElementById('user-menu-toggle');
  const loginLink = document.querySelector('.login-link');
  const storedName = localStorage.getItem('realestate_username');
  const storedAvatar = localStorage.getItem('realestate_avatar');
  if (storedName) {
    if (loginLink) {
      loginLink.style.display = 'none';
    }
    if (userMenuWrapper) {
      userMenuWrapper.style.display = 'inline-flex';
      if (userMenuToggle) {
        const avatarHtml = storedAvatar
          ? `<img src="${storedAvatar}" alt="الصورة الشخصية" />`
          : `<span class="avatar-placeholder">${storedName.trim().charAt(0)}</span>`;
        userMenuToggle.innerHTML = `${avatarHtml}<span class="user-label">${storedName}</span><span class="menu-arrow">▾</span>`;
      }
    }
  }
});
// إضافة عقارات تجريبية ديناميكياً
const properties = [
  {
    title: "شقة فاخرة في التجمع الخامس",
    desc: "3 غرف | 2 حمام | 180م² | تشطيب سوبر لوكس",
    price: "2,500,000 جنيه",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "فيلا مستقلة في الشيخ زايد",
    desc: "5 غرف | 4 حمام | 400م² | حديقة خاصة",
    price: "7,800,000 جنيه",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "استوديو في وسط البلد",
    desc: "1 غرفة | 1 حمام | 60م² | موقع مميز",
    price: "950,000 جنيه",
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80"
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.properties-grid');
  if (grid) {
    properties.forEach(prop => {
      const card = document.createElement('div');
      card.className = 'property-card';
      card.innerHTML = `
        <img src="${prop.img}" alt="${prop.title}" />
        <div class="card-content">
          <div class="card-title">${prop.title}</div>
          <div class="card-desc">${prop.desc}</div>
          <div class="card-price">${prop.price}</div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // تفعيل إرسال نموذج التواصل
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('تم إرسال رسالتك بنجاح! سنقوم بالتواصل معك قريباً.');
      form.reset();
    });
  }
});
