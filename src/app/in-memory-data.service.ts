import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      {id: 11, name: 'Captain America'},
      {id: 12, name: 'Iron  America'},
      {id: 13, name: 'Hulk America'},
      {id: 14, name: 'Donal America'},
      {id: 15, name: 'Kim Jong America'},
      {id: 16, name: 'Jack America'},
      {id: 17, name: 'Lee Jun America'},
      {id: 18, name: 'Xiao America'},
      {id: 19, name: 'Ho Chi America'},
    ];
    return {heroes};
  }




  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
