var sel, fr;
$(function() {
    $('#canvas').hide();
    try {
        sel = document.getElementById('fileselect'); // get reference to file select input element
        window.addEventListener("DOMContentLoaded", function() {
            // Grab elements, create settings, etc.
            var canvas = document.getElementById("canvas"),
                context = canvas.getContext("2d"),
                video = document.getElementById("video"),
                videoObj = {
                    "video": true
                },
                errBack = function(error) {
                    if (error.PERMISSION_DENIED) {
                        jAlert('用户拒绝了浏览器请求媒体的权限', '提示');
                    } else if (error.NOT_SUPPORTED_ERROR) {
                        jAlert('对不起，您的浏览器不支持拍照功能，请使用其他浏览器', '提示');
                    } else if (error.MANDATORY_UNSATISFIED_ERROR) {
                        jAlert('指定的媒体类型未接收到媒体流', '提示');
                    } else {
                        jAlert('系统未能获取到摄像头，请确保摄像头已正确安装。或尝试刷新页面，重试', '提示');
                    }
                };
            var message = "为了获得更准确的测试结果，请尽量将面部置于红框中，然后进行拍摄、扫描。 点击“OK”后，请在屏幕上方出现的提示框选择“允许”，以开启摄像功能";
            // Put video listeners into place
            if (navigator.getUserMedia) { // Standard
                if (navigator.userAgent.indexOf('MQQBrowser') > -1) {
                    jAlert('对不起，您的浏览器不支持拍照功能，请使用其他浏览器', '提示');
                    return false;
                }
                jAlert(message, '提示', function() {
                    $(document).scrollTop($(window).height());
                });
                navigator.getUserMedia(videoObj, function(stream) {
                    video.src = stream;
                    video.play();
                    alert(11);
                    $('#lifescan #main .btn_click').css('margin-top', '-550px');
                    video.addEventListener('loadeddata', function() {
                        $(document).scrollTop($(window).height());
                    }, false);
                    $('#snap').click(function() {
                        //$('.scan-area').show();
                        $('#cream_loading').toggle();
                        context.drawImage(video, 0, 0, 640, 480);
                        convertCanvasToImage();
                    });
                }, errBack);
            } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
                jAlert(message, '提示', function() {
                    $(document).scrollTop($(window).height());
                });
                navigator.webkitGetUserMedia(videoObj, function(stream) {
                    video.src = window.webkitURL.createObjectURL(stream);
                    video.play();
                    $('#lifescan #main .btn_click').css('margin-top', '-550px');
                    video.addEventListener('loadeddata', function() {
                        $(document).scrollTop($(window).height());
                    }, false);
                    if (navigator.userAgent.indexOf('UCBrowser') > -1) {
                        $('#lifescan #main .btn_click').css('margin-top', '-10px');
                    }
                    $('#snap').click(function() {
                        $('#cream_loading').toggle();
                        context.drawImage(video, 0, 0, 640, 480);
                        convertCanvasToImage();
                    });
                }, errBack);
            } else if (navigator.mozGetUserMedia) { // Firefox-prefixed
                jAlert(message, '提示', function() {
                    $(document).scrollTop($(window).height());
                });
                navigator.mozGetUserMedia(videoObj, function(stream) {
                    video.src = window.URL.createObjectURL(stream);
                    video.play();
                    video.addEventListener('loadeddata', function() {
                        $(document).scrollTop($(window).height());
                    }, false);
                    $('#lifescan #main .btn_click').css('margin-top', '-550px');
                    $('#snap').click(function() {
                        $('#cream_loading').toggle();
                        context.drawImage(video, 0, 0, 640, 480);
                        convertCanvasToImage();
                    });
                }, errBack);
            } else if (navigator.msGetUserMedia) {
                jAlert(message, '提示', function() {
                    $(document).scrollTop($(window).height());
                });
                navigator.msGetUserMedia(videoObj, function(stream) {
                    $(document).scrollTop($(window).height());
                    video.src = window.URL.createObjectURL(stream);
                    video.play();
                    $('#lifescan #main .btn_click').css('margin-top', '-550px');
                    video.addEventListener('loadeddata', function() {
                        $(document).scrollTop($(window).height());
                    }, false);
                    $('#snap').click(function() {
                        $('#cream_loading').toggle();
                        context.drawImage(video, 0, 0, 640, 480);
                        convertCanvasToImage();
                    });
                }, errBack);
            } else {
                var userAgent = navigator.userAgent;
                if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Oupeng") == -1 && userAgent.indexOf("360 Aphone") == -1) {
                    sel.addEventListener('change', function(e) {
                        var f = sel.files[0]; // get selected file (camera capture)
                        fr = new FileReader();
                        fr.onload = receivedData; // add onload event
                        fr.readAsDataURL(f); // get captured image as data URI
                    });
                    $('#imgtag').show();
                    $('.div_video').hide();
                    $('#snap').click(function() {
                        sel.click();
                    });
                } //判断是否Safari浏览器
                else {
                    jAlert('对不起，您的浏览器不支持拍照功能，请使用其他浏览器', '提示');
                }
            }
        }, false);
    } catch (err) {
        jAlert('对不起，您的浏览器不支持拍照功能，请使用其他浏览器', '提示');
    }
});
// for iOS 
// create file reader
function receivedData() {
    // readAsDataURL is finished - add URI to IMG tag src
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var imgtag = document.getElementById('imgtag'); // get reference to img tag
    imgtag.src = fr.result;
    $('#cream_loading').toggle();
    try {
        setTimeout(function() {
            context.drawImage(imgtag, 0, 0, 640, 480);
            convertCanvasToImage();
        }, 500);
    } catch (err) {
        alert(err);
    }
}
//帆布转换成图像并保存图片
function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = document.getElementById("canvas").toDataURL("image/png");
    //alert(image.src);
    //删除字符串前的提示信息“data:image/png;base64”
    var b64 = image.src.substring(22);
    var myDate = new Date();
    var filename = myDate.getTime();
    $.post("/Article/SavePhoto", {
        data: b64,
        name: filename
    }, function(result) {
        if (result.success) {
            $('#cream_loading').toggle();
            window.location.href = "/yourreenex?photo=" + result.photo;
        }
    });
    return image;
}