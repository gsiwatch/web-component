import { Component, h } from "@stencil/core";

@Component({
  tag: 'rma-svg',
})
export class SvgComponent {
  render() {
    return(
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="20" stroke="purple" stroke-width="4" fill="yellow" />
      </svg>
    )
  }
}
