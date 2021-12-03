import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-expenses-dashboard',
  templateUrl: './expenses-dashboard.component.html',
  styleUrls: ['./expenses-dashboard.component.scss']
})
export class ExpensesDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular';
 // view: any[];
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;

  view = [600, 400];
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Category';
  showYAxisLabel = true;
  yAxisLabel = 'Expenditure';
  timeline = true;
  doughnut = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  //pie
  showLabels = true;
  // data goes here
  public single = [
    {
      "name": "Sand",
      "value": 60000
    },
    {
      "name": "Wages",
      "value": 50000
    },
    {
      "name": "Cement",
      "value": 20000
    },
    {
      "name": "Plumbing",
      "value": 50000
    },
    {
      "name": "Food",
      "value": 20000
    },
    {
      "name": "Miscelleneous",
      "value": 7000
    }
  ];
  public multi = [
    {
      "name": "Sand",
      "series": [
        {
          "name": "June",
          "value": 2243772
        },
        {
          "name": "July",
          "value": 1227770
        }
      ]
    },
    {
      "name": "Wages",
      "series": [
        {
          "name": "June",
          "value": 1126000
        },
        {
          "name": "July",
          "value": 764666
        }
      ]
    },
    {
      "name": "Cement",
      "series": [
        {
          "name": "June",
          "value": 296215
        },
        {
          "name": "July",
          "value": 209122
        }
      ]
    },
    {
      "name": "Plumbing",
      "series": [
        {
          "name": "June",
          "value": 257363
        },
        {
          "name": "July",
          "value": 205350
        }
      ]
    },
    {
      "name": "Food",
      "series": [
        {
          "name": "June",
          "value": 196750
        },
        {
          "name": "July",
          "value": 129246
        }
      ]
    },
    {
      "name": "Miscelleneous",
      "series": [
        {
          "name": "June",
          "value": 204617
        },
        {
          "name": "July",
          "value": 149797
        }
      ]
    }
  ];
}
