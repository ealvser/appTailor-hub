import { Component } from '@angular/core';
import { ApijobsService } from '../../services/apijobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newjobs: any[] = [];

  constructor(private jobs: ApijobsService) {
    this.jobs.getJobs('/positions.json?utf8=%E2%9C%93&description=&location=&page=')
      .subscribe((data:any) =>{
        this.newjobs = data;
        console.log(this.newjobs);

      });
    }
}
