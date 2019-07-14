import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { Order } from "../models/order";
import { HttpClient } from "@angular/common/http";
import { IOrder } from "../interfaces/IOrder";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private http: HttpClient) {}

  // Getting Orders
  getOrders() {
    return this.http.get<IOrder>(environment.backendUrl + "orders").pipe(
      map(resData => {
        // Orders array
        const orders = [];
        for (const key in resData.data) {
          // if the key is inside the data object
          if (resData.data.hasOwnProperty(key)) {
            const newOrder = new Order();
            newOrder.orderDetail = resData.data[key].orderDetail;
            newOrder.cost = resData.data[key].cost;
            newOrder.createdBy = resData.data[key].createdBy;
            orders.push(newOrder);
          }
        }
        return orders;
      }),
      tap(orders => {
        return orders;
      })
    );
  }
}
