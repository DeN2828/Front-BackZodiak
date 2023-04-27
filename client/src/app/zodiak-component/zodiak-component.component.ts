import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zodiak-component',
  templateUrl: './zodiak-component.component.html',
  styleUrls: ['./zodiak-component.component.css'],
})
export class ZodiakComponentComponent { 

  public respon:any;

  onDateInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const date = input.value;
    const timestamp1 = Date.parse(date)/1000;
    fetch(`http://localhost:3001/zodiac?timestamp=${timestamp1}`)
    .then(response => response.json())
    .then(data => {console.log(data);this.respon = JSON.stringify(data);})
  }
 
}
