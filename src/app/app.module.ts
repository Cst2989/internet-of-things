import {
  ChangeDetectorRef,
  Component,
  Input,
  NgModule,
  Pipe,
  PipeTransform
}                        from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OtherComponent} from './other.component'

@Component({
  selector: 'app-root',
  template: `
    <other-mqtt></other-mqtt>
  `
})
export class ExampleComponent {

}

export const MQTT_SERVICE_OPTIONS = {
  hostname: 'm20.cloudmqtt.com',
  port: 39338,
  useSSL: true,
  userName: "qdcaxgqc",
  password: "eQurLLKpesr9",
  path: '',
  protocol: "mqtt"
};



@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    OtherComponent,
    ExampleComponent,
  ],
  providers: [],
  bootstrap: [
    ExampleComponent
  ]
})

export class AppModule { }
