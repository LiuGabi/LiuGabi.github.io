var douban = {

    circle: function(context, x, y, r, color) {

        // 画圆形路径
        context.save();

        context.beginPath();

        context.translate(x, y);

        context.arc(0, 0, r, 0, 2*Math.PI, false);

        context.fillStyle = color;
        context.fill();

        context.closePath();

        context.restore();


    },
    faceplate: function(context, h) {

        var x1 = 0, y1 = 0,
            x2 = 0 + h / (Math.sin(1/3 * Math.PI)), y2 = 0,
            x3 =0 + h / (2*Math.sin(1/3 * Math.PI)), y3 = h;

        context.save();

        context.beginPath();

        context.translate(200, 800);

        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);

        context.fillStyle = "#4C3D33";
        context.fill();

        context.clearRect(0, 15, 120, 1);
        context.clearRect(0, 60, 120, 40);

        context.closePath();

        context.restore();


    },
    trunk: function(context, h, x, y, w, color) {

        context.save();

        context.beginPath();

        context.translate(x, y);

        context.rect(0, 0, w, h);

        context.fillStyle = color;
        context.fill();

        context.closePath();

        context.restore();

    },
    leaves: function(context, r) {

    },
    init: function(id) {

        var canvas = document.getElementById(id);


        if(canvas.getContext) {

            var context =  canvas.getContext("2d");

            this.faceplate(context, 100);
            this.trunk(context, 420, 244, 380, 8, "#365D4F");
            this.trunk(context, 420, 252, 380, 8, "#527A64");
            this.trunk(context, 420, 260, 380, 8, "#629278");
            this.circle(context, 244, 380, 60, "#3E9A72");

        }

    }

};