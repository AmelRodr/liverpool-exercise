import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
    console.log('service is workinkg');
  }

  getData(){
    return this.http.get('https://www.liverpool.com.mx/tienda/?s=computadoras&d3106047a194921c01969dfdec083925=json')

  }
}
