var JavaScriptClass = (function () {
    function JavaScriptClass(xId, yId, outputid) {
        this.x = document.getElementById(xId);
        this.y = document.getElementById(yId);
        this.output = document.getElementById(outputid);
        this.wireEvents();
    }
    JavaScriptClass.prototype.wireEvents = function () {
        var _this = this;
        document.getElementById('Add').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.add(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
        document.getElementById('Subtract').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
    };
    JavaScriptClass.prototype.add = function (x, y) {
        return x + y;
    };
    JavaScriptClass.prototype.subtract = function (x, y) {
        return x - y;
    };
    return JavaScriptClass;
}());
window.onload = function () {
    var jsClass = new JavaScriptClass('X', 'Y', 'Output');
};
//# sourceMappingURL=JavaScriptDemo.js.map