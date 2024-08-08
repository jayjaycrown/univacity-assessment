import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [NgbAccordionModule, RouterModule, NgxSliderModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  minValue: number = 5000;
  maxValue: number = 58000;
  options: Options = {
    floor: 0,
    ceil: 70000
  };
  constructor(
    private router: Router
  ) { }


  navigate(data: any) {
    // console.log(data)
    this.router.navigateByUrl('/programs/' + data)
  }
}
