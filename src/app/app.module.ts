// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { CustomerComponent } from './customer/customer.component';
// import { NavbarComponent } from './navbar/navbar.component';

// import { routes } from './app.routes';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     CustomerComponent,
//     NavbarComponent,
//   ],
//   imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
