import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'university';
  theme: string | undefined


  ngOnInit(): void {
    this.getTheme()
  }

  getTheme() {
    let theme = localStorage.getItem('theme');

    if (theme == null) {
      this.theme = 'dark';
      localStorage.setItem('theme', 'dark');
      document.body.classList.add(this.theme);
    } else {
      this.theme = theme
      document.body.classList.add(this.theme)
      // this.theme = localStorage.getItem('theme') || 'light';
    }

  }


  toggle(): void {
    let theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
    }
    window.location.reload();
  }
}
