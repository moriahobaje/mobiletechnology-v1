// Angular modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// third party modules, if any

// the global routing config
import { AppRoutingModule } from "./app-routing.module";

// my own modules
import { AccountModule } from "./pages/account/account.module"; 
import { AdminModule } from "./pages/admin/admin.module"; 
import { AuthModule } from "./pages/auth/auth.module";
import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { ServicesModule } from "./services/services.module";
import { ToDoModule } from "./pages/to-do/to-do.module";

// the app core layout
import { LayoutComponent } from "./layout/layout.component";


@NgModule({
  imports: [
    // Angular modules
    BrowserModule,

    // third party modules, if any

    // my own modules
    ServicesModule,

    AccountModule,
    AdminModule,
    AuthModule,
    DashboardModule,
    ToDoModule,

    // the app routing must be loaded last to ensure the catch-all (**) route is only activated as a last resort - the order in which routing is set up matters
    AppRoutingModule
  ],
  declarations: [LayoutComponent,],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
