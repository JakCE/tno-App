import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component'
import { LoginComponent } from './modules/login/login.component';
import { authGuard } from './guards/auth.guard';
import { EstudiantesComponent } from './modules/estudiantes/estudiantes.component';
import { DocentesComponent } from './modules/docentes/docentes.component';
import { ApoderadosComponent } from './modules/apoderados/apoderados.component';
import { GruposComponent } from './modules/grupos/grupos.component';
import { MatriculasComponent } from './modules/matriculas/matriculas.component';
import { LayoutDashComponent } from './components/layout-dash/layout-dash.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'app',
      component: DashboardComponent,
      canActivate: [authGuard],
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        //{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: LayoutDashComponent, canActivate: [authGuard] },
        { path: 'estudiantes', component: EstudiantesComponent, canActivate: [authGuard] },
        { path: 'docentes', component: DocentesComponent, canActivate: [authGuard] },
        { path: 'apoderados', component: ApoderadosComponent, canActivate: [authGuard] },
        { path: 'grupos', component: GruposComponent, canActivate: [authGuard] },
        { path: 'matriculas', component: MatriculasComponent, canActivate: [authGuard] },
      ]
    }
];
