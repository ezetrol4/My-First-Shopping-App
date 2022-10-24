import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:ProductModel[] = [
    {name:"Parmigiano Reggiano",
    price:37,
    imageUrl:"https://italybite.b-cdn.net/5848-xl_product/tasting-selection-parmigiano-reggiano-pdo-by-gennari.jpg"
    },
    {name:"Italian Green Olives",
    price:12,
    imageUrl:"https://m.media-amazon.com/images/I/713XVuiUxDL._SL1500_.jpg"
    },
    {name:"Italian Butter",
    price:12,
    imageUrl:"https://m.media-amazon.com/images/I/51r+ZAy2U8L.jpg"
    },
    {name:"Pane Di Casa",
    price:30,
    imageUrl:"https://cdn.shopify.com/s/files/1/0557/8365/3583/products/PDC-New_1024x1024@2x.jpg?v=1632092648"
    },
    {name:"Sciarake Etna Red Wine",
    price:38.99,
    imageUrl:"https://cdn.shopify.com/s/files/1/0226/1106/6954/products/IMG_7233_1024x1024@2x.jpg?v=1630499434"
    },
    {name:"Isola Italian Premium Fusilli Fresh Gourmet Pasta",
    price:53.39,
    imageUrl:"https://i5.walmartimages.com/asr/1d9e55fe-a42d-430a-abfa-61db2801016c.56419452ccf28b5a50f624995dd1b494.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {name:"Ragu Old World Style Traditional Pasta Sauce",
    price:91.90,
    imageUrl:"https://i5.walmartimages.com/asr/e77751af-2770-42a9-9a20-099210089485.23129559ecb9b7f968f58ee6eebb51ad.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {name:"Prima Della Pepperoni",
    price:9.47,
    imageUrl:"https://i5.walmartimages.com/asr/3bdb1e89-e205-4f43-9927-aed5f0cc5c19.f5e3ac2d89c26b048b36745cbe32fdb4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },

  ];

  baskets: BasketModel[] = [];
  total:number = 0;
  @Output() myEvent:EventEmitter<any> = new EventEmitter();

  constructor(
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
  }

  addBasket(product:ProductModel){
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = parseInt((<HTMLInputElement>document.getElementById("quantity-"+ product.name)).value);

    (<HTMLInputElement>document.getElementById("quantity-"+ product.name)).value = "1"


    this.baskets.push(basketModel);
    // this.total= this.total + (basketModel.quantity * product.price);

    this.myEvent.emit({data : this.baskets});
    this.toastrService.success(product.name + " succesfully added to shoping cart")
  }



}
