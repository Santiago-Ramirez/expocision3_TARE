import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Heroes } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroe = new Heroes();
  heroes: Heroes[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  crear (ngform: NgForm) 
  
  {

    
    console.log(ngform);
      const data: Heroes = 
      {
        "nombre": ngform.control.value.nombre,
        "poder": ngform.control.value.poder,
        "descripcion": ngform.control.value.descripcion,
      }
      this.heroes.push(data)
      console.log(this.heroes)

      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    
      
    
    }
  }