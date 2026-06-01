import {Component} from '@angular/core';
import {VisuallyJsModule} from '@visuallyjs/browser-ui-angular';
import renderOptions from './render-options';
import {erdShapes} from './erd-shapes';
import {ERDInspector} from './inspector';

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule, ERDInspector],
  templateUrl: './app.html'
})
export class App {

  options = renderOptions
  preparedShapes = erdShapes

}
