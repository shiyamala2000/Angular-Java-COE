import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  constructor(private route: ActivatedRoute) {}

  shouldShowContent(): boolean {
    const currentRoute = this.route.snapshot.firstChild?.routeConfig?.path;
  
    if (currentRoute === undefined) {
      return true; // Show content if the route is undefined
    } else {
      const excludedRoutes = ['', 'home', 'microserviceView', 'microserviceCamundaView'];
      return !excludedRoutes.includes(currentRoute);
    }
  }
  
  isToggled = false;

  closeSidebar(): void {
    this.isToggled = false;
  }

  showSidebar(): void {
    this.isToggled = true;
  }
  
}

