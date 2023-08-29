import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MicroserviceViewComponent } from './microservice-view/microservice-view.component';
import { MicroserviceCamundaViewComponent } from './microservice-camunda-view/microservice-camunda-view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: SidebarComponent,
    children: [
      {path: 'home',component:HomeComponent},
      { path: 'microserviceView', component: MicroserviceViewComponent },
      { path: 'microserviceCamundaView', component: MicroserviceCamundaViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
