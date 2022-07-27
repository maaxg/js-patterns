var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base prototype
var Shape = /** @class */ (function () {
    function Shape(source) {
        this.x = source.x;
        this.y = source.y;
        this.color = source.color;
    }
    return Shape;
}());
// Exmaple of concrete proptotype
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(source) {
        var _this = _super.call(this, source) || this;
        _this.width = source.width;
        _this.height = source.height;
        return _this;
    }
    Rectangle.prototype.clone = function () {
        return new Rectangle(this);
    };
    return Rectangle;
}(Shape));
// Another prototype example but now with cars
var Car = /** @class */ (function () {
    function Car(source) {
        this.doors = source.doors;
        this.engine = source.engine;
        this.color = source.color;
    }
    return Car;
}());
// Another concrete prototype example
var Civic = /** @class */ (function (_super) {
    __extends(Civic, _super);
    function Civic(source) {
        var _this = _super.call(this, source) || this;
        _this.autopilot = source.autopilot;
        return _this;
    }
    Civic.prototype.clone = function () {
        return new Civic(this);
    };
    return Civic;
}(Car));
var civic = new Civic({ autopilot: false, color: 'black', doors: 4, engine: 'V6' });
console.log('civic', civic);
var clonedCivic = civic.clone();
console.log('cloned', clonedCivic);
