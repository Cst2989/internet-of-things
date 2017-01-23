import {
  ChangeDetectorRef,
  Component,
  Input,
  NgModule,
  Pipe,
  PipeTransform,
  CUSTOM_ELEMENTS_SCHEMA
}                        from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OnsenModule } from 'angular2-onsenui';
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
    OnsenModule
  ],
  declarations: [
    OtherComponent,
    ExampleComponent,
  ],
  providers: [],
  bootstrap: [
    ExampleComponent
],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
