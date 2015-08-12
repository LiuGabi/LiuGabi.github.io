var douban = {

    leaves: function(context, a, b, r, color, sawtoothCount, sawtoothHeight) {

        context.beginPath();

        context.save();

        context.moveTo(a + r, b);

        var angle = 360 / sawtoothCount;
        var PI = Math.PI;

        for(var j = 0; j < sawtoothCount; j++){

            inX = a + r * Math.cos((angle * j * PI) / 180);
            inY = b + r * Math.sin((angle * j * PI) / 180);

            context.lineTo(inX, inY);

            outX = a + (r + sawtoothHeight) * Math.cos(((angle * j + angle * 0.5) * PI) / 180);
            outY = b + (r + sawtoothHeight) * Math.sin(((angle * j + angle * 0.5) * PI) / 180);

            context.lineTo(outX,outY);

        }

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

        context.clearRect(0, 15, 120, 2);
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
    branches: function(context, offsetX, offsetY, offsetH, color, x, y) {

        var x1 = 0, y1 = 0,
            x2 = x1 + offsetX, y2 = y1 + offsetY,
            x3 = x2, y3 = y2 + offsetH; 

        context.save();

        context.beginPath();

        context.translate(x, y);

        context.moveTo(x1, x1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);

        context.fillStyle = color;

        context.fill();

        context.closePath();

        context.restore();

    },
    init: function(id) {

        var canvas = document.getElementById(id);


        if(canvas.getContext) {

            var context =  canvas.getContext("2d");

            this.faceplate(context, 100);

            this.trunk(context, 420, 244, 380, 8, "#365D4F");
            this.trunk(context, 420, 252, 380, 8, "#527A64");
            this.trunk(context, 420, 260, 380, 8, "#629278");

            // 树枝顺序从下往上，从左往右
            this.branches(context, 120, 20, 20, "#365D4F", 124, 520);
            this.branches(context, 80, 100, 20, "#365D4F", 164, 340);
            this.branches(context, -80, 100, 20, "#629278", 348, 370);
            this.branches(context, -100, 40, 20, "#527A64", 368, 460);
            this.branches(context, -100, -20, 20, "#527A64", 368, 580);

            // 叶子顺序从下往上，从左往右
            this.leaves(context, 140, 520, 50, "#365D4F", 18, 9);
            this.leaves(context, 180, 360, 40, "#365D4F", 16, 9);
            this.leaves(context, 254, 325, 60, "#3E9A72", 22, 10);
            this.leaves(context, 340, 380, 20, "#DEAE7D", 12, 6);
            this.leaves(context, 380, 460, 32, "#ACD08E", 14, 8);
            this.leaves(context, 370, 580, 36, "#77C1A3", 16, 8);

        }

    }

};