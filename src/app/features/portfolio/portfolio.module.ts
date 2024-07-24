import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { LoginAdminRoutingModule } from './portfolio-routing.module';



@NgModule({
  declarations: [PortfolioComponent],
  
  imports: [
    CommonModule,
    LoginAdminRoutingModule
  ]
})
export class PortfolioModule { }
