export interface Emission {
  type: 'Land' | 'Unternehmen';
  name: string;
  countryCode?: string;
  emissionMt: number;
  year: number;
  industry?: string;
}
