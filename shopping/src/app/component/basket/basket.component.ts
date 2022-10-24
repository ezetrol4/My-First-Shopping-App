import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, AfterContentChecked {

  @Input() baskets:BasketModel[] = [];
  @Input() total:number = 0;
  constructor(
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    console.log(this.total);
  }

  deleteProduct(basket:BasketModel){
    let index = this.baskets.indexOf(basket);
    this.baskets.splice(index,1);
    // this.total = this.total -(basket.product.price * basket.quantity);
    this.toastrService.info(basket.product.name + "product deleted to yours shopping cart");
  }


  calc(){
      this.total = 0 ;
     this.baskets.forEach(element => {
     this.total = this.total + (element.product.price * element.quantity)
     });
    return this.total
  }

  changeData(basket:BasketModel){
    let quantity: number  = parseInt((<HTMLInputElement>document.getElementById("basketQuantity-" + basket.product.name)).value);

    let index = this.baskets.indexOf(basket);
    this.baskets.splice(index,1);

    basket.quantity = quantity;
    this.baskets.push(basket);
  }


  payment(event:any){
    if(this.total == event.total){
      let count = this.baskets.length;
      this.baskets.splice(0,count);
      this.toastrService.info("Your payment is successful and your products are shipping");
    }
  }



}
