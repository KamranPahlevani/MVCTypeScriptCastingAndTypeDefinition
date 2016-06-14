/// <reference path="../typings/jquery/jquery.d.ts" />

class JQueryDemo {
    private x: JQuery;
    private y: JQuery;
    private output: JQuery;

    constructor(xId: string, yId: string, outputId: string) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('#' + outputId);
        this.wireEvents();
    }

    private wireEvents() {
        $('#Add').click(
            event => {
                this.output.html(this.add(parseInt(this.x.val()), parseInt(this.y.val())).toString());
            }
        );

        $('#Subtract').click(
            event => {
                this.output.html(this.subtract(parseInt(this.x.val()), parseInt(this.y.val())).toString());
            }
        )
    }

    add(x: number, y: number) {
        return x + y;
    }

    subtract(x: number, y: number) {
        return x - y;
    }
}

$(document).ready(function () {
    var jQueryClass = new JQueryDemo('X', 'Y', 'Output');
});