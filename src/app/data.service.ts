import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  filter: String = "";
  data: any;
  constructor(private http:HttpClient) { 
    console.log('service is workinkg');
  }
  search() {
    this.http.get(`https://www.liverpool.com.mx/tienda/?s=${this.filter}&d3106047a194921c01969dfdec083925=json`)
      .subscribe((data) => {
        console.log(data)
        this.data = data.contents[0].mainContent[3].contents[0].records;
        console.log(this.data)
      })
  }
}
