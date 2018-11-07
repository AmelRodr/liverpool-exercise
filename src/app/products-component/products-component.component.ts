import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {
  filter: String = "";
  data: any;

  constructor(private http: HttpClient) {

    this.getData();

  }

  ngOnInit() {
  }

  search() {
    this.http.get(`https://www.liverpool.com.mx/tienda/?s=${this.filter}&d3106047a194921c01969dfdec083925=json`)
      .subscribe((data) => {
        let array =  data.contents[0].mainContent
        var tam = array.length
        let datos = data.contents[0].mainContent[tam-1].contents[0].records;
        localStorage.setItem('products',JSON.stringify(datos))
        let productos = JSON.parse(localStorage.getItem('products'))  
        this.data = productos
      })
  }

  getData(){
    let productos = JSON.parse(localStorage.getItem('products'))
    this.data = productos;
  
  }

}
