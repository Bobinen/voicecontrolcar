let move_or_stop = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) >= 100 && move_or_stop == 0) {
        move_or_stop = 1
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
    if (pins.analogReadPin(AnalogPin.P0) >= 100 && move_or_stop == 0) {
        move_or_stop = 0
        maqueen.motorStop(maqueen.Motors.All)
    }
})
