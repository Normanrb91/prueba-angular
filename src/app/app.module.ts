import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FilterComponent } from './user/components/filter/filter.component';
import { PaginationComponent } from './user/components/pagination/pagination.component';
import { UserTableComponent } from './user/components/user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    FilterComponent,
    PaginationComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
