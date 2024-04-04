basic.forever(function () {
    servos.P0.setAngle(90)
    basic.pause(3000)
    servos.P0.setAngle(0)
    basic.pause(3000)
})
