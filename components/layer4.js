class LayerEmpatComponent extends HTMLElement {
  connectedCallback() {
    const isInsidePages = window.location.pathname.includes('/pages/');
    const pathPrefix = isInsidePages ? '../' : './';

    this.innerHTML = `
      <!-- Link CSS eksternal -->
      <link rel="stylesheet" href="${pathPrefix}css/modules/layer4.css">

      <!-- WAJIB: Div pembungkus utama agar cocok dengan spasi di CSS Anda -->
      <div class="layer-empat">
        <section class="contact-section" id="contact">
          <div class="contact-container">
            <h2>Hubungi <span>Kami</span></h2>
            <p>Ikuti media sosial kami untuk mendapatkan pembaruan info film terbaru setiap hari.</p>
            
            <div class="social-medias">
              <!-- Instagram -->
              <a href="https://instagram.com" target="_blank" class="social-box instagram">
                <i class="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </a>

              <!-- WhatsApp -->
              <a href="https://wa.me" target="_blank" class="social-box whatsapp">
                <i class="fa-brands fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>

              <!-- Facebook -->
              <a href="https://facebook.com" target="_blank" class="social-box facebook">
                <i class="fa-brands fa-facebook-f"></i>
                <span>Facebook</span>
              </a>

              <!-- TikTok -->
              <a href="https://tiktok.com" target="_blank" class="social-box tiktok">
                <i class="fa-brands fa-tiktok"></i>
                <span>TikTok</span>
              </a>

              <!-- Twitter / X -->
              <a href="https://x.com" target="_blank" class="social-box twitter-x">
                <i class="fa-brands fa-x-twitter"></i>
                <span>Twitter / X</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
customElements.define('layer-empat', LayerEmpatComponent);
