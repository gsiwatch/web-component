import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: 'gs-demo',
  styleUrl: './demo.component.scss',
  shadow: true,
})
export class DemoComponent {

  /**
   * Name property to provide name as title
   */
  @Prop() name: string;

  render() {
    return(
      <div class="demo">
        <p>{this.name}</p>
        <a class="sprk-b-Link sprk-b-Link--disabled" href="#nogo">
          Disabled Link
        </a>
      </div>
    );
  }
}
