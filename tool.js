function checkForDialog() {
    var t = $("#drawing-dialog");
    t.length > 0 && 0 === $("#drawing-dialog .toolbar #image_button").length && modifyDrawingDialog(t)
}

/*
function insert_image() {
    var t = prompt("Please enter the url of image", "http://theinspirationgrid.com/wp-content/uploads/2014/03/motion-david-szakaly-01.gif");
    if (t) {
        var e = $("#drawing-dialog .canvas").data().whiteboard.canvas;
        e.image(t, 0, 0, 500, 300), image_object.src = t, drawing_id = $("#drawing-dialog .canvas").data().whiteboard.id
    }
}
*/

function insert_image() {
    var t = prompt("Please enter the url of image", "http://theinspirationgrid.com/wp-content/uploads/2014/03/motion-david-szakaly-01.gif");
var img = document.createElement('img');
img.setAttribute('src', t);
img.onload = function() {
var max_width = 500
var max_height = 300
scale_width = max_width / img.width;
scale_height = max_height / img.height;
scale = Math.min(scale_width, scale_height);
var maxwidth = img.width * scale;
var maxheight = img.height * scale;
if (t) {
        var e = $("#drawing-dialog .canvas").data().whiteboard.canvas;
        e.image(t, 0, 0, maxwidth, maxheight), image_object.src = t, image_object.height = maxheight, image_object.width = maxwidth, drawing_id = $("#drawing-dialog .canvas").data().whiteboard.id
    }
    delete img;
};
}

function parseDrawingData() {
    return JSON.parse("{" + $("#drawing-data").val() + "}")
}

function deriveDrawingData(t) {
    var e = [];
    for (x in t) e.push(), e.push('"' + x + '": ' + JSON.stringify(t[x]));
    return e.join(",")
}

function modifyDrawingData() {
    var t = parseDrawingData();
    "undefined" != typeof t[drawing_id] && (t[drawing_id].shapes.push(image_object), $("#drawing-data").val(deriveDrawingData(t)))
}

function modifyDrawingDialog(t) {
    $("<button/>", {
        text: "Image",
        id: "image_button",
        height: "29px",
        click: function() {
            insert_image()
        }
    }).css({
        "margin-right": "10px",
        color: "white",
        "background-color": "black"
    }).prependTo("#drawing-dialog .toolbar"), t.find(".actions .insert").click(function() {
        modifyDrawingData()
    })
}
$(document).ready(function() {
    setInterval(checkForDialog, 500)
});
var drawing_id = 2,
    image_object = {
        id: 9999,
        type: "image",
        width: 500,
        height: 300,
        src: "#"
    };
