import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './component/search.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'search/:query', component: SearchComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
