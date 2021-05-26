import { Component, OnInit } from '@angular/core';
import { CovidApiService } from 'src/app/controllers/services/covid-api.service';
import { EChartsOption } from 'echarts';
import * as moment from 'moment';
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {
  constructor(
    public covidService: CovidApiService
  ) { }

  arrayCountries: any;

  arraydayOneLive: any;
  resultdayOneLive: any;

  chartOption: EChartsOption = {};

  ngOnInit(): void {
    this.covidService.getAll().subscribe(x => {
      this.arrayCountries = x;
    });
  }

  dayOneLive(country: undefined) {
    this.covidService.dayOneLive(country).subscribe(respost => {
      this.arraydayOneLive = respost;

      // Dados de Preenchimento
      let casesArray = [];
      let dateArray = [];

      for (const result of respost) {
        casesArray.push(result.Cases);
        let today = moment(result.Date).format('DD/MM/YYYY');
        dateArray.push(today);
      }

      this.chartOption = {
        xAxis: {
          type: 'category',
          data: dateArray,
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: casesArray,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      };

      this.resultdayOneLive = respost[respost.length - 1];
    });
  }
}
