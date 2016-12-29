import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './component/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SearchRoutingModule, SharedModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule { }
