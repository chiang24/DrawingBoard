let canvas = document.querySelector('#painting')
let clientWidth = document.documentElement.clientWidth
let clientHeight = document.documentElement.clientHeight

canvas.width = clientWidth
canvas.height = clientHeight

let context = canvas.getContext("2d")
let previousPoint

canvas.addEventListener('touchmove', function (e) {
    e.preventDefault()
    let penType = document.querySelector('input[name="penType"]:checked').value
    let {
        pageX,
        pageY
    } = e.touches[0]
    if (penType === 'pen') {
        if (previousPoint) {
            context.strokeStyle = 'red'
            context.beginPath()
            context.moveTo(previousPoint.pageX, previousPoint.pageY)
            context.lineTo(pageX, pageY)
            context.stroke()
        }
        previousPoint = {
            pageX,
            pageY
        }
    } else if (penType === 'eraser') {
        context.clearRect(pageX - 5, pageY - 5, 15, 15)
    }
})

canvas.addEventListener('touchend', function () {
    previousPoint = null
})
save.onclick = function () {
    var canvas = document.getElementById("painting");
    var data = canvas.toDataURL("image/png");
    var newWindow = window.open('about:blank', 'image from canvas');
    newWindow.document.write("<img src='" + data + "' alt='from canvas'/>");
}