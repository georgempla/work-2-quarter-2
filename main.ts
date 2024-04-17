basic.showString("COMPASS")
while (true) {
    if (input.compassHeading() < 115 && input.compassHeading() > 45) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showString("A")
    } else if (input.compassHeading() < 225 && input.compassHeading() > 115) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
        basic.showString("N")
    } else if (input.compassHeading() < 315 && input.compassHeading() > 225) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showString("D")
    } else if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showString("B")
    }
}
basic.forever(function () {
	
})
