import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-layout-dash',
  standalone: true,
  imports: [ReactiveFormsModule, TuiInputModule],
  templateUrl: './layout-dash.component.html',
  styleUrl: './layout-dash.component.css'
})
export class LayoutDashComponent implements OnInit{
  testForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      testValue: ['',Validators.required],
    });
    console.log(this.testForm.value.testValue);
  }
  
}
