import { Component, OnInit } from "@angular/core";
import { Order } from "../models/order";
import { OrderService } from "../services/order.service";
import * as io from "socket.io-client";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-add-order",
  templateUrl: "./add-order.component.html",
  styleUrls: ["./add-order.component.css"]
})
export class AddOrderComponent implements OnInit {
  order: Order = { orderDetail: "", cost: 0, createdBy: "MMA" };

  // Socket connection
  socket: any;

  constructor(private orderSrv: OrderService) {
    this.socket = io(environment.backendUrl);
  }

  ngOnInit() {}

  onCreateOrder() {
    this.orderSrv.createOrder(this.order).subscribe(res => {
      // Emiting event for socket-io
      this.socket.emit("orderCreated", {});
    });
  }
}
