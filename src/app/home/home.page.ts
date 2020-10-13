import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DolarService } from '../services/dolar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  isLoading;
  datalabels;
  data;
  graficoBar;
  dataBrute;
  
  constructor(private dolar: DolarService) {}

  ngOnInit(){
    this.dolar.getDolar().subscribe(res => { 
      this.isLoading = false;
      this.dataBrute = res.Dolares;
      this.datalabels = res.Dolares.map(item => String(item.Fecha).split('-'));
      this.data = res.Dolares.map(item => parseFloat(item.Valor));
      this.Graf();
    });
  }

  Graf(){
    this.graficoBar = new Chart('chart',{
      type: 'line',
      data: {
          labels: this.datalabels,
          datasets: [{
              label: 'Valor dolar',
              data: this.data,
              backgroundColor: [
                  'rgba(0, 186, 104, 1)'
              ],
              borderColor: [
                  'rgba(9, 188, 9, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false
                  }
              }]
          },
          legend: {
              display: true,
              labels: {
                  fontColor: 'rgb(255, 99, 132)'
              }
          } 
      }
  })

  }
  
}
