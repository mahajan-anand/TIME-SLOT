import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotAvailableComponent } from './slot-available/slot-available.component';
import { SlotBookComponent } from './slot-book/slot-book.component';

const routes: Routes = [{
  path: '',
  component: SlotAvailableComponent,
},
{
  path: 'book',
  component: SlotBookComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
