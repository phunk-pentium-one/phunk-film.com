class NavbarComponent extends HTMLElement {
  connectedCallback() {
    const isInsidePages = window.location.pathname.includes('/pages/');
    const pathPrefix = isInsidePages ? '../' : './';

    this.innerHTML = `
      <nav class="navbar">
        <a href="${pathPrefix}index.html" class="navbar-logo">
          <img src="${pathPrefix}img/logo/one.jpg" alt="Logo">
          Phunk <span>Film !!!</span>
        </a>
        <div class="auth-container">
          <!-- Ubah href menjadi '#' dan tambahkan id untuk Login -->
          <a href="#" id="navLoginBtn" class="btn btn-login">Login</a>
          <a href="#" id="navRegisterBtn" class="btn btn-register">Register</a>
        </div>
        <div class="navbar-extra">
          <a href="#" id="search"><i class="fa-solid fa-magnifying-glass"></i></a>
          <a href="#" id="shopping-cart"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
      </nav>

      <!-- ================= POP-UP LOGIN ================= -->
      <div id="loginModal" class="modal">
          <div class="modal-content">
              <span id="closeLoginBtn" class="close-btn">&times;</span>
              <h3>Masuk Akun</h3>
              <form>
                  <div class="form-group">
                      <input type="email" placeholder="Email atau Nama Pengguna" required>
                  </div>
                  <div class="form-group">
                      <input type="password" placeholder="Kata Sandi" required>
                  </div>
                  <button type="submit" class="submit-btn">Masuk</button>
              </form>
          </div>
      </div>

      <!-- ================= POP-UP REGISTRASI ================= -->
      <div id="regModal" class="modal">
          <div class="modal-content">
              <span id="closeModalBtn" class="close-btn">&times;</span>
              <h3>Registrasi</h3>
              <form>
                  <div class="form-group">
                      <input type="text" placeholder="Nama Pengguna" required>
                  </div>
                  <div class="form-group">
                      <input type="email" placeholder="Email" required>
                  </div>
                  <div class="form-group">
                      <input type="password" placeholder="Kata Sandi" required>
                  </div>
                  <button type="submit" class="submit-btn">Daftar</button>
              </form>
          </div>
      </div>
    `;

    // Elemen DOM untuk Modal Registrasi
    const regModal = this.querySelector('#regModal');
    const openRegBtn = this.querySelector('#navRegisterBtn');
    const closeRegBtn = this.querySelector('#closeModalBtn');

    // Elemen DOM untuk Modal Login
    const loginModal = this.querySelector('#loginModal');
    const openLoginBtn = this.querySelector('#navLoginBtn');
    const closeLoginBtn = this.querySelector('#closeLoginBtn');

    // --- LOGIKA UTAMA TOMBOL REGISTRASI ---
    if (openRegBtn) {
      openRegBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none'; // Tutup login jika sedang terbuka
        regModal.style.display = 'flex';
      });
    }
    if (closeRegBtn) {
      closeRegBtn.addEventListener('click', () => regModal.style.display = 'none');
    }

    // --- LOGIKA UTAMA TOMBOL LOGIN ---
    if (openLoginBtn) {
      openLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        regModal.style.display = 'none'; // Tutup registrasi jika sedang terbuka
        loginModal.style.display = 'flex';
      });
    }
    if (closeLoginBtn) {
      closeLoginBtn.addEventListener('click', () => loginModal.style.display = 'none');
    }

    // --- CLOSING TRIGGER (Klik di luar kotak konten untuk menutup) ---
    window.addEventListener('click', (event) => {
        if (event.target === regModal) regModal.style.display = 'none';
        if (event.target === loginModal) loginModal.style.display = 'none';
    });

    // Mendengarkan sinyal tombol "Mulai Sekarang" dari LayerSatuComponent
    window.addEventListener('trigger-global-register-modal', () => {
        loginModal.style.display = 'none';
        regModal.style.display = 'flex';
    });
  }
}
customElements.define('menu-navbar', NavbarComponent);
