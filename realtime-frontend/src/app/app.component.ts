import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'realtime-frontend-app';
  dataLinks: any;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getDashboardServices();
  }

  getDashboardServices() {
    return this.appService.getDashboardUrl().subscribe((response) => {
      console.log(response);
      this.dataLinks = response
    });
  }
}
