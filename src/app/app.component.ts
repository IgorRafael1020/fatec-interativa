import { Component } from '@angular/core';
import { AuthService } from './core/guards/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fatecInterativa';

  ativarNavbar: boolean = true

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    // AuthService.habilitarNavbar.subscribe((resp: boolean) => this.ativarNavbar = resp);
  }
}
