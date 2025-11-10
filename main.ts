input.onGesture(Gesture.Shake, function () {
    bateria = 255
})
let bateria = 0
basic.showIcon(IconNames.Heart)
bateria = 255
basic.forever(function () {
    led.setBrightness(bateria)
    if (bateria > 0) {
        basic.pause(100)
        bateria += -1
    } else {
        led.setBrightness(255)
        basic.showIcon(IconNames.Ghost)
    }
})
