import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    
  ],
  imports: [CommonModule,AppRoutingModule,FormsModule ],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
