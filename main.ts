input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.pause(100)
    GO = 1
})
input.onButtonPressed(Button.B, function () {
    GO = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    basic.pause(200)
    basic.clearScreen()
})
let GO = 0
GO = 0
basic.forever(function () {
    if (GO > 0) {
        TobbieII.forward()
        if (TobbieII.LBlock(600)) {
            TobbieII.leftward()
            images.createImage(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `).scrollImage(1, 100)
            TobbieII.stopturn()
        } else if (TobbieII.RBlock(400)) {
            TobbieII.rightward()
            images.createImage(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `).scrollImage(1, 100)
            TobbieII.stopwalk()
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        TobbieII.stopturn()
        TobbieII.stopwalk()
    }
})
