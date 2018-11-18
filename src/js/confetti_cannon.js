/* eslint-env browser */

import "confetti-js";

class ConfettiCannon extends HTMLElement {
  connectedCallback() {
    const canvas = this.querySelector("canvas");

    this.generator = new ConfettiGenerator({ target: canvas.getAttribute("id"), clock: 50 });

    document.addEventListener("fireCannon", this.fireCannon.bind(this));
    document.addEventListener("holdFire", this.holdFire.bind(this));
  }

  fireCannon() {
    this.generator.render();
  }

  holdFire() {
    this.generator.clear();
  }
}

window.customElements.define("confetti-cannon", ConfettiCannon);
