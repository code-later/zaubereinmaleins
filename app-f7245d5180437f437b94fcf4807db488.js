(function(){'use strict';if(typeof global === "undefined" && typeof window !== "undefined") {
	window.global = window;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}window.ConfettiGenerator = function (params) {
  var appstate = {
    target: 'confetti-holder',
    max: 80,
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
    clock: 25,
    interval: null,
    rotate: false,
    width: window.innerWidth,
    height: window.innerHeight
  };
  if (params) {
    if (params.target) appstate.target = params.target;
    if (params.max) appstate.max = params.max;
    if (params.size) appstate.size = params.size;
    if (params.animate !== undefined && params.animate !== null) appstate.animate = params.animate;
    if (params.props) appstate.props = params.props;
    if (params.colors) appstate.colors = params.colors;
    if (params.clock) appstate.clock = params.clock;
    if (params.width) appstate.width = params.width;
    if (params.height) appstate.height = params.height;
    if (params.rotate !== undefined && params.rotate !== null) appstate.rotate = params.rotate;
  }
  var cv = document.getElementById(appstate.target);
  var ctx = cv.getContext("2d");
  var particles = [];
  function rand(limit, floor) {
    if (!limit) limit = 1;
    var rand = Math.random() * limit;
    return !floor ? rand : Math.floor(rand);
  }
  var totalWeight = appstate.props.reduce(function (weight, prop) {
    return weight + (prop.weight || 1);
  }, 0);
  function selectProp() {
    var rand = Math.random() * totalWeight;
    for (var i = 0; i < appstate.props.length; ++i) {
      var weight = appstate.props[i].weight || 1;
      if (rand < weight) return i;
      rand -= weight;
    }
  }
  function particleFactory() {
    var prop = appstate.props[selectProp()];
    var p = {
      prop: prop.type ? prop.type : prop,
      x: rand(appstate.width),
      y: rand(appstate.height),
      src: prop.src,
      radius: rand(4) + 1,
      size: prop.size,
      rotate: appstate.rotate,
      line: Math.floor(rand(65) - 30),
      angles: [rand(10, true) + 2, rand(10, true) + 2, rand(10, true) + 2, rand(10, true) + 2],
      color: appstate.colors[rand(appstate.colors.length, true)],
      rotation: rand(360, true) * Math.PI / 180,
      speed: rand(appstate.clock / 7) + appstate.clock / 30
    };
    return p;
  }
  function particleDraw(p) {
    var op = p.radius <= 3 ? 0.4 : 0.8;
    ctx.fillStyle = ctx.strokeStyle = "rgba(" + p.color + ", " + op + ")";
    ctx.beginPath();
    switch (p.prop) {
      case 'circle':
        {
          ctx.moveTo(p.x, p.y);
          ctx.arc(p.x, p.y, p.radius * appstate.size, 0, Math.PI * 2, true);
          ctx.fill();
          break;
        }
      case 'triangle':
        {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.angles[0] * appstate.size, p.y + p.angles[1] * appstate.size);
          ctx.lineTo(p.x + p.angles[2] * appstate.size, p.y + p.angles[3] * appstate.size);
          ctx.closePath();
          ctx.fill();
          break;
        }
      case 'line':
        {
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.line * appstate.size, p.y + p.radius * 5);
          ctx.lineWidth = 2 * appstate.size;
          ctx.stroke();
          break;
        }
      case 'square':
        {
          ctx.save();
          ctx.translate(p.x + 15, p.y + 5);
          ctx.rotate(p.rotation);
          ctx.fillRect(-15 * appstate.size, -5 * appstate.size, 15 * appstate.size, 5 * appstate.size);
          ctx.restore();
          break;
        }
      case 'svg':
        {
          ctx.save();
          var image = new Image();
          image.src = p.src;
          var size = p.size || 15;
          ctx.translate(p.x + size / 2, p.y + size / 2);
          if (p.rotate) ctx.rotate(p.rotation);
          ctx.drawImage(image, -(size / 2) * appstate.size, -(size / 2) * appstate.size, size * appstate.size, size * appstate.size);
          ctx.restore();
          break;
        }
    }
  }
  var _clear = function _clear() {
    appstate.animate = false;
    clearInterval(appstate.interval);
    requestAnimationFrame(function () {
      ctx.clearRect(0, 0, cv.width, cv.height);
      var w = cv.width;
      cv.width = 1;
      cv.width = w;
    });
  };
  var _render = function _render() {
    cv.width = appstate.width;
    cv.height = appstate.height;
    particles = [];
    for (var i = 0; i < appstate.max; i++) {
      particles.push(particleFactory());
    }
    function draw() {
      ctx.clearRect(0, 0, appstate.width, appstate.height);
      for (var i in particles) {
        particleDraw(particles[i]);
      }
      update();
      if (appstate.animate) requestAnimationFrame(draw);
    }
    function update() {
      for (var i = 0; i < appstate.max; i++) {
        var p = particles[i];
        if (appstate.animate) p.y += p.speed;
        if (p.rotate) p.rotation += p.speed / 35;
        if (p.speed >= 0 && p.y > appstate.height || p.speed < 0 && p.y < 0) {
          particles[i] = p;
          particles[i].x = rand(appstate.width, true);
          particles[i].y = p.speed >= 0 ? -10 : parseFloat(appstate.height);
        }
      }
    }
    return requestAnimationFrame(draw);
  };
  return {
    render: _render,
    clear: _clear
  };
};var ConfettiCannon =
function (_HTMLElement) {
  _inherits(ConfettiCannon, _HTMLElement);
  function ConfettiCannon() {
    _classCallCheck(this, ConfettiCannon);
    return _possibleConstructorReturn(this, _getPrototypeOf(ConfettiCannon).apply(this, arguments));
  }
  _createClass(ConfettiCannon, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var canvas = this.querySelector("canvas");
      this.generator = new ConfettiGenerator({
        target: canvas.getAttribute("id"),
        clock: 50
      });
      document.addEventListener("fireCannon", this.fireCannon.bind(this));
      document.addEventListener("holdFire", this.holdFire.bind(this));
    }
  }, {
    key: "fireCannon",
    value: function fireCannon() {
      this.generator.render();
    }
  }, {
    key: "holdFire",
    value: function holdFire() {
      this.generator.clear();
    }
  }]);
  return ConfettiCannon;
}(_wrapNativeSuper(HTMLElement));
window.customElements.define("confetti-cannon", ConfettiCannon);function dispatchEvent(emitter, name, payload) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (payload) {
    options.detail = payload;
  }
  var ev = new CustomEvent(name, options);
  emitter.dispatchEvent(ev);
}var rangeOfTen = _toConsumableArray(Array(10).keys()).map(function (x) {
  return parseInt(x);
});
var randomInt = function randomInt(from, to) {
  return Math.floor(Math.random() * (from - to + 1)) + to;
};
var fieldOps = {
  left: function left(x) {
    return x - 1;
  },
  upperLeft: function upperLeft(x) {
    return x - 11;
  },
  up: function up(x) {
    return x - 10;
  },
  upperRight: function upperRight(x) {
    return x - 9;
  },
  right: function right(x) {
    return x + 1;
  },
  downRight: function downRight(x) {
    return x + 11;
  },
  down: function down(x) {
    return x + 10;
  },
  downLeft: function downLeft(x) {
    return x + 9;
  }
};
var MagicCube =
function (_HTMLElement) {
  _inherits(MagicCube, _HTMLElement);
  function MagicCube() {
    _classCallCheck(this, MagicCube);
    return _possibleConstructorReturn(this, _getPrototypeOf(MagicCube).apply(this, arguments));
  }
  _createClass(MagicCube, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.form = document.createElement("form");
      this.appendChild(this.form);
      window.addEventListener("popstate", this.chooseGameMode.bind(this));
      document.addEventListener("cubeRestart", this.chooseGameMode.bind(this));
      document.addEventListener("cubeCorrectResult", this.countScore.bind(this));
      this.chooseGameMode();
    }
  }, {
    key: "cubeCompleted",
    value: function cubeCompleted() {
      dispatchEvent(document, "fireCannon");
    }
  }, {
    key: "chooseGameMode",
    value: function chooseGameMode() {
      this.score = 0;
      this.form.innerHTML = "";
      switch (this.gameMode) {
        case "vervollstaendigen":
          this.completeTheCube();
          break;
        case "vorgaenger-und-nachfolger":
          this.predecessorAndSuccessor();
          break;
        case "ausschnitte":
          this.segments();
          break;
        case "wo-kommst-du-an":
          this.pathFinder();
          break;
        default:
          console.log("No game mode selected yet.");
      }
    }
  }, {
    key: "completeTheCube",
    value: function completeTheCube() {
      var _this = this;
      this.maxScore = 100;
      var rows = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;
      try {
        for (var _iterator = rangeOfTen[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;
          var cols = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;
          try {
            for (var _iterator2 = rangeOfTen[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var col = _step2.value;
              var value = row * 10 + col + 1;
              cols.push(this.colTemplate(value));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
          rows.push(this.rowTemplate(cols));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      rows.forEach(function (row) {
        _this.form.appendChild(row);
      });
    }
  }, {
    key: "predecessorAndSuccessor",
    value: function predecessorAndSuccessor() {
      var _this2 = this;
      var rounds = 10;
      var rows = [];
      this.maxScore = rounds * 2;
      for (var i = 0; i < rounds; i++) {
        var cols = [];
        var hint = randomInt(2, 99);
        var _arr = [hint - 1, hint, hint + 1];
        for (var _i = 0; _i < _arr.length; _i++) {
          var value = _arr[_i];
          cols.push(this.colTemplate(value, hint === value));
        }
        rows.push(this.rowTemplate(cols));
      }
      rows.forEach(function (row) {
        _this2.form.appendChild(row);
      });
    }
  }, {
    key: "segments",
    value: function segments() {
      var _this3 = this;
      var hint = randomInt(2, 99);
      var currentField = hint;
      var fields = randomInt(5, 12);
      var visitedFields = [hint];
      this.maxScore = fields;
      var rows = [];
      for (var i = 0; i < fields; i++) {
        var _this$nextField = this.nextField(currentField, visitedFields),
            _this$nextField2 = _slicedToArray(_this$nextField, 2),
            nextField = _this$nextField2[0],
            _direction = _this$nextField2[1];
        visitedFields.push(nextField);
        currentField = nextField;
      }
      for (var row in rangeOfTen) {
        var cols = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;
        try {
          for (var _iterator3 = rangeOfTen[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var col = _step3.value;
            var value = row * 10 + col + 1;
            cols.push(this.colTemplate(value, value === hint, !visitedFields.includes(value)));
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
        rows.push(this.rowTemplate(cols));
      }
      rows.forEach(function (row) {
        _this3.form.appendChild(row);
      });
    }
  }, {
    key: "pathFinder",
    value: function pathFinder() {
      var _this4 = this;
      this.maxScore = 10;
      var rows = [];
      for (var row in rangeOfTen) {
        var cols = [];
        var hint = randomInt(2, 99);
        var currentField = hint;
        var visitedFields = [hint];
        cols.push(this.colTemplate(hint, true));
        for (var i = 0; i < 8; i++) {
          var _this$nextField3 = this.nextField(currentField, visitedFields, true),
              _this$nextField4 = _slicedToArray(_this$nextField3, 2),
              nextField = _this$nextField4[0],
              direction = _this$nextField4[1];
          if (!nextField) {
            break;
          }
          visitedFields.push(nextField);
          currentField = nextField;
          var arrow = document.createElement("span");
          arrow.innerHTML = "&".concat(direction, "arrow;");
          cols.push(this.colTemplate(arrow.innerHTML, true));
        }
        cols.push(this.colTemplate(currentField));
        rows.push(this.rowTemplate(cols));
      }
      rows.forEach(function (row) {
        _this4.form.appendChild(row);
      });
    }
  }, {
    key: "nextField",
    value: function nextField(field, visitedFields, simple) {
      var directions = new Map();
      directions.set("left");
      directions.set("up");
      directions.set("right");
      directions.set("down");
      if (!simple) {
        directions.set("upperLeft");
        directions.set("upperRight");
        directions.set("downRight");
        directions.set("downLeft");
      }
      if (field % 10 === 1) {
        directions.delete("left");
        directions.delete("upperLeft");
        directions.delete("downLeft");
      }
      if (field >= 1 && field <= 10) {
        directions.delete("up");
        directions.delete("upperLeft");
        directions.delete("upperRight");
      }
      if (field % 10 === 0) {
        directions.delete("right");
        directions.delete("upperRight");
        directions.delete("downRight");
      }
      if (field >= 91 && field <= 100) {
        directions.delete("down");
        directions.delete("downLeft");
        directions.delete("downRight");
      }
      var canditates = Array.from(directions.keys()).map(function (dir) {
        return [fieldOps[dir](field), dir];
      }).filter(function (valAndDir) {
        return !visitedFields.includes(valAndDir[0]);
      });
      return canditates[randomInt(0, canditates.length - 1)] || [false, false];
    }
  }, {
    key: "countScore",
    value: function countScore(event) {
      this.score++;
      if (this.score >= this.maxScore) {
        this.cubeCompleted();
      }
    }
  }, {
    key: "rowTemplate",
    value: function rowTemplate(cols) {
      var row = document.createElement("div");
      row.classList.add("form-row", "mb-1");
      cols.forEach(function (col) {
        row.appendChild(col);
      });
      return row;
    }
  }, {
    key: "colTemplate",
    value: function colTemplate(result, disable, hidden) {
      var col = document.createElement("div");
      col.classList.add("col");
      var input = document.createElement("input", {
        is: "magic-cube-input"
      });
      input.classList.add("form-control", "form-control-lg");
      input.setAttribute("type", "text");
      input.setAttribute("data-expected-result", result);
      input.setAttribute("is", "magic-cube-input");
      if (disable) {
        input.setAttribute("disabled", true);
        input.setAttribute("value", result);
      }
      if (hidden) {
        input.classList.add("is-hidden");
      }
      col.appendChild(input);
      return col;
    }
  }, {
    key: "gameMode",
    get: function get() {
      return document.location.hash.substr(1);
    }
  }]);
  return MagicCube;
}(_wrapNativeSuper(HTMLElement));
var MagicCubeInput =
function (_HTMLInputElement) {
  _inherits(MagicCubeInput, _HTMLInputElement);
  function MagicCubeInput() {
    _classCallCheck(this, MagicCubeInput);
    return _possibleConstructorReturn(this, _getPrototypeOf(MagicCubeInput).apply(this, arguments));
  }
  _createClass(MagicCubeInput, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.addEventListener("blur", this.checkInput.bind(this));
      this.expectedResult = parseInt(this.getAttribute("data-expected-result"));
    }
  }, {
    key: "checkInput",
    value: function checkInput(event) {
      if (this.value === "") {
        this.classList.remove("is-invalid");
        return false;
      }
      if (parseInt(this.value) === this.expectedResult) {
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        this.setAttribute("disabled", true);
        dispatchEvent(document, "cubeCorrectResult", this.result);
      } else {
        this.classList.add("is-invalid");
      }
      return true;
    }
  }]);
  return MagicCubeInput;
}(_wrapNativeSuper(HTMLInputElement));
window.customElements.define("magic-cube", MagicCube);
window.customElements.define("magic-cube-input", MagicCubeInput, {
  extends: "input"
});var ModalDialog =
function (_HTMLElement) {
  _inherits(ModalDialog, _HTMLElement);
  function ModalDialog() {
    _classCallCheck(this, ModalDialog);
    return _possibleConstructorReturn(this, _getPrototypeOf(ModalDialog).apply(this, arguments));
  }
  _createClass(ModalDialog, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var closeButton = this.querySelector("button[data-dismiss]");
      var newRoundButton = this.querySelector(".btn-primary");
      document.addEventListener("fireCannon", this.show.bind(this));
      closeButton.addEventListener("click", this.close.bind(this));
      newRoundButton.addEventListener("click", this.newRound.bind(this));
    }
  }, {
    key: "show",
    value: function show() {
      this.classList.add("is-visible");
    }
  }, {
    key: "close",
    value: function close() {
      this.classList.remove("is-visible");
      dispatchEvent(document, "holdFire");
    }
  }, {
    key: "newRound",
    value: function newRound() {
      this.classList.remove("is-visible");
      dispatchEvent(document, "holdFire");
      dispatchEvent(document, "cubeRestart");
    }
  }]);
  return ModalDialog;
}(_wrapNativeSuper(HTMLElement));
window.customElements.define("modal-dialog", ModalDialog);}());