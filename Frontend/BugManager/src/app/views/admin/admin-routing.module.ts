import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugsComponent } from 'src/app/components/admin/bugs/bugs.component';
import { ClassicImportComponent } from 'src/app/components/admin/classic-import/classic-import.component';
import { CreateUserComponent } from 'src/app/components/admin/create-user/create-user.component';
import { DevsScoreboardComponent } from 'src/app/components/admin/devs-scoreboard/devs-scoreboard.component';
import { ProjectsComponent } from 'src/app/components/admin/projects/projects.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'bugs'
      },
      {
        path: 'bugs',
        component: BugsComponent
      },
      {
        path: 'add-user',
        component: CreateUserComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'devs-scoreboard',
        component: DevsScoreboardComponent
      },
      {
        path: 'bug-import-classic',
        component: ClassicImportComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
