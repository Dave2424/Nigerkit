(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/skeletonloader/skeletonloader.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/skeletonloader/skeletonloader.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"block-products__list\">\n    <div class=\"block-products__list-item\" *ngFor=\"let item of data\">\n      <div class=\"product-card\">\n        <div class=\"product-card__image\">\n          <ngx-skeleton-loader animation=\"progress\" [theme]=\"{ \n                        'border-radius': '5px',\n                        height: '140px',\n                        'background-color': 'rgb(216 212 212)',\n                        border: '1px solid white'\n                        }\"></ngx-skeleton-loader>\n        </div>\n        <div class=\"product-card__info\">\n          <div class=\"product-card__name\">\n            <ngx-skeleton-loader count=\"1\"></ngx-skeleton-loader>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"site\">\n  <div class=\"loader overlay\" *ngIf=\"loading\">\n    <mat-progress-spinner mode=\"indeterminate\" diameter=\"60\" style=\"top: 47%;left:50%; margin-left: -2em;\"></mat-progress-spinner>\n  </div>\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n  <!-- Snotify -->\n  <ng-snotify></ng-snotify>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-main/home-main.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-main/home-main.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banners/banners.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banners/banners.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- .block-slideshow -->\n<div class=\"block-slideshow block-slideshow--layout--with-departments block\">\n    <div class=\"container\">\n        <div class=\"row\"> \n            <div class=\"col-md-12\">\n                <div class=\"block-slideshow__body\" *ngIf=\"top_banners\">\n                    <ngx-slick-carousel class=\"carousel\"\n                        #SlickModal=\"slick-carousel\"\n                        [config]=\"bannerSlideConfig\">\n                        <div ngxSlickItem *ngFor=\"let banner of top_banners\">\n                            <img [src]=\"banner.pictures\" alt=\"\" width=\"100%\" style=\"max-height: 400px;\">\n                            <div class=\"bottom-left\">\n                                <h4>{{banner.details}}</h4>\n                            </div>\n                        </div>\n                    </ngx-slick-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- .block-slideshow / end -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog/blog.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog/blog.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header> -->\n\n<!-- site__body -->\n<div class=\"site__body\">\n  <div class=\"page-header\">\n    <div class=\"page-header__container container\">\n      <div class=\"page-header__title\">\n        <h1>Latest News</h1>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-lg-8\">\n        <div class=\"block\">\n          <div class=\"posts-view\">\n            <div class=\"posts-view__list posts-list posts-list--layout--grid2\">\n              <div class=\"posts-list__body\" *ngIf=\"blogs\">\n                <div class=\"posts-list__item\" *ngFor=\"let blog of blogs.data\">\n                  <div class=\"post-card post-card--layout--grid post-card--size--nl\">\n                    <div class=\"post-card__image\">\n                      <a>\n                        <!-- <img src=\"{{blog.image}}\" alt=\"\"> -->\n                        <img [src]=\"checkValue(blog.image,'avatar', null)\" alt=\"\"></a>\n                      <!-- </a> -->\n                    </div>\n                    <div class=\"post-card__info\" style=\"display: flex;\">\n                      <div class=\"post-card__category\">\n                        <a href=\"\">Special Offers</a>\n                      </div>\n                      <div class=\"post-card__name\">\n                        <a [routerLink]=\"['/blog', blog.slug]\">{{blog.title}}</a>\n                      </div>\n                      <div class=\"post-card__date\">{{blog.time | date:'longDate'}}</div>\n                      <div class=\"post-card__content\" [line-truncation]=\"3\" [innerHTML]=\"blog.description\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"style\" *ngIf=\"count(blogs.data) == 0\">\n                <div class=\"lds-facebook\">\n                  <div></div>\n                  <div></div>\n                  <div></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"posts-view__pagination\">\n              <ul class=\"pagination justify-content-center\" *ngIf=\"blogs.total > blogs.per_page\">\n                <li class=\"page-item\" (click)=\"firstPage(blogs)\">\n                  <a class=\"page-link page-link--with-arrow\"><i class=\"fa fa-angle-double-left\"></i></a>\n                </li>\n                <li class=\"page-item\" *ngIf=\"blogs.prev_page_url\">\n                  <a class=\"page-link page-link--with-arrow\" aria-label=\"Previous\" (click)=\"Previous(blogs)\">\n                    <svg class=\"page-link__arrow page-link__arrow--left\" aria-hidden=\"true\" width=\"8px\" height=\"13px\">\n                      <use xlink:href=\"assets/images/sprite.svg#arrow-rounded-left-8x13\"></use>\n                    </svg>\n                  </a>\n                </li>\n                <li class=\"page-item active\"><a class=\"page-link\">{{ blogs.current_page }} <span\n                      class=\"sr-only\">(current)</span></a></li>\n                <li class=\"page-item\" *ngIf=\"blogs.next_page_url\">\n                  <a class=\"page-link page-link--with-arrow\" aria-label=\"Next\" (click)=\"next(blogs)\">\n                    <svg class=\"page-link__arrow page-link__arrow--right\" aria-hidden=\"true\" width=\"8px\" height=\"13px\">\n                      <use xlink:href=\"assets/images/sprite.svg#arrow-rounded-right-8x13\"></use>\n                    </svg>\n                  </a>\n                </li>\n                <li class=\"kt-pagination__link--first\" *ngIf=\"blogs.last_page_url\">\n                  <a class=\"page-link page-link--with-arrow\" ng-click=\"lastPage(blogs)\"><i\n                      class=\"fa fa-angle-double-right\"></i></a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-lg-4\">\n        <div class=\"block block-sidebar block-sidebar--position--end\">\n          <div class=\"block-sidebar__item\">\n            <div class=\"widget-search\">\n              <form class=\"widget-search__body\">\n                <input class=\"widget-search__input\" placeholder=\"Blog search...\" type=\"text\" autocomplete=\"off\"\n                  spellcheck=\"false\">\n                <button class=\"widget-search__button\" type=\"submit\">\n                  <svg width=\"20px\" height=\"20px\">\n                    <use xlink:href=\"assets/images/sprite.svg#search-20\"></use>\n                  </svg>\n                </button>\n              </form>\n            </div>\n          </div>\n          <div class=\"block-sidebar__item\">\n            <div class=\"widget-aboutus widget\">\n              <h4 class=\"widget__title\">About Blog</h4>\n              <div class=\"widget-aboutus__text\"> This blog section is for all technology and related terms articles.\n              </div>\n              <div class=\"widget-aboutus__socials\">\n                <ul>\n                  <li>\n                    <a class=\"widget-aboutus__link widget-aboutus__link--facebook\" href=\"#\" target=\"_blank\">\n                      <i class=\"widget-aboutus__icon fab fa-facebook-f\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"widget-aboutus__link widget-aboutus__link--instagram\" href=\"#\" target=\"_blank\">\n                      <i class=\"widget-aboutus__icon fab fa-instagram\"></i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"block-sidebar__item\">\n            <div class=\"widget-posts widget\">\n              <h4 class=\"widget__title\">Latest Posts</h4>\n              <div class=\"widget-posts__list\">\n                <div class=\"widget-posts__item\" *ngFor=\"let blog of blogs.data.slice().reverse() | slice:0:3\">\n                  <div class=\"widget-posts__image\">\n                    <a>\n                      <!-- <img src=\"{{blog.image}}\" alt=\"\"> -->\n                      <img [src]=\"checkValue(blog.image,'avatar', null)\" alt=\"\"></a>\n                    <!-- </a> -->\n                  </div>\n                  <div class=\"widget-posts__info\">\n                    <div class=\"widget-posts__name\">\n                      <a [routerLink]=\"['/blog', blog.slug]\">{{blog.title}}</a>\n                    </div>\n                    <div class=\"post-card__content\" [line-truncation]=\"2\" [innerHTML]=\"blog.description\"></div>\n                    <div class=\"widget-posts__date\">{{blog.time | date:'longDate'}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"block-sidebar__item\">\n            <div class=\"widget-newsletter widget\">\n              <h4 class=\"widget-newsletter__title\">Our Newsletter</h4>\n              <div class=\"widget-newsletter__text\">Get the best viral stories straight into your inbox!\n              </div>\n              <form class=\"widget-newsletter__form\" action=\"\" [formGroup]=\"subscriberForm\" (ngSubmit)=\"onSubmit()\">\n                <label for=\"widget-newsletter-email\" class=\"sr-only\">Email address</label>\n                <input id=\"widget-newsletter-email\" type=\"email\" class=\"form-control\" placeholder=\"Email Address\"\n                  formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.email.errors.required\">Email Address is required</div>\n                  <div *ngIf=\"f.email.errors.email\">Valid email is required</div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary mt-3\" [ladda]=\"loading\">Subscribe</button>\n                <p>Don't worry, we don't spam</p>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- site__body / end -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog/post/post.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog/post/post.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header> -->\n\n<div class=\"container mt-4\">\n  <div class=\"row\">\n    <div class=\"col-12 col-lg-8\">\n      <div class=\"block post post--layout--classic\">\n        <div class=\"post__header post-header post-header--layout--classic\">\n          <div class=\"post-header__categories\">\n            <a href=\"\">Latest news</a>\n          </div>\n          <h1 class=\"post-header__title\">{{ details[\"title\"] }}</h1>\n          <div class=\"post-header__meta\">\n            <!-- <div class=\"post-header__meta-item\">By <a href=\"\">Jessica Moore</a></div> -->\n            <div class=\"post-header__meta-item\">\n              <a>{{ details[\"time\"] | date: \"longDate\" }}</a>\n            </div>\n            <div\n              class=\"post-header__meta-item\"\n              *ngIf=\"count(details['comment']) > 0\"\n            >\n              <a>{{ count(details[\"comment\"]) }} comments</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"post__featured\">\n          <a href=\"\">\n            <!-- <img src=\"{{details['image']}}\" alt=\"\"> -->\n            <img [src]=\"Image_data(details['image'], 'avatar', null)\" alt=\"\"\n          /></a>\n\n          <!-- </a> -->\n        </div>\n        <div class=\"post__content typography\">\n          <p [innerHTML]=\"details['body']\"></p>\n        </div>\n        <div class=\"post__footer\" style=\"margin-top: 40px;\">\n          <div class=\"post__tags-share-links\" style=\"margin-bottom: 0;\">\n            <div class=\"post__tags tags\"></div>\n            <div class=\"post__share-links share-links\">\n              <ul class=\"share-links__list\">\n                <li class=\"share-links__item share-links__item--type--like\">\n                  <a href=\"\">Like</a>\n                </li>\n                <li class=\"share-links__item share-links__item--type--tweet\">\n                  <a href=\"\">Tweet</a>\n                </li>\n                <li class=\"share-links__item share-links__item--type--pin\">\n                  <a href=\"\">Pin It</a>\n                </li>\n                <li class=\"share-links__item share-links__item--type--counter\">\n                  <a href=\"\">4K</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <section class=\"post__section\">\n          <h4 class=\"post__section-title\">\n            Comments ({{ count(details[\"comment\"]) }})\n          </h4>\n          <ol class=\"comments-list comments-list--level--0\">\n            <li class=\"comments-list__item\" *ngIf=\"details['comment']\">\n              <div\n                class=\"comment mb-2\"\n                *ngFor=\"let comment of details['comment']\"\n              >\n                <div class=\"comment__avatar\">\n                  <a href=\"\"\n                    ><img [src]=\"Image_data('', 'avatar', 'null')\"\n                  /></a>\n                </div>\n                <div class=\"comment__content\">\n                  <div class=\"comment__header\">\n                    <div class=\"comment__author\">\n                      <a>{{ comment.user.fname }} {{ comment.user.lname }}</a>\n                    </div>\n                  </div>\n                  <div\n                    class=\"comment__text\"\n                    [innerHTML]=\"comment.comment\"\n                  ></div>\n                  <div class=\"comment__date\">\n                    {{ comment.created_at | date: \"medium\" }}\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ol>\n        </section>\n        <section class=\"post__section\">\n          <h4 class=\"post__section-title\">Write A Comment</h4>\n          <div class=\"form-group ml-3\" *ngIf=\"!currentUser\">\n            <p style=\"letter-spacing: 1px;\">You must be logged In.</p>\n          </div>\n          <form\n            [formGroup]=\"commentForm\"\n            (ngSubmit)=\"addComment()\"\n            *ngIf=\"currentUser\"\n          >\n            <div class=\"form-group\">\n              <label for=\"first-name\">Comment</label>\n              <textarea\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"comment\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.comment.errors }\"\n                rows=\"6\"\n              ></textarea>\n              <div\n                *ngIf=\"submitted && f.comment.errors\"\n                class=\"invalid-feedback\"\n              >\n                <div *ngIf=\"f.comment.errors.required\">\n                  comment cannot be empty\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group mt-4\">\n              <button type=\"submit\" class=\"btn btn-primary btn-lg\">\n                Comment\n              </button>\n            </div>\n            <div class=\"alert alert-danger\" *ngIf=\"error\">{{ error }}</div>\n          </form>\n        </section>\n      </div>\n    </div>\n    <div class=\"col-12 col-lg-4\">\n      <div class=\"block block-sidebar block-sidebar--position--end\">\n        <div class=\"block-sidebar__item\">\n          <div class=\"widget-search\">\n            <form class=\"widget-search__body\">\n              <input\n                class=\"widget-search__input\"\n                placeholder=\"Blog search...\"\n                type=\"text\"\n                autocomplete=\"off\"\n                spellcheck=\"false\"\n              />\n              <button class=\"widget-search__button\" type=\"submit\">\n                <svg width=\"20px\" height=\"20px\">\n                  <use xlink:href=\"images/sprite.svg#search-20\"></use>\n                </svg>\n              </button>\n            </form>\n          </div>\n        </div>\n        <div class=\"block-sidebar__item\">\n          <div class=\"widget-aboutus widget\">\n            <h4 class=\"widget__title\">About Blog</h4>\n            <div class=\"widget-aboutus__text\">\n              This blog section is for all technology and related terms\n              articles.\n            </div>\n            <div class=\"widget-aboutus__socials\">\n              <ul>\n                <li>\n                  <a\n                    class=\"widget-aboutus__link widget-aboutus__link--youtube\"\n                    href=\"#\"\n                    target=\"_blank\"\n                  >\n                    <i class=\"widget-aboutus__icon fab fa-youtube\"></i>\n                  </a>\n                </li>\n                <li>\n                  <a\n                    class=\"widget-aboutus__link widget-aboutus__link--facebook\"\n                    href=\"#\"\n                    target=\"_blank\"\n                  >\n                    <i class=\"widget-aboutus__icon fab fa-facebook-f\"></i>\n                  </a>\n                </li>\n                <li>\n                  <a\n                    class=\"widget-aboutus__link widget-aboutus__link--twitter\"\n                    href=\"#\"\n                    target=\"_blank\"\n                  >\n                    <i class=\"widget-aboutus__icon fab fa-twitter\"></i>\n                  </a>\n                </li>\n                <li>\n                  <a\n                    class=\"widget-aboutus__link widget-aboutus__link--instagram\"\n                    href=\"#\"\n                    target=\"_blank\"\n                  >\n                    <i class=\"widget-aboutus__icon fab fa-instagram\"></i>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"block-sidebar__item\" *ngIf=\"latestBlog\">\n          <div class=\"widget-posts widget\">\n            <h4 class=\"widget__title\">Latest Posts</h4>\n            <div class=\"widget-posts__list\">\n              <div class=\"widget-posts__item\" *ngFor=\"let item of latestBlog\">\n                <div class=\"widget-posts__image\">\n                  <a [routerLink]=\"['/blog', item.id]\"\n                    ><img [src]=\"Image_data(item.image, 'avatar', 'null')\"\n                  /></a>\n                </div>\n                <div class=\"widget-posts__info\">\n                  <div class=\"widget-posts__name\">\n                    <a [routerLink]=\"['/blog', item.id]\">{{ item.title }}</a>\n                  </div>\n                  <div class=\"widget-posts__date\">\n                    {{ item.time | date: \"longDate\" }}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"block-sidebar__item\">\n          <div class=\"widget-posts widget\">\n            <h4 class=\"widget__title\">Related Posts</h4>\n            <div class=\"widget-posts__list\">\n              <div class=\"widget-posts__item\" *ngFor=\"let item of relateBlog\">\n                <div class=\"widget-posts__image\">\n                  <!-- <a [routerLink]=\"['/blog', item.id]\">\n                                        <img src=\"{{item.image}}\" alt=\"\">\n                                    </a> -->\n                  <a [routerLink]=\"['/blog', item.id]\"\n                    ><img [src]=\"Image_data(item.image, 'avatar', 'null')\"\n                  /></a>\n                </div>\n                <div class=\"widget-posts__info\">\n                  <div class=\"widget-posts__name\">\n                    <a [routerLink]=\"['/blog', item.id]\">{{ item.title }}</a>\n                  </div>\n                  <div class=\"widget-posts__date\">\n                    {{ item.time | date: \"longDate\" }}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"block-sidebar__item\">\n          <div class=\"widget-newsletter widget\">\n            <h4 class=\"widget-newsletter__title\">Our Newsletter</h4>\n            <div class=\"widget-newsletter__text\">\n              Get the best viral stories straight into your inbox!\n            </div>\n            <form\n              class=\"widget-newsletter__form\"\n              action=\"\"\n              [formGroup]=\"subscriberForm\"\n              (ngSubmit)=\"onSubmit()\"\n            >\n              <label for=\"widget-newsletter-email\" class=\"sr-only\"\n                >Email address</label\n              >\n              <input\n                id=\"widget-newsletter-email\"\n                type=\"email\"\n                class=\"form-control\"\n                placeholder=\"Email Address\"\n                formControlName=\"email\"\n                [ngClass]=\"{ 'is-invalid': submitteed && ff.email.errors }\"\n              />\n              <div\n                *ngIf=\"submitteed && ff.email.errors\"\n                class=\"invalid-feedback\"\n              >\n                <div *ngIf=\"ff.email.errors.required\">\n                  Email Address is required\n                </div>\n                <div *ngIf=\"ff.email.errors.email\">Valid email is required</div>\n              </div>\n              <button\n                type=\"submit\"\n                class=\"btn btn-primary mt-3\"\n                [ladda]=\"loadinng\"\n              >\n                Subscribe\n              </button>\n              <p>Don't worry, we don't spam</p>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header [cart_item]=\"cart_to_\" (Update_cart)=\"getLatestCart($event)\" ></app-header> -->\n\n<div class=\"cart block mt-lg-4 mt-md-3 mt-sm-2 mb-5\" *ngIf=\"count(cart) > 0\">\n    <div class=\"container\">\n        <table class=\"cart__table cart-table\">\n            <thead class=\"cart-table__head\">\n            <tr class=\"cart-table__row\">\n                <th class=\"cart-table__column cart-table__column--image\">Image</th>\n                <th class=\"cart-table__column cart-table__column--product\">Product</th>\n                <th class=\"cart-table__column cart-table__column--price\">Price</th>\n                <th class=\"cart-table__column cart-table__column--quantity\">Quantity</th>\n                <th class=\"cart-table__column cart-table__column--total\">Total</th>\n                <th class=\"cart-table__column cart-table__column--remove\"></th>\n            </tr>\n            </thead>\n            <tbody class=\"cart-table__body\" style=\"margin-top:10px;\">\n            <tr class=\"cart-table__row\" *ngFor=\"let item of cart\">\n                <td class=\"cart-table__column cart-table__column--image\">\n                    <a href=\"#\"><img [src]=\"Image_data(item.product.product_image,'avatar', null)\" alt=\"\"></a>\n                </td>\n                <td class=\"cart-table__column cart-table__column--product\">\n                    <a href=\"#\" [routerLink]=\"['/product', item.product_id]\" class=\"cart-table__product-name\">{{item.product.name}}</a>\n                    <ul class=\"cart-table__options\">\n                        <li *ngIf=\"item.product.brand\">Brand: {{item.product.brand}}</li>\n                        <li *ngIf=\"item.product.sku\">Sku: {{item.product.sku.sku_no}}</li>\n                    </ul>\n                </td>\n                <td class=\"cart-table__column cart-table__column--price\" data-title=\"Price\"> &#8358; {{item.product.price | number}}</td>\n                <td class=\"cart-table__column cart-table__column--quantity\" data-title=\"Quantity\">\n                    <div class=\"input-number\">\n                        <input class=\"form-control input-number__input\" disabled type=\"number\" min=\"1\" value=\"{{item.quantity}}\">\n                        <div class=\"input-number__add\" (click)=\"increase(item)\"></div>\n                        <div class=\"input-number__sub\" (click)=\"decrease(item)\"></div>\n                    </div>\n                </td>\n                <td class=\"cart-table__column cart-table__column--total\" data-title=\"Total\">&#8358; {{calculateTotal(item) | number}}</td>\n                <td class=\"cart-table__column cart-table__column--remove\">\n                    <button type=\"button\" class=\"btn btn-light btn-sm btn-svg-icon\" (click)=\"removeFromCart(item)\">\n                        <svg width=\"12px\" height=\"12px\">\n                            <use xlink:href=\"./assets/images/sprite.svg#cross-12\"></use>\n                        </svg>\n                    </button>\n                </td>\n            </tr>\n            </tbody>\n            <tfoot class=\"cart-table__head\">\n                <tr class=\"cart-table__row\">\n                    <th class=\"cart-table__column\" style=\"font-weight: 500; text-align: end;\" colspan=\"6\">\n                        Subtotal &#8358; {{subtotal() | number}}</th>\n                </tr>\n            </tfoot>\n        </table>\n        <div style=\"text-align: right !Important; margin-top: 2rem;\" class=\"text-sm-center\">\n            <a [routerLink]=\"['']\" class=\"btn btn-light\">Continue Shopping</a>\n            <a class=\"btn btn-primary ml-1 text-white\"\n               (click)=\"addCartToLocal(cart)\">Proceed to checkout</a>\n        </div>\n    </div>\n</div>\n\n<div class=\"block-empty__body\" *ngIf=\"count( cart )  == 0\">\n    <div class=\"block-empty__message\">Your shopping cart is empty!</div>\n    <div class=\"block-empty__actions\">\n        <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/']\">Continue</a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-2\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"block p-2\">\n        <div class=\"products-view\">\n          <!-- <div class=\"products-view__options\">\n            <div class=\"view-options view-options--offcanvas--always\">\n              <div class=\"view-options__control\">\n                <label for=\"\">Sort By</label>\n                <div>\n                  <select class=\"form-control form-control-sm\" name=\"sort\" [(ngModel)]=\"sortProduct\" id=\"\"\n                    (ngModelChange)=\"sortingProduct()\">\n                    <option value=\"Default\">Default</option>\n                    <option value=\"name\">Name (A-Z)</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div> -->\n          <div class=\"products-view__list products-list\" data-layout=\"grid-4-full\" data-with-features=\"false\"\n            data-mobile-grid-columns=\"2\">\n            <div class=\"products-list__body\" *ngIf=\"categoryProduct\">\n              <div class=\"products-list__item\" *ngFor=\"let product of categoryProduct\">\n                <div class=\"product-card \">\n                  <div class=\"product-card__image\">\n                    <a [routerLink]=\"['/product', product.slug]\">\n                      <!-- <img [src]=\"checkValue(product.product_image,'avatar', null)\" alt=\"\"></a> -->\n                      <img [src]=\"product.product_image\" alt=\"\"></a>\n                  </div>\n                  <div class=\"product-card__info\">\n                    <div class=\"product-card__name\">\n                      <a [routerLink]=\"['/product', product.slug]\">{{product.name}}</a>\n                    </div>\n                    <div class=\"product-card__rating\" *ngIf=\"count(product.review) > 0\">\n                      <div class=\"product-card__rating-legend\">{{count(product.review)}}</div>\n                    </div>\n                  </div>\n                  <div class=\"product-card__actions\">\n                    <div class=\"product-card__prices\">\n                      &#8358;{{product.price | number}}\n                    </div>\n                    <div class=\"product-card__buttons\">\n                      <button class=\"btn btn-primary product-card__addtocart\" (click)=\"addToCart(product)\"\n                        *ngIf=\"!checkItemInCart(product)\" type=\"button\">Add To Cart</button>\n                      <button class=\"btn btn-secondary product-card__addtocart\" type=\"button\" disabled\n                        *ngIf=\"checkItemInCart(product)\">In Cart</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"products-view__pagination\">\n            <ul class=\"pagination justify-content-center\" *ngIf=\"categoryProduct.total > categoryProduct.per_page\">\n              <li class=\"page-item\" (click)=\"firstPage(categoryProduct)\">\n                <a class=\"page-link page-link--with-arrow\"><i class=\"fa fa-angle-double-left\"></i></a>\n              </li>\n              <li class=\"page-item\" *ngIf=\"categoryProduct.prev_page_url\">\n                <a class=\"page-link page-link--with-arrow\" aria-label=\"Previous\" (click)=\"Previous(categoryProduct)\">\n                  <svg class=\"page-link__arrow page-link__arrow--left\" aria-hidden=\"true\" width=\"8px\" height=\"13px\">\n                    <use xlink:href=\"assets/images/sprite.svg#arrow-rounded-left-8x13\"></use>\n                  </svg>\n                </a>\n              </li>\n              <li class=\"page-item active\"><a class=\"page-link\">{{ categoryProduct.current_page }} <span\n                    class=\"sr-only\">(current)</span></a></li>\n              <li class=\"page-item\" *ngIf=\"categoryProduct.next_page_url\">\n                <a class=\"page-link page-link--with-arrow\" aria-label=\"Next\" (click)=\"next(categoryProduct)\">\n                  <svg class=\"page-link__arrow page-link__arrow--right\" aria-hidden=\"true\" width=\"8px\" height=\"13px\">\n                    <use xlink:href=\"assets/images/sprite.svg#arrow-rounded-right-8x13\"></use>\n                  </svg>\n                </a>\n              </li>\n              <li class=\"kt-pagination__link--first\" *ngIf=\"categoryProduct.last_page_url\">\n                <a class=\"page-link page-link--with-arrow\" ng-click=\"lastPage(blogs)\"><i\n                    class=\"fa fa-angle-double-right\"></i></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"block block-sidebar block-sidebar--offcanvas--always\">\n    <div class=\"block-sidebar__backdrop\"></div>\n    <div class=\"block-sidebar__body\">\n      <div class=\"block-sidebar__header\">\n        <div class=\"block-sidebar__title\">Filters</div>\n        <button class=\"block-sidebar__close\" type=\"button\">\n          <svg width=\"20px\" height=\"20px\">\n            <use xlink:href=\"./assets/images/sprite.svg#cross-20\"></use>\n          </svg>\n        </button>\n      </div>\n      <div class=\"block-sidebar__item\">\n        <div class=\"widget-filters widget widget-filters--offcanvas--always\" data-collapse\n          data-collapse-opened-class=\"filter--opened\">\n          <h4 class=\"widget-filters__title widget__title\">Filters</h4>\n          <div class=\"widget-filters__list\">\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Categories\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-categories\">\n                      <ul class=\"filter-categories__list\">\n                        <li class=\"filter-categories__item filter-categories__item--parent\">\n                          <svg class=\"filter-categories__arrow\" width=\"6px\" height=\"9px\">\n                            <use xlink:href=\"images/sprite.svg#arrow-rounded-left-6x9\"></use>\n                          </svg>\n                          <a href=\"\">Construction & Repair</a>\n                          <div class=\"filter-categories__counter\">254</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--parent\">\n                          <svg class=\"filter-categories__arrow\" width=\"6px\" height=\"9px\">\n                            <use xlink:href=\"images/sprite.svg#arrow-rounded-left-6x9\"></use>\n                          </svg>\n                          <a href=\"\">Instruments</a>\n                          <div class=\"filter-categories__counter\">75</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--current\">\n                          <a href=\"\">Power Tools</a>\n                          <div class=\"filter-categories__counter\">21</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Drills & Mixers</a>\n                          <div class=\"filter-categories__counter\">15</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Cordless Screwdrivers</a>\n                          <div class=\"filter-categories__counter\">2</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Screwdrivers</a>\n                          <div class=\"filter-categories__counter\">30</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Wrenches</a>\n                          <div class=\"filter-categories__counter\">7</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Grinding Machines</a>\n                          <div class=\"filter-categories__counter\">5</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Milling Cutters</a>\n                          <div class=\"filter-categories__counter\">2</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Electric Spray Guns</a>\n                          <div class=\"filter-categories__counter\">9</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Jigsaws</a>\n                          <div class=\"filter-categories__counter\">4</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Jackhammers</a>\n                          <div class=\"filter-categories__counter\">0</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Planers</a>\n                          <div class=\"filter-categories__counter\">12</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Glue Guns</a>\n                          <div class=\"filter-categories__counter\">7</div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Categories Alt\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-categories-alt\">\n                      <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--1\"\n                        data-collapse-opened-class=\"filter-categories-alt__item--open\">\n                        <li class=\"filter-categories-alt__item\" data-collapse-item>\n                          <a href=\"\">Clothes & PPE</a>\n                        </li>\n                        <li class=\"filter-categories-alt__item\" data-collapse-item>\n                          <button class=\"filter-categories-alt__expander\" data-collapse-trigger></button>\n                          <a href=\"\">Power Tools</a>\n                          <div class=\"filter-categories-alt__children\" data-collapse-content>\n                            <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--2\">\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Engravers</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Drills</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Wrenches</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Plumbing</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Wall Chaser</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Pneumatic Tools</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Milling Cutters</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </li>\n                        <li\n                          class=\"filter-categories-alt__item filter-categories-alt__item--open filter-categories-alt__item--current\"\n                          data-collapse-item>\n                          <button class=\"filter-categories-alt__expander\" data-collapse-trigger></button>\n                          <a href=\"\">Hand Tools</a>\n                          <div class=\"filter-categories-alt__children\" data-collapse-content>\n                            <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--2\">\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Screwdrivers</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item filter-categories-alt__item--current\"\n                                data-collapse-item>\n                                <button class=\"filter-categories-alt__expander\" data-collapse-trigger></button>\n                                <a href=\"\">Handsaws</a>\n                                <div class=\"filter-categories-alt__children\" data-collapse-content>\n                                  <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--3\">\n                                    <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                      <a href=\"\">Power Saws</a>\n                                    </li>\n                                    <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                      <a href=\"\">Hacksaws</a>\n                                    </li>\n                                    <li class=\"filter-categories-alt__item filter-categories-alt__item--current\"\n                                      data-collapse-item>\n                                      <button class=\"filter-categories-alt__expander\" data-collapse-trigger></button>\n                                      <a href=\"\">Deep Dive</a>\n                                      <div class=\"filter-categories-alt__children\" data-collapse-content>\n                                        <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--4\">\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Submarines</a>\n                                          </li>\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Silt In Bags</a>\n                                          </li>\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Black Pearl</a>\n                                          </li>\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Krakens</a>\n                                          </li>\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Nautilus</a>\n                                          </li>\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Mariana Trench</a>\n                                          </li>\n                                        </ul>\n                                      </div>\n                                    </li>\n                                    <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                      <a href=\"\">Chain Saws</a>\n                                    </li>\n                                    <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                      <a href=\"\">Two-handed Saws</a>\n                                    </li>\n                                    <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                      <a href=\"\">Other</a>\n                                    </li>\n                                  </ul>\n                                </div>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Knives</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Axes</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Multitools</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Paint Tools</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </li>\n                        <li class=\"filter-categories-alt__item\" data-collapse-item>\n                          <a href=\"\">Measurement</a>\n                        </li>\n                        <li class=\"filter-categories-alt__item\" data-collapse-item>\n                          <button class=\"filter-categories-alt__expander\" data-collapse-trigger></button>\n                          <a href=\"\">Garden Equipment</a>\n                          <div class=\"filter-categories-alt__children\" data-collapse-content>\n                            <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--2\">\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Motor Pumps</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Chainsaws</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Electric Saws</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Brush Cutters</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Price\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-price\" data-min=\"500\" data-max=\"1500\" data-from=\"590\" data-to=\"1130\">\n                      <div class=\"filter-price__slider\"></div>\n                      <div class=\"filter-price__title\">Price: $<span class=\"filter-price__min-value\"></span> – $<span\n                          class=\"filter-price__max-value\"></span></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Brand\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-list\">\n                      <div class=\"filter-list__list\">\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\">\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Wakita\n                          </span>\n                          <span class=\"filter-list__counter\">7</span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\" checked>\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Zosch\n                          </span>\n                          <span class=\"filter-list__counter\">42</span>\n                        </label>\n                        <label class=\"filter-list__item  filter-list__item--disabled \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\" checked disabled>\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            WeVALT\n                          </span>\n                        </label>\n                        <label class=\"filter-list__item  filter-list__item--disabled \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\" disabled>\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Hammer\n                          </span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\">\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Mitasia\n                          </span>\n                          <span class=\"filter-list__counter\">1</span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\">\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Metaggo\n                          </span>\n                          <span class=\"filter-list__counter\">25</span>\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Brand\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-list\">\n                      <div class=\"filter-list__list\">\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\">\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Wakita\n                          </span>\n                          <span class=\"filter-list__counter\">7</span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\">\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Zosch\n                          </span>\n                          <span class=\"filter-list__counter\">42</span>\n                        </label>\n                        <label class=\"filter-list__item  filter-list__item--disabled \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\" checked disabled>\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            WeVALT\n                          </span>\n                        </label>\n                        <label class=\"filter-list__item  filter-list__item--disabled \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\" disabled>\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Hammer\n                          </span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\">\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Mitasia\n                          </span>\n                          <span class=\"filter-list__counter\">1</span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\">\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Metaggo\n                          </span>\n                          <span class=\"filter-list__counter\">25</span>\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Color\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-color\">\n                      <div class=\"filter-color__list\">\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  input-check-color--white  \"\n                            style=\"color: #fff;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color   input-check-color--light \"\n                            style=\"color: #d9d9d9;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #b3b3b3;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #808080;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #666;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #4d4d4d;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #262626;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #ff4040;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\" checked>\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #ff8126;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color   input-check-color--light \"\n                            style=\"color: #ffd440;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color   input-check-color--light \"\n                            style=\"color: #becc1f;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #8fcc14;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\" checked>\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #47cc5e;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #47cca0;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #47cccc;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #40bfff;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\" disabled>\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #3d6dcc;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\" checked>\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #7766cc;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #b852cc;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #e53981;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"widget-filters__actions d-flex\">\n            <button class=\"btn btn-primary btn-sm\">Filter</button>\n            <button class=\"btn btn-secondary btn-sm\">Reset</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header [is_cartNeeded]=\"false\"></app-header> -->\n\n<div class=\"checkout block mt-4\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-lg-6 col-xl-7\">\n        <form [formGroup]=\"checkoutForm\" (ngSubmit)=\"calculateDeliveryFee()\">\n          <div class=\"card mb-lg-0\">\n            <div class=\"card-body\">\n              <h3 class=\"card-title\">Shipping Details</h3>\n              <div class=\"form-group\">\n                <label for=\"checkout-name\">First name</label>\n                <input type=\"text\" class=\"form-control\" id=\"checkout-fname\" [(ngModel)]=\"currentUser.fname\"\n                  placeholder=\"First name\" formControlName=\"fname\"\n                  [ngClass]=\"{ 'is-invalid':submitted && f.fname.errors }\" />\n                <div *ngIf=\"submitted && f.fname.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.fname.errors.required\">First name is required</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"checkout-name\">Last name</label>\n                <input type=\"text\" class=\"form-control\" id=\"checkout-lname\" [(ngModel)]=\"currentUser.lname\"\n                  placeholder=\"Last name\" formControlName=\"lname\"\n                  [ngClass]=\"{ 'is-invalid':submitted && f.lname.errors }\" />\n                <div *ngIf=\"submitted && f.lname.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.lname.errors.required\">Last name is required</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"checkout-email\">Email address</label>\n                <input type=\"email\" class=\"form-control\" id=\"checkout-email\" [(ngModel)]=\"currentUser.email\"\n                  placeholder=\"Email address\" formControlName=\"email\"\n                  [ngClass]=\"{ 'is-invalid':submitted && f.email.errors }\" />\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                  <div *ngIf=\"f.email.errors.email\">Valid email is required</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-12 col-lg-5\">\n                  <label for=\"checkout-phone\">Phone</label>\n                  <input type=\"text\" class=\"form-control\" id=\"checkout-phone\" [(ngModel)]=\"currentUser.phone\"\n                    placeholder=\"Phone\" (keyup)=\"checkPhone()\" formControlName=\"phone\"\n                    [ngClass]=\"{ 'is-invalid':submitted && f.phone.errors }\" />\n                  <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.phone.errors.required\">Phone number is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-12 col-lg-7\">\n                  <label for=\"checkout-state\">State/Region</label>\n                  <select type=\"text\" class=\"form-control\" id=\"checkout-state\" placeholder=\"State\"\n                    formControlName=\"state\" [ngClass]=\"{ 'is-invalid':submitted && f.state.errors }\"\n                    [(ngModel)]=\"currentUser.state\">\n                    <option value=\"{{state.name}}\" *ngFor=\"let state of states\">{{state.name}}</option>\n                  </select>\n                  <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.state.errors.required\">Select a state</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-12 col-lg-5\">\n                  <label for=\"checkout-city\">City</label>\n                  <input type=\"text\" class=\"form-control\" id=\"checkout-city\" placeholder=\"City\" formControlName=\"city\"\n                    [ngClass]=\"{ 'is-invalid':submitted && f.city.errors }\" [(ngModel)]=\"currentUser.city\" />\n                  <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.city.errors.required\">City is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-12 col-lg-7\">\n                  <label for=\"checkout-address\">Address</label>\n                  <input type=\"text\" class=\"form-control\" id=\"checkout-address\" placeholder=\"Address\"\n                    [(ngModel)]=\"currentUser.address\" formControlName=\"address\"\n                    [ngClass]=\"{ 'is-invalid':submitted && f.address.errors }\" />\n                  <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.address.errors.required\">Phone number is required</div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"row\" *ngIf=\"!proceed\">\n                <div class=\"col-lg-4\"></div>\n                <div class=\"col-lg-4\">\n                  <button type=\"submit\" class=\"btn btn-round btn-primary waves-effect btn-block\" [ladda]=\"loading\">\n                    Continue\n                  </button>\n                </div>\n                <div class=\"col-lg-4\"></div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0\">\n        <div class=\"card mb-0\">\n          <div class=\"card-body\">\n            <h3 class=\"card-title\">Your Order</h3>\n            <table class=\"checkout__totals\">\n              <thead class=\"checkout__totals-header\">\n                <tr>\n                  <th>Product</th>\n                  <th>Total</th>\n                </tr>\n              </thead>\n              <tbody class=\"checkout__totals-products\">\n                <tr *ngFor=\"let item of cart\">\n                  <td>{{item.product.name}} × {{item.quantity}}</td>\n                  <td>&#8358;{{item.quantity * item.product.price | number}}</td>\n                </tr>\n              </tbody>\n              <tbody class=\"checkout__totals-subtotals\">\n                <tr>\n                  <th>Subtotal</th>\n                  <td>&#8358;{{Subtotal() | number}}</td>\n                </tr>\n                <tr>\n                  <th>Delivery fee</th>\n                  <td>{{deliveryFee| number}}</td>\n                </tr>\n                <tr>\n                  <th>VAT Fee</th>\n                  <td>{{percentage}}</td>\n                </tr>\n              </tbody>\n              <tfoot class=\"checkout__totals-footer\">\n                <tr>\n                  <th>GrandTotal</th>\n                  <td>{{grandTotal | number}}</td>\n                </tr>\n              </tfoot>\n            </table>\n            <div class=\"payment-methods\" *ngIf=\"proceed\">\n              <button angular4-paystack [key]=\"transactionKey\" [email]=\"currentUser.email\" [amount]=\"grandTotal+'00'\"\n                [ref]=\"transactionRef.value\" [class]=\"'btn btn-primary'\" (close)=\"transactionCancelled()\"\n                (callback)=\"transactionSuccessful($event)\" [ladda]=\"processing\"\n                class=\"btn btn-round btn-primary waves-effect btn-block\">\n                Place Order\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header [is_cartNeeded]=\"false\"></app-header> -->\n\n  <div class=\"block mt-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 col-lg-3 d-flex\">\n          <div class=\"account-nav flex-grow-1\">\n            <h4 class=\"account-nav__title\">Navigation</h4>\n            <ul>\n              <li class=\"account-nav__item\" \n                [ngClass]=\"{'account-nav__item--active': url == 'dashboard' || url == ''}\">\n                <a (click)=\"navigate('dashboard')\" style=\"cursor: pointer;\">Dashboard</a>\n              </li>\n              <li class=\"account-nav__item \" \n                [ngClass]=\"{'account-nav__item--active': url == 'profile'}\">\n                <a (click)=\"navigate('profile')\" style=\"cursor: pointer;\">Edit Profile</a>\n              </li>\n              <li class=\"account-nav__item\" \n                [ngClass]=\"{'account-nav__item--active': url == 'orderlist'}\">\n                <a (click)=\"navigate('orderlist')\" style=\"cursor: pointer;\">Order History</a>\n              </li>\n              <li class=\"account-nav__item \" [ngClass]=\"{'account-nav__item--active': url == 'orderdetails'}\">\n                <a style=\"cursor: pointer;\">Order Details</a>\n              </li>\n              <li class=\"account-nav__item \" [ngClass]=\"{'account-nav__item--active': url == 'password'}\">\n                <a (click)=\"navigate('password')\" style=\"cursor: pointer;\">Password</a>\n              </li>\n              <li class=\"account-nav__item \">\n                <a (click)=\"logout()\" style=\"cursor: pointer;\">Logout</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-12 col-lg-9 mt-4 mt-lg-0\">\n\n            <!-- Dashboard -->\n          <div class=\"dashboard\" *ngIf=\"url == 'dashboard' || url == ''\">\n            <div class=\"dashboard__profile card profile-card\">\n              <div class=\"card-body profile-card__body\">\n                <div class=\"profile-card__avatar\">\n                  <img src=\"assets/images/avatars/avatar.jpg\" alt=\"profile picture\">\n                </div>\n                <div class=\"profile-card__name\">{{currentUser.fname}} {{currentUser.lname}}</div>\n                <div class=\"profile-card__email\">{{currentUser.email}}</div>\n                <div class=\"profile-card__edit\">\n                  <button class=\"btn btn-secondary btn-sm\">Profile details</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"dashboard__address card address-card address-card--featured\">\n              <div class=\"address-card__badge\">Profile detail</div>\n              <div class=\"address-card__body\">\n                <div class=\"address-card__name\">{{currentUser.fname}} {{currentUser.lname}}</div>\n                <div class=\"address-card__row\">\n                  <div class=\"address-card__row-title\">Address</div>\n                  <div class=\"address-card__row-content\">{{currentUser.address}}</div>\n                </div>\n                <div class=\"address-card__row\">\n                  <div class=\"address-card__row-title\">Phone Number</div>\n                  <div class=\"address-card__row-content\">{{currentUser.phone}}</div>\n                </div>\n                <div class=\"address-card__row\">\n                  <div class=\"address-card__row-title\">Email Address</div>\n                  <div class=\"address-card__row-content\">{{currentUser.email}}</div>\n                </div>\n                <!-- <div class=\"address-card__footer\">\n                  <a href=\"account-edit-address.html\">Edit Address</a>\n                </div> -->\n              </div>\n            </div>\n            <div class=\"dashboard__orders card\">\n              <div class=\"card-header\">\n                <h5>Recent Orders</h5>\n              </div>\n              <div class=\"card-divider\"></div>\n              <div class=\"card-table\">\n                <div class=\"table-responsive-sm\">\n                      <table>\n                        <thead>\n                          <tr>\n                            <th>Order</th>\n                            <th>Date</th>\n                            <th>Status</th>\n                            <th>Total</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                            <!-- *ngIf=\"recent\" -->\n                          <tr *ngFor=\"let list of recent\">\n                            <td><a style=\"cursor: pointer;\" class=\"mex_\" (click)=\"navigate('orderdetails',list.identifier_id)\">#{{list.identifier_id}}</a>\n                            </td>\n                            <td>{{list.created_at | date: 'medium'}}</td>\n                            <td *ngIf=\"list.flag == 0\"><span class=\"badge badge-success\">Paid</span> &nbsp; <span class=\"badge badge-warning\">Not shipped</span></td>\n                            <td *ngIf=\"list.flag == 1\"><span class=\"badge badge-success\">Shipped</span></td>\n                            <td>{{list.amount | number}}</td>\n                          </tr>\n                          <tr *ngIf=\"count(recent) == 0\">\n                            <td colspan=\"4\" style=\"text-align: center;\">No record</td>\n                          </tr>\n                        </tbody>\n                      </table>\n\n                </div>\n\n                <div class=\"style\" *ngIf=\"show\">\n                    <div class=\"lds-facebook\">\n                    <div></div>\n                    <div></div>\n                    <div></div>\n                    </div>\n                </div>\n\n\n              </div>\n            </div>\n          </div>\n          <!-- End of Dashboard -->\n\n          <!-- Profile -->\n          <app-profile *ngIf=\"url == 'profile'\" [user]=\"currentUser\"></app-profile>\n          <!-- End of profile-card -->\n\n          <!-- Orderlist -->\n          <app-orderlist *ngIf=\"url == 'orderlist'\" (identifier)=\"getIdentifierdetail($event)\"></app-orderlist>\n          <!-- End of Orderlist --> \n\n          <!-- orderdetails -->\n          <app-orderdetails *ngIf=\"url == 'orderdetails'\" [identifier]=\"identifier\"></app-orderdetails>\n          <!-- End of orderdetails -->\n\n          <!-- Password -->\n          <app-password *ngIf=\"url == 'password'\" (back)=\"back($event)\"></app-password>\n          <!-- end of Password -->\n        </div>\n\n\n        \n      </div>\n    </div>\n  </div>\n<!-- </div> -->\n<!-- site__body / end -->   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/orderdetails/orderdetails.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/orderdetails/orderdetails.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"card\" *ngIf=\"details\">\n    <div class=\"order-header\">\n      <!-- <div class=\"order-header__actions\">\n        <a href=\"account-orders.html\" class=\"btn btn-xs btn-secondary\">Back to list</a>\n      </div> -->\n      <h5 class=\"order-header__title\">Order #{{details.identifier_id}}</h5>\n      <div class=\"order-header__subtitle\">\n        Was placed on <mark class=\"order-header__date\">{{details.created_at  | date: 'medium'}}</mark>\n        and is currently <mark class=\"order-header__status\">\n          <span *ngIf=\"details.flag == 0\"\n            class=\"badge badge-success\">Paid</span> <span style=\"margin-left: 2px;\" class=\"badge badge-warning\">Not shipped</span>\n            <span *ngIf=\"details.flag == 1\" class=\"badge badge-success\">Shipped</span>\n          </mark>\n      </div>\n    </div>\n    <div class=\"card-divider\"></div>\n    <div class=\"card-table\">\n      <div class=\"table-responsive-sm\">\n        <table>\n          <thead>\n            <tr>\n              <th>Product</th>\n              <th>Total</th>\n            </tr>\n          </thead>\n          <tbody class=\"card-table__body card-table__body--merge-rows\">\n            <tr *ngFor=\"let item of orderedItem\">\n              <td>{{item.product_name}} (&#8358;{{item.unit_cost| number}}) × {{item.quantity}}</td>\n              <td>&#8358; {{item.unit_cost * item.quantity | number}}</td>\n            </tr>\n          </tbody>\n          <tbody class=\"card-table__body card-table__body--merge-rows\">\n            <tr>\n              <th>Subtotal</th>\n              <td>&#8358; {{details.user_invoice.sub_total| number}}</td>\n            </tr>\n            <tr>\n              <th>Delivery fee</th>\n              <td>&#8358; {{1000 | number}}</td>\n            </tr>\n            <tr>\n              <th>VAT Fee</th>\n              <td>&#8358; {{vatfee * details.user_invoice.sub_total / 100}}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <th>Total</th>\n              <td>&#8358; {{details.user_invoice.total| number}}</td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n<div class=\"style\" *ngIf=\"count(details) == 0\">\n  <div class=\"lds-facebook\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/orderlist/orderlist.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/orderlist/orderlist.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5>Order History</h5>\n        </div>\n        <div class=\"card-divider\"></div>\n        <div class=\"card-table\">\n            <div class=\"table-responsive-sm\">\n            <table>\n                <thead>\n                <tr>\n                    <th>Order</th>\n                    <th>Date</th>\n                    <th>Status</th>\n                    <th>Total</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let list of lists\">\n                    <td><a style=\"cursor: pointer;\" class=\"mex_\"\n                        (click)=\"navigate(list.identifier_id)\">#{{list.identifier_id}}</a>\n                    </td>\n                    <td>{{list.created_at | date: 'medium'}}</td>\n                    <!-- <td *ngIf=\"list.flag == 0\">Paid|Not shipped</td> -->\n                    <td *ngIf=\"list.flag == 0\"><span class=\"badge badge-success\">Paid</span> &nbsp; <span class=\"badge badge-warning\">Not\n                        shipped</span></td>\n                    <td *ngIf=\"list.flag == 1\"><span class=\"badge badge-success\">Shipped</span></td>\n\n                    <td>{{list.amount | number}}</td>\n                </tr>\n                <tr *ngIf=\"count(orderlist) == 0\">\n                  <td colspan=\"4\" style=\"text-align: center;\">No record</td>\n                </tr>\n                </tbody>\n            </table>\n            </div>\n            <div class=\"style\" *ngIf=\"show\">\n              <div class=\"lds-facebook\">\n                <div></div>\n                <div></div>\n                <div></div>\n              </div>\n            </div>\n        </div>\n        <div class=\"card-divider\"></div>\n        <div class=\"card-footer\" *ngIf=\"orderlist\">\n            <div class=\"row\">\n                <div class=\"col-sm-7\">\n                  <ul class=\"pagination justify-content-start\" *ngIf=\"orderlist.total > orderlist.per_page\">\n                    <li class=\"page-item\" (click)=\"firstPage(orderlist)\">\n                      <a class=\"page-link page-link--with-arrow\"><i class=\"fa fa-angle-double-left\"></i></a>\n                    </li>\n                    <li class=\"page-item\" *ngIf=\"orderlist.prev_page_url\">\n                      <a class=\"page-link page-link--with-arrow\" aria-label=\"Previous\" (click)=\"Previous(orderlist)\">\n                        <svg class=\"page-link__arrow page-link__arrow--left\" aria-hidden=\"true\" width=\"8px\"\n                          height=\"13px\">\n                          <use xlink:href=\"assets/images/sprite.svg#arrow-rounded-left-8x13\"></use>\n                        </svg>\n                      </a>\n                    </li>\n                    <li class=\"page-item active\"><a class=\"page-link\">{{ orderlist.current_page }} <span\n                          class=\"sr-only\">(current)</span></a></li>\n                    <li class=\"page-item\" *ngIf=\"orderlist.next_page_url\">\n                      <a class=\"page-link page-link--with-arrow\" aria-label=\"Next\" (click)=\"next(orderlist)\">\n                        <svg class=\"page-link__arrow page-link__arrow--right\" aria-hidden=\"true\" width=\"8px\"\n                          height=\"13px\">\n                          <use xlink:href=\"assets/images/sprite.svg#arrow-rounded-right-8x13\"></use>\n                        </svg>\n                      </a>\n                    </li>\n                    <li class=\"kt-pagination__link--first\" *ngIf=\"orderlist.last_page_url\">\n                      <a class=\"page-link page-link--with-arrow\" ng-click=\"lastPage(orderlist)\"><i\n                          class=\"fa fa-angle-double-right\"></i></a>\n                    </li>\n                  </ul>\n\n                </div>\n                <div class=\"col-sm-5\">\n                  <p class=\"justify-content-end\" style=\"text-align: end;\">\n                    Displaying {{ orderlist.to }} of {{ orderlist.total }} records </p>\n                </div>\n            </div>\n        </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/password/password.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/password/password.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"col-12 col-lg-9 mt-4 mt-lg-0\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <h5>Change Password</h5>\n        </div>\n        <div class=\"card-divider\"></div>\n        <div class=\"card-body\">\n            <div class=\"row no-gutters\">\n                <div class=\"col-12 col-lg-7 col-xl-6\">\n                    <form [formGroup]=\"passwordForm\" (ngSubmit)=\"ChangePassword()\">\n                        <div class=\"form-group\">\n                            <label for=\"password-current\">Current Password</label>\n                            <input type=\"password\" class=\"form-control\"\n                            formControlName=\"opassword\"\n                            id=\"password-current\" placeholder=\"Current Password\"\n                            [ngClass]=\"{'is-invalid': submitted && f.opassword.errors}\">\n                              <div *ngIf=\"submitted && f.opassword.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.opassword.errors.required\">Password is required</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password-new\">New Password</label>\n                            <input type=\"password\" class=\"form-control\" \n                            formControlName=\"npassword\"\n                            id=\"password-new\" placeholder=\"New Password\"\n                            [ngClass]=\"{'is-invalid': submitted && f.npassword.errors}\">\n                              <div *ngIf=\"submitted && f.npassword.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.npassword.errors.required\">Password is required</div>\n                                <div *ngIf=\"f.npassword.errors.minlength\">Password must be at least 6 characters</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password-confirm\">Reenter New Password</label>\n                            <input type=\"password\" class=\"form-control\" \n                            formControlName=\"cpassword\"\n                            id=\"password-confirm\" placeholder=\"Re-enter New Password\"\n                            [ngClass]=\"{'is-invalid': submitted && f.cpassword.errors}\">\n                               <div *ngIf=\"submitted && f.cpassword.errors\" class=\"invalid-feedback\">\n                                 <div *ngIf=\"f.cpassword.errors.required\">Password is required</div>\n                                 <div *ngIf=\"f.cpassword.errors.mustMatch\">Passwords must match</div>\n                            </div>\n                        </div>\n                        <div class=\"form-group mt-5 mb-0\">\n                            <button type=\"submit\" [ladda]=\"loading\" class=\"btn btn-primary\">Change</button>\n                        </div>\n                        <div *ngIf=\"error\" class=\"alert alert-danger mt-2\">{{error}}</div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/profile/profile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/profile/profile.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"card\">\n    <div class=\"card-header\">\n      <h5>Edit Profile</h5>\n    </div>\n    <div class=\"card-divider\"></div>\n    <div class=\"card-body\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-12 col-lg-8 col-xl-7\">\n            <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateProfile()\">\n                <div class=\"form-group mx-auto\">\n                  <label for=\"profile-first-name\">First Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"profile-first-name\" \n                  formControlName=\"fname\"\n                  placeholder=\"First Name\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.fname.errors }\"/>\n                    <div *ngIf=\"submitted && f.fname.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.fname.errors.required\">First Name is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"profile-last-name\">Last Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"profile-last-name\" \n                  formControlName=\"lname\"\n                  placeholder=\"Last Name\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.lname.errors }\"/>\n                    <div *ngIf=\"submitted && f.lname.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.lname.errors.required\">Last Name is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"profile-email\">Email Address</label>\n                  <input type=\"email\" class=\"form-control\" id=\"profile-email\" placeholder=\"Email Address\"\n                    formControlName=\"email\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"/>\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                      <div *ngIf=\"f.email.errors.email\">Valid email is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"profile-phone\">Phone Number</label>\n                  <input type=\"text\" class=\"form-control\" id=\"profile-phone\" placeholder=\"Phone Number\"\n                   formControlName=\"phone\" \n                     [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\"/>\n                     <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n                       <div *ngIf=\"f.phone.errors.required\">Contact is required</div>\n                       <div *ngIf=\"f.phone.errors.minlength\">Invalid contact</div>\n                     </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"profile-phone\">Address</label>\n                  <input type=\"text\" class=\"form-control\" id=\"profile-address\" placeholder=\"Address\"\n                    formControlName=\"address\" [ngClass]=\"{ 'is-invalid': submitted &&\n                    f.address.errors }\"/>\n                    <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\n                      <div *ngIf=\"f.address.errors.required\">Address is required</div>\n                    </div>\n                </div>\n                <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n                <div class=\"form-group mt-5 mb-0\">\n                  <button type=\"submit\" class=\"btn btn-primary\" [ladda]=\"loading\" [disabled]=\"!profileForm.valid\">Save</button>\n                </div>\n              </form>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header [cart_item]=\"cart_to_\" (Update_cart)=\"getLatestCart($event)\"></app-header> -->\n<div class=\"block block-products block-products--layout--large-first container\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 d-lg-block d-none\" *ngIf=\"categories\">\n      <div class=\"card-header text-center\" style=\"font-size: 1.125rem; font-weight: 500;\">\n        Shop By Category\n      </div>\n\n      <a [routerLink]=\"['/category', category.slug]\" *ngFor=\"let category of categories\"\n        class=\"btn btn-primary btn-lg btn-block text-left text-capitalize\">{{ category.category }}</a>\n    </div>\n    <div class=\"col-md-12 col-sm-12 col-lg-9\">\n      <div class=\"block-slideshow__body mt-lg-1\" *ngIf=\"top_banners\">\n        <ngx-slick-carousel class=\"carousel\" #SlickModal=\"slick-carousel\" [config]=\"bannerSlideConfig\">\n          <div ngxSlickItem *ngFor=\"let banner of top_banners\">\n            <img [src]=\"Image_data(banner.pictures, 'avatar', null)\" alt=\"\" width=\"100%\" style=\"max-height: 500px;\" />\n            <div class=\"bottom-left\">\n            </div>\n          </div>\n        </ngx-slick-carousel>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- .block-features -->\n<div class=\"block block-features block-features--layout--classic\">\n  <div class=\"container\">\n    <div class=\"block-features__list\">\n      <div class=\"block-features__item\">\n        <div class=\"block-features__icon\">\n          <svg width=\"48px\" height=\"48px\">\n            <use xlink:href=\"./assets/images/sprite.svg#fi-free-delivery-48\"></use>\n          </svg>\n        </div>\n        <div class=\"block-features__content\">\n          <div class=\"block-features__title\">Free Shipping</div>\n          <div class=\"block-features__subtitle\">For orders from $50</div>\n        </div>\n      </div>\n      <div class=\"block-features__divider\"></div>\n      <div class=\"block-features__item\">\n        <div class=\"block-features__icon\">\n          <svg width=\"48px\" height=\"48px\">\n            <use xlink:href=\"./assets/images/sprite.svg#fi-24-hours-48\"></use>\n          </svg>\n        </div>\n        <div class=\"block-features__content\">\n          <div class=\"block-features__title\">Support 24/7</div>\n          <div class=\"block-features__subtitle\">Call us anytime</div>\n        </div>\n      </div>\n      <div class=\"block-features__divider\"></div>\n      <div class=\"block-features__item\">\n        <div class=\"block-features__icon\">\n          <!--<img src=\"./assets/images/logos/secure-payment.png\" style=\"width: 140%;height: 54px; margin-left: -10%;\" />-->\n\n          <svg width=\"48px\" height=\"48px\">\n            <use xlink:href=\"./assets/images/sprite.svg#fi-payment-security-48\"></use>\n          </svg>\n        </div>\n        <div class=\"block-features__content\">\n          <div class=\"block-features__title\">100% Safety</div>\n          <div class=\"block-features__subtitle\">Only secure payments</div>\n        </div>\n      </div>\n      <div class=\"block-features__divider\"></div>\n      <div class=\"block-features__item\">\n        <div class=\"block-features__icon\">\n          <svg width=\"48px\" height=\"48px\">\n            <use xlink:href=\"./assets/images/sprite.svg#fi-tag-48\"></use>\n          </svg>\n        </div>\n        <div class=\"block-features__content\">\n          <div class=\"block-features__title\">Hot Offers</div>\n          <div class=\"block-features__subtitle\">Discounts up to 90%</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- .block-features / end -->\n\n<!-- .block-products -->\n<div class=\"block block-products block-products--layout--large-first\">\n  <div class=\"container\">\n    <div class=\"block-header\">\n      <h3 class=\"block-header__title\">Featured products</h3>\n      <div class=\"block-header__divider\"></div>\n    </div>\n    <div class=\"block-products__body\">\n      <div class=\"block-products__list\" *ngIf=\"products.length; else elseTemplate\">\n        <div class=\"block-products__list-item\" *ngFor=\"let item of products; let i = index\">\n          <div class=\"product-card\">\n            <div class=\"product-card__badges-list\">\n              <div class=\"product-card__badge product-card__badge--hot\" *ngIf=\"i % 2 == 1\">\n                Hot\n              </div>\n              <div class=\"product-card__badge product-card__badge--new\" *ngIf=\"i % 2 == 0\">\n                New\n              </div>\n            </div>\n            <div class=\"product-card__image\">\n              <a [routerLink]=\"['/product', item.slug]\">\n                <img [src]=\"Image_data(item.product_image, 'avatar', 'null')\" alt=\"\" />\n              </a>\n            </div>\n            <div class=\"product-card__info\">\n              <div class=\"product-card__name\">\n                <a [routerLink]=\"['/product', item.slug]\">{{ item.name }}</a>\n              </div>\n              <div class=\"product-card__rating\">\n                <!-- <div class=\"product-card__rating-legend\">11 Reviews</div> -->\n              </div>\n              <div class=\"product-card__actions\">\n                <div class=\"product-card__prices\">\n                  &#8358;{{ item.price | number }}\n                </div>\n                <div class=\"product-card__buttons\">\n                  <button class=\"btn btn-primary product-card__addtocart\" (click)=\"addToCart(item)\"\n                    *ngIf=\"!checkItemInCart(item)\" type=\"button\">\n                    Add To Cart\n                  </button>\n                  <button class=\"btn btn-secondary product-card__addtocart\" type=\"button\" disabled\n                    *ngIf=\"checkItemInCart(item)\">\n                    In Cart\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ng-template #elseTemplate>\n        <app-skeletonloader></app-skeletonloader>\n      </ng-template>\n    </div>\n  </div>\n</div>\n<!-- .block-products / end -->\n\n<!-- .block-banner -->\n<!-- <div class=\"block block-banner mt-3\">\n  <div class=\"container\" *ngIf=\"banner_two\">\n    <a href=\"\" class=\"block-banner__body\"> -->\n<!-- <div class=\"block-banner__image block-banner__image--desktop\"\n        [ngStyle]=\"{'background-image': Image_data(banner_two.pictures, 'avatar', 'null')}\">\n      </div> -->\n\n<!-- <div class=\"block-banner__image block-banner__image--mobile\"\n        [ngStyle]=\"{'background-image': Image_data(banner_, 'avatar', 'null')}\">\n      </div>\n      <div class=\"block-banner__title\">{{banner_two.details}} <br class=\"block-banner__mobile-br\"> Robotics Tools</div>\n      <div class=\"block-banner__button\">\n        <span class=\"btn btn-sm btn-primary\">Shop Now</span>\n      </div>\n    </a>\n  </div>\n</div> -->\n<!-- .block-banner / end -->\n\n<!-- .block-product-columns -->\n<div class=\"block block-product-columns d-lg-block d-none\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"block-header\">\n          <h3 class=\"block-header__title\">Top Rated Products</h3>\n          <div class=\"block-header__divider\"></div>\n        </div>\n        <div class=\"block-product-columns__column\" *ngFor=\"let item of top_rated; let i = index\">\n          <div class=\"block-product-columns__item\">\n            <div class=\"product-card product-card--layout--horizontal\">\n              <div class=\"product-card__badges-list\">\n                <div class=\"product-card__badge product-card__badge--new\">\n                  New\n                </div>\n              </div>\n              <div class=\"product-card__image\">\n                <a href=\"#\" [routerLink]=\"['/product', item.slug]\">\n                  <!-- <img [src]=\"item.product_image\" width=\"100%\" height=\"100%\" alt=\"\"> -->\n\n                  <img [src]=\"Image_data(item.product_image, 'avatar', 'null')\" alt=\"\" />\n                </a>\n              </div>\n              <div class=\"product-card__info\">\n                <div class=\"product-card__name\">\n                  <a href=\"#\" [routerLink]=\"['/product', item.slug]\">{{\n                    item.name\n                  }}</a>\n                </div>\n                <div class=\"product-card__rating\">\n                  <div class=\"product-card__rating-stars\"></div>\n                  <div class=\"product-card__rating-legend\">9 Reviews</div>\n                </div>\n              </div>\n              <div class=\"product-card__actions\">\n                <!-- <div class=\"product-card__availability\" style=\"font-size: 13px; display: block;\">\n                  Availability:\n                  <span [ngClass]=\"\n                      item.quantity > 0 ? 'text-avail' : 'text-Unavail'\n                    \">{{ avail(item.quantity) }}</span>\n                </div> -->\n                <div class=\"product-card__prices\">\n                  &#8358;{{ item.price | number }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"block-header\">\n          <h3 class=\"block-header__title\">Special Offers</h3>\n          <div class=\"block-header__divider\"></div>\n        </div>\n        <div class=\"block-product-columns__column\" *ngFor=\"let item of special_offers; let i = index\">\n          <div class=\"block-product-columns__item\">\n            <div class=\"product-card product-card--layout--horizontal\">\n              <div class=\"product-card__badges-list\">\n                <div class=\"product-card__badge product-card__badge--sale\">\n                  Sale\n                </div>\n              </div>\n              <div class=\"product-card__image\">\n                <a [routerLink]=\"['/product', item.slug]\">\n                  <!-- <img [src]=\"item.product_image\" width=\"100%\" height=\"100%\" alt=\"\"> -->\n                  <img [src]=\"Image_data(item.product_image, 'avatar', 'null')\" alt=\"\" />\n                </a>\n              </div>\n              <div class=\"product-card__info\">\n                <div class=\"product-card__name\">\n                  <a [routerLink]=\"['/product', item.slug]\">{{ item.name }}</a>\n                </div>\n                <div class=\"product-card__rating\">\n                  <div class=\"product-card__rating-legend\">7 Reviews</div>\n                </div>\n              </div>\n              <div class=\"product-card__actions\">\n                <div class=\"product-card__availability\">\n                  Availability: <span class=\"text-avail\">In Stock</span>\n                </div>\n                <div class=\"product-card__prices\">\n                  <span class=\"product-card__new-price\">\n                    &#8358;{{ item.price | number }}</span>\n                  <span class=\"product-card__old-price\">{{\n                    item.price * 2 | number\n                  }}</span>\n                </div>\n                <div class=\"product-card__buttons\">\n                  <button class=\"btn btn-primary product-card__addtocart\" type=\"button\">\n                    Add To Cart\n                  </button>\n                  <button class=\"btn btn-secondary product-card__addtocart product-card__addtocart--list\" type=\"button\">\n                    Add To Cart\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-4\">\n        <div class=\"block-header\">\n          <h3 class=\"block-header__title\">Bestsellers</h3>\n          <div class=\"block-header__divider\"></div>\n        </div>\n        <div class=\"block-product-columns__column\" *ngFor=\"let item of best_sellers; let i = index\">\n          <div class=\"block-product-columns__item\">\n            <div class=\"product-card product-card--layout--horizontal\">\n              <div class=\"product-card__image\">\n                <a [routerLink]=\"['/product', item.slug]\">\n                  <!-- <img [src]=\"item.product_image\" width=\"100%\" height=\"100%\" alt=\"\"> -->\n                  <img [src]=\"Image_data(item.product_image, 'avatar', 'null')\" alt=\"\" />\n                </a>\n              </div>\n              <div class=\"product-card__info\">\n                <div class=\"product-card__name\">\n                  <a [routerLink]=\"['/product', item.slug]\">{{ item.name }}</a>\n                </div>\n                <div class=\"product-card__rating\">\n                  <div class=\"product-card__rating-legend\">4 Reviews</div>\n                </div>\n              </div>\n              <div class=\"product-card__actions\">\n                <div class=\"product-card__availability\">\n                  Availability: <span class=\"text-success\">In Stock</span>\n                </div>\n                <div class=\"product-card__prices\">\n                  &#8358;{{ item.price | number }}\n                </div>\n                <div class=\"product-card__buttons\">\n                  <button class=\"btn btn-primary product-card__addtocart\" type=\"button\">\n                    Add To Cart\n                  </button>\n                  <button class=\"btn btn-secondary product-card__addtocart product-card__addtocart--list\" type=\"button\">\n                    Add To Cart\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- .block-product-columns / end -->\n\n<!-- .block-posts -->\n<div class=\"block block-posts block-posts--layout--list-sm\" *ngIf=\"posts\" data-layout=\"list-sm\">\n  <div class=\"container\">\n    <div class=\"block-header\">\n      <h3 class=\"block-header__title\">Latest News</h3>\n      <div class=\"block-header__divider\"></div>\n      <!-- <div class=\"block-header__arrows-list\">\n                    <button class=\"block-header__arrow block-header__arrow--left\" type=\"button\">\n                        <svg width=\"7px\" height=\"11px\">\n                            <use xlink:href=\"./assets/images/sprite.svg#arrow-rounded-left-7x11\"></use>\n                        </svg>\n                    </button>\n                    <button class=\"block-header__arrow block-header__arrow--right\" type=\"button\">\n                        <svg width=\"7px\" height=\"11px\">\n                            <use xlink:href=\"./assets/images/sprite.svg#arrow-rounded-right-7x11\"></use>\n                        </svg>\n                    </button>\n                </div> -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 mb-2\" *ngFor=\"let post of posts\">\n        <div class=\"post-card\">\n          <div class=\"post-card__image\">\n            <a [routerLink]=\"['/blog', post.slug]\">\n              <!-- <img src=\"{{ post.image }}\" alt=\"\"> -->\n              <img [src]=\"Image_data(post.image, 'avatar', null)\" alt=\"\" /></a>\n\n            <!-- </a> -->\n          </div>\n          <div class=\"post-card__info\">\n            <div class=\"post-card__name\">\n              <a [routerLink]=\"'/blog/' + post.slug\">{{ post.title }}</a>\n            </div>\n            <div class=\"post-card__date\">\n              {{ post.time | date: \"longDate\" }}\n            </div>\n            <div class=\"post-card__content\" [line-truncation]=\"3\" [innerHTML]=\"post.description\"></div>\n            <div class=\"post-card__read-more\">\n              <a [routerLink]=\"'/blog/' + post.slug\" class=\"btn btn-secondary btn-sm\">Read More</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"block-posts__slider\">\n                <div class=\"owl-carousel\"> -->\n    <!-- <div class=\"post-card\">\n                        <div class=\"post-card__image\">\n                            <a href=\"\">\n                                <img src=\"./assets/images/posts/post-1.jpg\" alt=\"\">\n                            </a>\n                        </div>\n                        <div class=\"post-card__info\">\n                            <div class=\"post-card__category\">\n                                <a href=\"\">Special Offers</a>\n                            </div>\n                            <div class=\"post-card__name\">\n                                <a href=\"\">Philosophy That Addresses Topics Such As Goodness</a>\n                            </div>\n                            <div class=\"post-card__date\">October 19, 2019</div>\n                            <div class=\"post-card__content\">\n                                In one general sense, philosophy is associated with wisdom,\n                                intellectual culture and a search for knowledge.\n                                In that sense, all cultures...\n                            </div>\n                            <div class=\"post-card__read-more\">\n                                <a href=\"\" class=\"btn btn-secondary btn-sm\">Read More</a>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"post-card\">\n                        <div class=\"post-card__image\">\n                            <a href=\"\">\n                                <img src=\"./assets/images/posts/post-2.jpg\" alt=\"\">\n                            </a>\n                        </div>\n                        <div class=\"post-card__info\">\n                            <div class=\"post-card__category\">\n                                <a href=\"\">Latest News</a>\n                            </div>\n                            <div class=\"post-card__name\">\n                                <a href=\"\">Logic Is The Study Of Reasoning And Argument Part 2</a>\n                            </div>\n                            <div class=\"post-card__date\">September 5, 2019</div>\n                            <div class=\"post-card__content\">\n                                In one general sense, philosophy is associated with wisdom,\n                                intellectual culture and a search for knowledge.\n                                In that sense, all cultures...\n                            </div>\n                            <div class=\"post-card__read-more\">\n                                <a href=\"\" class=\"btn btn-secondary btn-sm\">Read More</a>\n                            </div>\n                        </div>\n                    </div> -->\n\n    <!-- <div class=\"post-card  \">\n                        <div class=\"post-card__image\">\n                            <a href=\"\">\n                                <img src=\"images/posts/post-3.jpg\" alt=\"\">\n                            </a>\n                        </div>\n                        <div class=\"post-card__info\">\n                            <div class=\"post-card__category\">\n                                <a href=\"\">New Arrivals</a>\n                            </div>\n                            <div class=\"post-card__name\">\n                                <a href=\"\">Some Philosophers Specialize In One Or More Historical Periods</a>\n                            </div>\n                            <div class=\"post-card__date\">August 12, 2019</div>\n                            <div class=\"post-card__content\">\n                                In one general sense, philosophy is associated with wisdom,\n                                intellectual culture and a search for knowledge.\n                                In that sense, all cultures...\n                            </div>\n                            <div class=\"post-card__read-more\">\n                                <a href=\"\" class=\"btn btn-secondary btn-sm\">Read More</a>\n                            </div>\n                        </div>\n                    </div> -->\n\n    <!-- </div>\n            </div> -->\n  </div>\n</div>\n<!-- .block-posts / end -->\n\n<!-- quickview-modal -->\n<!-- Modal Section -->\n<ngx-smart-modal #productModal identifier=\"productModal\" customClass=\"modal-width\" class=\"nsm-dialog-animation-fade\">\n  <div class=\"quickview\" *ngIf=\"productModal.hasData()\">\n    <div class=\"product product--layout--quickview\" data-layout=\"quickview\">\n      <div class=\"product__content\">\n        <!-- .product__gallery -->\n        <div class=\"product__gallery\">\n          <ngx-gallery *ngIf=\"galleryImages\" [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n        </div>\n        <!-- .product__gallery / end -->\n        <!-- .product__info -->\n        <div class=\"product__info\">\n          <h1 class=\"product__name\">{{ productModal.getData().name }}</h1>\n          <div class=\"product__rating\">\n            <div class=\"product__rating-legend\">\n              <a *ngIf=\"count(productModal.getData().reviews) > 0\">{{\n                count(productModal.getData().reviews)\n              }}</a>\n            </div>\n          </div>\n          <div class=\"product__description\">\n            {{ productModal.getData().description }}\n          </div>\n          <ul class=\"product__meta\">\n            <li class=\"product__meta-availability\">\n              Availability:\n              <span [ngClass]=\"\n                  productModal.getData().quantity > 0\n                    ? 'text-avail'\n                    : 'text-Unavail'\n                \">\n                {{ avail(productModal.getData().quantity) }}\n              </span>\n            </li>\n            <li>\n              Brand: <a>{{ productModal.getData().brand }}</a>\n            </li>\n            <li>SKU: {{ productModal.getData().sku.sku_no }}</li>\n            <li *ngIf=\"productModal.getData().content\">\n              Content: {{ productModal.getData().content }}\n            </li>\n          </ul>\n        </div>\n        <!-- .product__info / end -->\n        <!-- .product__sidebar -->\n        <div class=\"product__sidebar\">\n          <div class=\"product__availability\">\n            Availability: <span class=\"text-avail\">In Stock</span>\n          </div>\n          <div class=\"product__prices\">\n            &#8358;{{ productModal.getData().price | number }}\n          </div>\n          <!-- .product__options -->\n          <form class=\"product__options\">\n            <div class=\"form-group product__option\">\n              <div class=\"product__actions\">\n                <button class=\"btn btn-primary product-card__addtocart\" (click)=\"addToCart(productModal.getData())\"\n                  *ngIf=\"!checkItemInCart(productModal.getData())\" type=\"button\">\n                  Add To Cart\n                </button>\n                <button class=\"btn btn-secondary product-card__addtocart\" type=\"button\" disabled\n                  *ngIf=\"checkItemInCart(productModal.getData())\">\n                  In Cart\n                </button>\n              </div>\n            </div>\n          </form>\n          <!-- .product__options / end -->\n        </div>\n        <!-- .product__end -->\n        <div class=\"product__footer\">\n          <div class=\"product__tags tags\">\n            <!--<div class=\"tags__list\">-->\n            <!--<a href=\"\">Mounts</a>-->\n            <!--<a href=\"\">Electrodes</a>-->\n            <!--<a href=\"\">Chainsaws</a>-->\n            <!--</div>-->\n          </div>\n          <div class=\"product__share-links share-links\">\n            <ul class=\"share-links__list\">\n              <li class=\"share-links__item share-links__item--type--like\">\n                <a href=\"\">Like</a>\n              </li>\n              <li class=\"share-links__item share-links__item--type--tweet\">\n                <a href=\"\">Tweet</a>\n              </li>\n              <li class=\"share-links__item share-links__item--type--pin\">\n                <a href=\"\">Pin It</a>\n              </li>\n              <li class=\"share-links__item share-links__item--type--counter\">\n                <a href=\"\">4K</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ngx-smart-modal>\n<!-- quickview-modal / end -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"site__body\">\n  <div class=\"block\">\n    <div class=\"container\">\n      <div class=\"not-found\">\n        <div class=\"not-found__404\">\n          Oops! Error 404\n        </div>\n        <div class=\"not-found__content\">\n          <h1 class=\"not-found__title\">Page Not Found</h1>\n          <p class=\"not-found__text\">\n            We can't seem to find the page you're looking for.<br>\n            Try to use the search.\n          </p>\n          <p class=\"not-found__text\">\n            Or go to the home page to start over.\n          </p>\n          <a [routerLink]=\"['/']\" class=\"btn btn-secondary btn-sm\">Go To Home Page</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>privacy works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header> -->\n<!--Page header-->\n<div class=\"page-header\">\n    <div class=\"page-header__container container\">\n        <div class=\"page-header__breadcrumb\">\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"#\" [routerLink]=\"['']\">Home</a>\n                        <svg class=\"breadcrumb-arrow\" width=\"6px\" height=\"9px\">\n                            <use xlink:href=\"./assets/images/sprite.svg#arrow-rounded-right-6x9\"></use>\n                        </svg>\n                    </li>\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"#\" [routerLink]=\"['/shop']\">Products</a>\n                        <svg class=\"breadcrumb-arrow\" width=\"6px\" height=\"9px\">\n                            <use xlink:href=\"./assets/images/sprite.svg#arrow-rounded-right-6x9\"></use>\n                        </svg>\n                    </li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">{{product['name']}}</li>\n                </ol>\n            </nav>\n        </div>\n    </div>\n</div>\n\n<div class=\"block\">\n    <div class=\"container\">\n        <div class=\"product product--layout--standard\" data-layout=\"standard\">\n            <div class=\"product__content\">\n                <!-- .product__gallery -->\n                <div class=\"product__gallery\">\n                    <div class=\"product-gallery\">\n                        <div class=\"product-gallery__featured\" style=\"padding:7px\">\n                            <ngx-gallery *ngIf=\"galleryImages\"\n                                        [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n                        </div>\n                    </div>\n                </div>\n                <!-- .product__gallery / end -->\n                <!-- .product__info -->\n                <div class=\"product__info\">\n                    <h1 class=\"product__name\">{{product['name']}}</h1>\n                    <div class=\"product__rating\">\n                        <div class=\"product__rating-legend\">\n                            <label *ngIf=\" count(reviews.data)> 0\">{{count(reviews.data)}} Reviews</label>\n                        </div>\n                    </div>\n                    <div class=\"product__description\">\n                        {{product['description']}}\n                    </div>\n\n                    <ul class=\"product__meta\">\n                        <li class=\"product__meta-availability\">Availability:\n                            <span  [ngClass]=\"product['quantity'] > 0 ? 'text-avail': 'text-Unavail'\">{{avail(product['quantity'])}}</span>\n                        </li>\n                        <li>Brand: <a href=\"\">{{product['brand']}}</a></li>\n                        <li>SKU: {{product['Sku']}}</li>\n                    </ul>\n                </div>\n                <!-- .product__info / end -->\n                <!-- .product__sidebar -->\n                <div class=\"product__sidebar\">\n                    <div class=\"product__availability\">\n                        Availability: <span class=\"text-success\">In Stock</span>\n                    </div>\n                    <div class=\"product__prices\">\n                        &#8358;{{product['price'] | number}}\n                    </div>\n                    <!-- .product__options -->\n                    <form class=\"product__options\">\n                        <div class=\"form-group product__option\">\n                            <div class=\"product__actions\">\n                                <div class=\"product__actions-item product__actions-item--addtocart\">\n                                    <a class=\"btn btn-primary\" [routerLink]=\"['/cart']\">Buy now</a>\n                                </div>\n                                <div class=\"product__actions-item product__actions-item--addtocart\">\n                                    <button class=\"btn btn-primary product-card__addtocart\" (click)=\"addToCart(product)\"\n                                            *ngIf=\"!checkItemInCart(product)\"\n                                            type=\"button\">Add To Cart</button>\n                                    <button class=\"btn btn-secondary product-card__addtocart\"\n                                            type=\"button\" disabled *ngIf=\"checkItemInCart(product)\">In Cart</button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <!-- .product__options / end -->\n                </div>\n                <!-- .product__end -->\n                <!-- <div class=\"product__footer\">\n                    <div class=\"product__tags tags\">\n                    </div>\n                    <div class=\"product__share-links share-links\">\n                    <ul class=\"share-links__list\">\n                    <li class=\"share-links__item share-links__item--type--like\"><a href=\"\">Like</a></li>\n                    <li class=\"share-links__item share-links__item--type--tweet\"><a href=\"\">Tweet</a></li>\n                    <li class=\"share-links__item share-links__item--type--pin\"><a href=\"\">Pin It</a></li>\n                    <li class=\"share-links__item share-links__item--type--counter\"><a href=\"\">4K</a></li>\n                    </ul>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        <div class=\"product-tabs \">\n                <mat-tab-group animationDuration=\"0ms\" style=\"align-items: center\">\n                    <mat-tab label=\"Product descriptions\" class=\"product-tabs__item product-tabs__list\" style=\"color: black; font-size: 20px;\">\n\n                        <div class=\"product-tabs__content\">\n                            <div id=\"tab-description\">\n                                <div class=\"typography\">\n                                    <h3>Product Full Description</h3>\n                                    <p [innerHtml]=\"product['description']\">\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-tab>\n                    <mat-tab label=\"Reviews\" class=\"product-tabs__item product-tabs__list\">\n                        <div class=\"product-tabs__content\">\n                            <div id=\"tab-review\">\n                                <div class=\"spec\">\n                                    <h3 class=\"spec__header\">Reviews</h3>   \n                                    <div class=\"spec__disclaimer\">\n                                        Information on product characteristics, the delivery set, the country of manufacture and the appearance\n                                        of the goods is for reference only and is based on the latest information available at the time of publication.\n                                    </div>\n                                    <div class=\"reviews-list\" *ngIf=\"reviews\">\n                                        <ol class=\"reviews-list__content\" *ngFor=\"let views of reviews.data\">\n                                            <li class=\"reviews-list__item\">\n                                                <div class=\"review\">\n                                                    <div class=\"review__avatar\"><img [src]=\"Image_data(views.user.avatar, 'avatar', null)\" alt=\"\"></div>\n                                                    <div class=\"review__content\">\n                                                        <div class=\"review__author\">{{views.user.fname}} {{views.user.lname}}</div>\n                                                        <div class=\"review__text\">{{views.message}}</div>\n                                                        <div class=\"review__date\">{{views.created_at | date}}</div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                        </ol>\n                                            <div class=\"reviews-list__pagination py-2\" *ngIf=\"count(reviews.data) != 0\">\n                                            <!-- <div class=\"col-sm-7\"> -->\n                                                <ul class=\"pagination justify-content-center\">\n                                                <li class=\"page-item\" (click)=\"firstPage(reviews)\">\n                                                    <a class=\"page-link page-link--with-arrow\"><i\n                                                            class=\"fa fa-angle-double-left\"></i></a>\n                                                </li>\n                                                <li class=\"page-item\" *ngIf=\"reviews.prev_page_url\">\n                                                    <a class=\"page-link page-link--with-arrow\" aria-label=\"Previous\"\n                                                    (click)=\"Previous(reviews)\">\n                                                    <svg class=\"page-link__arrow page-link__arrow--left\"\n                                                        aria-hidden=\"true\" width=\"8px\" height=\"13px\">\n                                                        <use xlink:href=\"assets/images/sprite.svg#arrow-rounded-left-8x13\">\n                                                        </use>\n                                                    </svg>\n                                                    </a>\n                                                </li>\n                                                <li class=\"page-item active\"><a\n                                                    class=\"page-link\">{{ reviews.current_page }} <span\n                                                        class=\"sr-only\">(current)</span></a></li>\n                                                <li class=\"page-item\" *ngIf=\"reviews.next_page_url\">\n                                                    <a class=\"page-link page-link--with-arrow\" aria-label=\"Next\"\n                                                    (click)=\"next(reviews)\">\n                                                    <svg class=\"page-link__arrow page-link__arrow--right\"\n                                                        aria-hidden=\"true\" width=\"8px\" height=\"13px\">\n                                                        <use xlink:href=\"assets/images/sprite.svg#arrow-rounded-right-8x13\">\n                                                        </use>\n                                                    </svg>\n                                                    </a>\n                                                </li>\n                                                <li class=\"kt-pagination__link--first\" *ngIf=\"reviews.last_page_url\">\n                                                    <a class=\"page-link page-link--with-arrow\"\n                                                        ng-click=\"lastPage(reviews)\"><i\n                                                        class=\"fa fa-angle-double-right\"></i></a>\n                                                </li>\n                                                </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-tab>\n                </mat-tab-group>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resource/resource.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resource/resource.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>resource works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resources/resources.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resources/resources.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>resources works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-2\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"block p-2\">\n        <div class=\"products-view\">\n          <div class=\"products-view__options\">\n            <div class=\"view-options view-options--offcanvas--always\">\n              <div class=\"view-options__control\">\n                <label for=\"\">Sort By</label>\n                <div>\n                  <select class=\"form-control form-control-sm\" name=\"sort\" [(ngModel)]=\"sortProduct\" id=\"\"\n                    (ngModelChange)=\"sortingProduct()\">\n                    <option value=\"Default\">Default</option>\n                    <option value=\"name\">Name (A-Z)</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"products-view__list products-list\" data-layout=\"grid-4-full\" data-with-features=\"false\"\n            data-mobile-grid-columns=\"2\">\n            <div class=\"products-list__body\" *ngIf=\"products.data.length; else elseTemplate\">\n              <div class=\"products-list__item\" *ngFor=\"let product of products.data;\">\n                <div class=\"product-card \">\n                  <div class=\"product-card__image\">\n                    <a [routerLink]=\"['/product', product.slug]\">\n                      <img [src]=\"checkValue(product.product_image,'avatar', null)\" alt=\"\"></a>\n                    <!-- <img [src]=\"product.product_image\" alt=\"\"></a> -->\n                  </div>\n                  <div class=\"product-card__info\">\n                    <div class=\"product-card__name\">\n                      <a [routerLink]=\"['/product', product.slug]\">{{product.name}}</a>\n                    </div>\n                    <div class=\"product-card__rating\" *ngIf=\"count(product.review) > 0\">\n                      <div class=\"product-card__rating-legend\">{{count(product.review)}}</div>\n                    </div>\n                  </div>\n                  <div class=\"product-card__actions\">\n                    <div class=\"product-card__prices\">\n                      &#8358;{{product.price | number}}\n                    </div>\n                    <div class=\"product-card__buttons\">\n                      <button class=\"btn btn-primary product-card__addtocart\" (click)=\"addToCart(product)\"\n                        *ngIf=\"!checkItemInCart(product)\" type=\"button\">Add To Cart</button>\n                      <button class=\"btn btn-secondary product-card__addtocart\" type=\"button\" disabled\n                        *ngIf=\"checkItemInCart(product)\">In Cart</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <ng-template #elseTemplate>\n              <app-skeletonloader></app-skeletonloader>\n            </ng-template>\n          </div>\n          <div class=\"products-view__pagination\">\n            <ul class=\"pagination justify-content-center\" *ngIf=\"products.total > products.per_page\">\n              <li class=\"page-item\" (click)=\"firstPage(products)\">\n                <a class=\"page-link page-link--with-arrow\"><i class=\"fa fa-angle-double-left\"></i></a>\n              </li>\n              <li class=\"page-item\" *ngIf=\"products.prev_page_url\">\n                <a class=\"page-link page-link--with-arrow\" aria-label=\"Previous\" (click)=\"Previous(products)\">\n                  <svg class=\"page-link__arrow page-link__arrow--left\" aria-hidden=\"true\" width=\"8px\" height=\"13px\">\n                    <use xlink:href=\"assets/images/sprite.svg#arrow-rounded-left-8x13\"></use>\n                  </svg>\n                </a>\n              </li>\n              <li class=\"page-item active\"><a class=\"page-link\">{{ products.current_page }} <span\n                    class=\"sr-only\">(current)</span></a></li>\n              <li class=\"page-item\" *ngIf=\"products.next_page_url\">\n                <a class=\"page-link page-link--with-arrow\" aria-label=\"Next\" (click)=\"next(products)\">\n                  <svg class=\"page-link__arrow page-link__arrow--right\" aria-hidden=\"true\" width=\"8px\" height=\"13px\">\n                    <use xlink:href=\"assets/images/sprite.svg#arrow-rounded-right-8x13\"></use>\n                  </svg>\n                </a>\n              </li>\n              <li class=\"kt-pagination__link--first\" *ngIf=\"products.last_page_url\">\n                <a class=\"page-link page-link--with-arrow\" ng-click=\"lastPage(blogs)\"><i\n                    class=\"fa fa-angle-double-right\"></i></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"block block-sidebar block-sidebar--offcanvas--always\">\n    <div class=\"block-sidebar__backdrop\"></div>\n    <div class=\"block-sidebar__body\">\n      <div class=\"block-sidebar__header\">\n        <div class=\"block-sidebar__title\">Filters</div>\n        <button class=\"block-sidebar__close\" type=\"button\">\n          <svg width=\"20px\" height=\"20px\">\n            <use xlink:href=\"./assets/images/sprite.svg#cross-20\"></use>\n          </svg>\n        </button>\n      </div>\n      <div class=\"block-sidebar__item\">\n        <div class=\"widget-filters widget widget-filters--offcanvas--always\" data-collapse\n          data-collapse-opened-class=\"filter--opened\">\n          <h4 class=\"widget-filters__title widget__title\">Filters</h4>\n          <div class=\"widget-filters__list\">\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Categories\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-categories\">\n                      <ul class=\"filter-categories__list\">\n                        <li class=\"filter-categories__item filter-categories__item--parent\">\n                          <svg class=\"filter-categories__arrow\" width=\"6px\" height=\"9px\">\n                            <use xlink:href=\"images/sprite.svg#arrow-rounded-left-6x9\"></use>\n                          </svg>\n                          <a href=\"\">Construction & Repair</a>\n                          <div class=\"filter-categories__counter\">254</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--parent\">\n                          <svg class=\"filter-categories__arrow\" width=\"6px\" height=\"9px\">\n                            <use xlink:href=\"images/sprite.svg#arrow-rounded-left-6x9\"></use>\n                          </svg>\n                          <a href=\"\">Instruments</a>\n                          <div class=\"filter-categories__counter\">75</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--current\">\n                          <a href=\"\">Power Tools</a>\n                          <div class=\"filter-categories__counter\">21</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Drills & Mixers</a>\n                          <div class=\"filter-categories__counter\">15</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Cordless Screwdrivers</a>\n                          <div class=\"filter-categories__counter\">2</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Screwdrivers</a>\n                          <div class=\"filter-categories__counter\">30</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Wrenches</a>\n                          <div class=\"filter-categories__counter\">7</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Grinding Machines</a>\n                          <div class=\"filter-categories__counter\">5</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Milling Cutters</a>\n                          <div class=\"filter-categories__counter\">2</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Electric Spray Guns</a>\n                          <div class=\"filter-categories__counter\">9</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Jigsaws</a>\n                          <div class=\"filter-categories__counter\">4</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Jackhammers</a>\n                          <div class=\"filter-categories__counter\">0</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Planers</a>\n                          <div class=\"filter-categories__counter\">12</div>\n                        </li>\n                        <li class=\"filter-categories__item filter-categories__item--child\">\n                          <a href=\"\">Glue Guns</a>\n                          <div class=\"filter-categories__counter\">7</div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Categories Alt\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-categories-alt\">\n                      <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--1\"\n                        data-collapse-opened-class=\"filter-categories-alt__item--open\">\n                        <li class=\"filter-categories-alt__item\" data-collapse-item>\n                          <a href=\"\">Clothes & PPE</a>\n                        </li>\n                        <li class=\"filter-categories-alt__item\" data-collapse-item>\n                          <button class=\"filter-categories-alt__expander\" data-collapse-trigger></button>\n                          <a href=\"\">Power Tools</a>\n                          <div class=\"filter-categories-alt__children\" data-collapse-content>\n                            <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--2\">\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Engravers</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Drills</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Wrenches</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Plumbing</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Wall Chaser</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Pneumatic Tools</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Milling Cutters</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </li>\n                        <li\n                          class=\"filter-categories-alt__item filter-categories-alt__item--open filter-categories-alt__item--current\"\n                          data-collapse-item>\n                          <button class=\"filter-categories-alt__expander\" data-collapse-trigger></button>\n                          <a href=\"\">Hand Tools</a>\n                          <div class=\"filter-categories-alt__children\" data-collapse-content>\n                            <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--2\">\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Screwdrivers</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item filter-categories-alt__item--current\"\n                                data-collapse-item>\n                                <button class=\"filter-categories-alt__expander\" data-collapse-trigger></button>\n                                <a href=\"\">Handsaws</a>\n                                <div class=\"filter-categories-alt__children\" data-collapse-content>\n                                  <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--3\">\n                                    <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                      <a href=\"\">Power Saws</a>\n                                    </li>\n                                    <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                      <a href=\"\">Hacksaws</a>\n                                    </li>\n                                    <li class=\"filter-categories-alt__item filter-categories-alt__item--current\"\n                                      data-collapse-item>\n                                      <button class=\"filter-categories-alt__expander\" data-collapse-trigger></button>\n                                      <a href=\"\">Deep Dive</a>\n                                      <div class=\"filter-categories-alt__children\" data-collapse-content>\n                                        <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--4\">\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Submarines</a>\n                                          </li>\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Silt In Bags</a>\n                                          </li>\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Black Pearl</a>\n                                          </li>\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Krakens</a>\n                                          </li>\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Nautilus</a>\n                                          </li>\n                                          <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                            <a href=\"\">Mariana Trench</a>\n                                          </li>\n                                        </ul>\n                                      </div>\n                                    </li>\n                                    <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                      <a href=\"\">Chain Saws</a>\n                                    </li>\n                                    <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                      <a href=\"\">Two-handed Saws</a>\n                                    </li>\n                                    <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                      <a href=\"\">Other</a>\n                                    </li>\n                                  </ul>\n                                </div>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Knives</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Axes</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Multitools</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Paint Tools</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </li>\n                        <li class=\"filter-categories-alt__item\" data-collapse-item>\n                          <a href=\"\">Measurement</a>\n                        </li>\n                        <li class=\"filter-categories-alt__item\" data-collapse-item>\n                          <button class=\"filter-categories-alt__expander\" data-collapse-trigger></button>\n                          <a href=\"\">Garden Equipment</a>\n                          <div class=\"filter-categories-alt__children\" data-collapse-content>\n                            <ul class=\"filter-categories-alt__list filter-categories-alt__list--level--2\">\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Motor Pumps</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Chainsaws</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Electric Saws</a>\n                              </li>\n                              <li class=\"filter-categories-alt__item\" data-collapse-item>\n                                <a href=\"\">Brush Cutters</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Price\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-price\" data-min=\"500\" data-max=\"1500\" data-from=\"590\" data-to=\"1130\">\n                      <div class=\"filter-price__slider\"></div>\n                      <div class=\"filter-price__title\">Price: $<span class=\"filter-price__min-value\"></span> – $<span\n                          class=\"filter-price__max-value\"></span></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Brand\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-list\">\n                      <div class=\"filter-list__list\">\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\">\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Wakita\n                          </span>\n                          <span class=\"filter-list__counter\">7</span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\" checked>\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Zosch\n                          </span>\n                          <span class=\"filter-list__counter\">42</span>\n                        </label>\n                        <label class=\"filter-list__item  filter-list__item--disabled \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\" checked disabled>\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            WeVALT\n                          </span>\n                        </label>\n                        <label class=\"filter-list__item  filter-list__item--disabled \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\" disabled>\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Hammer\n                          </span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\">\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Mitasia\n                          </span>\n                          <span class=\"filter-list__counter\">1</span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-check\">\n                            <span class=\"input-check__body\">\n                              <input class=\"input-check__input\" type=\"checkbox\">\n                              <span class=\"input-check__box\"></span>\n                              <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                                <use xlink:href=\"images/sprite.svg#check-9x7\"></use>\n                              </svg>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Metaggo\n                          </span>\n                          <span class=\"filter-list__counter\">25</span>\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Brand\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-list\">\n                      <div class=\"filter-list__list\">\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\">\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Wakita\n                          </span>\n                          <span class=\"filter-list__counter\">7</span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\">\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Zosch\n                          </span>\n                          <span class=\"filter-list__counter\">42</span>\n                        </label>\n                        <label class=\"filter-list__item  filter-list__item--disabled \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\" checked disabled>\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            WeVALT\n                          </span>\n                        </label>\n                        <label class=\"filter-list__item  filter-list__item--disabled \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\" disabled>\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Hammer\n                          </span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\">\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Mitasia\n                          </span>\n                          <span class=\"filter-list__counter\">1</span>\n                        </label>\n                        <label class=\"filter-list__item \">\n                          <span class=\"filter-list__input input-radio\">\n                            <span class=\"input-radio__body\">\n                              <input class=\"input-radio__input\" name=\"filter_radio\" type=\"radio\">\n                              <span class=\"input-radio__circle\"></span>\n                            </span>\n                          </span>\n                          <span class=\"filter-list__title\">\n                            Metaggo\n                          </span>\n                          <span class=\"filter-list__counter\">25</span>\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"widget-filters__item\">\n              <div class=\"filter filter--opened\" data-collapse-item>\n                <button type=\"button\" class=\"filter__title\" data-collapse-trigger>\n                  Color\n                  <svg class=\"filter__arrow\" width=\"12px\" height=\"7px\">\n                    <use xlink:href=\"images/sprite.svg#arrow-rounded-down-12x7\"></use>\n                  </svg>\n                </button>\n                <div class=\"filter__body\" data-collapse-content>\n                  <div class=\"filter__container\">\n                    <div class=\"filter-color\">\n                      <div class=\"filter-color__list\">\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  input-check-color--white  \"\n                            style=\"color: #fff;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color   input-check-color--light \"\n                            style=\"color: #d9d9d9;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #b3b3b3;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #808080;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #666;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #4d4d4d;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #262626;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #ff4040;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\" checked>\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #ff8126;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color   input-check-color--light \"\n                            style=\"color: #ffd440;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color   input-check-color--light \"\n                            style=\"color: #becc1f;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #8fcc14;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\" checked>\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #47cc5e;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #47cca0;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #47cccc;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #40bfff;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\" disabled>\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #3d6dcc;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\" checked>\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #7766cc;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #b852cc;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                        <label class=\"filter-color__item\">\n                          <span class=\"filter-color__check input-check-color  \" style=\"color: #e53981;\">\n                            <label class=\"input-check-color__body\">\n                              <input class=\"input-check-color__input\" type=\"checkbox\">\n                              <span class=\"input-check-color__box\"></span>\n                              <svg class=\"input-check-color__icon\" width=\"12px\" height=\"9px\">\n                                <use xlink:href=\"images/sprite.svg#check-12x9\"></use>\n                              </svg>\n                              <span class=\"input-check-color__stick\"></span>\n                            </label>\n                          </span>\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"widget-filters__actions d-flex\">\n            <button class=\"btn btn-primary btn-sm\">Filter</button>\n            <button class=\"btn btn-secondary btn-sm\">Reset</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"block\" style=\"padding-top: 3%;\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 flex-column\">\n        <div class=\"card flex-grow-1 mb-md-0\">\n          <div class=\"card-body\">\n            <h3 class=\"card-title\">Login</h3>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n              <div class=\"form-group\">\n                <label>Email address</label>\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" [(ngModel)]=\"email\"\n                  formControlName=\"email\" [ngClass]=\"{ 'is-invalid': l_submitted && l.email.errors }\" />\n                <div *ngIf=\"l_submitted && l.email.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"l.email.errors.required\">Email is required</div>\n                  <div *ngIf=\"l.email.errors.email\">Valid email is required</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"pwd\"\n                  [ngClass]=\"{ 'is-invalid': l_submitted && l.pwd.errors }\">\n                <div *ngIf=\"l_submitted && l.pwd.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"l.pwd.errors.required\">Password is required</div>\n                  <div *ngIf=\"l.pwd.errors.minlength\">Password must be at least 6 characters</div>\n                </div>\n                <small class=\"form-text text-muted\">\n                  <a href=\"\">Forgotten Password</a>\n                </small>\n              </div>\n              <div *ngIf=\"l_error\" class=\"alert alert-danger\">{{l_error}}</div>\n              <button type=\"submit\" class=\"btn btn-primary mt-4\" [ladda]=\"lloading\">Login</button>\n            </form>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-6 d-flex flex-column mt-4 mt-md-0\">\n        <div class=\"card flex-grow-1 mb-0\">\n          <div class=\"card-body\">\n            <h3 class=\"card-title\">Register\n            </h3>\n            <button class=\"btn btn-danger btn-sm m-1 googlebtn\" (click)=\"signInWithGoogle()\">\n              <i class=\"fab fa-google\"></i> Signup with google</button>\n            <!-- <button class=\"btn btn-sm m-1\" style=\"background-color: #0062cc;color:#fff;width:47%; text-align: center;\">\n                            <i class=\"fab fa-facebook\"></i> Signup with facebook</button> -->\n            <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                <label for=\"first-name\">First Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" formControlName=\"fname\"\n                  [(ngModel)]=\"user.fname\" [ngClass]=\"{ 'is-invalid': submitted && f.fname.errors }\" />\n                <div *ngIf=\"submitted && f.fname.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.fname.errors.required\">First Name is required</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"last-name\">Last Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" formControlName=\"lname\"\n                  [(ngModel)]=\"user.lname\" [ngClass]=\"{ 'is-invalid': submitted && f.lname.errors }\" />\n                <div *ngIf=\"submitted && f.lname.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.lname.errors.required\"> Last Name is required</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Email address</label>\n                <input type=\"email\" formControlName=\"email\" [(ngModel)]=\"user.email\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" class=\"form-control form-control-sm\"\n                  placeholder=\"Email address\">\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.email.errors.required\">Email Address is required</div>\n                  <div *ngIf=\"f.email.errors.email\">Valid email is required</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Contact number</label>\n                <input type=\"text\" formControlName=\"phone\" [(ngModel)]=\"user.phone\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" class=\"form-control form-control-sm\"\n                  placeholder=\"Phone number\">\n                <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.phone.errors.required\">Contact number is required</div>\n                  <div *ngIf=\"f.phone.errors.maxlength\">Invalid contact number\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.password.errors?.required\">Password is required</div>\n                  <div *ngIf=\"f.password.errors?.minlength\">Password must be at least 6 characters</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Repeat Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\"\n                  formControlName=\"confirmPassword\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                  <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"form-check\">\n                  <span class=\"form-check-input input-check\">\n                    <span class=\"input-check__body\">\n                      <input class=\"input-check__input\" type=\"checkbox\" id=\"register-accept\"\n                        formControlName=\"acceptTerms\">\n                      <span class=\"input-check__box\"></span>\n                      <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\">\n                        <use xlink:href=\"./assets/images/sprite.svg#check-9x7\"></use>\n                      </svg>\n                    </span>\n                  </span>\n                  <label class=\"form-check-label\" for=\"register-accept\">Accept terms</label>\n                  <div *ngIf=\"submitted && f.acceptTerms.errors\" class=\"mt-2\">\n                    <small *ngIf=\"submitted && f.acceptTerms.errors.required\" class=\"text-danger\">You must agree to our\n                      terms & conditions</small>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n\n              <button type=\"submit\" class=\"btn btn-primary mt-4\" [ladda]=\"loading\">Register</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termcondition/termcondition.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termcondition/termcondition.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>termcondition works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- site__footer -->\n<footer class=\"site__footer\">\n  <div class=\"site-footer\">\n    <div class=\"container\">\n      <div class=\"site-footer__widgets\">\n        <div class=\"row\">\n          <div class=\"col-12 col-md-6 col-lg-4\">\n            <div class=\"site-footer__widget footer-contacts\">\n              <h5 class=\"footer-contacts__title\">Contact Us</h5>\n              <div class=\"footer-contacts__text\" *ngIf=\"getSettingsValue('CONTACT_MESSAGE')\">\n                {{getSettingsValue(\"CONTACT_MESSAGE\")}}\n              </div>\n              <ul class=\"footer-contacts__contacts\">\n                <li *ngIf=\"getSettingsValue('CONTACT_ADDRESS')\"><i\n                    class=\"footer-contacts__icon fas fa-globe-americas\"></i>{{getSettingsValue(\"CONTACT_ADDRESS\")}}\n                </li>\n                <li><i class=\"footer-contacts__icon far fa-envelope\"\n                    *ngIf=\"getSettingsValue('SITE_EMAIL')\"></i>{{getSettingsValue(\"SITE_EMAIL\")}}</li>\n                <li><i class=\"footer-contacts__icon fas fa-mobile-alt\"\n                    *ngIf=\"getSettingsValue('SITE_PHONE')\"></i>{{getSettingsValue(\"SITE_PHONE\")}}\n                </li>\n                <li><i class=\"footer-contacts__icon far fa-clock\" *ngIf=\"getSettingsValue('OPENING_HOURS')\"></i>\n                  {{getSettingsValue('OPENING_HOURS')}}\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-3 col-lg-4\">\n            <div class=\"site-footer__widget footer-links\">\n              <h5 class=\"footer-links__title\">Information</h5>\n              <ul class=\"footer-links__list\">\n                <li class=\"footer-links__item\"><a href=\"\" class=\"footer-links__link\">About Us</a></li>\n                <li class=\"footer-links__item\"><a href=\"\" class=\"footer-links__link\">Delivery Information</a></li>\n                <li class=\"footer-links__item\"><a href=\"\" class=\"footer-links__link\">Privacy Policy</a></li>\n                <li class=\"footer-links__item\"><a href=\"\" class=\"footer-links__link\">Contact Us</a></li>\n                <li class=\"footer-links__item\"><a href=\"\" class=\"footer-links__link\">Returns</a></li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-12 col-lg-4\">\n            <div class=\"site-footer__widget footer-newsletter\">\n              <h5 class=\"footer-newsletter__title\">Newsletter</h5>\n              <div class=\"footer-newsletter__text\">\n                Subscribe for more updates\n              </div>\n              <form action=\"\" class=\"footer-newsletter__form\" [formGroup]=\"subscriberForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                  <label class=\"sr-only\" for=\"footer-newsletter-address\">Email Address</label>\n                  <input id=\"footer-signin-email\" type=\"email\" formControlName=\"email\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" class=\"form-control form-control-sm\"\n                    placeholder=\"Email address...\">\n                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Email Address is required</div>\n                    <div *ngIf=\"f.email.errors.email\">Valid email is required</div>\n                  </div>\n                </div>\n                <button class=\"footer-newsletter__form-button btn btn-primary\" [ladda]=\"loading\">Subscribe</button>\n              </form>\n              <div class=\"footer-newsletter__text footer-newsletter__text--social\">\n                Follow us on social networks\n              </div>\n              <ul class=\"footer-newsletter__social-links\">\n                <li class=\"footer-newsletter__social-link footer-newsletter__social-link--facebook\"\n                  *ngIf=\"getSettingsValue('FACEBOOK_PAGE_URL')\"><a href=\"{{getSettingsValue('FACEBOOK_PAGE_URL')}}\"\n                    target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                <li class=\"footer-newsletter__social-link footer-newsletter__social-link--twitter\"\n                  *ngIf=\"getSettingsValue('TWITTER_HANDEL_URL')\"><a href=\"{{getSettingsValue('TWITTER_HANDEL_URL')}}\"\n                    target=\"_blank\"><i class=\"fab fa-twitter\"></i></a></li>\n                <li class=\"footer-newsletter__social-link footer-newsletter__social-link--youtube\"\n                  *ngIf=\"getSettingsValue('INSTAGRAM_HANDEL_URL')\"><a\n                    href=\"{{getSettingsValue('INSTAGRAM_HANDEL_URL')}}\" target=\"_blank\"><i\n                      class=\"fab fa-youtube\"></i></a></li>\n                <li class=\"footer-newsletter__social-link footer-newsletter__social-link--instagram\"\n                  *ngIf=\"getSettingsValue('PINTEREST_PAGE_URL')\"><a href=\"{{getSettingsValue('PINTEREST_PAGE_URL')}}\"\n                    target=\"_blank\"><i class=\"fab fa-pinterest\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"site-footer__bottom\">\n        <div class=\"site-footer__copyright\">\n          Powered by Nigerkit\n        </div>\n        <div class=\"site-footer__payments\">\n          <!-- <img src=\"./assets/images/payments.png\" alt=\"\"> -->\n        </div>\n      </div>\n    </div>\n    <div class=\"totop\">\n      <div class=\"totop__body\">\n        <div class=\"totop__start\"></div>\n        <div class=\"totop__container container\"></div>\n        <div class=\"totop__end\">\n          <button type=\"button\" class=\"totop__button\">\n            <svg width=\"13px\" height=\"8px\">\n              <use xlink:href=\"./assets/images/sprite.svg#arrow-rounded-up-13x8\"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!-- site__footer / end -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- mobile site__header -->\n<header class=\"site__header d-lg-none\">\n  <!-- data-sticky-mode - one of [pullToShow, alwaysOnTop] -->\n  <div class=\"mobile-header mobile-header--sticky\" data-sticky-mode=\"alwaysOnTop\">\n    <div class=\"mobile-header__panel\">\n      <div class=\"container\">\n        <div class=\"mobile-header__body\">\n          <button class=\"mobile-header__menu-button\">\n            <i class=\"fas fa-bars\" style=\"font-size:22px;color:white;margin-left:10%\"></i>\n          </button>\n          <a class=\"mobile-header__logo\" [routerLink]=\"['/']\">\n            <img src=\"assets/images/logos/logoFlag3.png\" alt=\"logo\" style=\"filter: brightness(0) invert(1);width:50%\" />\n          </a>\n          <div class=\"search search--location--mobile-header mobile-header__search\">\n            <div class=\"search__body\">\n              <form class=\"search__form\" action=\"\">\n                <input class=\"search__input\" name=\"search\" placeholder=\"Search over 10,000 products\"\n                  [(ngModel)]=\"searchTerm\" aria-label=\"Site search\" type=\"text\" autocomplete=\"off\">\n                <button class=\"search__button search__button--type--submit\" type=\"button\" (click)=\"search()\">\n                  <svg width=\"20px\" height=\"20px\">\n                    <use xlink:href=\"./assets/images/sprite.svg#search-20\"></use>\n                  </svg>\n                </button>\n                <div class=\"search__border\"></div>\n              </form>\n              <div class=\"search__suggestions suggestions suggestions--location--mobile-header\">\n                <div class=\"d-flex\" *ngIf=\"searching\">\n                  <img src=\"./assets/images/finder/preloader.gif\" style=\"height: 30px;\" class=\"ml-auto mr-auto\" />\n                </div>\n                <ul class=\"suggestions__list\">\n                  <li class=\"suggestions__item\" *ngFor=\"let item of suggestion;\">\n                    <a class=\"suggestions__item-link\" href=\"#\" [routerLink]=\"['/product', item.slug]\">\n                      <div class=\"suggestions__item-image\">\n                        <img [src]=\"Image_data(item.files[0], 'avatar', 'null') \" alt=\"{{item.slug}}\">\n                      </div>\n                      <div class=\"suggestions__item-info\">\n                        <div class=\"suggestions__item-name\">{{item.name}}\n                        </div>\n                        <div class=\"suggestions__item-meta\">Brand: {{item.brand}}</div>\n                      </div>\n                      <div class=\"suggestions__item-price\">\n                        &#8358;{{item.price | number}}\n                      </div>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"mobile-header__indicators\">\n            <div class=\"indicator indicator--mobile-search indicator--mobile d-md-none\">\n              <button class=\"indicator__button\">\n                <span class=\"indicator__area\">\n                  <svg width=\"20px\" height=\"20px\">\n                    <use xlink:href=\"./assets/images/sprite.svg#search-20\"></use>\n                  </svg>\n                </span>\n              </button>\n            </div>\n            <div class=\"indicator indicator--mobile\" *ngIf=\"is_cartNeeded\">\n              <a [routerLink]=\"['/cart']\" class=\"indicator__button\">\n                <span class=\"indicator__area\">\n                  <svg width=\"20px\" height=\"20px\">\n                    <use xlink:href=\"./assets/images/sprite.svg#cart-20\"></use>\n                  </svg>\n                  <span class=\"indicator__value\" *ngIf=\"count(cart) > 0\">{{count(cart)}}</span>\n                </span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<!-- mobile site__header / end -->\n\n<!-- desktop site__header -->\n<header class=\"site__header d-lg-block d-none\">\n  <div class=\"site-header\">\n    <div class=\"site-header__middle container\">\n      <div class=\"site-header__logo\">\n        <a [routerLink]=\"['/']\">\n          <img src=\"assets/images/logos/logoFlag3.png\" alt=\"logo\" style=\"width: 100%; height: 100px\" />\n        </a>\n      </div>\n      <div class=\"site-header__search\">\n        <div class=\"search search--location--header\">\n          <div class=\"search__body\">\n            <form class=\"search__form\" action=\"\">\n              <input class=\"search__input\" name=\"search\" placeholder=\"Search over 10,000 products\"\n                [(ngModel)]=\"searchTerm\" aria-label=\"Site search\" type=\"text\" autocomplete=\"off\">\n              <button class=\"search__button search__button--type--submit\" type=\"button\" (click)=\"search()\">\n                <svg width=\"20px\" height=\"20px\">\n                  <use xlink:href=\"./assets/images/sprite.svg#search-20\"></use>\n                </svg>\n              </button>\n              <div class=\"search__border\"></div>\n            </form>\n            <div class=\"search__suggestions suggestions--location--header\">\n              <div class=\"d-flex\" *ngIf=\"searching\">\n                <img src=\"./assets/images/finder/preloader.gif\" style=\"height: 30px;\" class=\"ml-auto mr-auto\" />\n              </div>\n              <ul class=\"suggestions__list\">\n                <li class=\"suggestions__item\" *ngFor=\"let item of suggestion;\">\n                  <a class=\"suggestions__item-link\" href=\"#\" [routerLink]=\"['/product', item.slug]\">\n                    <div class=\"suggestions__item-image\">\n                      <img [src]=\"Image_data(item.files[0], 'avatar', 'null') \" alt=\"{{item.slug}}\">\n                    </div>\n                    <div class=\"suggestions__item-info\">\n                      <div class=\"suggestions__item-name\">{{item.name}}\n                      </div>\n                      <div class=\"suggestions__item-meta\">Brand: {{item.brand}}</div>\n                    </div>\n                    <div class=\"suggestions__item-price\">\n                      &#8358;{{item.price | number}}\n                    </div>\n                  </a>\n                </li>\n              </ul>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"site-header__phone\">\n        <div class=\"site-header__phone-title\" *ngIf=\"getSettingsValue('SITE_PHONE')\">Customer Service</div>\n        <div class=\"site-header__phone-number\">{{getSettingsValue(\"SITE_PHONE\")}}\n        </div>\n      </div>\n    </div>\n    <div class=\"site-header__nav-panel\">\n      <!-- data-sticky-mode - one of [pullToShow, alwaysOnTop] -->\n      <div class=\"nav-panel nav-panel--sticky\" data-sticky-mode=\"alwaysOnTop\">\n        <div class=\"nav-panel__container container\">\n          <div class=\"nav-panel__row\">\n            <!-- <div class=\"nav-panel__departments\"> -->\n            <!-- .departments  departments--fixed .block-slideshow-->\n            <!-- <div class=\"departments  departments--open departments--fixed\" data-departments-fixed-by=\".block-slideshow\">\n                                <div class=\"departments__body\">\n                                    <div class=\"departments__links-wrapper\">\n                                        <div class=\"departments__submenus-container\"></div>\n                                        <ul class=\"departments__links\">\n                                            <li class=\"departments__item\" *ngFor=\"let cate of category\">\n                                                <a class=\"departments__item-link\">\n                                                    {{cate.category}}\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                                <button class=\"departments__button\">\n                                    <svg class=\"departments__button-icon\" width=\"18px\" height=\"14px\">\n                                        <use xlink:href=\"./assets/images/sprite.svg#menu-18x14\"></use>\n                                    </svg>\n                                    Shop By Category\n                                    <svg class=\"departments__button-arrow\" width=\"9px\" height=\"6px\">\n                                        <use xlink:href=\"./assets/images/sprite.svg#arrow-rounded-down-9x6\"></use>\n                                    </svg>\n                                </button>\n                            </div> -->\n            <!-- .departments / end -->\n            <!-- </div> -->\n            <!-- .nav-links -->\n            <div class=\"nav-panel__nav-links nav-links\">\n              <ul class=\"nav-links__list\">\n                <li class=\"nav-links__item nav_hover\">\n                  <a class=\"nav-links__item-link active\" [routerLink]=\"['']\">\n                    <div class=\"nav-links__item-body\">\n                      Home\n                    </div>\n                  </a>\n                </li>\n                <li class=\"nav-links__item nav_hover\">\n                  <a class=\"nav-links__item-link active\" [routerLink]=\"['/shop']\">\n                    <div class=\"nav-links__item-body\">\n                      Shop\n                    </div>\n                  </a>\n                </li>\n                <li class=\"nav-links__item\">\n                  <a class=\"nav-links__item-link  nav_hover\" [routerLink]=\"['/blog']\">\n                    <div class=\"nav-links__item-body\">\n                      Blog\n                    </div>\n                  </a>\n                </li>\n                <li class=\"nav-links__item\">\n                  <a class=\"nav-links__item-link  nav_hover\">\n                    <div class=\"nav-links__item-body\">\n                      Resources\n                    </div>\n                  </a>\n                </li>\n                <li class=\"nav-links__item\">\n                  <a class=\"nav-links__item-link  nav_hover\">\n                    <div class=\"nav-links__item-body\">\n                      Learn\n                    </div>\n                  </a>\n                </li>\n              </ul>\n            </div>\n            <!-- .nav-links / end -->\n            <div class=\"nav-panel__indicators\">\n              <div class=\"indicator indicator--trigger--click\">\n                <a class=\"indicator__button nav_hover\" *ngIf=\"is_cartNeeded\">\n                  <span class=\"indicator__area\">\n                    <svg width=\"20px\" height=\"20px\">\n                      <use xlink:href=\"./assets/images/sprite.svg#cart-20\"></use>\n                    </svg>\n                    <span class=\"indicator__value\" *ngIf=\"count(cart) > 0\">{{count(cart)}}</span>\n                  </span>\n                </a>\n                <div class=\"indicator__dropdown\" *ngIf=\"count(cart) > 0\">\n                  <!-- .dropcart -->\n                  <div class=\"dropcart dropcart--style--dropdown\">\n                    <div class=\"dropcart__body\">\n                      <div class=\"dropcart__products-list\">\n                        <div class=\"dropcart__product\" *ngFor=\"let item of cart\">\n                          <div class=\"dropcart__product-image\">\n\n                            <a [routerLink]=\"['/product', item.product.id]\" *ngIf=\"!currentUser\">\n                              <img [src]=\"Image_data(item.product.product_image,'avatar', 'null')\" alt=\"\"></a>\n                            <a [routerLink]=\"['/product', item.product.id]\" *ngIf=\"currentUser\">\n                              <img [src]=\"Image_data(item.product.product_image,'avatar', 'null')\" alt=\"\"></a>\n                          </div>\n                          <div class=\"dropcart__product-info\">\n                            <div class=\"dropcart__product-name\">\n                              <a [routerLink]=\"['/product', item.slug]\">{{item.product.name}}</a></div>\n                            <ul class=\"dropcart__product-options\">\n                              <li>Brand: {{item.product.brand}}</li>\n                            </ul>\n                            <div class=\"dropcart__product-meta\">\n                              <span class=\"dropcart__product-quantity\">{{item.quantity}}</span> ×\n                              <span class=\"dropcart__product-price\">&#8358; {{item.product.price}}</span>\n                            </div>\n                          </div>\n                          <button type=\"button\" class=\"dropcart__product-remove btn btn-light btn-sm btn-svg-icon\"\n                            (click)=\"removeFromCart(item)\">\n                            <svg width=\"10px\" height=\"10px\">\n                              <use xlink:href=\"./assets/images/sprite.svg#cross-10\"></use>\n                            </svg>\n                          </button>\n                        </div>\n                      </div>\n                      <div class=\"dropcart__totals\">\n                        <table>\n                          <tr>\n                            <th>Subtotal</th>\n                            <td>&#8358; {{Subtotal()}}</td>\n                          </tr>\n                        </table>\n                      </div>\n                      <div class=\"dropcart__buttons\">\n                        <!--<a class=\"btn btn-secondary\" href=\"cart.html\">View Cart</a>-->\n                        <a class=\"btn btn-primary\" [routerLink]=\"['/cart']\">Checkout</a>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- .dropcart / end -->\n                </div>\n              </div>\n              <div class=\"indicator indicator--trigger--click\">\n                <a class=\"indicator__button\">\n                  <span class=\"indicator__area\">\n                    <svg width=\"20px\" height=\"20px\">\n                      <use xlink:href=\"./assets/images/sprite.svg#person-20\"></use>\n                    </svg>\n                  </span>\n                  <span *ngIf=\"currentUser\">Hey {{currentUser.fname}}</span>\n                </a>\n                <div class=\"indicator__dropdown\">\n                  <div class=\"account-menu\">\n                    <form class=\"account-menu__form\" *ngIf=\"!currentUser\" [formGroup]=\"loginForm\"\n                      (ngSubmit)=\"onSubmit()\">\n                      <div class=\"account-menu__form-title\">Log In to Your Account</div>\n                      <div class=\"form-group\">\n                        <label for=\"header-signin-email\" class=\"sr-only\">Email address</label>\n                        <input id=\"header-signin-email\" type=\"email\" formControlName=\"email\"\n                          [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" class=\"form-control form-control-sm\"\n                          placeholder=\"Email address\">\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.email.errors.required\">Email Address is required</div>\n                          <div *ngIf=\"f.email.errors.email\">Valid email is required</div>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"header-signin-password\" class=\"sr-only\">Password</label>\n                        <div class=\"account-menu__form-forgot\">\n                          <input id=\"header-signin-password\" type=\"password\" formControlName=\"password\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n                            class=\"form-control form-control-sm\" placeholder=\"Password\">\n                          <a class=\"account-menu__form-forgot-link\"\n                            [ngClass]=\"{'is-invalidx': submitted && f.password.errors}\">Forgot?</a>\n                          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                          </div>\n                        </div>\n                      </div>\n                      <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n                      <div class=\"form-group account-menu__form-button\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-sm\" [ladda]=\"loading\">Login</button>\n                      </div>\n                      <div class=\"account-menu__form-link\"><a [routerLink]=\"['/signup']\">Create An Account</a></div>\n                    </form>\n                    <div class=\"account-menu__divider\"></div>\n                    <div *ngIf=\"currentUser\">\n                      <a [routerLink]=\"['/dashboard']\" class=\"account-menu__user\">\n                        <div class=\"account-menu__user-avatar\">\n                          <img src=\"./assets/images/avatars/avatar-3.jpg\" alt=\"\">\n                        </div>\n                        <div class=\"account-menu__user-info\">\n                          <div class=\"account-menu__user-name\">{{currentUser.fname}}</div>\n                          <div class=\"account-menu__user-email\">{{currentUser.email}}</div>\n                        </div>\n                      </a>\n                      <div class=\"account-menu__divider\"></div>\n                      <ul class=\"account-menu__links\">\n                        <li><a [routerLink]=\"['/dashboard']\">Edit Profile</a></li>\n                        <li><a [routerLink]=\"['/dashboard']\">Order History</a></li>\n                      </ul>\n                      <div class=\"account-menu__divider\"></div>\n                      <ul class=\"account-menu__links\">\n                        <li><a [routerLink]=\"\" (click)=\"logout()\">Logout</a></li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<!-- desktop site__header / end -->\n\n<!-- mobilemenu sideMenu-->\n<div class=\"mobilemenu\">\n  <div class=\"mobilemenu__backdrop\"></div>\n  <div class=\"mobilemenu__body\">\n    <div class=\"mobilemenu__header\">\n      <div class=\"mobilemenu__title\">Nigerkit::</div>\n      <button type=\"button\" class=\"mobilemenu__close\">\n        <!--<i class=\"fa fa-times\" style=\"font-size: 20px; color:black;opacity:0.5\"></i>-->\n        <svg width=\"20px\" height=\"20px\">\n          <use xlink:href=\"./assets/images/sprite.svg#cross-20\"></use>\n        </svg>\n      </button>\n    </div>\n    <div class=\"mobilemenu__content\">\n      <ul class=\"mobile-links mobile-links--level--0\" data-collapse\n        data-collapse-opened-class=\"mobile-links__item--open\">\n        <li class=\"mobile-links__item\">\n          <div class=\"mobile-links__item-title\">\n            <a [routerLink]=\"['/']\" class=\"mobile-links__item-link\">Home</a>\n            <button class=\"mobile-links__item-toggle\" type=\"button\">\n            </button>\n          </div>\n        </li>\n        <li class=\"mobile-links__item\" data-collapse-item>\n          <div class=\"mobile-links__item-title\">\n            <a class=\"mobile-links__item-link\">Categories</a>\n            <button class=\"mobile-links__item-toggle\" type=\"button\" data-collapse-trigger>\n              <svg class=\"mobile-links__item-arrow\" width=\"12px\" height=\"7px\">\n                <use xlink:href=\"./assets/images/sprite.svg#arrow-rounded-down-12x7\"></use>\n              </svg>\n            </button>\n          </div>\n          <div class=\"mobile-links__item-sub-links\" data-collapse-content>\n            <ul class=\"mobile-links mobile-links--level--1\">\n              <li class=\"mobile-links__item\" data-collapse-item *ngFor=\"let item of category\">\n                <div class=\"mobile-links__item-title\">\n                  <a class=\"mobile-links__item-link\">{{item.category}}</a>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </li>\n        <li class=\"mobile-links__item\">\n          <div class=\"mobile-links__item-title\">\n            <a [routerLink]=\"['/blog']\" class=\"mobile-links__item-link\">Blog</a>\n            <button class=\"mobile-links__item-toggle\" type=\"button\">\n            </button>\n          </div>\n        </li>\n        <li class=\"mobile-links__item\">\n          <div class=\"mobile-links__item-title\">\n            <a [routerLink]=\"['/shop']\" class=\"mobile-links__item-link\">Shop</a>\n            <button class=\"mobile-links__item-toggle\" type=\"button\">\n            </button>\n          </div>\n        </li>\n        <!-- <li class=\"mobile-links__item\">\n          <div class=\"mobile-links__item-title\">\n            <a [routerLink]=\"['/blog']\" class=\"mobile-links__item-link\">Resources</a>\n            <button class=\"mobile-links__item-toggle\" type=\"button\">\n            </button>\n          </div>\n        </li> -->\n        <!-- <li class=\"mobile-links__item\">\n          <div class=\"mobile-links__item-title\">\n            <a [routerLink]=\"['/blog']\" class=\"mobile-links__item-link\">Learn</a>\n            <button class=\"mobile-links__item-toggle\" type=\"button\">\n            </button>\n          </div>\n        </li> -->\n        <li class=\"mobile-links__item\" data-collapse-item>\n          <div class=\"mobile-links__item-title\">\n            <a class=\"mobile-links__item-link\">Account</a>\n            <button class=\"mobile-links__item-toggle\" type=\"button\" data-collapse-trigger>\n              <svg class=\"mobile-links__item-arrow\" width=\"12px\" height=\"7px\">\n                <use xlink:href=\"./assets/images/sprite.svg#arrow-rounded-down-12x7\"></use>\n              </svg>\n            </button>\n          </div>\n          <div class=\"mobile-links__item-sub-links\" data-collapse-content>\n            <ul class=\"mobile-links mobile-links--level--1\">\n              <li class=\"mobile-links__item\" data-collapse-item *ngIf=\"!currentUser\">\n                <div class=\"mobile-links__item-title\">\n                  <a [routerLink]=\"['/signup']\" class=\"mobile-links__item-link\">Login</a>\n                </div>\n              </li>\n              <li class=\"mobile-links__item\" data-collapse-item *ngIf=\"currentUser\">\n                <div class=\"mobile-links__item-title\">\n                  <a [routerLink]=\"['/dashboard']\" class=\"mobile-links__item-link\">Dashboard</a>\n                </div>\n              </li>\n              <li class=\"mobile-links__item\" data-collapse-item *ngIf=\"currentUser\">\n                <div class=\"mobile-links__item-title\">\n                  <a [routerLink]=\"['/dashboard']\" class=\"mobile-links__item-link\">Edit Profile</a>\n                </div>\n              </li>\n              <li class=\"mobile-links__item\" data-collapse-item *ngIf=\"currentUser\">\n                <div class=\"mobile-links__item-title\">\n                  <a [routerLink]=\"['/dashboard']\" class=\"mobile-links__item-link\">Order History</a>\n                </div>\n              </li>\n              <li class=\"mobile-links__item\" data-collapse-item *ngIf=\"currentUser\">\n                <div class=\"mobile-links__item-title\">\n                  <a [routerLink]=\"['/dashboard']\" class=\"mobile-links__item-link\">Change Password</a>\n                </div>\n              </li>\n              <li class=\"mobile-links__item\" data-collapse-item *ngIf=\"currentUser\">\n                <div class=\"mobile-links__item-title\">\n                  <a class=\"mobile-links__item-link\" (click)=\"logout()\">Logout</a>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- mobilemenu / end -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/Components/skeletonloader/skeletonloader.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/skeletonloader/skeletonloader.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvc2tlbGV0b25sb2FkZXIvc2tlbGV0b25sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/Components/skeletonloader/skeletonloader.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/skeletonloader/skeletonloader.component.ts ***!
  \***********************************************************************/
/*! exports provided: SkeletonloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonloaderComponent", function() { return SkeletonloaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkeletonloaderComponent = class SkeletonloaderComponent {
    constructor() {
        this.data = [1, 2, 3, 4];
    }
    ngOnInit() { }
};
SkeletonloaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-skeletonloader",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skeletonloader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/skeletonloader/skeletonloader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skeletonloader.component.css */ "./src/app/Components/skeletonloader/skeletonloader.component.css")).default]
    })
], SkeletonloaderComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/category.resolver */ "./src/app/resolvers/category.resolver.ts");
/* harmony import */ var _pages_category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/category/category.component */ "./src/app/pages/category/category.component.ts");
/* harmony import */ var _resolvers_shop_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers/shop.resolver */ "./src/app/resolvers/shop.resolver.ts");
/* harmony import */ var _pages_shop_shop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/shop/shop.component */ "./src/app/pages/shop/shop.component.ts");
/* harmony import */ var _resolvers_blogdetails_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/blogdetails.resolver */ "./src/app/resolvers/blogdetails.resolver.ts");
/* harmony import */ var _pages_blog_post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/blog/post/post.component */ "./src/app/pages/blog/post/post.component.ts");
/* harmony import */ var _resolvers_blog_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/blog.resolver */ "./src/app/resolvers/blog.resolver.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resolvers/product.resolver */ "./src/app/resolvers/product.resolver.ts");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "./src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var _guards_checkout_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/checkout.guard */ "./src/app/guards/checkout.guard.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");




















