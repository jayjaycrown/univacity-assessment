import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [NgbAccordionModule, RouterModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  constructor(
    private router: Router
  ) { }


  navigate(data: any) {
    // console.log(data)
    this.router.navigateByUrl('/programs/' + data)
  }
}
