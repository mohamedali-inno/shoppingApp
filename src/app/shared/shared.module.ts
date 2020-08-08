import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { Ng5SliderModule } from 'ng5-slider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SortByPipe } from './sortBy.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FilterRangePipe } from './filterByRange.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    FilterComponent,
    SortComponent,
    SortByPipe,
    FilterRangePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    FilterPipeModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    FilterComponent,
    SortComponent,
    SortByPipe,
    FilterRangePipe
  ]
})
export class SharedModule {}