const routes = [
    // {path: '', loadChildren: './pages/home/home.component#HomeComponent'},
    // {path: '', loadChildren: './pages/blog/blog.component#CharRoutingModule'},
    { path: "", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    {
        path: "shop",
        component: _pages_shop_shop_component__WEBPACK_IMPORTED_MODULE_5__["ShopComponent"],
        resolve: { allProduct: _resolvers_shop_resolver__WEBPACK_IMPORTED_MODULE_4__["ShopResolve"] },
    },
    {
        path: "product/:slug",
        component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
        resolve: { relateDetails: _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_15__["ProductDetailsResolve"] },
    },
    { path: "cart", component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"] },
    {
        path: "checkout",
        component: _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__["CheckoutComponent"],
        canActivate: [_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_18__["CheckOutGuard"]],
    },
    { path: "signup", component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"] },
    { path: "dashboard", component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"] },
    {
        path: "blog",
        component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"],
        resolve: { blogdetails: _resolvers_blog_resolver__WEBPACK_IMPORTED_MODULE_8__["BlogResolve"] },
    },
    {
        path: "blog/:slug",
        component: _pages_blog_post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"],
        resolve: { details: _resolvers_blogdetails_resolver__WEBPACK_IMPORTED_MODULE_6__["BlogDetailsResolve"] },
    },
    {
        path: "category/:slug",
        component: _pages_category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"],
        resolve: { categorydetails: _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_2__["CategoryProductResolve"] },
    },
    // otherwise redirect to home
    { path: "PageNotFound", component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"] },
    { path: "**", redirectTo: "/PageNotFound" },
    { path: "", redirectTo: "", pathMatch: "full" },
];
// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
//   ],
//   exports: [RouterModule],
// })
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: "reload",
                initialNavigation: "enabled",
                paramsInheritanceStrategy: "always",
                scrollPositionRestoration: "enabled",
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Responsive Styles */\n@media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n        width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n        height: 16px;\n        margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n        margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n        right: 120px;\n        -webkit-transform: rotate(-5deg);\n                transform: rotate(-5deg);\n    }\n}\n@media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n        display: none;\n        visibility: hidden;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBQ3RCOztJQUVJOztRQUVJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGdDQUF3QjtnQkFBeEIsd0JBQXdCO0lBQzVCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxuICAgIC50ZXJtaW5hbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cblxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgICB9XG5cbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgICAgcmlnaHQ6IDEyMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(router, ngZone, renderer, route) {
        this.router = router;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.route = route;
        this.title = "Nigerkit";
        // =================== Subscribe to route events ======================//
        // this.router.events.subscribe((routerEvent: Event) => {
        //   switch (routerEvent instanceof Navigator) {
        //     case routerEvent instanceof NavigationStart: {
        //       this.loading = true;
        //     }
        //     case routerEvent instanceof NavigationEnd:
        //     case routerEvent instanceof NavigationCancel:
        //     case routerEvent instanceof NavigationError: {
        //       this.loading = false;
        //     }
        //     default: {
        //       break;
        //     }
        //   }
        // });
        // router.events.subscribe(this._navigationInterceptor);
        this.routerEvents();
    }
    routerEvents() {
        this.router.events.subscribe((event) => {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]: {
                    this.loading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]: {
                    this.loading = false;
                    break;
                }
            }
        });
    }
    _navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            // We wanna run this function outside of Angular's zone to
            // bypass change detection
            this.ngZone.runOutsideAngular(() => {
                // For simplicity we are going to turn opacity on / off
                // you could add/remove a class for more advanced styling
                // and enter/leave animation of the spinner
                this.renderer.setElementStyle(this.spinnerElement.nativeElement, "opacity", "1");
            });
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            this._hideSpinner();
        }
        // Set loading state to false in both of the below events to
        // hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
            this._hideSpinner();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this._hideSpinner();
        }
    }
    _hideSpinner() {
        // We wanna run this function outside of Angular's zone to
        // bypass change detection,
        this.ngZone.runOutsideAngular(() => {
            // For simplicity we are going to turn opacity on / off
            // you could add/remove a class for more advanced styling
            // and enter/leave animation of the spinner
            this.renderer.setElementStyle(this.spinnerElement.nativeElement, "opacity", "0");
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("spinnerElement", { static: true })
], AppComponent.prototype, "spinnerElement", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers/category.resolver */ "./src/app/resolvers/category.resolver.ts");
/* harmony import */ var _resolvers_shop_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/shop.resolver */ "./src/app/resolvers/shop.resolver.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _resolvers_blogdetails_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers/blogdetails.resolver */ "./src/app/resolvers/blogdetails.resolver.ts");
/* harmony import */ var _resolvers_blog_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvers/blog.resolver */ "./src/app/resolvers/blog.resolver.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _home_main_home_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-main/home-main.component */ "./src/app/home-main/home-main.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_banners_banners_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/banners/banners.component */ "./src/app/pages/banners/banners.component.ts");
/* harmony import */ var angular7_ladda__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular7-ladda */ "./node_modules/angular7-ladda/module/module.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm2015/ngx-smart-modal.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _helpers_CustomHammer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./helpers/CustomHammer */ "./src/app/helpers/CustomHammer.ts");
/* harmony import */ var _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./resolvers/product.resolver */ "./src/app/resolvers/product.resolver.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/fesm2015/angular4-paystack.js");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "./src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _pages_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/dashboard/profile/profile.component */ "./src/app/pages/dashboard/profile/profile.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_dashboard_orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/dashboard/orderlist/orderlist.component */ "./src/app/pages/dashboard/orderlist/orderlist.component.ts");
/* harmony import */ var _pages_dashboard_orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/dashboard/orderdetails/orderdetails.component */ "./src/app/pages/dashboard/orderdetails/orderdetails.component.ts");
/* harmony import */ var _pages_dashboard_password_password_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/dashboard/password/password.component */ "./src/app/pages/dashboard/password/password.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _pages_blog_post_post_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/blog/post/post.component */ "./src/app/pages/blog/post/post.component.ts");
/* harmony import */ var ngx_line_truncation__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-line-truncation */ "./node_modules/ngx-line-truncation/fesm2015/ngx-line-truncation.js");
/* harmony import */ var _pages_shop_shop_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/shop/shop.component */ "./src/app/pages/shop/shop.component.ts");
/* harmony import */ var _pages_category_category_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/category/category.component */ "./src/app/pages/category/category.component.ts");
/* harmony import */ var _pages_termcondition_termcondition_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/termcondition/termcondition.component */ "./src/app/pages/termcondition/termcondition.component.ts");
/* harmony import */ var _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/privacy/privacy.component */ "./src/app/pages/privacy/privacy.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_resources_resources_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/resources/resources.component */ "./src/app/pages/resources/resources.component.ts");
/* harmony import */ var _pages_resource_resource_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/resource/resource.component */ "./src/app/pages/resource/resource.component.ts");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var _Components_skeletonloader_skeletonloader_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./Components/skeletonloader/skeletonloader.component */ "./src/app/Components/skeletonloader/skeletonloader.component.ts");

























































