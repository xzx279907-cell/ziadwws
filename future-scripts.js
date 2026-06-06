function getStoredAccounts() {
  try {
    return JSON.parse(localStorage.getItem('realestate_accounts') || '[]');
  } catch (error) {
    return [];
  }
}
function saveStoredAccounts(accounts) {
  localStorage.setItem('realestate_accounts', JSON.stringify(accounts));
}
function seedDemoAccounts() {
  const accounts = getStoredAccounts();
  if (accounts.length === 0) {
    accounts.push(
      {
        name: 'أحمد مصطفى',
        username: 'ahmed123',
        email: 'ahmed@example.com',
        phone: '01012345678',
        password: 'pass1234',
        date: new Date().toISOString().slice(0, 10),
        gender: 'ذكر',
        bio: 'مهتم بشراء أفضل العقارات في مصر.',
        avatar: ''
      },
      {
        name: 'سارة علي',
        username: 'saraali',
        email: 'sara@example.com',
        phone: '01122334455',
        password: 'pass1234',
        date: new Date().toISOString().slice(0, 10),
        gender: 'أنثى',
        bio: 'بحث دائم عن الفلل الفاخرة.',
        avatar: ''
      }
    );
    saveStoredAccounts(accounts);
  }
}
function getCurrentUserId() {
  return localStorage.getItem('realestate_current_user') || localStorage.getItem('realestate_username') || '';
}
function findAccount(identifier) {
  const accounts = getStoredAccounts();
  const normalized = identifier.trim().toLowerCase();
  return accounts.find(acc => acc.username.toLowerCase() === normalized || acc.email.toLowerCase() === normalized);
}
function getCurrentAccount() {
  const currentId = getCurrentUserId();
  if (!currentId) return null;
  return findAccount(currentId);
}
function syncProfileFromAccount() {
  const account = getCurrentAccount();
  if (!account) return null;
  const profile = {
    name: account.name,
    username: account.username,
    email: account.email,
    gender: account.gender || '',
    phone: account.phone || '',
    date: account.date || new Date().toISOString().slice(0, 10),
    bio: account.bio || '',
    avatar: account.avatar || ''
  };
  localStorage.setItem('realestate_profile', JSON.stringify(profile));
  if (profile.avatar) {
    localStorage.setItem('realestate_avatar', profile.avatar);
  }
  return profile;
}
function logout() {
  localStorage.removeItem('realestate_current_user');
  localStorage.removeItem('realestate_username');
  localStorage.removeItem('realestate_profile');
  localStorage.removeItem('realestate_avatar');
  window.location.href = 'login.html';
}
const properties = [
  {
    title: 'فيلا فاخرة في التجمع الخامس',
    desc: '6 غرف | 5 حمامات | 520م² | حديقة ومسبح خاص',
    price: '16,700,000 جنيه',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'فيلا مستقلة في الشيخ زايد',
    desc: '5 غرف | 4 حمامات | 420م² | تصميم حديث وفناء واسع',
    price: '11,200,000 جنيه',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'شقة دوبلكس في القاهرة الجديدة',
    desc: '4 غرف | 3 حمامات | 260م² | فيو خلاب وبسعر مميز',
    price: '4,100,000 جنيه',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'شقة راقية في المعادي',
    desc: '3 غرف | 2 حمام | 170م² | تشطيب سوبر لوكس',
    price: '3,250,000 جنيه',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'فيلا فخمة في المستقبل سيتي',
    desc: '7 غرف | 6 حمامات | 550م² | مسبح داخلي وغرفة سينما',
    price: '19,900,000 جنيه',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'فيلا على البحر في العين السخنة',
    desc: '5 غرف | 4 حمامات | 450م² | شاطئ خاص ومسبح خارجي',
    price: '18,400,000 جنيه',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'شاليه فاخر في الساحل الشمالي',
    desc: '4 غرف | 3 حمامات | 320م² | قرب البحر ومرافق كاملة',
    price: '9,700,000 جنيه',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'فيلا بقلب الساحل الشمالي',
    desc: '6 غرف | 5 حمامات | 430م² | تصميم فاخر وحديقة كبيرة',
    price: '13,800,000 جنيه',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'شقة استوديو في وسط البلد',
    desc: '1 غرفة | 1 حمام | 65م² | موقع تجاري مميز',
    price: '1,050,000 جنيه',
    img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'فيلا تاون هاوس في التجمع الأول',
    desc: '4 غرف | 3 حمامات | 310م² | مساحة خارجية وحديقة خاصة',
    price: '8,950,000 جنيه',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80'
  }
];
function renderProperties() {
  const grid = document.querySelector('.properties-grid') || document.getElementById('all-properties-grid');
  if (!grid) return;
  grid.innerHTML = '';
  properties.forEach(prop => {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.innerHTML = `
      <img src="${prop.img}" alt="${prop.title}" />
      <div class="card-content">
        <div>
          <div class="card-title">${prop.title}</div>
          <div class="card-desc">${prop.desc}</div>
        </div>
        <div>
          <div class="card-price">${prop.price}</div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}
function updateHomepageMenu() {
  const userMenuWrapper = document.getElementById('user-menu-wrapper');
  const loginLink = document.querySelector('.login-link');
  const userMenuToggle = document.getElementById('user-menu-toggle');
  const currentAccount = getCurrentAccount();
  if (currentAccount) {
    if (loginLink) loginLink.style.display = 'none';
    if (userMenuWrapper) {
      userMenuWrapper.style.display = 'inline-flex';
      if (userMenuToggle) {
        const avatarHtml = currentAccount.avatar
          ? `<img src="${currentAccount.avatar}" alt="الصورة الشخصية" />`
          : `<span class="avatar-placeholder">${currentAccount.name.trim().charAt(0)}</span>`;
        // Make the main area navigate to profile and keep a separate arrow to toggle menu
        userMenuToggle.innerHTML = `${avatarHtml}<span id="user-link" class="user-label" data-href="user-profile.html">${currentAccount.username}</span><span id="menu-arrow" class="menu-arrow">▾</span>`;
      }
    }
  } else {
    if (loginLink) loginLink.style.display = 'inline-flex';
    if (userMenuWrapper) userMenuWrapper.style.display = 'none';
  }
}
function setupMenuBehavior() {
  const userMenuToggle = document.getElementById('user-menu-toggle');
  const userMenu = document.getElementById('user-menu');
  if (userMenuToggle && userMenu) {
    // clicking the arrow toggles the menu; clicking the label/image navigates to profile
    const menuArrow = userMenuToggle.querySelector('#menu-arrow');
    const userLink = userMenuToggle.querySelector('#user-link');
    if (menuArrow) {
      menuArrow.addEventListener('click', function(e) {
        e.stopPropagation();
        userMenu.classList.toggle('active');
      });
    }
    if (userLink) {
      userLink.addEventListener('click', function(e) {
        // navigate to profile page
        const href = userLink.getAttribute('data-href') || 'user-profile.html';
        window.location.href = href;
      });
    }
    document.addEventListener('click', function() {
      userMenu.classList.remove('active');
    });
    userMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  const logoutLink = document.getElementById('logout-link');
  if (logoutLink) {
    logoutLink.addEventListener('click', function(e) {
      e.preventDefault();
      logout();
    });
  }
  const accountSettingsLink = document.getElementById('account-settings-link');
  if (accountSettingsLink) {
    accountSettingsLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'user-profile.html';
    });
  }
}
function renderPropertiesPageUser() {
  const currentAccount = getCurrentAccount();
  const userInfo = document.getElementById('user-info');
  if (!userInfo || !currentAccount) return;
  const userName = document.getElementById('user-name');
  if (userName) {
    userName.textContent = currentAccount.username;
  }
  userInfo.style.display = 'block';
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
}
document.addEventListener('DOMContentLoaded', function() {
  seedDemoAccounts();
  const pageName = window.location.pathname.split('/').pop();
  const currentAccount = getCurrentAccount();
  if (['properties.html', 'user-profile.html'].includes(pageName) && !currentAccount) {
    window.location.href = 'login.html';
    return;
  }
  if (currentAccount) {
    syncProfileFromAccount();
  }
  updateHomepageMenu();
  setupMenuBehavior();
  renderProperties();
  if (pageName === 'properties.html') {
    renderPropertiesPageUser();
  }
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('تم إرسال رسالتك بنجاح! سوف نتواصل معك قريباً.');
      contactForm.reset();
    });
  }
});
