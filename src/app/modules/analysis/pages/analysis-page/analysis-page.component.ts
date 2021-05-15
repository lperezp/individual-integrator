import { Component, OnInit } from '@angular/core';

import { LoggerInterface } from 'src/app/models/logger.model';
import { LoggerService } from 'src/app/shared/service/logger.service';

@Component({
  selector: 'app-analysis-page',
  templateUrl: './analysis-page.component.html',
  styleUrls: ['./analysis-page.component.scss'],
})
export class AnalysisPageComponent implements OnInit {
  listData: LoggerInterface[] = [];
  listDataHour: LoggerInterface[] = [];
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.getLogger();
  }

  async getLogger() {
    this.listData = await this.loggerService.getLogger().toPromise();
    const date = new Date();
    const hour = date.getHours();

    this.listData.forEach((element) => {
      element.date = new Date(element.date);
    });

    this.listDataHour = this.listData.filter((x) => x.date.getHours() === hour);
  }
}