const config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_37__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_37__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_37__["GoogleLoginProvider"]("89246536417-5bm4tnc70gdogh6udh39nvmhjl8ked12.apps.googleusercontent.com"),
    },
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_37__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_37__["FacebookLoginProvider"]("Facebook-App-Id"),
    },
]);
function provideConfig() {
    return config;
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _home_main_home_main_component__WEBPACK_IMPORTED_MODULE_13__["HomeMainComponent"],
            _pages_products_products_component__WEBPACK_IMPORTED_MODULE_18__["ProductsComponent"],
            _pages_banners_banners_component__WEBPACK_IMPORTED_MODULE_19__["BannersComponent"],
            _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_33__["CartComponent"],
            _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_34__["CheckoutComponent"],
            _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_36__["SignupComponent"],
            _pages_dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_38__["ProfileComponent"],
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_39__["DashboardComponent"],
            _pages_dashboard_orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_40__["OrderlistComponent"],
            _pages_dashboard_orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_41__["OrderdetailsComponent"],
            _pages_dashboard_password_password_component__WEBPACK_IMPORTED_MODULE_42__["PasswordComponent"],
            _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_43__["BlogComponent"],
            _pages_blog_post_post_component__WEBPACK_IMPORTED_MODULE_44__["PostComponent"],
            _pages_shop_shop_component__WEBPACK_IMPORTED_MODULE_46__["ShopComponent"],
            _pages_category_category_component__WEBPACK_IMPORTED_MODULE_47__["CategoryComponent"],
            _pages_termcondition_termcondition_component__WEBPACK_IMPORTED_MODULE_48__["TermconditionComponent"],
            _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_49__["PrivacyComponent"],
            _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_50__["PageNotFoundComponent"],
            _pages_resources_resources_component__WEBPACK_IMPORTED_MODULE_51__["ResourcesComponent"],
            _pages_resource_resource_component__WEBPACK_IMPORTED_MODULE_52__["ResourceComponent"],
            _Components_skeletonloader_skeletonloader_component__WEBPACK_IMPORTED_MODULE_54__["SkeletonloaderComponent"],
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["CUSTOM_ELEMENTS_SCHEMA"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_14__["SlickCarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_22__["SnotifyModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
            ngx_gallery__WEBPACK_IMPORTED_MODULE_27__["NgxGalleryModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_35__["AutocompleteLibModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatPaginatorModule"],
            angular4_paystack__WEBPACK_IMPORTED_MODULE_32__["Angular4PaystackModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_37__["SocialLoginModule"],
            ngx_line_truncation__WEBPACK_IMPORTED_MODULE_45__["LineTruncationLibModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatProgressBarModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_53__["NgxSkeletonLoaderModule"].forRoot(),
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_26__["NgxSmartModalModule"].forRoot(),
            angular7_ladda__WEBPACK_IMPORTED_MODULE_20__["LaddaModule"].forRoot({
                style: "expand-right",
                spinnerSize: 30,
                spinnerLines: 13,
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot({
                closeButton: true,
                progressBar: true,
                timeOut: 6000,
            }),
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_16__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptor"], multi: true },
            { provide: "SnotifyToastConfig", useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_22__["ToastDefaults"] },
            { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], useClass: _helpers_CustomHammer__WEBPACK_IMPORTED_MODULE_28__["CustomHammerConfig"] },
            { provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_37__["AuthServiceConfig"], useFactory: provideConfig },
            ng_snotify__WEBPACK_IMPORTED_MODULE_22__["SnotifyService"],
            _services_base_service__WEBPACK_IMPORTED_MODULE_24__["BaseService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _resolvers_shop_resolver__WEBPACK_IMPORTED_MODULE_2__["ShopResolve"],
            _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_29__["ProductDetailsResolve"],
            _resolvers_blog_resolver__WEBPACK_IMPORTED_MODULE_5__["BlogResolve"],
            _resolvers_blogdetails_resolver__WEBPACK_IMPORTED_MODULE_4__["BlogDetailsResolve"],
            _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_1__["CategoryProductResolve"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/guards/checkout.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/checkout.guard.ts ***!
  \******************************************/
/*! exports provided: CheckOutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutGuard", function() { return CheckOutGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




let CheckOutGuard = class CheckOutGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        this.checkout = JSON.parse(localStorage.getItem('cart_Items'));
        if (this.checkout)
            return true;
        else
            this.router.navigate(['/cart']);
        return false;
    }
};
CheckOutGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
CheckOutGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CheckOutGuard);



/***/ }),

/***/ "./src/app/helpers/CustomHammer.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/CustomHammer.ts ***!
  \*****************************************/
/*! exports provided: CustomHammerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHammerConfig", function() { return CustomHammerConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

/**
 * Created by david on 4/28/20.
 */


let CustomHammerConfig = class CustomHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
};
CustomHammerConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CustomHammerConfig);



/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");





// import { AuthenticationService } from '../_services';
let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401 && typeof err.error.error === "undefined") {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                // tslint:disable-next-line: deprecation
                location.reload(true);
            }
            const error = err.error.message || err.error.error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        const token = this.authenticationService.getToken();
        if (currentUser && token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/helpers/must-match.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/must-match.ts ***!
  \***************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/home-main/home-main.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-main/home-main.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtbWFpbi9ob21lLW1haW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/home-main/home-main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-main/home-main.component.ts ***!
  \**************************************************/
/*! exports provided: HomeMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMainComponent", function() { return HomeMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeMainComponent = class HomeMainComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
HomeMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-main/home-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-main.component.css */ "./src/app/home-main/home-main.component.css")).default]
    })
], HomeMainComponent);



