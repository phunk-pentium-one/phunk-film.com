// Baris 1: Ganti nama Class menjadi LayerSatuComponent
class LayerSatuComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="hero">
                <div class="content">
                    <h1>Selamat Datang di <span>Phunk Film</span></h1>
                    <p>Temukan berbagai hal menarik dan keseruan tanpa batas di sini.</p>
                    <!-- Tambahkan id untuk target JavaScript -->
                    <a href="javascript:void(0)" id="openModalBtn" class="cta-button">Mulai Sekarang</a>
                </div>
            </section>

            <!-- Struktur Pop-up Template Registrasi -->
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

        // Logika JavaScript untuk mengontrol pop-up
        const modal = this.querySelector('#regModal');
        const openBtn = this.querySelector('#openModalBtn');
        const closeBtn = this.querySelector('#closeModalBtn');

        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex'; // Menggunakan flex agar konten otomatis ke tengah
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Baris terakhir: Ganti nama tag panggilannya sesuai di index.html tadi
customElements.define('layer-satu', LayerSatuComponent);
