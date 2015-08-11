var douban = {

    circle: function(context, r) {

        // 画圆形路径
        context.beginPath();

        context.translate(r, r);

        context.arc(0, 0, r, 0, 2*Math.PI, false);

        context.closePath();

        context.fillStyle = "#3E9A72";
        context.fill();

    },
    faceplate: function(context, h) {

        var x1 = 200, y1 = 800,
            x2 = 200 + h / (Math.sin(1/3 * Math.PI)), y2 = 800,
            x3 =200 + h / (2*Math.sin(1/3 * Math.PI)), y3 = h + 800;

        context.beginPath();

        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);

        context.closePath();

        context.fillStyle = "#4C3D33";
        context.fill();

        context.clearRect(200, 815, 120, 1);
        context.clearRect(200, 860, 120, 40);

    },
    trunk: function(context, h, x, y, r, color) {

        context.beginPath();

        context.rect(x, y, r, h);

        context.closePath();

        context.fillStyle = color;
        context.fill();

    },
    leaves: function(context, r) {

    },
    init: function(id) {

        var canvas = document.getElementById(id);


        if(canvas.getContext) {

            var context =  canvas.getContext("2d");
            // this.circle(context, 50);

            this.faceplate(context, 100);
            this.trunk(context, 420, 244, 380, 8, "#365D4F");
            this.trunk(context, 420, 252, 380, 8, "#527A64");
            this.trunk(context, 420, 260, 380, 8, "#629278");

        }

    }

};