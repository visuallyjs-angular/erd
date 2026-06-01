### Entity Relationship Diagram (ERD) Demo

This demo illustrates an ERD builder using VisuallyJS in an Angular application.

#### How it works

The ERD demo uses the `vjs-diagram` component to provide a specialized drawing surface for database schemas. It uses a palette of prepared shapes representing entities and their attributes.

#### Components Used

- `vjs-diagram`: The primary canvas for drawing the ERD.
- `vjs-diagram-palette`: Provides the available ERD shapes (Entity, Attribute, etc.).
- `vjs-controls`: Navigation and zoom controls.

#### Component Options

The `vjs-diagram` component is configured with `options` (of type `DiagramOptions`) which define:
- Shape definitions used in the diagram.
- Edge styling and behavior.
- Grid and snapping settings.

The `vjs-diagram-palette` uses `preparedShapes` to display a specific set of ERD-related symbols.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
