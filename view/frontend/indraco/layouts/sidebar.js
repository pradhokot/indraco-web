document.write(`
   <div class="offcanvas-lg offcanvas-end" data-bs-scroll="true" data-bs-backdrop="static" tabindex="-1" id="sidebar" aria-labelledby="sidebarLabel">
      <div class="offcanvas-header">
         <h5 class="offcanvas-title" id="sidebarLabel">Offcanvas</h5>
         <button type="button" class="btn-close" data-bs-toggle="offcanvas" data-bs-target="#sidebar"></button>
      </div>
      <div class="offcanvas-body container-lg justify-content-lg-between">
         <ul class="nav flex-column flex-lg-row">
            <li class="nav-item">
               <a href="about.html" class="nav-link text-capitalize">tentang kami</a>
            </li>
            <li class="nav-item py-2 d-none d-lg-block"><div class="vr h-100"></div></li>
            <li class="nav-item dropdown">
               <a href="product.html" class="nav-link text-capitalize" data-bs-toggle="dropdown" data-bs-target="#dropdown-product">produk</a>
               <ul class="dropdown-menu container-lg position-relative" id="dropdown-product">
                  <li><a href="#" class="dropdown-item">produk</a></li>
                  <li><a href="#" class="dropdown-item">produk</a></li>
                  <li><a href="#" class="dropdown-item">produk</a></li>
                  <li><a href="#" class="dropdown-item">produk</a></li>
                  <li><a href="#" class="dropdown-item">produk</a></li>
                  <li><a href="#" class="dropdown-item">produk</a></li>
                  <li><a href="#" class="dropdown-item">produk</a></li>
                  <li><a href="#" class="dropdown-item">produk</a></li>
               </ul>
            </li>
            <li class="nav-item py-2 d-none d-lg-block"><div class="vr h-100"></div></li>
            <li class="nav-item">
               <a href="businesses.html" class="nav-link text-capitalize">bisnis</a>
            </li>
            <li class="nav-item py-2 d-none d-lg-block"><div class="vr h-100"></div></li>
            <li class="nav-item">
               <a href="olshop.html" class="nav-link text-capitalize">official store</a>
            </li>
            <li class="nav-item py-2 d-none d-lg-block"><div class="vr h-100"></div></li>
            <li class="nav-item">
               <a href="news.html" class="nav-link text-capitalize">berita & acara</a>
            </li>
            <li class="nav-item py-2 d-none d-lg-block"><div class="vr h-100"></div></li>
            <li class="nav-item">
               <a href="#" class="nav-link text-capitalize">browsur</a>
            </li>
            <li class="nav-item py-2 d-none d-lg-block"><div class="vr h-100"></div></li>
            <li class="nav-item">
               <a href="career.html" class="nav-link text-capitalize">karir</a>
            </li>
            <li class="nav-item py-2 d-none d-lg-block"><div class="vr h-100"></div></li>
            <li class="nav-item">
               <a href="contact.html" class="nav-link text-capitalize">kontak</a>
            </li>
            <li class="nav-item py-2 d-none d-lg-block"><div class="vr h-100"></div></li>
         </ul>
         <div>
            <button class="btn"><i class="fas fa-search"></i></button>
         </div>
      </div>
   </div>
   `)