/***/ }),

/***/ "./src/app/pages/banners/banners.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/banners/banners.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jhbm5lcnMvYmFubmVycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/banners/banners.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/banners/banners.component.ts ***!
  \****************************************************/
/*! exports provided: BannersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersComponent", function() { return BannersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");




let BannersComponent = class BannersComponent {
    constructor(baseservice, authenticationservice) {
        this.baseservice = baseservice;
        this.authenticationservice = authenticationservice;
        this.top_banners = [];
        this.bannerSlideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 5000 };
        this.CarouselOptions = { items: 3, dots: true, nav: true };
        this.ProductSubscription = this.baseservice.getIndexData()
            .subscribe((data) => {
            console.log(data);
            this.top_banners = data.data.top_banners;
        });
    }
    ngOnInit() {
    }
};
BannersComponent.ctorParameters = () => [
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
BannersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banners',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banners.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banners/banners.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banners.component.css */ "./src/app/pages/banners/banners.component.css")).default]
    })
], BannersComponent);



/***/ }),

/***/ "./src/app/pages/blog/blog.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/blog/blog.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".style {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.lds-facebook {\n  display: inline-block;\n  position: relative;\n  width: 70px;\n  height: 70px;\n}\n\n.lds-facebook div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 10px;\n  background: rgb(123, 175, 95);\n  -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n          animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n\n.lds-facebook div:nth-child(1) {\n  left: 8px;\n  -webkit-animation-delay: -0.24s;\n          animation-delay: -0.24s;\n}\n\n.lds-facebook div:nth-child(2) {\n  left: 25px;\n  -webkit-animation-delay: -0.12s;\n          animation-delay: -0.12s;\n}\n\n.lds-facebook div:nth-child(3) {\n  left: 43px;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n\n@-webkit-keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n\n  50%,\n  100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n\n@keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n\n  50%,\n  100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLDZCQUE2QjtFQUM3QiwwRUFBa0U7VUFBbEUsa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0UsU0FBUztFQUNULCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDViwwQkFBa0I7VUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsWUFBWTtFQUNkOztFQUVBOztJQUVFLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7QUFDRjs7QUFYQTtFQUNFO0lBQ0UsUUFBUTtJQUNSLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxTQUFTO0lBQ1QsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGRzLWZhY2Vib29rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5sZHMtZmFjZWJvb2sgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYigxMjMsIDE3NSwgOTUpO1xuICBhbmltYXRpb246IGxkcy1mYWNlYm9vayAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XG59XG5cbi5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IDhweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XG59XG5cbi5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDI1cHg7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xufVxuXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMykge1xuICBsZWZ0OiA0M3B4O1xuICBhbmltYXRpb24tZGVsYXk6IDA7XG59XG5cbkBrZXlmcmFtZXMgbGRzLWZhY2Vib29rIHtcbiAgMCUge1xuICAgIHRvcDogOHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgfVxuXG4gIDUwJSxcbiAgMTAwJSB7XG4gICAgdG9wOiAyNHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);





// import { ActivatedRoute } from '@angular/router';




let BlogComponent = class BlogComponent {
    constructor(route, router, formBuilder, postservice, baseService, alert, authenticationservice) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.postservice = postservice;
        this.baseService = baseService;
        this.alert = alert;
        this.authenticationservice = authenticationservice;
        this.loading = false;
        this.submitted = false;
        this.error = "";
        // =================== Subscribe to route events ======================//
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    ngOnInit() {
        this.blogs = this.route.snapshot.data.blogdetails.post;
        // console.log(this.blogs);
        this.subscriberForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
        });
    }
    get f() {
        return this.subscriberForm.controls;
    }
    onSubmit() {
        this.error = "";
        this.submitted = true;
        // stop here if form is invalid
        if (this.subscriberForm.invalid) {
            return;
        }
        this.loading = true;
        this.baseService.addSubscriber(this.f.email.value).subscribe((data) => {
            if (data.result) {
                this.alert.snotSimpleSuccess("Your Subscription to our daily articles was successfully. \n You can unsubscribe from mails sent to you");
                this.loading = false;
            }
            else {
                this.loading = false;
            }
        }, (err) => {
            this.error = err;
        });
    }
    // Navigation
    Previous(record) {
        this.postservice.Navigate(record.prev_page_url).subscribe((data) => {
            this.blogs = data.post;
        });
    }
    next(record) {
        this.postservice.Navigate(record.next_page_url).subscribe((data) => {
            this.blogs = data.post;
        });
    }
    firstPage(record) {
        this.postservice.Navigate(record.first_page_url).subscribe((data) => {
            this.blogs = data.post;
        });
    }
    lastPage(record) {
        this.postservice.Navigate(record.last_page_url).subscribe((data) => {
            this.blogs = data.post;
        });
    }
    // End of Navigation
    count(item) {
        return lodash__WEBPACK_IMPORTED_MODULE_8__["size"](item);
    }
    checkValue(item, type, nullValue) {
        if (type === "text") {
            if (this.count(item) === 0) {
                return nullValue;
            }
            return item;
        }
        if (type === "avatar") {
            if (this.count(item) === 0) {
                return "/assets/images/default/avatar.jpg";
            }
            return this.authenticationservice.baseurl + item;
        }
    }
};
BlogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "app-blog",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog/blog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.css */ "./src/app/pages/blog/blog.component.css")).default]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/pages/blog/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/pages/blog/post/post.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2cvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/blog/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/blog/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");










