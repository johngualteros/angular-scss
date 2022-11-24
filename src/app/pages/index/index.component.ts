import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  _isDark: any = localStorage.getItem('isDarkMode') === 'true';

  today= new Date();
  todaysDataTime = '';

  constructor(private modeService: ModeService) { 
    this.todaysDataTime = formatDate(this.today, 'hh:mm:ss a', 'en-US');

    setInterval(() => {
      this.today = new Date();
      this.todaysDataTime = formatDate(this.today, 'hh:mm:ss a', 'en-US');
    },1);
  }

  ngOnInit(): void {

    this.modeService.getDarkMode().subscribe((isDarkMode: boolean) => {
      this._isDark = isDarkMode;
    });
  }

}
