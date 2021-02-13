import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  lista: any;
  erro: any;
  formulario: FormGroup;
  listaSubmit: Array<string> = [];
  constructor(private crudService: CrudService) {
    this.getter();
    this.formulario = new FormGroup({
      name: new FormControl('')
    });
  }

  ngOnInit() {

  }

  postUsers() {
    this.crudService.insertUser(this.listaSubmit).subscribe(data => {
      this.getter()
      alert('Inclusão Realizada!')
    }, error => {
      this.erro = error
      console.log(error)
    })
  }

  onSubmit() {
    this.listaSubmit.push(this.formulario.value.name)
    this.postUsers()
    this.formulario = new FormGroup({
      name: new FormControl('')
    });
  }

  getter() {
    this.crudService.getUsers().subscribe(data => {
      this.lista = data;
    }, error => {
      this.erro = error
      console.log(error)
    })
  }

}
