import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { DataService } from './data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [];

  constructor(private http:HttpClient){

  }

  ngOnInit(){
    let obs = this.http.get('https://www.liverpool.com.mx/tienda/?s=computadoras&d3106047a194921c01969dfdec083925=json')
    obs.subscribe(data=>{
     // console.log(data)
    })

  }

  // constructor(private dataService:DataService){
  //   this.dataService.getData().subscribe(data => {
  //     console.log(data)

  //   })
  // }
}
