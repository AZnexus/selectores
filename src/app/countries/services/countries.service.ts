import { Injectable } from '@angular/core';
import { Region } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _regions: Region[] = [ Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];

  constructor() { }

  get regions(): Region[] {
    return [...this._regions]; // Al fer l'spread es trenca la relacio que hi ha amb les regions -> Si algú fa una modificacio a les regions d'aquest get, no ho farà de _regions.
  }
}
