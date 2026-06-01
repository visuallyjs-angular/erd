import {InspectorComponent, VisuallyJsModule} from '@visuallyjs/browser-ui-angular';
import {Component} from '@angular/core';
import {PROPERTY_FILL, PROPERTY_LABEL, PROPERTY_OUTLINE} from './constants';

@Component({
  selector:"erd-inspector",
  imports:[VisuallyJsModule],
  template:`<div class="vjs-erd-inspector">

    @if(currentObjectType === "Node") {
      <div class="vjs-inspector-section">
        <div>Label</div>
        <input type="text" vjs-att="label" vjs-focus="true"/>
      </div>

      <div class="vjs-inspector-section">
        <div>Type: {{currentType}}</div>
      </div>

      <div class="vjs-inspector-section">
        <div>Fill Color</div>
        <vjs-color propertyName="fill"/>
      </div>

      <div class="vjs-inspector-section">
        <div>Outline Color</div>
        <vjs-color propertyName="outline"/>
      </div>
    }

    @if(currentObjectType === "Edge") {
      <div class="vjs-inspector-section">
        <div>Markers</div>
        <vjs-edge-type propertyName="type"/>
      </div>
    }
  </div>`
})
export class ERDInspector extends InspectorComponent {
}
