let accel = ""
basic.forever(function () {
    accel = "" + input.acceleration(Dimension.X) + "," + input.acceleration(Dimension.Y) + "," + input.acceleration(Dimension.Z)
    serial.writeString(accel)
    basic.pause(1000)
})
