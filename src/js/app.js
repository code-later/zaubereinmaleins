/* eslint-env browser */
import "confetti-js";
import { dispatchEvent } from "uitil/dom/events";

const rangeOfTen = [...Array(10).keys()].map(x => parseInt(x));
const confettiCannon = new ConfettiGenerator({ target: "confettiCannon", clock: 50 });

class MagicCube extends HTMLElement {
  connectedCallback() {
    this.score = 0;

    window.addEventListener("popstate", this.chooseGameMode.bind(this));
    this.addEventListener("cubeComplete", confettiCannon.render);
    this.addEventListener("cubeCorrectResult", this.countScore.bind(this));

    this.chooseGameMode();
  }

  chooseGameMode() {
    switch(this.gameMode) {
    case "vervollstaendigen" :
      this.maxScore = 100;
      this.buildCubeInputs();
      break;
    default:
      console.log("No game mode selected yet.");
    }
  }

  buildCubeInputs() {
    let form = document.createElement("form");
    let rows = [];

    for (let row of rangeOfTen) {
      let cols = [];

      for (let col of rangeOfTen) {
        let value = (row * 10) + col + 1;

        cols.push(this.colTemplate(value));
      }

      rows.push(this.rowTemplate(cols));
    }

    form.innerHTML = rows.join("");
    this.appendChild(form);
  }

  countScore(event) {
    this.score++;

    if (this.score === this.maxScore) {
      dispatchEvent(this, "cubeComplete", this.result);
      document.getElementById("congratulationsModal").classList.add("is-visible");
    }
  }

  rowTemplate(cols) {
    return `
      <div class="form-row mb-1">
        ${cols.join("")}
      </div>
    `;
  }

  colTemplate(result) {
    return `
      <div class="col">
        <input type="text" class="form-control form-control-lg" data-result="${result}" is="magic-cube-input">
      </div>
    `;
  }

  get gameMode() {
    return document.location.hash.substr(1);
  }
}

class MagicCubeInput extends HTMLInputElement {
  connectedCallback() {
    this.addEventListener("blur", this.checkInput);
  }

  checkInput(event) {
    if (this.value === "") {
      this.classList.remove("is-invalid");
      return false;
    }

    if (parseInt(this.value) === this.result) {
      this.classList.add("is-valid");
      this.classList.remove("is-invalid");
      this.setAttribute("disabled", true);

      dispatchEvent(this.eventRoot, "cubeCorrectResult", this.result);
    } else {
      this.classList.add("is-invalid");
    }

    return true;
  }

  get eventRoot() {
    return this.closest("magic-cube");
  }

  get result() {
    return parseInt(this.getAttribute("data-result"));
  }
}

class ModalDialog extends HTMLElement {
  connectedCallback() {
    this.querySelectorAll("button[data-dismiss]").forEach((button) => {
      button.addEventListener("click", () => {
        this.classList.remove("is-visible");
        confettiCannon.clear();
      });
    });
  }
}

window.customElements.define("magic-cube", MagicCube);
window.customElements.define("magic-cube-input", MagicCubeInput, { extends: "input" });
window.customElements.define("modal-dialog", ModalDialog);
