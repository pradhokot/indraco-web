document.write(`
   <nav class="navbar navbar-expand d-block p-0">
      <div class="container py-3">
         <h1 class="m-0 lh-1">
            <a href="index.html" class="navbar-brand d-grid p-0">
               <img src="../../../../resource/assets/img/indracostore/logo-indracostore.svg" width="100%" height="auto" alt="INDRACOSTORE">
            </a>
         </h1>
         <div class="navbar-collapse">
            <ul class="navbar-nav ms-auto column-gap-3 align-items-center column-gap-md-4">
               <li class="nav-item">
                  <a href="#" class="nav-link p-0 d-grid">
                     <i class="fas fa-search fs-5 d-lg-none"></i>
                     <div class="d-none d-lg-block">
                        <div class="input-group border border-dark">
                           <input type="search" class="form-control rounded-0 border-0" placeholder="Pencarian">
                           <button class="btn"><i class="fas fa-search"></i></button>
                        </div>
                     </div>
                  </a>
               </li>
               <li class="nav-item">
                  <a href="#" class="nav-link p-0 d-grid">
                     <i class="fas fa-user-circle fs-5"></i>
                  </a>
               </li>
               <li class="nav-item" style="padding-right: 10px;">
                  <a href="#" class="nav-link p-0 d-grid position-relative">
                     <i class="fas fa-shopping-bag fs-5"></i>
                     <span class="badge position-absolute top-0 start-100 translate-middle text-bg-danger rounded-circle p-1" style="min-width: 20px;">0</span>
                  </a>
               </li>
            </ul>
         </div>
      </div>
      <div class="bg-whitesmoke" id="menubar">
         <ul class="navbar-nav py-2 justify-content-center flex-wrap">
            <li class="nav-item">
               <a href="#" class="nav-link text-uppercase py-0 px-3 text-center">produk</a>
            </li>
            <li class="nav-item nav-divider"><div class="vr h-100"></div></li>
            <li class="nav-item">
               <a href="#" class="nav-link text-uppercase py-0 px-3 text-center">mesin <span class="d-none d-md-inline">& peralatan</span></a>
            </li>
            <li class="nav-item nav-divider"><div class="vr h-100"></div></li>
            <li class="nav-item">
               <a href="#" class="nav-link text-uppercase py-0 px-3 text-center">promo</a>
            </li>
            <li class="nav-item nav-divider"><div class="vr h-100"></div></li>
         </ul>
      </div><!-- end menubar -->
   </nav><!-- end navbar -->
   `)