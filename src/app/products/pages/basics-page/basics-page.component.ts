import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'nehemias';
  public nameUpper: string = 'NEHEMIAS';
  public fullName: string = 'neHEmiaS PaJaRO';


  public customDate: Date = new Date();

}
