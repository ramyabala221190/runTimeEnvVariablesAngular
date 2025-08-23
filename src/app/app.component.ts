import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'runTimeEnvVarAngular';

  ngOnInit(){
    console.log(environment.NG_APP_ENV,environment.NG_APP_VAR1,environment.NG_APP_VAR2)
  }
}
