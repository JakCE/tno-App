import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-top',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './bar-top.component.html',
  styleUrl: './bar-top.component.css'
})
export class BarTopComponent {

}
