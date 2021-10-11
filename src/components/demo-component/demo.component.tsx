import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: 'gs-demo'
})
export class DemoComponent {

  /**
   * Name property to provide name as title
   */
  @Prop() name: string;

  render() {
    return(
      <h1>{this.name}</h1>
    );
  }
}
