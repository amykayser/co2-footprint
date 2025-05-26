import { Component } from '@angular/core';
import {Table, TableModule} from 'primeng/table';
import { TagModule } from 'primeng/tag';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import {CommonModule, NgClass} from '@angular/common';
import {Emission} from '../models/emission.model';
import {EmissionsService} from '../services/emissions.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-table',
  imports: [
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    SelectModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {

  emissionsCountries!: Emission[];
  emissionsCompany!: Emission[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private emissionService: EmissionsService) {}

  ngOnInit() {
    this.emissionsCountries = [
      { type: 'Land', name: 'China', countryCode: 'cn', emissionMt: 10065, year: 2023, growthRate: 1.4, worldShare: 0.28 },
      { type: 'Land', name: 'USA', countryCode: 'us', emissionMt: 5416, year: 2023, growthRate: -0.5, worldShare: 0.15 },
      { type: 'Land', name: 'Indien', countryCode: 'in', emissionMt: 2654, year: 2023, growthRate: 3.2, worldShare: 0.075 },
      { type: 'Land', name: 'Russland', countryCode: 'ru', emissionMt: 1720, year: 2023, growthRate: -1.1, worldShare: 0.048 },
      { type: 'Land', name: 'Japan', countryCode: 'jp', emissionMt: 1130, year: 2023, growthRate: -0.3, worldShare: 0.032 },
      { type: 'Land', name: 'Deutschland', countryCode: 'de', emissionMt: 750, year: 2023, growthRate: -2.0, worldShare: 0.021 },
      { type: 'Land', name: 'Iran', countryCode: 'ir', emissionMt: 720, year: 2023, growthRate: 1.8, worldShare: 0.02 },
      { type: 'Land', name: 'Kanada', countryCode: 'ca', emissionMt: 590, year: 2023, growthRate: 0.6, worldShare: 0.016 },
      { type: 'Land', name: 'Südafrika', countryCode: 'za', emissionMt: 470, year: 2023, growthRate: 0.9, worldShare: 0.013 },
      { type: 'Land', name: 'Vietnam', countryCode: 'vn', emissionMt: 280, year: 2023, growthRate: 2.5, worldShare: 0.008 },
      { type: 'Land', name: 'Mexiko', countryCode: 'mx', emissionMt: 460, year: 2023, growthRate: 1.1, worldShare: 0.013 },
      { type: 'Land', name: 'Indonesien', countryCode: 'id', emissionMt: 560, year: 2023, growthRate: 2.0, worldShare: 0.016 },
      { type: 'Land', name: 'Brasilien', countryCode: 'br', emissionMt: 470, year: 2023, growthRate: 0.5, worldShare: 0.013 },
      { type: 'Land', name: 'Saudi-Arabien', countryCode: 'sa', emissionMt: 590, year: 2023, growthRate: 1.3, worldShare: 0.016 },
      { type: 'Land', name: 'Australien', countryCode: 'au', emissionMt: 410, year: 2023, growthRate: -0.4, worldShare: 0.011 },
      { type: 'Land', name: 'Südkorea', countryCode: 'kr', emissionMt: 630, year: 2023, growthRate: 0.2, worldShare: 0.017 },
      { type: 'Land', name: 'Italien', countryCode: 'it', emissionMt: 320, year: 2023, growthRate: -1.2, worldShare: 0.009 },
      { type: 'Land', name: 'Frankreich', countryCode: 'fr', emissionMt: 290, year: 2023, growthRate: -1.5, worldShare: 0.008 },
      { type: 'Land', name: 'Vereinigtes Königreich', countryCode: 'gb', emissionMt: 260, year: 2023, growthRate: -1.7, worldShare: 0.007 },
      { type: 'Land', name: 'Türkei', countryCode: 'tr', emissionMt: 350, year: 2023, growthRate: 1.0, worldShare: 0.01 },
      { type: 'Land', name: 'Spanien', countryCode: 'es', emissionMt: 230, year: 2023, growthRate: -0.8, worldShare: 0.006 },
      { type: 'Land', name: 'Polen', countryCode: 'pl', emissionMt: 320, year: 2023, growthRate: -0.6, worldShare: 0.009 },
      { type: 'Land', name: 'Ukraine', countryCode: 'ua', emissionMt: 150, year: 2023, growthRate: -2.5, worldShare: 0.004 },
      { type: 'Land', name: 'Argentinien', countryCode: 'ar', emissionMt: 190, year: 2023, growthRate: 0.7, worldShare: 0.005 },
      { type: 'Land', name: 'Thailand', countryCode: 'th', emissionMt: 240, year: 2023, growthRate: 1.4, worldShare: 0.007 },
      { type: 'Land', name: 'Nigeria', countryCode: 'ng', emissionMt: 180, year: 2023, growthRate: 2.1, worldShare: 0.005 },
      { type: 'Land', name: 'Niederlande', countryCode: 'nl', emissionMt: 160, year: 2023, growthRate: -0.9, worldShare: 0.004 },
      { type: 'Land', name: 'Belgien', countryCode: 'be', emissionMt: 140, year: 2023, growthRate: -1.0, worldShare: 0.004 },
      { type: 'Land', name: 'Kolumbien', countryCode: 'co', emissionMt: 130, year: 2023, growthRate: 1.2, worldShare: 0.004 },
      { type: 'Land', name: 'Vereinigte Arabische Emirate', countryCode: 'ae', emissionMt: 120, year: 2023, growthRate: 1.8, worldShare: 0.003 },
      { type: 'Land', name: 'Malaysia', countryCode: 'my', emissionMt: 110, year: 2023, growthRate: 1.5, worldShare: 0.003 },
      { type: 'Land', name: 'Chile', countryCode: 'cl', emissionMt: 100, year: 2023, growthRate: 0.9, worldShare: 0.003 },
      { type: 'Land', name: 'Kuwait', countryCode: 'kw', emissionMt: 90, year: 2023, growthRate: 1.6, worldShare: 0.002 },
      { type: 'Land', name: 'Singapur', countryCode: 'sg', emissionMt: 80, year: 2023, growthRate: 0.7, worldShare: 0.002 },
      { type: 'Land', name: 'Griechenland', countryCode: 'gr', emissionMt: 75, year: 2023, growthRate: -0.5, worldShare: 0.002 },
      { type: 'Land', name: 'Tschechien', countryCode: 'cz', emissionMt: 70, year: 2023, growthRate: -0.8, worldShare: 0.002 },
      { type: 'Land', name: 'Portugal', countryCode: 'pt', emissionMt: 65, year: 2023, growthRate: -1.1, worldShare: 0.002 },
      { type: 'Land', name: 'Irland', countryCode: 'ie', emissionMt: 60, year: 2023, growthRate: -1.3, worldShare: 0.002 },
      { type: 'Land', name: 'Ungarn', countryCode: 'hu', emissionMt: 55, year: 2023, growthRate: -0.9, worldShare: 0.002 },
      { type: 'Land', name: 'Dänemark', countryCode: 'dk', emissionMt: 50, year: 2023, growthRate: -1.0, worldShare: 0.001 },
      { type: 'Land', name: 'Finnland', countryCode: 'fi', emissionMt: 45, year: 2023, growthRate: -0.7, worldShare: 0.001 },
      { type: 'Land', name: 'Norwegen', countryCode: 'no', emissionMt: 40, year: 2023, growthRate: -0.6, worldShare: 0.001 },
      { type: 'Land', name: 'Neuseeland', countryCode: 'nz', emissionMt: 38, year: 2023, growthRate: -0.5, worldShare: 0.001 },
      { type: 'Land', name: 'Peru', countryCode: 'pe', emissionMt: 35, year: 2023, growthRate: 0.8, worldShare: 0.001 },
      { type: 'Land', name: 'Vietnam', countryCode: 'vn', emissionMt: 280, year: 2023, growthRate: 2.5, worldShare: 0.008 }
    ];

  this.emissionsCompany = [
    { type: 'Unternehmen', name: 'Global Energy Corp', countryCode: 'us', emissionMt: 920, year: 2023, industry: 'Energieversorgung', headquarters: 'USA' },
    { type: 'Unternehmen', name: 'TransWorld Oil', countryCode: 'sa', emissionMt: 860, year: 2023, industry: 'Öl & Gas', headquarters: 'Saudi-Arabien' },
    { type: 'Unternehmen', name: 'MegaSteel Industries', countryCode: 'cn', emissionMt: 510, year: 2023, industry: 'Stahlproduktion', headquarters: 'China' },
    { type: 'Unternehmen', name: 'AeroJet Freight', countryCode: 'de', emissionMt: 400, year: 2023, industry: 'Luftfahrt & Logistik', headquarters: 'Deutschland' },
    { type: 'Unternehmen', name: 'AutoNova AG', countryCode: 'de', emissionMt: 330, year: 2023, industry: 'Automobilindustrie', headquarters: 'Deutschland' },
    { type: 'Unternehmen', name: 'TerraCem Global', countryCode: 'in', emissionMt: 290, year: 2023, industry: 'Zement & Bau', headquarters: 'Indien' },
    { type: 'Unternehmen', name: 'UrbanHeat Utilities', countryCode: 'ru', emissionMt: 270, year: 2023, industry: 'Fernwärme & Strom', headquarters: 'Russland' },
    { type: 'Unternehmen', name: 'OceanGate Shipping', countryCode: 'nl', emissionMt: 240, year: 2023, industry: 'Seetransport', headquarters: 'Niederlande' },
    { type: 'Unternehmen', name: 'AgriGrow Foods Ltd.', countryCode: 'br', emissionMt: 180, year: 2023, industry: 'Landwirtschaft & Lebensmittel', headquarters: 'Brasilien' },
    { type: 'Unternehmen', name: 'DataCloud Services', countryCode: 'kr', emissionMt: 90, year: 2023, industry: 'IT & Rechenzentren', headquarters: 'Südkorea' }
  ]
};

  clear(table: Table) {
    table.clear();
  }
}
