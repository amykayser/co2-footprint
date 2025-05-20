import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Table, TableModule} from 'primeng/table';
import { TagModule } from 'primeng/tag';
import {IconField, IconFieldModule} from 'primeng/iconfield';
import {InputIcon, InputIconModule} from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import {CommonModule, NgClass} from '@angular/common';
import {Emission} from '../models/emission.model';
import {EmissionsService} from '../services/emissions.service';

@Component({
  selector: 'app-data-table',
  imports: [
    TableModule,
    NgClass
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  //customers!: Customer[];

  //representatives!: Representative[];

  emissions!: Emission[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private emissionService: EmissionsService) {}

  ngOnInit() {
    this.emissions = [
      { type: 'Land', name: 'China', countryCode: 'cn', emissionMt: 10065, year: 2023 },
      { type: 'Land', name: 'USA', countryCode: 'us', emissionMt: 5416, year: 2023 },
      { type: 'Unternehmen', name: 'Shell', emissionMt: 720, year: 2023, industry: 'Energie' },
      { type: 'Unternehmen', name: 'Volkswagen', emissionMt: 110, year: 2023, industry: 'Automobil' }
    ]
  };

  clear(table: Table) {
    table.clear();
  }
}