let PostComponent = class PostComponent {
    constructor(route, title, meta, alert, baseService, authenticationservice, formBuilder, postservice) {
        this.route = route;
        this.title = title;
        this.meta = meta;
        this.alert = alert;
        this.baseService = baseService;
        this.authenticationservice = authenticationservice;
        this.formBuilder = formBuilder;
        this.postservice = postservice;
        this.details = [];
        this.data = {};
        this.error = "";
        this.submitted = false;
        this.loadinng = false;
        this.submitteed = false;
        this.errror = "";
        this.subEmailText = "";
        this.authenticationservice.currentUser.subscribe((x) => (this.currentUser = x));
    }
    ngOnInit() {
        this.details = this.route.snapshot.data.details.post_details;
        this.relateBlog = this.route.snapshot.data.details.relate;
        this.latestBlog = this.route.snapshot.data.details.latest;
        // console.log(this.latestBlog);
        this.commentForm = this.formBuilder.group({
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.subscriberForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
        });
        this.title.setTitle(this.details['title']);
        this.meta.addTag({ name: "description", content: this.details['description'] });
    }
    get f() {
        return this.commentForm.controls;
    }
    get ff() {
        return this.subscriberForm.controls;
    }
    addComment() {
        let date = Date.now();
        // creating the comment format
        let comment = {
            client_id: this.currentUser.id,
            comment: this.f.comment.value,
            created_at: date,
            user: {
                fname: this.currentUser.fname,
                lname: this.currentUser.lname,
            },
        };
        this.details["comment"].push(comment);
        this.error = "";
        this.submitted = true;
        if (this.commentForm.invalid) {
            return;
        }
        // creating the server comment
        this.data = {
            post_id: this.details["id"],
            client_id: this.currentUser.id,
            comment: this.f.comment.value,
        };
        this.postservice.sendComment(this.data).subscribe((data) => {
            if (data.status == true) {
                this.submitted = false;
                this.commentForm.reset();
            }
            else {
                this.error = data.status;
            }
        }, (error) => {
            this.error = error;
        });
    }
    onSubmit() {
        this.errror = "";
        this.submitteed = true;
        // stop here if form is invalid
        if (this.subscriberForm.invalid) {
            return;
        }
        this.loadinng = true;
        this.baseService.addSubscriber(this.ff.email.value).subscribe((data) => {
            if (data.result) {
                this.alert.snotSimpleSuccess("Your Subscription to our daily articles was successfully. \n You can unsubscribe from mails sent to you");
                this.loadinng = false;
            }
            else {
                this.loadinng = false;
            }
        }, (err) => {
            this.error = err;
        });
    }
    count(item) {
        return lodash__WEBPACK_IMPORTED_MODULE_8__["size"](item);
    }
    Image_data(item, type, nullValue) {
        if (type === "text") {
            if (this.count(item) === 0) {
                return nullValue;
            }
            return item;
        }
        if (type === "avatar") {
            if (this.count(item) === 0) {
                return "/assets/images/default/avatar.jpg";
            }
            return this.authenticationservice.baseurl + item;
        }
    }
};
PostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }
];
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: "app-post",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog/post/post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.css */ "./src/app/pages/blog/post/post.component.css")).default]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/pages/cart/cart.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/cart/cart.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/base.service */ "./src/app/services/base.service.ts");








let CartComponent = class CartComponent {
    constructor(storeService, baseService, router, alert, authenticationservice) {
        this.storeService = storeService;
        this.baseService = baseService;
        this.router = router;
        this.alert = alert;
        this.authenticationservice = authenticationservice;
        this.cart = [];
        this.authenticationservice.currentUser.subscribe((x) => (this.currentUser = x));
        this.checkItems();
    }
    ngOnInit() {
        // this.checkItems();
    }
    checkItems() {
        if (this.currentUser) {
            // user cart items
            this.cartSubscription = this.storeService
                .GetCartItems(this.currentUser.id)
                .subscribe((items) => {
                if (this.count(items) > 0)
                    this.cart = items;
                // console.log(this.cart);
            });
        }
        else {
            if (this.count(this.getSavedCartInStorage()) > 0)
                this.cart = this.getSavedCartInStorage();
        }
    }
    getSavedCartInStorage() {
        return JSON.parse(localStorage.getItem("cart_Items"));
    }
    count(items) {
        return lodash__WEBPACK_IMPORTED_MODULE_6__["size"](items);
    }
    Image_data(item, type, nullValue) {
        if (type === "text") {
            if (this.count(item) === 0) {
                return nullValue;
            }
            return item;
        }
        if (type === "avatar") {
            if (this.count(item) === 0) {
                return "/assets/images/default/avatar.jpg";
            }
            return this.authenticationservice.baseurl + item;
        }
    }
    increase(item) {
        let max = item.product.quantity;
        if (item.quantity !== 0 && item.quantity < max) {
            item.quantity += 1;
        }
        else {
            item.quantity = 1;
        }
    }
    decrease(item) {
        let max = item.product.quantity;
        if (item.quantity !== 1 && item.quantity < max) {
            item.quantity -= 1;
        }
        else {
            item.quantity = 1;
        }
    }
    calculateTotal(item) {
        let total = item.product.price * item.quantity;
        return total;
    }
    removeFromCart(item) {
        let search = lodash__WEBPACK_IMPORTED_MODULE_6__["findLastIndex"](this.cart, ["product_id", item.product_id]);
        this.cart.splice(search, 1);
        if (this.currentUser) {
            this.storeService.RemoveFromCart(item.product_id, this.currentUser.id).subscribe((data) => {
                console.log(data);
                // var cartsend = localStorage.setItem("cart_Items", JSON.stringify(data));
                this.authenticationservice.setCartItems(data);
                this.cart = data;
            });
        }
        else {
            this.sliceLocalCart(item);
        }
    }
    sliceLocalCart(item) {
        let cartItems = this.getSavedCartInStorage();
        let search = lodash__WEBPACK_IMPORTED_MODULE_6__["findLastIndex"](cartItems, ["product_id", item.product_id]);
        cartItems.splice(search, 1);
        var cartsend = localStorage.setItem("cart_Items", JSON.stringify(cartItems));
        this.authenticationservice.setCartItems(cartItems);
        this.cart = this.getSavedCartInStorage();
    }
    subtotal() {
        let total = 0;
        this.cart.forEach((item) => {
            total += item.product.price * item.quantity;
            // console.log(total);
        });
        return total;
    }
    updateLocalCart() {
        localStorage.setItem("cart_Items", JSON.stringify(this.cart));
    }
    getLatestCart(event) {
        this.cart = event;
    }
    addCartToLocal(cart) {
        localStorage.setItem("cart_Items", JSON.stringify(cart));
        if (this.currentUser) {
            this.router.navigate(["/checkout"]);
        }
        else {
            this.alert.infoMsg("You must Log in to proceed", "Notice");
        }
    }
};
CartComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-cart",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/pages/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/pages/category/category.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/category/category.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/category/category.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/category/category.component.ts ***!
  \******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









let CategoryComponent = class CategoryComponent {
    constructor(route, title, meta, router, alert, postservice, storeService, authenticationservice) {
        this.route = route;
        this.title = title;
        this.meta = meta;
        this.router = router;
        this.alert = alert;
        this.postservice = postservice;
        this.storeService = storeService;
        this.authenticationservice = authenticationservice;
        this.cart = [];
    }
    ngOnInit() {
        this.categoryProduct = this.route.snapshot.data.categorydetails.category.product;
    }
    checkItems() {
        if (this.currentUser) {
            // user cart items
            this.cartSubscription = this.storeService
                .GetCartItems(this.currentUser.id)
                .subscribe((items) => {
                if (this.count(items) > 0)
                    this.cart = items;
                // console.log(this.cart);
            });
        }
        else {
            if (this.count(this.getSavedCartInStorage()) > 0)
                // this.cart.push(this.getSavedCartInStorage());
                this.cart = this.getSavedCartInStorage();
        }
    }
    // Navigation
    Previous(record) {
        this.postservice.Navigate(record.prev_page_url).subscribe((data) => {
            this.categoryProduct = data.products;
        });
    }
    next(record) {
        this.postservice.Navigate(record.next_page_url).subscribe((data) => {
            this.categoryProduct = data.products;
        });
    }
    firstPage(record) {
        this.postservice.Navigate(record.first_page_url).subscribe((data) => {
            this.categoryProduct = data.products;
        });
    }
    lastPage(record) {
        this.postservice.Navigate(record.last_page_url).subscribe((data) => {
            this.categoryProduct = data.products;
        });
    }
    // End of Navigation
    count(item) {
        return lodash__WEBPACK_IMPORTED_MODULE_8__["size"](item);
    }
    checkValue(item, type, nullValue) {
        if (type === "text") {
            if (this.count(item) === 0) {
                return nullValue;
            }
            return item;
        }
        if (type === "avatar") {
            if (this.count(item) === 0) {
                return "/assets/images/default/avatar.jpg";
            }
            return this.authenticationservice.baseurl + item;
        }
    }
    getSavedCartInStorage() {
        return JSON.parse(localStorage.getItem("cart_Items"));
    }
    // checking which product is in cart
    checkItemInCart(product) {
        let result;
        if (this.cart) {
            for (let i = 0; i < this.count(this.cart); i++) {
                let search = lodash__WEBPACK_IMPORTED_MODULE_8__["findLast"](this.cart, ["product_id", product.id]);
                // console.log(search);
                if (search)
                    result = true;
                else
                    result = false;
            }
        }
        return result;
    }
    checkForError(data) {
        if (data.error) {
            this.alert.infoMsg(data.error, "Info");
            return true;
        }
    }
    addToCart(product_item) {
        let toCart = {
            product: product_item,
            product_id: product_item.id,
            sku_id: product_item.Sku,
            user_id: this.currentUser ? this.currentUser.id : 0,
        };
        // check if user is logged in
        if (this.currentUser) {
            this.authenticationservice.setCartItems(product_item);
            this.authenticationservice.setCart(product_item);
            this.alert.snotSimpleSuccess("product added!");
            this.cart = this.getSavedCartInStorage();
            this.checkItemInCart(product_item);
            this.storeService.AddToCart(toCart).subscribe((resp) => {
                // first check for notice
                if (!this.checkForError(resp)) {
                    this.cart = resp.items;
                }
            });
        }
        else {
            this.saveToSession(toCart);
            this.checkItemInCart(product_item);
        }
    }
    saveToSession(data) {
        if (this.count(this.getSavedCartInStorage()) === 0) {
            data.quantity = 1;
            data.amount = 0;
            let $temp = [];
            $temp.push(data);
            var cartsend = localStorage.setItem("cart_Items", JSON.stringify($temp));
            this.authenticationservice.setCartItems(cartsend);
            this.alert.snotSimpleSuccess("Product added!");
            this.cart = this.getSavedCartInStorage();
        }
        else {
            // check is item already exists
            let cartItems = this.getSavedCartInStorage();
            let search = lodash__WEBPACK_IMPORTED_MODULE_8__["findLast"](cartItems, ["product_id", data.product_id]);
            if (lodash__WEBPACK_IMPORTED_MODULE_8__["size"](search) > 0) {
                this.alert.infoMsg("Your product already has been added to cart", "Added already");
            }
            else {
                data.quantity = 1;
                data.amount = 0;
                cartItems.push(data);
                var cartsend = localStorage.setItem("cart_Items", JSON.stringify(cartItems));
                this.authenticationservice.setCartItems(cartItems);
                this.alert.snotSimpleSuccess("Product added!");
                this.cart = this.getSavedCartInStorage();
            }
        }
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: "app-category",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.css */ "./src/app/pages/category/category.component.css")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let CheckoutComponent = class CheckoutComponent {
    constructor(storeService, route, baseService, router, alert, cdr, formBuilder, authenticationservice) {
        this.storeService = storeService;
        this.route = route;
        this.baseService = baseService;
        this.router = router;
        this.alert = alert;
        this.cdr = cdr;
        this.formBuilder = formBuilder;
        this.authenticationservice = authenticationservice;
        this.cart = [];
        this.searching = false;
        this.addressError = "";
        this.verifyError = "";
        this.userData = {};
        this.suggestions = [];
        this.calculating = false;
        this.hasphone = true;
        this.identifier = "";
        this.deliveryFee = 0;
        this.percentage = 0;
        this.orderTime = "";
        this.total = 0;
        this.processing = false;
        this.states = [];
        this.disabled = false;
        this.transactionKey = "";
        this.grandTotal = 0;
        this.proceed = false;
        this.loading = false;
        this.submitted = false;
        this.error = "";
        this.authenticationservice.currentUser.subscribe((x) => {
            this.currentUser = x;
        });
        this.transactionRef = guid_typescript__WEBPACK_IMPORTED_MODULE_8__["Guid"].create();
        // disable resuable route
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
        this.baseService.getStates().subscribe((item) => {
            this.states = item["states"];
        });
        // let formData = new FormData();
        // formData.append("cart_item", JSON.stringify(this.cart));
    }
    ngOnInit() {
        this.cart = JSON.parse(localStorage.getItem("cart_Items"));
        // this.userData.fname = this.currentUser.fname ? this.currentUser.fname : "";
        // this.userData.lname = this.currentUser.lname ? this.currentUser.lname : "";
        // this.userData.email = this.currentUser.email ? this.currentUser.email : "";
        // this.userData.phone = this.currentUser.phone ? this.currentUser.phone : 0;
        if (this.currentUser.phone.length != 11) {
            this.hasphone = false;
        }
        // console.log(this.currentUser);
        this.checkoutForm = this.formBuilder.group({
            fname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            lname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(11)]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].email]],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
        });
    }
    getSavedCartInStorage() {
        return JSON.parse(localStorage.getItem("cart_Items"));
    }
    get f() {
        return this.checkoutForm.controls;
    }
    Subtotal() {
        let total = 0;
        this.cart.forEach((item) => {
            total += item.product.price * item.quantity;
        });
        // this.grandTotal = total;
        setTimeout(() => {
            // if (!this.cdr["destroyed"]) {
            //   this.cdr.detectChanges();
            // }
            this.cdr.markForCheck();
        }, 500);
        return total;
    }
    // checking the value of input phone
    checkPhone() {
        if (this.count(this.currentUser.phone) != 11) {
            this.hasphone = false;
        }
        else {
            this.hasphone = true;
        }
    }
    removeDuplicateWord(address) {
        address = address.replace(/[ - ]/g, " ").split(" ");
        let result = [];
        //remvoe duplicates
        for (let i = 0; i < address.length; i++) {
            if (result.indexOf(address[i]) == -1)
                result.push(address[i]);
        }
        //return filtered result
        return result.join(" ").replace(/,/g, " ");
    }
    count(item) {
        return lodash__WEBPACK_IMPORTED_MODULE_7__["size"](item);
    }
    disable() {
        this.disabled = !this.disabled;
    }
    enable() {
        this.disabled = !this.disabled;
    }
    calculateDeliveryFee() {
        this.error = "";
        this.submitted = true;
        if (this.checkoutForm.invalid) {
            return;
        }
        this.loading = true;
        let formData = new FormData();
        formData.append("cart_item", JSON.stringify(this.cart));
        formData.append("email", this.currentUser.email);
        formData.append("name", this.currentUser.fname + " " + this.currentUser.lname);
        formData.append("phone", this.currentUser.phone);
        formData.append("state", this.currentUser.state);
        formData.append("city", this.currentUser.city);
        formData.append("delivery_address", this.currentUser.address);
        formData.append("user_id", this.currentUser ? this.currentUser.id : 0);
        this.storeService.CalculateDelivery(formData).subscribe((resp) => {
            this.loading = false;
            this.proceed = true;
            // console.log(resp);
            // the response should be delivery fee/charge
            this.identifier = resp.amount_details.identifier;
            this.deliveryFee = resp.amount_details.deliveryFee;
            this.percentage = resp.amount_details.percentage;
            this.grandTotal = resp.amount_details.grandTotal;
            this.total = resp.amount_details.total;
            this.orderTime = resp.amount_details.order_time;
            this.transactionKey = resp.amount_details.key;
            setTimeout(() => {
                this.cdr.detectChanges();
            }, 500);
        });
    }
    transactionCancelled() {
        // refresh transactionRef
        this.refreshTransactionRef();
    }
    refreshTransactionRef() {
        return (this.transactionRef = guid_typescript__WEBPACK_IMPORTED_MODULE_8__["Guid"].create());
    }
    transactionSuccessful(event) {
        // console.log(event);
        this.processing = true;
        let address = this.currentUser.address;
        // this.processingOrder = true;
        this.refreshTransactionRef();
        let formData = new FormData();
        let items_total = this.total;
        let deliveryFee = this.deliveryFee;
        let grand_total = this.grandTotal;
        formData.append("items", JSON.stringify(this.cart));
        formData.append("transaction_ref", event.reference);
        formData.append("email", this.currentUser.email);
        formData.append("name", this.currentUser.fname + " " + this.currentUser.lname);
        formData.append("phone", this.currentUser.phone);
        formData.append("address", this.currentUser.address);
        formData.append("city", this.currentUser.city);
        formData.append("state_id", this.currentUser.state);
        formData.append("items_total", items_total);
        formData.append("grand_total", grand_total);
        formData.append("delivery_fee", deliveryFee);
        formData.append("delivery_address", address);
        formData.append("identifier", this.identifier);
        formData.append("user_id", this.currentUser ? this.currentUser.id : 0);
        // this.off = true;
        this.storeService.PlaceOrder(formData).subscribe((data) => {
            this.handleOrderResponse(data);
            this.refreshTransactionRef();
            this.proceed = false;
        }, (data) => {
            this.alert.errorMsg(data.message, "Notice");
        });
    }
    handleOrderResponse(data) {
        this.clearCart();
        this.total = 0;
        this.grandTotal = 0;
        this.alert.successMsg(data.invoice.remark, "Payment successful");
        this.processing = false;
        setTimeout(() => {
            this.alert.snotSimpleSuccess(data.message);
            this.router.navigateByUrl("");
        }, 3000);
    }
    clearCart() {
        this.removeLocalStorageCart();
        this.cart = [];
    }
    removeLocalStorageCart() {
        return localStorage.removeItem("cart_Items");
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-checkout",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.css */ "./src/app/pages/checkout/checkout.component.css")).default]
    })
], CheckoutComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mex_:hover {\n  color: green;\n}\n.style{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.lds-facebook {\n  display: inline-block;\n  position: relative;\n  width: 70px;\n  height: 70px;\n}\n.lds-facebook div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 10px;\n  background: rgb(123, 175, 95);\n  -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n          animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n.lds-facebook div:nth-child(1) {\n  left: 8px;\n  -webkit-animation-delay: -0.24s;\n          animation-delay: -0.24s;\n}\n.lds-facebook div:nth-child(2) {\n  left: 25px;\n  -webkit-animation-delay: -0.12s;\n          animation-delay: -0.12s;\n}\n.lds-facebook div:nth-child(3) {\n  left: 43px;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n@-webkit-keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n\n  50%,\n  100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n@keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n\n  50%,\n  100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsMEVBQWtFO1VBQWxFLGtFQUFrRTtBQUNwRTtBQUVBO0VBQ0UsU0FBUztFQUNULCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLFVBQVU7RUFDViwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQWtCO1VBQWxCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsWUFBWTtFQUNkOztFQUVBOztJQUVFLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7QUFDRjtBQVhBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsWUFBWTtFQUNkOztFQUVBOztJQUVFLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXhfOmhvdmVyIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLnN0eWxle1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxkcy1mYWNlYm9vayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4ubGRzLWZhY2Vib29rIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMTIzLCAxNzUsIDk1KTtcbiAgYW5pbWF0aW9uOiBsZHMtZmFjZWJvb2sgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xufVxuXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjRzO1xufVxuXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAyNXB4O1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjEycztcbn1cblxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogNDNweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1mYWNlYm9vayB7XG4gIDAlIHtcbiAgICB0b3A6IDhweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gIH1cblxuICA1MCUsXG4gIDEwMCUge1xuICAgIHRvcDogMjRweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);


// import { *as$ } from 'jquery';




let DashboardComponent = class DashboardComponent {
    constructor(authenticationservice, router, storeservice) {
        this.authenticationservice = authenticationservice;
        this.router = router;
        this.storeservice = storeservice;
        this.url = '';
        this.identifier = '';
        this.show = true;
        this.authenticationservice.currentUser.subscribe(x => {
            this.currentUser = x;
            this.storeservice.OrderListRecent(this.currentUser.id)
                .subscribe((data) => {
                this.recent = data.recent_order;
                this.show = false;
            });
        });
    }
    ngOnInit() {
    }
    navigate(url, identifier = '') {
        this.identifier = identifier;
        this.url = url;
    }
    count(item) {
        return lodash__WEBPACK_IMPORTED_MODULE_5__["size"](item);
    }
    getIdentifierdetail(id) {
        this.navigate('orderdetails', id);
    }
    back(string) {
        this.navigate('dashboard');
    }
    logout() {
        this.authenticationservice.logout();
        this.router.navigate(['']);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/orderdetails/orderdetails.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/orderdetails/orderdetails.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mex_:hover {\n  color: green;\n}\n\n.style {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.lds-facebook {\n  display: inline-block;\n  position: relative;\n  width: 70px;\n  height: 70px;\n}\n\n.lds-facebook div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 10px;\n  background: rgb(123, 175, 95);\n  -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n          animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n\n.lds-facebook div:nth-child(1) {\n  left: 8px;\n  -webkit-animation-delay: -0.24s;\n          animation-delay: -0.24s;\n}\n\n.lds-facebook div:nth-child(2) {\n  left: 25px;\n  -webkit-animation-delay: -0.12s;\n          animation-delay: -0.12s;\n}\n\n.lds-facebook div:nth-child(3) {\n  left: 43px;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n\n@-webkit-keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n\n  50%,\n  100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n\n@keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n\n  50%,\n  100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL29yZGVyZGV0YWlscy9vcmRlcmRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLDBFQUFrRTtVQUFsRSxrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDViwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDBCQUFrQjtVQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFFBQVE7SUFDUixZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsU0FBUztJQUNULFlBQVk7RUFDZDtBQUNGOztBQVhBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsWUFBWTtFQUNkOztFQUVBOztJQUVFLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9vcmRlcmRldGFpbHMvb3JkZXJkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWV4Xzpob3ZlciB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnN0eWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sZHMtZmFjZWJvb2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmxkcy1mYWNlYm9vayBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiKDEyMywgMTc1LCA5NSk7XG4gIGFuaW1hdGlvbjogbGRzLWZhY2Vib29rIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcbn1cblxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgbGVmdDogOHB4O1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI0cztcbn1cblxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogMjVweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMnM7XG59XG5cbi5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDQzcHg7XG4gIGFuaW1hdGlvbi1kZWxheTogMDtcbn1cblxuQGtleWZyYW1lcyBsZHMtZmFjZWJvb2sge1xuICAwJSB7XG4gICAgdG9wOiA4cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICB9XG5cbiAgNTAlLFxuICAxMDAlIHtcbiAgICB0b3A6IDI0cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/orderdetails/orderdetails.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/orderdetails/orderdetails.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailsComponent", function() { return OrderdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




let OrderdetailsComponent = class OrderdetailsComponent {
    constructor(storeservice) {
        this.storeservice = storeservice;
        this.show = true;
    }
    ngOnInit() {
        this.storeservice.OrderDetails(this.identifier)
            .subscribe((data) => {
            console.log(data);
            this.details = data.details;
            this.orderedItem = this.details.user_invoice.items;
            this.show = false;
            this.vatfee = data.vatFee;
        });
    }
    count(item) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["size"](item);
    }
};
OrderdetailsComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], OrderdetailsComponent.prototype, "identifier", void 0);
OrderdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-orderdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orderdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/orderdetails/orderdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orderdetails.component.css */ "./src/app/pages/dashboard/orderdetails/orderdetails.component.css")).default]
    })
], OrderdetailsComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/orderlist/orderlist.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/dashboard/orderlist/orderlist.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mex_:hover {\n    color:green;\n}\n\n.style {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.lds-facebook {\n  display: inline-block;\n  position: relative;\n  width: 70px;\n  height: 70px;\n}\n\n.lds-facebook div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 10px;\n  background: rgb(123, 175, 95);\n  -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n          animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n\n.lds-facebook div:nth-child(1) {\n  left: 8px;\n  -webkit-animation-delay: -0.24s;\n          animation-delay: -0.24s;\n}\n\n.lds-facebook div:nth-child(2) {\n  left: 25px;\n  -webkit-animation-delay: -0.12s;\n          animation-delay: -0.12s;\n}\n\n.lds-facebook div:nth-child(3) {\n  left: 43px;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n\n@-webkit-keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n\n  50%,\n  100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n\n@keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n\n  50%,\n  100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL29yZGVybGlzdC9vcmRlcmxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLDBFQUFrRTtVQUFsRSxrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDViwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDBCQUFrQjtVQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFFBQVE7SUFDUixZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsU0FBUztJQUNULFlBQVk7RUFDZDtBQUNGOztBQVhBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsWUFBWTtFQUNkOztFQUVBOztJQUVFLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9vcmRlcmxpc3Qvb3JkZXJsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWV4Xzpob3ZlciB7XG4gICAgY29sb3I6Z3JlZW47XG59XG5cbi5zdHlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGRzLWZhY2Vib29rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5sZHMtZmFjZWJvb2sgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYigxMjMsIDE3NSwgOTUpO1xuICBhbmltYXRpb246IGxkcy1mYWNlYm9vayAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XG59XG5cbi5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IDhweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XG59XG5cbi5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDI1cHg7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xufVxuXG4ubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMykge1xuICBsZWZ0OiA0M3B4O1xuICBhbmltYXRpb24tZGVsYXk6IDA7XG59XG5cbkBrZXlmcmFtZXMgbGRzLWZhY2Vib29rIHtcbiAgMCUge1xuICAgIHRvcDogOHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgfVxuXG4gIDUwJSxcbiAgMTAwJSB7XG4gICAgdG9wOiAyNHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/orderlist/orderlist.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/orderlist/orderlist.component.ts ***!
  \******************************************************************/
/*! exports provided: OrderlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistComponent", function() { return OrderlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





let OrderlistComponent = class OrderlistComponent {
    constructor(authenticationservice, storeservice) {
        this.authenticationservice = authenticationservice;
        this.storeservice = storeservice;
        this.show = true;
        this.identifier = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.authenticationservice.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
        this.storeservice.OrderList(this.currentUser.id)
            .subscribe((data) => {
            this.orderlist = data.orderlist;
            this.lists = this.orderlist.data;
            this.show = false;
        });
    }
    // Navigation
    Previous(record) {
        this.storeservice.Navigate(record.prev_page_url)
            .subscribe((data) => {
            this.orderlist = data.orderlist;
        });
    }
    next(record) {
        this.storeservice.Navigate(record.next_page_url)
            .subscribe((data) => {
            this.orderlist = data.orderlist;
        });
    }
    firstPage(record) {
        this.storeservice.Navigate(record.first_page_url)
            .subscribe((data) => {
            this.orderlist = data.orderlist;
        });
    }
    lastPage(record) {
        this.storeservice.Navigate(record.last_page_url)
            .subscribe((data) => {
            this.orderlist = data.orderlist;
        });
    }
    // End of Navigation
    count(item) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["size"](item);
    }
    sendIdentifier(id) {
        this.identifier.emit(id);
    }
    navigate(identifier) {
        this.sendIdentifier(identifier);
    }
};
OrderlistComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], OrderlistComponent.prototype, "identifier", void 0);
OrderlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orderlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orderlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/orderlist/orderlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orderlist.component.css */ "./src/app/pages/dashboard/orderlist/orderlist.component.css")).default]
    })
], OrderlistComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/password/password.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dashboard/password/password.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/password/password.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/password/password.component.ts ***!
  \****************************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _helpers_must_match__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/must-match */ "./src/app/helpers/must-match.ts");









