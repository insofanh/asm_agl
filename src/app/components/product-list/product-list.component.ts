import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';
import { ProductService } from 'src/app/service/product-service/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  // @Input() products: IProduct[] = [];
  // @Output() onRemove = new EventEmitter<number>();
  // title = 'Quản lý sản phẩm';
  // status: boolean = false;
  // valueInput: string = "";

  products: IProduct[]=[];

  constructor(private productService: ProductService){
    this.productService.getProducts().subscribe(data=>{
      this.products=data
    }, error=>{
      console.log(error.massge);
    }
    )
  }

  toggle() {
    // this.status = !this.status;
  }
  setValue(e: any) {
    // this.valueInput = e.target.value;
  }

  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('delete thanh cong')
    })
  }
}