import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  _isDark: boolean = localStorage.getItem('isDarkMode') === 'true';


  constructor(private modeService: ModeService) { 

  }

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

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
