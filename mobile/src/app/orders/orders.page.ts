import { environment } from "./../../environments/environment";
import { Component, OnInit } from "@angular/core";
import { Order } from "../models/order";
import * as io from "socket.io-client";
import { OrderService } from "../services/order.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"]
})
export class OrdersPage implements OnInit {
  orders: Order[];

  // Socket io object
  socket: any;

  constructor(private orderSrv: OrderService) {
    // Initialize socket-io
    this.socket = io(environment.backendUrl);
  }
  

  ngOnInit() {
    this.socket.on("getOrders", data => {
      this.getAllOrders();
    });
  }

  ionViewWillEnter() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderSrv.getOrders().subscribe(res => {
      this.orders = res;
    });
  }
}