let PasswordComponent = class PasswordComponent {
    constructor(formBuilder, baseservice, alert, router, authenticationservice) {
        this.formBuilder = formBuilder;
        this.baseservice = baseservice;
        this.alert = alert;
        this.router = router;
        this.authenticationservice = authenticationservice;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.authenticationservice.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
        this.passwordForm = this.formBuilder.group({
            opassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            npassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        }, { validator: Object(_helpers_must_match__WEBPACK_IMPORTED_MODULE_8__["MustMatch"])('npassword', 'cpassword') });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.passwordForm.controls;
    }
    ChangePassword() {
        this.error = '';
        this.submitted = true;
        // stop here if form is invalid
        if (this.passwordForm.invalid) {
            return;
        }
        this.loading = true;
        // this.authenticationservice.
        this.baseservice.updateUserData(this.passwordForm.value, this.currentUser.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(data => {
            // Update user data
            if (data.status) {
                this.alert.successMsg(data.message, 'Account Update Successful');
                this.loading = false;
                this.sendback();
            }
            else {
                this.alert.errorMsg(data.message, 'There was an error');
                this.loading = false;
                this.error = data.message;
            }
        }, error => {
            this.alert.errorMsg('Unable to update account.', 'There was an error');
            this.loading = false;
            this.error = 'Unable to update account.';
        });
    }
    sendback() {
        this.back.emit('back');
    }
};
PasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])()
], PasswordComponent.prototype, "back", void 0);
PasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/password/password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password.component.css */ "./src/app/pages/dashboard/password/password.component.css")).default]
    })
], PasswordComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard/profile/profile.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/dashboard/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");








let ProfileComponent = class ProfileComponent {
    constructor(formBuilder, baseservice, authenticationservice, alert, router) {
        this.formBuilder = formBuilder;
        this.baseservice = baseservice;
        this.authenticationservice = authenticationservice;
        this.alert = alert;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.error = "";
    }
    ngOnInit() {
        this.profileForm = this.formBuilder.group({
            id: [this.user.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            fname: [this.user.fname, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lname: [this.user.lname, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: [this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            phone: [this.user.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11)]],
            address: [this.user.address, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    get f() {
        return this.profileForm.controls;
    }
    updateProfile() {
        this.error = '';
        this.submitted = true;
        if (this.profileForm.invalid) {
            return;
        }
        this.loading = true;
        this.baseservice.update(this.profileForm.value)
            .subscribe((data) => {
            this.loading = false;
            this.submitted = false;
            this.alert.snotSimpleSuccess(data.message);
            this.updateLocalStorage(data.user);
            this.router.navigateByUrl('/dashboard');
        });
    }
    updateLocalStorage(data) {
        this.authenticationservice.removeUserData();
        this.authenticationservice.setUserData(data);
        // update global current user
        this.authenticationservice.removeUser();
        this.authenticationservice.setUser(data);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])()
], ProfileComponent.prototype, "user", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/dashboard/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slick-slide img {\n  display: block;\n  height: 410px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpY2stc2xpZGUgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm2015/ngx-smart-modal.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_9__);










let HomeComponent = class HomeComponent {
    constructor(baseservice, cartservice, alert, ngxSmartModalService, storeService, authenticationservice) {
        this.baseservice = baseservice;
        this.cartservice = cartservice;
        this.alert = alert;
        this.ngxSmartModalService = ngxSmartModalService;
        this.storeService = storeService;
        this.authenticationservice = authenticationservice;
        this.product = [];
        this.products = [];
        this.posts = [];
        this.top_rated = [];
        this.best_sellers = [];
        this.special_offers = [];
        this.top_banners = [];
        this.banner_two = {};
        this.categories = [];
        this.banner_ = "";
        this.cart = [];
        this.iscart = false;
        this.fake = 0.75;
        this.loading = "";
        this.item_index = "";
        this.bannerSlideConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
        };
        this.CarouselOptions = { items: 3, dots: true, nav: true };
        this.authenticationservice.currentUser.subscribe((x) => {
            this.currentUser = x;
            this.checkItems();
        });
    }
    ngOnInit() {
        //   this.cart = this.authenticationservice.
        this.ProductSubscription = this.baseservice
            .getIndexData()
            .subscribe((data) => {
            // console.log(data);
            this.products = data.data.products;
            this.posts = data.data.posts;
            this.top_rated = data.data.top_rated_products;
            this.best_sellers = data.data.best_sellers;
            this.special_offers = data.data.special_offers;
            this.top_banners = data.data.top_banners;
            this.banner_two = data.data.banner_two;
            // this.banner_ = data.data.banner_two.pictures;
            this.categories = data.data.categories;
        });
    }
    setGallery() {
        this.galleryOptions = [
            {
                width: "100%",
                height: "400px",
                thumbnailsColumns: 4,
                imageArrows: false,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_9__["NgxGalleryAnimation"].Zoom,
                imageSize: ngx_gallery__WEBPACK_IMPORTED_MODULE_9__["NgxGalleryImageSize"].Contain,
            },
            // max-width 800
            {
                breakpoint: 800,
                width: "100%",
                height: "600px",
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20,
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false,
            },
        ];
        // this.galleryImages = this.getImages()
    }
    count(items) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["size"](items);
    }
    Image_data(item, type, nullValue) {
        if (type === "text") {
            if (this.count(item) === 0) {
                return nullValue;
            }
            return item;
        }
        if (type === "avatar") {
            if (this.count(item) === 0) {
                return "/assets/images/default/avatar.jpg";
            }
            // console.log(item);
            return this.authenticationservice.baseurl + item;
        }
    }
    getSavedCartInStorage() {
        return JSON.parse(localStorage.getItem("cart_Items"));
    }
    checkItems() {
        if (this.currentUser) {
            // user cart items
            this.cartSubscription = this.storeService
                .GetCartItems(this.currentUser.id)
                .subscribe((items) => {
                if (this.count(items) > 0)
                    this.cart = items;
                // console.log(this.cart);
            });
        }
        else {
            if (this.count(this.getSavedCartInStorage()) > 0)
                // this.cart.push(this.getSavedCartInStorage());
                this.cart = this.getSavedCartInStorage();
        }
    }
    // checking which product is in cart
    checkItemInCart(product) {
        let result;
        if (this.cart) {
            for (let i = 0; i < this.count(this.cart); i++) {
                let search = lodash__WEBPACK_IMPORTED_MODULE_4__["findLast"](this.cart, ["product_id", product.id]);
                // console.log(search);
                if (search)
                    result = true;
                else
                    result = false;
            }
        }
        return result;
    }
    addToCart(product_item) {
        let toCart = {
            product: product_item,
            product_id: product_item.id,
            sku_id: product_item.Sku,
            user_id: this.currentUser ? this.currentUser.id : 0,
        };
        // check if user is logged in
        if (this.currentUser) {
            this.authenticationservice.setCartItems(product_item);
            this.authenticationservice.setCart(product_item);
            this.alert.snotSimpleSuccess("product added!");
            // this.cart = this.getSavedCartInStorage();
            this.checkItemInCart(product_item);
            this.storeService.AddToCart(toCart).subscribe((resp) => {
                // first check for notice
                if (!this.checkForError(resp)) {
                    // this.cart.push(resp.items);
                    this.authenticationservice.setCartItems(product_item);
                    this.cart = resp.items;
                    // console.log(this.cart);
                }
            });
        }
        else {
            this.saveToSession(toCart);
            this.checkItemInCart(product_item);
        }
    }
    saveToSession(data) {
        if (this.count(this.getSavedCartInStorage()) === 0) {
            data.quantity = 1;
            data.amount = 0;
            let $temp = [];
            $temp.push(data);
            var cartsend = localStorage.setItem("cart_Items", JSON.stringify($temp));
            this.authenticationservice.setCartItems(cartsend);
            this.alert.snotSimpleSuccess("Product added!");
            this.cart = this.getSavedCartInStorage();
        }
        else {
            // check is item already exists
            let cartItems = this.getSavedCartInStorage();
            let search = lodash__WEBPACK_IMPORTED_MODULE_4__["findLast"](cartItems, ["product_id", data.product_id]);
            if (lodash__WEBPACK_IMPORTED_MODULE_4__["size"](search) > 0) {
                this.alert.infoMsg("Your product already has been added to cart", "Added already");
            }
            else {
                data.quantity = 1;
                data.amount = 0;
                cartItems.push(data);
                var cartsend = localStorage.setItem("cart_Items", JSON.stringify(cartItems));
                this.authenticationservice.setCartItems(cartItems);
                this.alert.snotSimpleSuccess("Product added!");
                this.cart = this.getSavedCartInStorage();
            }
        }
    }
    checkForError(data) {
        if (data.error) {
            this.alert.infoMsg(data.error, "Info");
            return true;
        }
    }
    getBannerUrl() {
        // console.log(this.banner_two)
        if (this.banner_two.pictures != null) {
            return this.banner_two.pictures;
        }
        else {
            return `url('${this.Image_data(this.banner_two.pictures, "avatar", null)}')`;
        }
    }
    avail(item) {
        let avail = "";
        if (item > 0)
            avail = "In stock";
        else
            avail = "Out of stock";
        return avail;
    }
    quickView(item, index) {
        this.loading = index;
        this.img_file = item.files;
        this.setGallery();
        this.galleryImages = this.getImages(this.img_file);
        setTimeout(() => {
            this.ngxSmartModalService.setModalData(item, "productModal", true);
            this.ngxSmartModalService.getModal("productModal").open();
            this.loading = "";
        }, 1000);
    }
    getImages(files) {
        const imageUrls = [];
        for (let i = 0; i < files.length; i++) {
            imageUrls.push({
                small: this.Image_data(files[i], "avatar", null),
                medium: this.Image_data(files[i], "avatar", null),
                big: this.Image_data(files[i], "avatar", null),
            });
        }
        return imageUrls;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__["NgxSmartModalService"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_7__["StoreService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/pages/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/pages/privacy/privacy.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/privacy/privacy.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/privacy/privacy.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/privacy/privacy.component.ts ***!
  \****************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrivacyComponent = class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./privacy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./privacy.component.css */ "./src/app/pages/privacy/privacy.component.css")).default]
    })
], PrivacyComponent);



/***/ }),

/***/ "./src/app/pages/products/products.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/products/products.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_8__);









let ProductsComponent = class ProductsComponent {
    constructor(storeService, route, router, title, meta, alert, storeservice, authenticationservice) {
        this.storeService = storeService;
        this.route = route;
        this.router = router;
        this.title = title;
        this.meta = meta;
        this.alert = alert;
        this.storeservice = storeservice;
        this.authenticationservice = authenticationservice;
        this.cart = [];
        this.relateDetails = {};
        this.product = [];
        this.authenticationservice.currentUser.subscribe((x) => (this.currentUser = x));
        //disable resuable route
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.checkItems();
    }
    checkItems() {
        if (this.currentUser) {
            // user cart items
            this.cartSubscription = this.storeService
                .GetCartItems(this.currentUser.id)
                .subscribe((items) => {
                if (this.count(items) > 0)
                    this.cart = items;
                // console.log(this.cart);
            });
        }
        else {
            if (this.count(this.getSavedCartInStorage()) > 0)
                // this.cart.push(this.getSavedCartInStorage());
                this.cart = this.getSavedCartInStorage();
        }
    }
    ngOnInit() {
        this.product = this.route.snapshot.data["relateDetails"]["product"];
        this.reviews = this.route.snapshot.data["relateDetails"]["reviews"];
        this.title.setTitle(this.product["name"]);
        this.meta.addTag({
            name: "description",
            content: this.product["description"],
        });
        // Gallery Images
        this.setGallery();
        this.galleryImages = this.getImages(this.product["files"]);
    }
    getSavedCartInStorage() {
        return JSON.parse(localStorage.getItem("cart_Items"));
    }
    setGallery() {
        this.galleryOptions = [
            {
                width: "100%",
                height: "400px",
                thumbnailsColumns: 4,
                imageArrows: false,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_8__["NgxGalleryAnimation"].Zoom,
                imageSize: ngx_gallery__WEBPACK_IMPORTED_MODULE_8__["NgxGalleryImageSize"].Contain,
            },
            // max-width 800
            {
                breakpoint: 800,
                width: "100%",
                height: "600px",
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20,
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false,
            },
        ];
        // this.galleryImages = this.getImages()
    }
    count(items) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["size"](items);
    }
    avail(item) {
        let avail = "";
        if (item > 0)
            avail = "In stock";
        else
            avail = "Out of stock";
        return avail;
    }
    getImages(files) {
        const imageUrls = [];
        for (let i = 0; i < files.length; i++) {
            imageUrls.push({
                small: this.Image_data(files[i], "avatar", null),
                medium: this.Image_data(files[i], "avatar", null),
                big: this.Image_data(files[i], "avatar", null),
            });
        }
        return imageUrls;
    }
    Image_data(item, type, nullValue) {
        if (type === "text") {
            if (this.count(item) === 0) {
                return nullValue;
            }
            return item;
        }
        if (type === "avatar") {
            if (this.count(item) === 0) {
                return "/assets/images/default/avatar.jpg";
            }
            return this.authenticationservice.baseurl + item;
        }
    }
    //checking which product is in cart
    checkItemInCart(product) {
        let result;
        if (this.cart) {
            for (let i = 0; i < this.count(this.cart); i++) {
                let search = lodash__WEBPACK_IMPORTED_MODULE_4__["findLast"](this.cart, ["product_id", product.id]);
                if (search)
                    result = true;
                else
                    result = false;
            }
        }
        return result;
    }
    addToCart(product_item) {
        let toCart = {
            product: product_item,
            product_id: product_item.id,
            sku_id: product_item.Sku,
            user_id: this.currentUser ? this.currentUser.id : 0,
        };
        // check if user is logged in
        if (this.currentUser) {
            this.authenticationservice.setCartItems(product_item);
            this.authenticationservice.setCart(product_item);
            this.alert.snotSimpleSuccess("product added!");
            this.cart = this.getSavedCartInStorage();
            this.checkItemInCart(product_item);
            this.storeService.AddToCart(toCart).subscribe((resp) => {
                // first check for notice
                if (!this.checkForError(resp)) {
                    this.cart = resp.items;
                }
            });
        }
        else {
            this.saveToSession(toCart);
            this.checkItemInCart(product_item);
        }
    }
    saveToSession(data) {
        if (this.count(this.getSavedCartInStorage()) === 0) {
            data.quantity = 1;
            data.amount = 0;
            let $temp = [];
            $temp.push(data);
            var cartsend = localStorage.setItem("cart_Items", JSON.stringify($temp));
            this.authenticationservice.setCartItems(cartsend);
            this.alert.snotSimpleSuccess("Product added!");
            this.cart = this.getSavedCartInStorage();
        }
        else {
            // check is item already exists
            let cartItems = this.getSavedCartInStorage();
            let search = lodash__WEBPACK_IMPORTED_MODULE_4__["findLast"](cartItems, ["product_id", data.product_id]);
            if (lodash__WEBPACK_IMPORTED_MODULE_4__["size"](search) > 0) {
                this.alert.infoMsg("Your product already has been added to cart", "Added already");
            }
            else {
                data.quantity = 1;
                data.amount = 0;
                cartItems.push(data);
                var cartsend = localStorage.setItem("cart_Items", JSON.stringify(cartItems));
                this.authenticationservice.setCartItems(cartItems);
                this.alert.snotSimpleSuccess("Product added!");
                this.cart = this.getSavedCartInStorage();
            }
        }
    }
    checkForError(data) {
        if (data.error) {
            this.alert.infoMsg(data.error, "Info");
            return true;
        }
    }
    // Navigation
    Previous(record) {
        this.storeservice.Navigate(record.prev_page_url).subscribe((data) => {
            this.reviews = data.reviews;
        });
    }
    next(record) {
        this.storeservice.Navigate(record.next_page_url).subscribe((data) => {
            this.reviews = data.reviews;
        });
    }
    firstPage(record) {
        this.storeservice.Navigate(record.first_page_url).subscribe((data) => {
            this.reviews = data.reviews;
        });
    }
    lastPage(record) {
        this.storeservice.Navigate(record.last_page_url).subscribe((data) => {
            this.reviews = data.reviews;
        });
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-products",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.css */ "./src/app/pages/products/products.component.css")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/pages/resource/resource.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/resource/resource.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc291cmNlL3Jlc291cmNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/resource/resource.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/resource/resource.component.ts ***!
  \******************************************************/
/*! exports provided: ResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResourceComponent = class ResourceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resource',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resource.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resource/resource.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resource.component.css */ "./src/app/pages/resource/resource.component.css")).default]
    })
], ResourceComponent);



/***/ }),

/***/ "./src/app/pages/resources/resources.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/resources/resources.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc291cmNlcy9yZXNvdXJjZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/resources/resources.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/resources/resources.component.ts ***!
  \********************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResourcesComponent = class ResourcesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resources',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resources.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resources/resources.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resources.component.css */ "./src/app/pages/resources/resources.component.css")).default]
    })
], ResourcesComponent);



/***/ }),

