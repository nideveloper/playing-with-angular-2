import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'contact', component: ContactComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
