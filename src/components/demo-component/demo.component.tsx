import { Component, Prop, h } from "@stencil/core";

export interface CompOption {
  value: string;
  displayText: string;
}
@Component({
  tag: 'gs-demo',
  styleUrl: './demo.component.scss',
  shadow: true,
})
export class DemoComponent {

  /**
   * This text which is shown as label
   */
  @Prop() label: string;

  /**
   * Is needed to reference the form data after the form is submitted
   */
  @Prop({ reflect: true }) name: string;

  /**
   * If true, the button is displayed as disabled
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Define the available options in the drop-down list
   */
  @Prop() options: CompOption[] = []

  render() {
    return (
      <div>
        <label htmlFor={this.name}>{this.label}</label>

        <select name={this.name} id={this.name} disabled={this.disabled}>
          {this.options.map(o => (
            <option value={o.value}>{o.displayText}</option>
          ))}
        </select>
      </div>
    );
  }
}
