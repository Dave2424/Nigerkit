import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../../models/product";
import {BaseService} from "../../services/base.service";
import * as _ from 'lodash';
import {AuthenticationService} from "../../services/authentication.service";
import {User} from "../../models/user";
import {AlertService} from "../../services/alert.service";
import {StoreService} from "../../services/store.service";
import { NgxSmartModalService } from 'ngx-smart-modal';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize} from 'ngx-gallery';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public product: Product[] = [];
  public cart:any = {};
  currentUser: User;
  public cart_to_ : any;
  public img_file: any;
  public iscart = false;
  banner:any;
  fake:number = 0.75;
  sku_no: any;
  loading: any = '';


  private ProductSubscription: Subscription;
  private cartSubscription: Subscription;
  private bannerSubscription: Subscription;



    bannerSlideConfig = {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "autoplaySpeed": 5000
    };
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    constructor(private baseservice: BaseService,
                private alert: AlertService,
                public ngxSmartModalService: NgxSmartModalService,
                private storeService: StoreService,
                private authenticationservice: AuthenticationService) {
      this.authenticationservice.currentUser.subscribe(x => this.currentUser = x);
      this.checkItems();
  }

  checkItems() {
        if (this.currentUser) {
            // user cart items
            this.cartSubscription = this.storeService.GetCartItems()
                .subscribe(items => {
                    this.cart = items;
                });
        } else {
            this.cart = this.getSavedCartInStorage();
            this.baseservice.get_skuNos().subscribe( (data: any) => {
                //   console.log(data);
                this.sku_no = data;
                if (this.cart) {
                    data.sku.forEach(item => {
                        this.cart.forEach(cart => {
                            if (item.id == cart.sku_id) {
                                cart.sku_no = item;
                            }
                        });
                    });
                }
            });
        }
  }

    ngOnInit() {
        this.ProductSubscription = this.baseservice.all_product()
            .subscribe((data: any) => {
                console.log(data);
            if (_.size(data) > 0) {
                this.product.push(data);
                // console.log(this.product);
                this.product = this.product[0]['products'];
                // console.log(this.product);
            }
            });
        this.bannerSubscription = this.baseservice.banner_sr().subscribe(x => this.banner = x['banner_sr']);
    }

  setGallery(){
        this.galleryOptions = [
            {
                width: '100%',
                height: '400px',
                thumbnailsColumns: 4,
                imageArrows: false,
                imageAnimation: NgxGalleryAnimation.Zoom,
                imageSize: NgxGalleryImageSize.Contain
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        // this.galleryImages = this.getImages()
    }

  count(items){
        return _.size(items);
    }
    Image_data(item:any,  type:string, nullValue:string) {
        if (type === 'text') {
            if (this.count(item) === 0) {
                return nullValue;
            }
            return item;
        }

        if (type === 'avatar') {

            if (this.count(item) === 0) {
                return '/assets/images/default/avatar.jpg';
            }
            return this.authenticationservice.baseurl+item;
        }
    }

    getSavedCartInStorage(){
        return JSON.parse(localStorage.getItem('cart_Items'));
    }
    getLatestCart(event) {
        this.cart = event;
    }
    // checking which product is in cart
    checkItemInCart(product) {
        let result: boolean;
        if (this.cart) {
            for (let i = 0; i < this.count(this.cart); i++) {
                let search = _.findLast(this.cart, ['product_id', product.id]);
                if (search)
                    result = true;
                else
                    result = false;
            }
        }
        return result;
    }

    addToCart(product:any) {

        let toCart = {
            product_id: product.id,
            sku_id: product.Sku,
            user_id: this.currentUser ? this.currentUser.id : 0
        };


        // check if user is logged in
        if (this.currentUser) {
            this.storeService.AddToCart(toCart)
                .subscribe( (resp:any) => {

                    // first check for notice
                    if (!this.checkForError(resp)) {
                        this.cart = resp.items;
                        this.cart_to_ = this.cart;
                        this.authenticationservice.setCartItems(this.cart_to_);
                        this.alert.snotSimpleSuccess(resp.message);
                    }

                });
        } else {
            // use local storage
            this.saveToSession(toCart);
        }
    }


    saveToSession(data:any){
        // console.log(data);
        // console.log(this.sku_no);
        if (this.count(this.getSavedCartInStorage()) === 0) {

            let $array = [];

            this.storeService.getCommonData('get-local-product?product_id='+data.product_id)
                .subscribe((item:any) => {

                    data.product = item.product;
                    this.sku_no.sku.forEach(item => {
                        if (item.id == data.sku_id) {
                            data.sku_no = item;
                        }
                        });
                    data.quantity = 1;
                    data.amount = 0;

                    $array.push(data);
                    localStorage.setItem('cart_Items', JSON.stringify($array));
                    this.alert.snotSimpleSuccess("Your product has been added to cart");
                    this.cart = this.getSavedCartInStorage();
                    this.cart_to_ = this.cart;
                    this.authenticationservice.setCartItems(this.cart_to_);
                });
        } else {

            // check is item already exists
            let cartItems = this.getSavedCartInStorage();
            let search = _.findLast(cartItems, ['product_id', data.product_id]);

            if (_.size(search) > 0) {
                this.alert.infoMsg("Your product already has been added to cart","Added already");
            }else{
                this.storeService.getCommonData('get-local-product?product_id='+data.product_id)
                    .subscribe((item:any) => {
                        data.product = item.product;
                        data.quantity = 1;
                        data.amount = 0;

                        cartItems.push(data);
                        localStorage.setItem('cart_Items', JSON.stringify(cartItems));
                        this.alert.snotSimpleSuccess("Your product has been added to cart");
                        this.cart = this.getSavedCartInStorage();
                        this.cart_to_ = this.cart;
                        this.authenticationservice.setCartItems(this.cart_to_);
                    });

            }

        }

    }

    checkForError(data:any){
        if (data.error) {
            this.alert.infoMsg(data.error,"Info");
            return true;
        }
    }
    getBannerUrl() {
        return `url('${this.Image_data(this.banner['pictures'], 'avatar', null)}')`;
    }
    avail(item){
        let avail = '';
        if (item > 0)
            avail = 'In stock';
        else
            avail = 'Out of stock';

        return avail;
    }
    quickView(item, index) {
        this.loading = index;
        this.img_file = item.files;
        this.setGallery();
        this.galleryImages = this.getImages(this.img_file);
        setTimeout(() => {
            this.ngxSmartModalService.setModalData(item, 'productModal',true);
            this.ngxSmartModalService.getModal('productModal').open();
            this.loading = '';
        }, 1000);
    }
    getImages(files){
        const imageUrls= [];
        for(let i = 0;i<files.length;i++){
            imageUrls.push({
                small:this.Image_data(files[i], 'avatar', null),
                medium:this.Image_data(files[i], 'avatar', null),
                big:this.Image_data(files[i], 'avatar', null)
            })
        }
        return imageUrls;
    }


}
