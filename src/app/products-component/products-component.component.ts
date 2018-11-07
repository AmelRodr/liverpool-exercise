import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {
  filter: String = "";
  data: any = "https://www.liverpool.com.mx/tienda/?s=xbox&d3106047a194921c01969dfdec083925=json" ;
  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
  }

  search(){
    this.http.get(`https://www.liverpool.com.mx/tienda/?s=${this.filter}&d3106047a194921c01969dfdec083925=json`)
    .subscribe((data)=>{
      this.data = data;
      console.log(this.data)
    })
  }

}
