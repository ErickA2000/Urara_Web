import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  agregar(){
    this.router.navigate(['inventario/agregar'])
  }
}
