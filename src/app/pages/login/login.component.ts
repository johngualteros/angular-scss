import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  _isDark: boolean = localStorage.getItem('isDarkMode') === 'true';


  constructor(private modeService: ModeService) { 

  }

  ngOnInit(): void {
    this.getDarkMode();
  }

  setDarkMode(isDarkMode: boolean) {
    this.modeService.setDarkMode(isDarkMode);
    this.getDarkMode();
  }

  getDarkMode() {
    this.modeService.getDarkMode().subscribe((isDarkMode: boolean) => {
      this._isDark = isDarkMode;
    });
  }

}
