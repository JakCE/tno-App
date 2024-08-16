import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {TuiInputModule, TuiTagModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiTableModule} from '@taiga-ui/addon-table';
import { NgFor } from '@angular/common';
import { ApiService } from '../../services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import {TuiPaginationModule} from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';
import { max } from 'rxjs';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [TuiTagModule, TuiInputModule, TuiButtonModule, TuiTableModule, NgFor, HttpClientModule, TuiPaginationModule, RouterLink],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent implements OnInit{
  dataStudents: any = [];
  dataInitial: any=[];
  columns: any;
  constructor(
    private apiService: ApiService,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.getStudents();
    if (this.dataStudents.length > 0) {
      this.columns = Object.keys(this.dataStudents[0]);
    }
  }
  index: any=0;
  length: any;
  minRow: any;
  maxRow: any;
  totRows: any;

  getStudents(){
    this.apiService.getEstudiantes().subscribe(data=>{
      this.dataStudents = data;
      this.dataInitial = data;

      this.totRows=data.length;
      this.minRow=1;
      this.maxRow=6;
      //paginado
      this.dataStudents = this.dataInitial.slice(0,6);
      this.length=Math.ceil(this.dataInitial.length/6);
      if(this.length == 0) this.length = 1;
    }, error=>{
      console.log("error");
    });
  }
  goToPage(event:any){
    this.index = event;
    const maxNum = (event+1)*6;
    const minNum = event*6;
    this.dataStudents = this.dataInitial.slice(minNum,maxNum);
    this.minRow=minNum+1;
    maxNum > this.totRows ? this.maxRow = this.totRows : this.maxRow = maxNum;
    this.cd.detectChanges();
  }
}
