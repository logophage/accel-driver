radio.onReceivedValue(function (name, value) {
    if (name == "angle") {
        if (value > 0 && value < 128) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Math.abs(value))
        }
        if (value < 0 && value > -128) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Math.abs(value))
        }
    }
})
radio.setGroup(1)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
