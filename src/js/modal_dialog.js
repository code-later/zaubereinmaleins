/* eslint-env browser */
import { dispatchEvent } from "uitil/dom/events";

class ModalDialog extends HTMLElement {
  connectedCallback() {
    const closeButton = this.querySelector("button[data-dismiss]");
    const newRoundButton = this.querySelector(".btn-primary");

    document.addEventListener("fireCannon", this.show.bind(this));
    closeButton.addEventListener("click", this.close.bind(this));
    newRoundButton.addEventListener("click", this.newRound.bind(this));
  }

  show() {
    this.classList.add("is-visible");
  }

  close() {
    this.classList.remove("is-visible");
    dispatchEvent(document, "holdFire");
  }

  newRound() {
    this.classList.remove("is-visible");
    dispatchEvent(document, "holdFire");
    dispatchEvent(document, "cubeRestart");
  }
}

window.customElements.define("modal-dialog", ModalDialog);
