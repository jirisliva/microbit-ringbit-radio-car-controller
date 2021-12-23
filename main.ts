input.onButtonPressed(Button.A, function () {
    if (pauza == 0) {
        pauza = 1
    } else {
        pauza = 0
    }
    radio.sendValue("pauza", pauza)
})
let smer = 0
let plyn = 0
let pauza = 0
radio.setGroup(1)
let min_k = 10
let min_z = -10
pauza = 1
basic.forever(function () {
    if (pauza == 0) {
        plyn = input.rotation(Rotation.Pitch)
        smer = input.rotation(Rotation.Roll)
        if (plyn < min_z || plyn > min_k) {
            radio.sendValue("plyn", input.rotation(Rotation.Pitch))
        } else {
            radio.sendValue("plyn", 0)
        }
        if (smer < min_z || smer > min_k) {
            radio.sendValue("vlevo", smer)
            radio.sendValue("vpravo", 0 - smer)
        } else {
            radio.sendValue("vlevo", 0)
            radio.sendValue("vpravo", 0)
        }
        if (smer < min_z && plyn < min_z) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else if (smer < min_z && plyn > min_k) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # . .
                . . # . .
                . . # . .
                `)
        } else if (smer > min_k && plyn < min_z) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # # #
                . . . . .
                . . . . .
                `)
        } else if (smer > min_k && plyn > min_k) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # #
                . . # . .
                . . # . .
                `)
        } else if (plyn < min_z) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (plyn > min_k) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (smer < min_z) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else if (smer > min_k) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # #
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