/***/ "./src/app/pages/shop/shop.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/shop/shop.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/shop/shop.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/shop/shop.component.ts ***!
  \**********************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let ShopComponent = class ShopComponent {
    constructor(route, router, alert, postservice, storeService, authenticationservice) {
        this.route = route;
        this.router = router;
        this.alert = alert;
        this.postservice = postservice;
        this.storeService = storeService;
        this.authenticationservice = authenticationservice;
        this.example = [];
        this.cart = [];
        this.sortProduct = "Default";
        this.authenticationservice.currentUser.subscribe((x) => (this.currentUser = x));
        this.checkItems();
        // console.log('this is the Shop');
    }
    ngOnInit() {
        this.products = this.route.snapshot.data.allProduct.products;
        // this.checkItems();
        // this.cartSubscription = this.storeService.GetCartItems()
        this.authenticationservice.cartItems$.subscribe((data) => { });
    }
    sortingProduct() {
        // console.log(this.sortProduct);
        if (this.sortProduct == "Default") {
        }
        else {
            // this.products.sort((a, b) => (a.name < b.name ? -1 : 1));
            // var sortedArray = this.products.sort((obj1, obj2) => {
            //   if (obj1.name > obj2.name) {
            //     return 1;
            //   }
            //   if (obj1.name < obj2.name) {
            //     return -1;
            //   }
            //   return 0;
            // });
            // console.log(sortedArray);
        }
    }
    // checkItems() {
    //   console.log("this is the testing");
    //   if (this.currentUser) {
    //     // user cart items
    //     this.cartSubscription = this.storeService
    //       .GetCartItems(this.currentUser.id)
    //       .subscribe((items) => {
    //         this.cart.push(items);
    //         console.log("This is the cart");
    //         console.log(this.cart);
    //       });
    //   } else {
    //     this.cart = this.getSavedCartInStorage();
    //   }
    // }
    // checkItems1() {
    //   if (this.currentUser) {
    //     //user cart items
    //     this.cartSubscription = this.storeService
    //       .GetCartItems(this.currentUser.id)
    //       .subscribe((items) => {
    //         this.cart.push(items);
    //       });
    //   } else {
    //     this.cart = this.getSavedCartInStorage();
    //   }
    // }
    checkItems() {
        if (this.currentUser) {
            // user cart items
            this.cartSubscription = this.storeService
                .GetCartItems(this.currentUser.id)
                .subscribe((items) => {
                if (this.count(items) > 0)
                    this.cart = items;
                // console.log(this.cart);
            });
        }
        else {
            if (this.count(this.getSavedCartInStorage()) > 0)
                // this.cart.push(this.getSavedCartInStorage());
                this.cart = this.getSavedCartInStorage();
        }
    }
    // Navigation
    Previous(record) {
        this.postservice.Navigate(record.prev_page_url).subscribe((data) => {
            this.products = data.products;
        });
    }
    next(record) {
        this.postservice.Navigate(record.next_page_url).subscribe((data) => {
            this.products = data.products;
        });
    }
    firstPage(record) {
        this.postservice.Navigate(record.first_page_url).subscribe((data) => {
            this.products = data.products;
        });
    }
    lastPage(record) {
        this.postservice.Navigate(record.last_page_url).subscribe((data) => {
            this.products = data.products;
        });
    }
    // End of Navigation
    count(item) {
        return lodash__WEBPACK_IMPORTED_MODULE_7__["size"](item);
    }
    checkValue(item, type, nullValue) {
        if (type === "text") {
            if (this.count(item) === 0) {
                return nullValue;
            }
            return item;
        }
        if (type === "avatar") {
            if (this.count(item) === 0) {
                return "/assets/images/default/avatar.jpg";
            }
            return this.authenticationservice.baseurl + item;
        }
    }
    getSavedCartInStorage() {
        return JSON.parse(localStorage.getItem("cart_Items"));
    }
    // checking which product is in cart
    checkItemInCart(product) {
        let result;
        if (this.cart) {
            // if (this.currentUser) {
            for (let i = 0; i < this.count(this.cart); i++) {
                let search = lodash__WEBPACK_IMPORTED_MODULE_7__["findLast"](this.cart, ["product_id", product.id]);
                // console.log(search);
                if (search)
                    result = true;
                else
                    result = false;
            }
            // }
            return result;
        }
    }
    checkForError(data) {
        if (data.error) {
            this.alert.infoMsg(data.error, "Info");
            return true;
        }
    }
    addToCart(product_item) {
        let toCart = {
            product: product_item,
            product_id: product_item.id,
            sku_id: product_item.Sku,
            user_id: this.currentUser ? this.currentUser.id : 0,
        };
        // check if user is logged in
        if (this.currentUser) {
            this.authenticationservice.setCartItems(product_item);
            this.authenticationservice.setCart(product_item);
            this.alert.snotSimpleSuccess("product added!");
            // this.cart = this.getSavedCartInStorage();
            this.checkItemInCart(product_item);
            this.storeService.AddToCart(toCart).subscribe((resp) => {
                // first check for notice
                if (!this.checkForError(resp)) {
                    this.cart = resp.items;
                }
            });
        }
        else {
            this.saveToSession(toCart);
            this.checkItemInCart(product_item);
        }
    }
    saveToSession(data) {
        if (this.count(this.getSavedCartInStorage()) === 0) {
            data.quantity = 1;
            data.amount = 0;
            let $temp = [];
            $temp.push(data);
            var cartsend = localStorage.setItem("cart_Items", JSON.stringify($temp));
            this.authenticationservice.setCartItems(cartsend);
            this.alert.snotSimpleSuccess("Product added!");
            this.cart = this.getSavedCartInStorage();
        }
        else {
            // check is item already exists
            let cartItems = this.getSavedCartInStorage();
            // console.log(cartItems);
            let search = lodash__WEBPACK_IMPORTED_MODULE_7__["findLast"](cartItems, ["product_id", data.product_id]);
            if (lodash__WEBPACK_IMPORTED_MODULE_7__["size"](search) > 0) {
                this.alert.infoMsg("Your product already has been added to cart", "Added already");
            }
            else {
                data.quantity = 1;
                data.amount = 0;
                cartItems.push(data);
                var cartsend = localStorage.setItem("cart_Items", JSON.stringify(cartItems));
                this.authenticationservice.setCartItems(cartItems);
                this.alert.snotSimpleSuccess("Product added!");
                this.cart = this.getSavedCartInStorage();
            }
        }
    }
};
ShopComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "app-shop",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.component.css */ "./src/app/pages/shop/shop.component.css")).default]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/pages/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _helpers_must_match__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/must-match */ "./src/app/helpers/must-match.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);












let SignupComponent = class SignupComponent {
    constructor(formBuilder, route, alert, authService, storeService, authenticationService, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.alert = alert;
        this.authService = authService;
        this.storeService = storeService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.loading = false;
        this.lloading = false;
        this.submitted = false;
        this.l_submitted = false;
        this.error = "";
        this.l_error = "";
        this.returnUrl = "";
        this.user = { fname: "", lname: "", email: "", phone: "" };
        this.email = "";
        this.password = "";
        this.cart = [];
    }
    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            fname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            lname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(11)]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].requiredTrue],
        }, { validator: Object(_helpers_must_match__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])("password", "confirmPassword") });
        //Login Form
        this.loginForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            pwd: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
        });
    }
    get f() {
        return this.registrationForm.controls;
    }
    get l() {
        return this.loginForm.controls;
    }
    handleResponse(data) {
        if (data.user && data.Access_token) {
            this.authenticationService.handleToken(data.Access_token);
            if (!this.authenticationService.loggedIn()) {
                this.error = "Invalid Token supplied";
                return;
            }
            this.authenticationService.setUser(data.user);
            this.authenticationService.currentUser.subscribe((x) => {
                this.currentUser = x;
                this.checkItems();
            });
            // set user access Data for later reference
            // this.authenticationservice.setUserData(data.accessData);
            // this.cart = this.getSavedCartInStorage();
            // this.cart.user_id = this.currentUser.id;
            this.router.navigate([this.returnUrl]);
        }
    }
    checkItems() {
        if (this.currentUser) {
            // user cart items
            this.cartSubscription = this.storeService
                .GetCartItems(this.currentUser.id)
                .subscribe((items) => {
                if (this.count(items) > 0)
                    this.cart = items;
                // console.log(this.cart);
                this.authenticationService.setCartItems(this.cart);
            });
        }
        else {
            if (this.count(this.getSavedCartInStorage()) > 0)
                // this.cart.push(this.getSavedCartInStorage());
                this.cart = this.getSavedCartInStorage();
        }
    }
    getSavedCartInStorage() {
        return JSON.parse(localStorage.getItem("cart_Items"));
    }
    count(item) {
        return lodash__WEBPACK_IMPORTED_MODULE_10__["size"](item);
    }
    onLogin() {
        this.l_error = "";
        this.l_submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.lloading = true;
        this.authenticationService
            .login(this.l.email.value, this.l.pwd.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe((data) => {
            // console.log(data);
            if (data.user.email_verified_at) {
                this.handleResponse(data);
                this.lloading = false;
            }
            else {
                this.l_error =
                    "Your email is not verified. Please verify your email";
                this.lloading = false;
            }
        }, (error) => {
            // console.log(error);
            this.l_error = error;
            // console.log(error);
            this.lloading = false;
        });
    }
    onSubmit() {
        this.error = "";
        this.submitted = true;
        if (this.registrationForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService
            .createUser(this.registrationForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe((data) => {
            this.loading = false;
            this.submitted = false;
            this.alert.snotSimpleSuccess(data.message);
            this.router.navigateByUrl("/");
        }, (error) => {
            this.error = error;
            // console.log(this.error);
            this.loading = false;
        });
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID).then((data) => {
            this.user = {
                fname: data.firstName,
                lname: data.lastName,
                email: data.email,
                phone: "",
            };
        }, (error) => {
            // console.log(error);
        });
    }
    signInWithFB() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"].PROVIDER_ID);
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-signup",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/pages/termcondition/termcondition.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/termcondition/termcondition.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1jb25kaXRpb24vdGVybWNvbmRpdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/termcondition/termcondition.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/termcondition/termcondition.component.ts ***!
  \****************************************************************/
/*! exports provided: TermconditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermconditionComponent", function() { return TermconditionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TermconditionComponent = class TermconditionComponent {
    constructor() { }
    ngOnInit() {
    }
};
TermconditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-termcondition',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./termcondition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termcondition/termcondition.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./termcondition.component.css */ "./src/app/pages/termcondition/termcondition.component.css")).default]
    })
], TermconditionComponent);



/***/ }),

/***/ "./src/app/resolvers/blog.resolver.ts":
/*!********************************************!*\
  !*** ./src/app/resolvers/blog.resolver.ts ***!
  \********************************************/
/*! exports provided: BlogResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogResolve", function() { return BlogResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * Created by david on 4/23/20.
 */

let BlogResolve = class BlogResolve {
    constructor(postservice) {
        this.postservice = postservice;
    }
    resolve(route, state) {
        return this.postservice.getPost();
    }
};
BlogResolve.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }
];
BlogResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BlogResolve);



/***/ }),

/***/ "./src/app/resolvers/blogdetails.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/resolvers/blogdetails.resolver.ts ***!
  \***************************************************/
/*! exports provided: BlogDetailsResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsResolve", function() { return BlogDetailsResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * Created by david on 4/23/20.
 */

let BlogDetailsResolve = class BlogDetailsResolve {
    constructor(postservice) {
        this.postservice = postservice;
    }
    resolve(route, state) {
        const slug = route.paramMap.get('slug');
        return this.postservice.getPostDetails(slug);
    }
};
BlogDetailsResolve.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }
];
BlogDetailsResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BlogDetailsResolve);



/***/ }),

/***/ "./src/app/resolvers/category.resolver.ts":
/*!************************************************!*\
  !*** ./src/app/resolvers/category.resolver.ts ***!
  \************************************************/
/*! exports provided: CategoryProductResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryProductResolve", function() { return CategoryProductResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");

/**
 * Created by david on 4/23/20.
 */


let CategoryProductResolve = class CategoryProductResolve {
    constructor(baseService) {
        this.baseService = baseService;
    }
    resolve(route, state) {
        return this.baseService.getProductByCategory(route.params.slug);
    }
};
CategoryProductResolve.ctorParameters = () => [
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }
];
CategoryProductResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CategoryProductResolve);



/***/ }),

/***/ "./src/app/resolvers/product.resolver.ts":
/*!***********************************************!*\
  !*** ./src/app/resolvers/product.resolver.ts ***!
  \***********************************************/
/*! exports provided: ProductDetailsResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsResolve", function() { return ProductDetailsResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");

/**
 * Created by david on 4/23/20.
 */


let ProductDetailsResolve = class ProductDetailsResolve {
    constructor(baseService) {
        this.baseService = baseService;
    }
    resolve(route, state) {
        return this.baseService.product_details(route.params.slug);
    }
};
ProductDetailsResolve.ctorParameters = () => [
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }
];
ProductDetailsResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductDetailsResolve);



/***/ }),

/***/ "./src/app/resolvers/shop.resolver.ts":
/*!********************************************!*\
  !*** ./src/app/resolvers/shop.resolver.ts ***!
  \********************************************/
/*! exports provided: ShopResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopResolve", function() { return ShopResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");

/**
 * Created by david on 4/23/20.
 */


let ShopResolve = class ShopResolve {
    constructor(baseService) {
        this.baseService = baseService;
    }
    resolve(route, state) {
        return this.baseService.all_product();
    }
};
ShopResolve.ctorParameters = () => [
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }
];
ShopResolve = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ShopResolve);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");




let AlertService = class AlertService {
    constructor(toastr, snotify) {
        this.toastr = toastr;
        this.snotify = snotify;
    }
    config() {
        return {
            type: 'success',
            position: 'rightTop',
        };
    }
    successMsg(message, title) {
        this.toastr.success(message, title);
    }
    errorMsg(message, title) {
        this.toastr.error(message, title);
    }
    warningMsg(message, title) {
        this.toastr.warning(message, title);
    }
    infoMsg(message, title) {
        this.toastr.info(message, title);
    }
    snotSuccess(message) {
        return this.snotify.success(message);
    }
    snotSimpleSuccess(message) {
        return this.snotify.success(message, null, {
            type: 'success',
            position: 'rightTop',
        });
    }
};
AlertService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this._cartSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.cartItems$ = this._cartSource.asObservable();
        this.EMPTY = new Object();
        // Local
        // public endpoint = "http://127.0.0.1:8000/api";
        // public baseurl = "http://127.0.0.1:8000/";
        // public endPointAuth = "http://127.0.0.1:8000/api/auth";
        // Online
        this.endpoint = 'https://server.nigerkit.com/api';
        this.baseurl = 'https://server.nigerkit.com/';
        this.endPointAuth = 'https://server.nigerkit.com/api/auth';
        this.iss = {
            login: `${this.endPointAuth}/login`,
            register: `${this.endPointAuth}/register`,
        };
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem("current_user")));
        this.currentUser = this.currentUserSubject.asObservable();
        // console.log(this.currentUser);
    }
    // Login user
    login(email, password) {
        return this.http.post(`${this.endPointAuth}/login`, {
            email,
            password,
        });
    }
    // Register a new user
    createUser(formData) {
        return this.http.post(`${this.endPointAuth}/register`, formData);
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    getToken() {
        return localStorage.getItem("Access_token");
    }
    // setUser
    setUser(user) {
        localStorage.setItem("current_user", JSON.stringify(user));
        this.currentUserSubject.next(user);
    }
    get currentCartItem() {
        return this.cartItemSubject.value;
    }
    setCartItems(items) {
        this._cartSource.next(items);
    }
    // set basic user data
    setUserData(data) {
        localStorage.setItem("user_Data", JSON.stringify(data));
    }
    setCart(items) {
        localStorage.setItem("cart_Items", JSON.stringify(items));
    }
    // Set access token
    setToken(token) {
        localStorage.setItem("Access_token", token);
    }
    removeUser() {
        return localStorage.removeItem("current_user");
    }
    //get user data from storage
    getUserData() {
        return localStorage.getItem("user_Data");
    }
    //remove user data from storage
    removeUserData() {
        return localStorage.removeItem("user_Data");
    }
    removeToken() {
        return localStorage.removeItem("Access_token");
    }
    //handle token
    handleToken(token) {
        this.setToken(token);
    }
    isValidToken() {
        const token = this.getToken();
        if (token) {
            const payload = this.payload(token);
            if (payload) {
                return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        return false;
    }
    payload(token) {
        const payload = token.split(".")[1];
        return this.decode(payload);
    }
    decode(payload) {
        return JSON.parse(atob(payload));
    }
    loggedIn() {
        return this.isValidToken();
    }
    logout() {
        // remove user from local storage to log user out
        this.removeUser();
        this.removeUserData();
        // remove access_token
        this.removeToken();
        this.currentUserSubject.next(null);
        // this.cartItemSubject.next([]);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/base.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);





let BaseService = class BaseService {
    constructor(http, authenticationservice) {
        this.http = http;
        this.authenticationservice = authenticationservice;
        //get emdpoints
        this.endpoint = this.authenticationservice.endpoint;
        this.endPointAuth = this.authenticationservice.endPointAuth;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "allow",
            }),
        };
    }
    //Google Api Calls
    googleSearchPlaces(query) {
        return this.http
            .post(`${this.endpoint}/address-search-places`, { query: query })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(8000));
    }
    // Update user profile
    update(formData) {
        return this.http.post(`${this.endpoint}/update`, formData);
    }
    updateUserData(formData, id) {
        return this.http.post(`${this.endpoint}/update-password-data/${id}`, formData);
    }
    getIndexData() {
        return this.http.get(`${this.endpoint}/get-index-data`);
    }
    getFooterDetails() {
        return this.http.get(`${this.endpoint}/get-footer-details`);
    }
    all_product() {
        return this.http.get(`${this.endpoint}/get-product`);
    }
    search_product(formData) {
        return this.http.post(`${this.endpoint}/search-product`, formData);
    }
    allCategory() {
        return this.http.get(`${this.endpoint}/get-category`);
    }
    banner() {
        return this.http.get(`${this.endpoint}/get-banner`);
    }
    banner_sr() {
        return this.http.get(`${this.endpoint}/get-banner_sr`);
    }
    product_details(slug) {
        return this.http.get(`${this.endpoint}/get-product-related-details/${slug}`);
    }
    getProductByCategory(slug) {
        return this.http.get(`${this.endpoint}/get-category-product/${slug}`);
    }
    get_skuNos() {
        return this.http.get(`${this.endpoint}/get-sku_No`);
    }
    vatFee() {
        return this.http.get(`${this.endpoint}/vatfee`);
    }
    addSubscriber(email) {
        return this.http.post(`${this.endpoint}/add-subscriber`, { email });
    }
    getStates() {
        return this.http.get(`${this.endpoint}/get-states`);
    }
    tests() {
        return this.http.get(`${this.endpoint}/test`);
    }
    getPhoneNumber() {
        return this.http.get(`${this.endpoint}/get-phone`);
    }
};
BaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
BaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], BaseService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CartService = class CartService {
    constructor() {
        this._cartSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.cartItems$ = this._cartSource.asObservable();
    }
    SendCart(items) {
        this._cartSource.next(items);
    }
};
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");




let PostService = class PostService {
    constructor(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.endpoint = this.authenticationService.endpoint;
    }
    // ======================= Methods Starts Here ==========================//
    getPost() {
        return this.http.get(`${this.endpoint}/post/get-all-post`);
    }
    getPostDetails(slug) {
        return this.http.get(`${this.endpoint}/post/get-post-details/${slug}`);
    }
    sendComment(formData) {
        return this.http.post(`${this.endpoint}/post/send-comment`, formData);
    }
    // Navigation on pagination
    Navigate(url) {
        return this.http.get(url);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");





let StoreService = class StoreService {
    constructor(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.endpoint = this.authenticationService.endpoint;
    }
    getCommonData(url) {
        return this.http.get(`${this.endpoint}/store/${url}`);
    }
    //======================= Methods Starts Here ==========================//
    getStore(user_id, url) {
        return this.http.get(`${this.endpoint}/store/${url}/${user_id}`);
    }
    checkHasStore(user_id) {
        return this.http.get(`${this.endpoint}/store/check-has-store/${user_id}`);
    }
    dashboardData(user_id) {
        return this.http.get(`${this.endpoint}/store/get-dashboard-data/${user_id}`);
    }
    getOrders(user_id) {
        return this.http.get(`${this.endpoint}/store/get-store-orders/${user_id}`);
    }
    getReviews(user_id) {
        return this.http.get(`${this.endpoint}/store/get-reviews/${user_id}`);
    }
    trackOrder(order_id, user_id) {
        return this.http.get(`${this.endpoint}/store/track-order/${order_id}/${user_id}`);
    }
    getSingleProduct(product_id) {
        return this.http.get(`${this.endpoint}/store/get-single-product/${product_id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(800));
    }
    ////////////////////////////////////////////////////////////////////////////
    GetCartItems(user_id) {
        return this.http.get(`${this.endpoint}/store/store-get-cart/${user_id}`);
    }
    GetTransactions(user_id) {
        return this.http.get(`${this.endpoint}/store/store-get-transactions/${user_id}`);
    }
    AddToCart(data) {
        return this.http.post(`${this.endpoint}/store/store-add-to-cart`, data);
    }
    CalculateDelivery(formData) {
        return this.http.post(`${this.endpoint}/store/store-calculate-delivery`, formData);
    }
    CalculateProduct(data) {
        return this.http.post(`${this.endpoint}/store-calculate-product`, data);
    }
    RemoveFromCart(item_id, user_id) {
        return this.http.get(`${this.endpoint}/store/store-remove-from-cart/${item_id}/${user_id}`);
    }
    PlaceOrder(formData) {
        return this.http.post(`${this.endpoint}/store/store-place-order`, formData);
    }
    OrderList(data) {
        return this.http.get(`${this.endpoint}/store/order-list/${data}`);
    }
    OrderListRecent(client_id) {
        return this.http.get(`${this.endpoint}/store/order-list-recent/${client_id}`);
    }
    OrderDetails(identifier) {
        return this.http.get(`${this.endpoint}/store/order-detail/${identifier}`);
    }
    // Navigation on pagination
    Navigate(url) {
        return this.http.get(url);
    }
};
StoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StoreService);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");






let FooterComponent = class FooterComponent {
    constructor(baseservice, formBuilder, alert) {
        this.baseservice = baseservice;
        this.formBuilder = formBuilder;
        this.alert = alert;
        this.settings = [];
        this.loading = false;
        this.submitted = false;
        this.error = "";
        this.baseservice.getFooterDetails().subscribe((item) => {
            this.settings = item['settings'];
        });
    }
    ngOnInit() {
        this.subscriberForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        });
    }
    get f() {
        return this.subscriberForm.controls;
    }
    getSettingsValue(value) {
        let search = lodash__WEBPACK_IMPORTED_MODULE_4__["findLast"](this.settings, ["name", value]);
        return search ? search.value : "";
    }
    onSubmit() {
        this.error = "";
        this.submitted = true;
        // stop here if form is invalid
        if (this.subscriberForm.invalid) {
            return;
        }
        this.loading = true;
        this.baseservice.addSubscriber(this.f.email.value).subscribe((item) => {
            this.loading = false;
            if (item.message)
                this.alert.infoMsg(item.message, "Notice");
            else
                this.alert.infoMsg(item.error, "Notice");
        }, (error) => {
            this.error = error;
            this.loading = false;
        });
    }
};
FooterComponent.ctorParameters = () => [
    { type: src_app_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav_hover:hover {\n      background: rgba(255, 255, 255, 0.15);\n      box-shadow: none;\n      -webkit-transition-duration: .1s;\n      transition-duration: .1s;\n      border-radius: 2px;\n      height: 43px;\n      margin-top: 6px;\n      margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNLHFDQUFxQztNQUNyQyxnQkFBZ0I7TUFDaEIsZ0NBQWdDO01BQ2hDLHdCQUF3QjtNQUN4QixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGVBQWU7TUFDZixrQkFBa0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdl9ob3Zlcjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjFzO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjFzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);











let HeaderComponent = class HeaderComponent {
    constructor(formBuilder, route, router, Ref, storeService, baseService, authenticationservice, cartservice) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.Ref = Ref;
        this.storeService = storeService;
        this.baseService = baseService;
        this.authenticationservice = authenticationservice;
        this.cartservice = cartservice;
        this.loading = false;
        this.submitted = false;
        this.searching = false;
        this.error = "";
        this.cart = [];
        this.category = [];
        this.searchTerm = "";
        this.suggestion = [];
        this.phone = "";
        this.settings = [];
        this.banners = [];
        this.cart_item = [];
        this.is_cartNeeded = true;
        this.Update_cart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.authenticationservice.currentUser.subscribe((x) => (this.currentUser = x));
        this.categorySubscription = this.baseService
            .allCategory()
            .subscribe((x) => (this.category = x["category"]));
        this.baseService.banner().subscribe((x) => (this.banners = x));
        this.baseService.getFooterDetails().subscribe((item) => {
            this.settings = item["settings"];
        });
        // this.cartSubscription = this.cartservice.cartItems$.subscribe(data => {
        this.checkItems();
        // console.log(this.cart);
    }
    checkItems() {
        if (this.currentUser) {
            // user cart items
            this.cartSubscription = this.storeService
                .GetCartItems(this.currentUser.id)
                .subscribe((items) => {
                if (this.count(items) > 0)
                    this.cart = items;
                // console.log(this.cart);
            });
        }
        else {
            if (this.count(this.getSavedCartInStorage()) > 0)
                // this.cart.push(this.getSavedCartInStorage());
                this.cart = this.getSavedCartInStorage();
        }
    }
    ngOnInit() {
        this.authenticationservice.cartItems$.subscribe((data) => {
            if (!this.currentUser) {
                this.cart = [];
                this.cart = this.getSavedCartInStorage();
            }
        });
        this.loginForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
        });
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/";
        // console.log(this.returnUrl);
    }
    handleResponse(data) {
        if (data.user && data.Access_token) {
            this.authenticationservice.handleToken(data.Access_token);
            if (!this.authenticationservice.loggedIn()) {
                this.error = "Invalid Token supplied";
                return;
            }
            this.authenticationservice.setUser(data.user);
            // set user access Data for later reference
            // this.authenticationservice.setUserData(data.accessData);
            this.cart = this.getSavedCartInStorage();
            // this.cart.user_id = this.currentUser.id;
            this.checkItems();
            this.router.navigate([this.returnUrl]);
        }
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }
    getSettingsValue(value) {
        let search = lodash__WEBPACK_IMPORTED_MODULE_10__["findLast"](this.settings, ["name", value]);
        return search ? search.value : "";
    }
    onSubmit() {
        this.error = "";
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationservice
            .login(this.f.email.value, this.f.password.value)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe((data) => {
            // console.log(data);
            if (data.user.email_verified_at) {
                this.handleResponse(data);
                this.loading = false;
            }
            else {
                this.error = "Your email is not verified. Please verify your email";
                this.loading = false;
            }
        }, (error) => {
            this.error = error;
            // console.log(error);
            this.loading = false;
        });
    }
    count(items) {
        return lodash__WEBPACK_IMPORTED_MODULE_10__["size"](items);
    }
    logout() {
        this.authenticationservice.logout();
        this.router.navigate(["/"]);
    }
    getSavedCartInStorage() {
        return JSON.parse(localStorage.getItem("cart_Items"));
    }
    Image_data(item, type, nullValue) {
        if (type === "text") {
            if (this.count(item) === 0) {
                return nullValue;
            }
            return item;
        }
        if (type === "avatar") {
            if (this.count(item) === 0) {
                return "/assets/images/default/avatar.jpg";
            }
            return this.authenticationservice.baseurl + item;
        }
    }
    // ===================== Remove ITem From Cart ==================//
    removeFromCart(item) {
        if (this.currentUser) {
            let search = lodash__WEBPACK_IMPORTED_MODULE_10__["findLastIndex"](this.cart, ["product_id", item.product_id]);
            this.cart.splice(search, 1);
            this.storeService
                .RemoveFromCart(item.product_id, this.currentUser.id)
                .subscribe((data) => {
                this.cart = data;
            });
        }
        else {
            this.sliceLocalCart(item);
            this.cart_item = this.cart;
        }
    }
    updateLocalCart() {
        localStorage.setItem("cart_Items", JSON.stringify(this.cart));
        this.authenticationservice.setCartItems(this.cart);
        // console.log("subscription clicked");
    }
    sliceLocalCart(item) {
        let cartItems = this.getSavedCartInStorage();
        let search = lodash__WEBPACK_IMPORTED_MODULE_10__["findLastIndex"](cartItems, ["product_id", item.product_id]);
        cartItems.splice(search, 1);
        this.cart = cartItems;
        this.updateLocalCart();
    }
    Subtotal() {
        let total = 0;
        this.cart.forEach((element) => {
            total += element.product.price * element.quantity;
        });
        return total;
    }
    update_cart() {
        this.Update_cart.emit(this.cart_item);
    }
    ngOnDestroy() {
        this.Ref.detach(); // do this
    }
    search() {
        if (this.searchTerm) {
            this.searching = true;
            jquery__WEBPACK_IMPORTED_MODULE_3__(".search").each(function (index, element) {
                const search = jquery__WEBPACK_IMPORTED_MODULE_3__(element);
                search.addClass("search--suggestions-open");
                search.toggleClass("search--has-suggestions", true);
            });
            var fd = new FormData();
            fd.append("searchTerm", this.searchTerm);
            this.baseService.search_product(fd).subscribe((item) => {
                this.suggestion = item;
                this.searching = false;
            }, (error) => {
                // console.log(error);
            });
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_9__["StoreService"] },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], HeaderComponent.prototype, "cart_item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], HeaderComponent.prototype, "is_cartNeeded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], HeaderComponent.prototype, "Update_cart", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/Nigerkit/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map