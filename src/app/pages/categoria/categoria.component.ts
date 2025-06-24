import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaService } from './../../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoriaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoriaService: CategoriaService) {
    this.categoriaForm = this.formBuilder.group({
      CategoryName: [''],
      Description: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const formData = new FormData();
    formData.append('CategoryName', this.categoriaForm.get('CategoryName')?.value);
    formData.append('Description', this.categoriaForm.get('Description')?.value);

    this.categoriaService.registerCategory(formData).subscribe(response => {
      console.log('Registro exitoso', response);
    }, error => {
      console.error('Error al registrar', error);
    });
  }
}
