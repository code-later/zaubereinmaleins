/* eslint-env browser */
import "confetti-js";
import { dispatchEvent } from "uitil/dom/events";

const rangeOfTen = [...Array(10).keys()].map(x => parseInt(x));
const confettiCannon = new ConfettiGenerator({ target: "confettiCannon", clock: 50 });

const randomInt = (from, to) => {
  let min = Math.ceil(from);
  let max = Math.floor(to);

  return Math.floor(Math.random() * (from - to + 1)) + to;
};

class MagicCube extends HTMLElement {
  connectedCallback() {
    this.score = 0;
    this.form = document.createElement("form");
    this.appendChild(this.form);

    window.addEventListener("popstate", this.chooseGameMode.bind(this));
    this.addEventListener("cubeComplete", confettiCannon.render);
    this.addEventListener("cubeCorrectResult", this.countScore.bind(this));

    this.chooseGameMode();
  }

  chooseGameMode() {
    this.form.innerHTML = "";

    switch(this.gameMode) {
    case "vervollstaendigen" :
      this.completeTheCube();
      break;
    case "vorgaenger-und-nachfolger" :
      this.predecessorAndSuccessor();
      break;
    default:
      console.log("No game mode selected yet.");
    }
  }

  completeTheCube() {
    this.maxScore = 100;

    let rows = [];

    for (let row of rangeOfTen) {
      let cols = [];

      for (let col of rangeOfTen) {
        let value = (row * 10) + col + 1;

        cols.push(this.colTemplate(value));
      }

      rows.push(this.rowTemplate(cols));
    }

    rows.forEach((row) => {
      this.form.appendChild(row);
    });
  }

  predecessorAndSuccessor() {
    let rounds = 10;
    let rows = [];

    this.maxScore = rounds * 2;

    for (let i = 0; i < rounds; i++) {
      let cols = [];
      let hint = randomInt(2, 99);

      for (let value of [hint-1, hint, hint+1]) {
        cols.push(this.colTemplate(value, hint === value));
      }

      rows.push(this.rowTemplate(cols));
    }

    rows.forEach((row) => {
      this.form.appendChild(row);
    });
  }

  countScore(event) {
    this.score++;

    if (this.score === this.maxScore) {
      dispatchEvent(this, "cubeComplete", this.result);
      document.getElementById("congratulationsModal").classList.add("is-visible");
    }
  }

  rowTemplate(cols) {
    let row = document.createElement("div");
    row.classList.add("form-row", "mb-1");

    cols.forEach((col) => {
      row.appendChild(col);
    });

    return row;
  }

  colTemplate(result, disable) {
    let col = document.createElement("div");
    col.classList.add("col");

    let input = document.createElement("input", { is: "magic-cube-input" });
    input.classList.add("form-control", "form-control-lg");
    input.setAttribute("type", "text");
    input.setAttribute("data-result", result);
    input.setAttribute("is", "magic-cube-input");

    if (disable) {
      input.setAttribute("disabled", true);
      input.setAttribute("value", result);
    }

    col.appendChild(input);

    return col;
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
