import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsComponent } from './components.component';
import { KeyFeaturesComponent } from '../key-features/key-features.component';
import { ContestComponent } from '../contest/contest.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    KeyFeaturesComponent,
    ContestComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  
  exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
