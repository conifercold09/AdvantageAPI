import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/orders';
import {SalesDataService} from '../../shared/SalesDataService';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor(private _salesData: SalesDataService) { }
 
orders: Order[];
 total = 0;
 page=1;
 limit = 10;
 loading= false;

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders():void{
  this._salesData.getOrder(this.page,this.limit)
    .subscribe(res =>{
      console.log(res);
      this.orders = res['page']['data'];
      this.total = res['page'].total;
      this.loading = false;
    });
}

  goToPrevious():void {
    //console.log("Previous btn clicked");
    this.page--
    this.getOrders();
  }
  goToNext():void {
    //console.log("Previous btn clicked");
    this.page++;
    this.getOrders();
  }

  goToPage(n:number): void{
    this.page = n;
    this.getOrders();
  }

}
