import { Component } from '@angular/core';

import {
  MqttMessage,
  MqttModule,
  MqttService
}                        from 'angular2-mqtt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

}
