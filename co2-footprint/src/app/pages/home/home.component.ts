import { Component } from '@angular/core';
import {DataTableComponent} from '../../data-table/data-table.component';

@Component({
  selector: 'app-home',
  imports: [
    DataTableComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
