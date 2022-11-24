import { Component, OnInit } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-section3-index',
  templateUrl: './section3-index.component.html',
  styleUrls: ['./section3-index.component.scss']
})
export class Section3IndexComponent implements OnInit {

  _isDark: any = localStorage.getItem('isDarkMode') === 'true';

  constructor(private modeService: ModeService) { 
  }

  ngOnInit(): void {

    this.modeService.getDarkMode().subscribe((isDarkMode: boolean) => {
      this._isDark = isDarkMode;
    });
  }

}
