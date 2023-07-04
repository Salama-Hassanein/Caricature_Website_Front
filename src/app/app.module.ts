import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturesModule } from './features/features.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeaturesModule,
    HttpClientModule,
    AdminModule,
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
