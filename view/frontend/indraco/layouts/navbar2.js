document.write(`
   <nav class="navbar navbar-expand-lg p-0 d-block">
      <div class="container py-3 py-lg-4" id="topbar">
         <div class="d-lg-none">
            <button class="navbar-toggler d-block rounded-0 border-0 shadow-none" data-bs-toggle="offcanvas" data-bs-target="#sidenav">
               <!-- <i class="navbar-toggler-icon"></i> -->
               <i class="fas fa-ellipsis-v fa-lg"></i>
            </button>
         </div>
         <div>
            <h1 class="m-0">
               <a href="index.html" class="navbar-brand m-0 d-grid">
                  <img src="../../../../resource/assets/img/indraco/logo-indraco.png" width="100%" height="auto" alt="" class="img-default">
                  <img src="../../../../resource/assets/img/indraco/logo-indraco-invert.png" width="100%" height="auto" alt="" class="img-invert">
               </a>
            </h1>
         </div>
         <div>
            <div class="float-end d-lg-none">
               <script src="../layouts/toggler-search.js"></script>
            </div>
            <div class="d-none d-lg-block float-end">
               <script src="../layouts/navbar-corner.js"></script>
            </div>
         </div>
      </div><!-- end container topbar -->
      <div id="sidenav" class="offcanvas-lg offcanvas-start" tabindex="-1">
         <div class="offcanvas-header">
            <h5></h5>
            <button class="btn-close rounded-0 shadow-none" data-bs-toggle="offcanvas" data-bs-target="#sidenav"></button>
         </div>
         <div class="offcanvas-body container-lg align-items-center">
            <ul class="navbar-nav text-capitalize column-gap-lg-3">
               <li class="nav-item">
                  <a href="about.html" class="nav-link nav-menu px-0 text-nowrap p-lg-0">tentang kami</a>
               </li>
               <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
               <li class="nav-item">
                  <script src="../layouts/nav-product-mobile.js"></script>
                  <script src="../layouts/nav-product-desktop.js"></script>
               </li>
               <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
               <li class="nav-item">
                  <a href="businesses.html" class="nav-link nav-menu px-0 text-nowrap p-lg-0">bisnis</a>
               </li>
               <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
               <li class="nav-item">
                  <script src="../layouts/nav-olshop.js"></script>
               </li>
               <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
               <li class="nav-item">
                  <a href="news.html" class="nav-link nav-menu px-0 text-nowrap p-lg-0">berita & acara</a>
               </li>
               <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
               <li class="nav-item">
                  <a href="#" class="nav-link nav-menu px-0 text-nowrap p-lg-0">brosur</a>
               </li>
               <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
               <li class="nav-item">
                  <a href="career.html" class="nav-link nav-menu px-0 text-nowrap p-lg-0">karir</a>
               </li>
               <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
               <li class="nav-item">
                  <a href="contact.html" class="nav-link nav-menu px-0 text-nowrap p-lg-0">kontak</a>
               </li>
               <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
            </ul>
            <div class="d-none d-lg-block">
               <script src="../layouts/toggler-search.js"></script>
            </div>
         </div>
         <div class="offcanvas-header d-block d-lg-none">
            <hr class="opacity-50 mt-0">
            <script src="../layouts/navbar-corner.js"></script>
         </div>
      </div><!-- end sidenav -->
   </nav><!-- end navbar -->
   `)