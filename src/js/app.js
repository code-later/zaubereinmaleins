/* eslint-env browser */

const rangeOfTen = [...Array(10).keys()].map(x => parseInt(x));

class ZauberMini extends HTMLElement {
  connectedCallback() {
    this.cube = [];

    let form = document.createElement("form");

    form.innerHTML = this.buildCubeInputs();
    this.appendChild(form);
  }

  buildCubeInputs() {
    let rows = [];

    for (let row of rangeOfTen) {
      let cols = [];

      this.cube.push([]);

      for (let col of rangeOfTen) {
        let value = (row * 10) + col + 1;

        this.cube[this.cube.length - 1].push(value);
        cols.push(this.colTemplate(row, col));
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

  colTemplate(x, y) {
    return `
      <div class="col">
        <input type="text" class="form-control form-control-lg" id="cell_${x}_${y}">
      </div>
    `;
  }
}

window.customElements.define("zauber-mini", ZauberMini);
