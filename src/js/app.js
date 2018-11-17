/* eslint-env browser */

const rangeOfTen = [...Array(10).keys()].map(x => parseInt(x));

class MagicCube extends HTMLElement {
  connectedCallback() {
    let form = document.createElement("form");

    form.innerHTML = this.buildCubeInputs();
    this.appendChild(form);
  }

  buildCubeInputs() {
    let rows = [];

    for (let row of rangeOfTen) {
      let cols = [];

      for (let col of rangeOfTen) {
        let value = (row * 10) + col + 1;

        cols.push(this.colTemplate(value));
      }

      rows.push(this.rowTemplate(cols));
    }

    return rows.join("");
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
    } else {
      this.classList.add("is-invalid");
    }

    return true;
  }

  get result() {
    return parseInt(this.getAttribute("data-result"));
  }
}

window.customElements.define("magic-cube", MagicCube);
window.customElements.define("magic-cube-input", MagicCubeInput, { extends: "input" });
