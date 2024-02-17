import { Component, OnInit } from '@angular/core';
import { BarTopComponent } from '../../components/bar-top/bar-top.component';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import { ApiService } from '../../services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { LayoutDashComponent } from '../../components/layout-dash/layout-dash.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BarTopComponent, NavMenuComponent, HttpClientModule, RouterOutlet, LayoutDashComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  constructor(
    
  ) {}

  ngOnInit() {
    
  }
}
