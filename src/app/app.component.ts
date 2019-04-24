import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEANCRUD';

  hours:any='0' +0;
  seconds:any='0' +0;
  minutes:any='0' +0;
  
  running:any='';

  
  startTimer = () => {

    this.running = setInterval(() => {
      this.seconds++;
      if(this.seconds <= 9){
        this.seconds = '0' + this.seconds;
      }      
      if(this.seconds == 10) {
        this.minutes++;
        this.seconds='00';
        if(this.minutes <= 9){
          this.minutes = '0' + this.minutes;
        }
      }
      
      if(this.minutes == 2){
        this.hours++;
        this.minutes='0' + 0;
        this.seconds='0' + 0;

        if(this.hours <= 9){
        this.hours = '0' + this.hours;
        }
      }

    },1000);
  
  }
  
  pauseTimer = () => {
    this.seconds;
    this.minutes;
    this.hours;
    clearInterval(this.running);
    
  }

}
