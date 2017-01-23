import { Paho } from 'ng2-mqtt/mqttws31';
import {OnsenModule} from 'angular2-onsenui';

import {
  ChangeDetectorRef,
  Component,
  Input,
  NgModule,
  Pipe,
  OnInit,
  PipeTransform
}           from '@angular/core';

@Component({
  selector: 'other-mqtt',
  templateUrl: './other.component.html',
})

export class OtherComponent {
  private _client: Paho.MQTT.Client;
  public target: boolean = true;
  public constructor() {
    this._client = new Paho.MQTT.Client("funieru252.zapto.org", 10000,"/", "A75BDC00-9876-470B-85F6-1");

    this._client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost.');
    };

    this._client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log('Message arrived.');
    };

    this._client.connect(
      {
        userName: "iot",
        password: "iot",
        onSuccess: this.onConnected.bind(this)
      });
  }

  private onConnected(): void {
    console.log('Connected to broker.');

    this._client.subscribe('/IoTmanager/+/config', {qos: 1});
    this._client.subscribe('/IoTmanager/+/+/status', {qos: 1});
    this._client.subscribe('/IoTmanager/+/response', {qos: 1});

  }

  public doSomething(widget): void {
      console.log(widget)
  }
}
