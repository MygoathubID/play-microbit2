enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # . . .
        . . # . .
        # # . . .
        . . # . .
        # # . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # . . . .
        . # . . .
        # . . . .
        . # . . .
        # . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    `)
basic.forever(function () {
	
})
