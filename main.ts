let degré = 0
basic.forever(function () {
    degré = input.compassHeading()
    if (degré < 45) {
        basic.showString("n")
    } else if (degré < 135) {
        basic.showString("e")
    } else if (degré < 225) {
        basic.showString("s")
    } else if (degré < 315) {
        basic.showString("w")
    }
})
