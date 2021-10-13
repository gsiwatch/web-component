import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: 'gs-demo',
  styleUrl: './demo.component.scss',
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
        <a class="sprk-b-Link" href="#nogo">
          From Spark Class
        </a>
      </div>
    );
  }
}
