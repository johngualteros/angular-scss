import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDark: boolean = localStorage.getItem('isDarkMode') === 'true';


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
      this.isDark = isDarkMode;
    });
  }

}
