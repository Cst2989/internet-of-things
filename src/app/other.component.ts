import { Paho } from 'ng2-mqtt/mqttws31';

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
  template: `
    <h1>AIci</h1>
  `
})

export class OtherComponent {
  private _client: Paho.MQTT.Client;

  public constructor() {
    this._client = new Paho.MQTT.Client("m20.cloudmqtt.com", 39338, "web_123322");

    this._client.onConnectionLost = (responseObject: Object) => {
      console.log('Connection lost.');
    };

    this._client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log('Message arrived.');
    };

    this._client.connect(
      {
        useSSL: true,
        userName: "qdcaxgqc",
        password: "eQurLLKpesr9",
        onSuccess: this.onConnected.bind(this)
      });
  }

  private onConnected(): void {
    console.log('Connected to broker.');
  }
}
