document.write(`
   <div class="dropdown">
      <a href="olshop.html" class="nav-link px-0 text-nowrap">toko resmi</a>
      <div class="dropdown-menu rounded-0 border-0">
         <div class="container-lg pt-lg-2 pb-lg-4">
            <h5 class="fs-4 mb-0"><b class="fw-medium">Toko Resmi</b></h5>
            <hr class="opacity-50 my-3">
            <ul class="navbar-nav column-gap-lg-3 column-gap-xxl-4 pt-2">
               <li class="nav-item w-auto">
                  <ul class="navbar-nav nav-pills flex-column row-gap-3" role="tablist">
                     <li class="nav-item">
                        <a data-bs-toggle="pill" href="#v-pills-ecommerce" class="nav-link text-nowrap rounded-0 bg-transparent p-0 active">E-Commerce</a>
                     </li>
                     <li class="nav-item">
                        <a data-bs-toggle="pill" href="#v-pills-marketplace" class="nav-link text-nowrap rounded-0 bg-transparent p-0">Marketplacce</a>
                     </li>
                  </ul>
               </li>
               <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
               <li class="nav-item w-100">
                  <div class="tab-content">
                     <div class="tab-pane fade show active" id="v-pills-ecommerce">
                        <ul class="navbar-nav column-gap-lg-3 column-gap-xxl-4">
                           <li class="nav-item w-auto">
                              <ul class="navbar-nav nav-pills flex-column row-gap-3" role="tablist">
                                 <li class="nav-item">
                                    <a data-bs-toggle="pill" href="#v-pills-ecommerce-supresso" class="nav-link text-nowrap rounded-0 bg-transparent p-0 active">Supresso</a>
                                 </li>
                                 <li class="nav-item">
                                    <a data-bs-toggle="pill" href="#v-pills-ecommerce-indracostore" class="nav-link text-nowrap rounded-0 bg-transparent p-0">Indracostore</a>
                                 </li>
                              </ul>
                           </li>
                           <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
                           <li class="nav-item w-100">
                              <div class="tab-content">
                                 <div class="tab-pane fade show active" id="v-pills-ecommerce-supresso">
                                    <img src="../../../../resource/assets/img/indraco/logos/supresso.png" width="100%" height="auto" style="max-width: 16rem;" alt="SUPRESSO">
                                 </div>
                                 <div class="tab-pane fade" id="v-pills-ecommerce-indracostore">
                                    <img src="../../../../resource/assets/img/indraco/logos/indracostore.png" width="100%" height="auto" style="max-width: 16rem;" alt="INDRACOSTORE">
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div class="tab-pane fade" id="v-pills-marketplace">
                        <ul class="navbar-nav column-gap-lg-3 column-gap-xxl-4">
                           <li class="nav-item w-auto">
                              <ul class="navbar-nav nav-pills flex-column row-gap-3" role="tablist">
                                 <li class="nav-item">
                                    <a data-bs-toggle="pill" href="#v-pills-marketplace-tokopedia" class="nav-link text-nowrap rounded-0 bg-transparent p-0 active">tokopedia</a>
                                 </li>
                                 <li class="nav-item">
                                    <a data-bs-toggle="pill" href="#v-pills-marketplace-shopee" class="nav-link text-nowrap rounded-0 bg-transparent p-0">shopee</a>
                                 </li>
                                 <li class="nav-item">
                                    <a data-bs-toggle="pill" href="#v-pills-marketplace-lazada" class="nav-link text-nowrap rounded-0 bg-transparent p-0">lazada</a>
                                 </li>
                                 <li class="nav-item">
                                    <a data-bs-toggle="pill" href="#v-pills-marketplace-blibli" class="nav-link text-nowrap rounded-0 bg-transparent p-0">blibli</a>
                                 </li>
                                 <li class="nav-item">
                                    <a data-bs-toggle="pill" href="#v-pills-marketplace-tiktokshop" class="nav-link text-nowrap rounded-0 bg-transparent p-0">tiktokshop</a>
                                 </li>
                              </ul>
                           </li>
                           <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
                           <li class="nav-item w-100">
                              <div class="tab-content">
                                 <div class="tab-pane fade show active" id="v-pills-marketplace-tokopedia">
                                    <img src="../../../../resource/assets/img/indraco/logos/tokopediaa.png" width="100%" height="auto" style="max-width: 16rem;" alt="tokopedia">
                                 </div>
                                 <div class="tab-pane fade" id="v-pills-marketplace-shopee">
                                    <img src="../../../../resource/assets/img/indraco/logos/shopee.png" width="100%" height="auto" style="max-width: 16rem;" alt="shopee">
                                 </div>
                                 <div class="tab-pane fade" id="v-pills-marketplace-lazada">
                                    <img src="../../../../resource/assets/img/indraco/logos/lazada.png" width="100%" height="auto" style="max-width: 16rem;" alt="lazada">
                                 </div>
                                 <div class="tab-pane fade" id="v-pills-marketplace-blibli">
                                    <img src="../../../../resource/assets/img/indraco/logos/blibli.png" width="100%" height="auto" style="max-width: 16rem;" alt="blibli">
                                 </div>
                                 <div class="tab-pane fade" id="v-pills-marketplace-tiktokshop">
                                    <img src="../../../../resource/assets/img/indraco/logos/tiktok.png" width="100%" height="auto" style="max-width: 16rem;" alt="tiktokshop">
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </li>
               <li class="nav-item nav-devider"><div class="vr h-100"></div></li>
            </ul>
         </div><!-- end container -->
      </div><!-- end dropdown menu -->
   </div>
   `)