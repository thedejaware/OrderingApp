import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AddOrderComponent } from "./add-order/add-order.component";
import { OrderService } from "./services/order.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, AddOrderComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [OrderService, ],
  bootstrap: [AppComponent]
})
export class AppModule {}
