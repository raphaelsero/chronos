import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NowPage } from '../now/now';

/**
 * Generated class for the EventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
  styles: [`
    chart {
        display: block;
        width: auto;
    }
`],
})
export class EventPage {
  options: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  ngAfterViewInit(){
    this.renderChart();
  }

  renderChart(){      
    this.options = {
      chart: {
            type: 'area',
        },
        title: {
            text: 'Free or Busy'
        },
        // subtitle: {
        //     text: '* Jane\'s banana consumption is unknown',
        //     floating: true,
        //     align: 'right',
        //     verticalAlign: 'bottom',
        //     y: 15
        // },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF'
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: 'Y-Axis',
                allowDecimals: false
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            }
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'John',
            data: [0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1]
        }, {
            name: 'Jane',
            data: [0, 0, 0, 0, 1, 0, 0, 1, null, null, null, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1]
        }]
    }
  }
  
  goToNow(){
    console.log('test');
    console.log(NowPage);
    this.navCtrl.push(NowPage);
  }
}
