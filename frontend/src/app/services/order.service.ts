import { Order } from "./../models/order";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, tap } from "rxjs/operators";
import { IOrder } from "../interfaces/IOrder";

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(order: Order) {
    return this.http
      .post<IOrder>(environment.backendUrl + "orders/create", order)
      .pipe(
        map(resData => {
          // Orders array
          const orders = [];
          const newOrder = new Order();
          newOrder.orderDetail = resData.data.orderDetail;
          newOrder.cost = resData.data.cost;
          orders.push(newOrder);
          return orders;
        }),
        tap(orders => {
          return orders;
        })
      );
  }
}
