import { Component } from '@angular/core';
import { Gender } from '../../interfaces/gender.type';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //************i18n Select**********//
  //i18n Select
  public name: string = 'Nehemias';
  public gender: Gender = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Estephany'
    this.gender = 'female'
  }

  resetClient(): void {
    this.name = 'Nehemias'
    this.gender = 'male'
  }



  //************i18n Plural & Slice Pipe && Json Pipe**********//
  //i18n Plural & Slice Pipe
  public client: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Edwardo', 'Melissa', 'Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    '=3': 'tenemos 3 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.client.shift();
  }
  resetListClient(): void {
    this.client.splice(0, this.client.length, 'Maria', 'Pedro', 'Fernando', 'Hernando', 'Edwardo', 'Melissa', 'Natalia',);
  }



    //************KeyValue Pipe & Json Pipe**********//
  //KeyValue Pipe  & Json Pipe
  public person = {
    name: 'Nehemias',
    age: 35,
    address: 'Ottawa, Canada'
  }

}
