/// <reference path="../typings/jquery/jquery.d.ts" />
var JQueryDemo = (function () {
    function JQueryDemo(xId, yId, outputId) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('#' + outputId);
        this.wireEvents();
    }
    JQueryDemo.prototype.wireEvents = function () {
        var _this = this;
        $('#Add').click(function (event) {
            _this.output.html(_this.add(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
        $('#Subtract').click(function (event) {
            _this.output.html(_this.subtract(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
    };
    JQueryDemo.prototype.add = function (x, y) {
        return x + y;
    };
    JQueryDemo.prototype.subtract = function (x, y) {
        return x - y;
    };
    return JQueryDemo;
}());
$(document).ready(function () {
    var jQueryClass = new JQueryDemo('X', 'Y', 'Output');
});
//# sourceMappingURL=JQueryDemo.js.map