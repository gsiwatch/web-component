import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: 'gs-demo',
  styles: `
    .demo {
      font-size: 64px;
      background-color: orange;
    }
  `,
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
      </div>
    );
  }
}
