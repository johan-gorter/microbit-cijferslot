radio.onReceivedNumber(function (receivedNumber) {
    if (bezig) {
        music.playTone(147, music.beat(BeatFraction.Eighth))
    } else {
        bezig = true
        poging = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5000)
})
let poging = 0
let bezig = false
radio.setGroup(99)
let geheime_sleutel = randint(1, 9999)
basic.showLeds(`
    . . # # .
    . # . . #
    . # . . #
    . # # # #
    . # # # #
    `)
basic.forever(function () {
    if (bezig) {
        basic.showNumber(poging)
        if (poging == geheime_sleutel) {
            basic.showLeds(`
                . . # # .
                . # . . #
                . . . . #
                . # # # #
                . # # # #
                `)
        } else if (poging > geheime_sleutel) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
        bezig = false
    } else {
        basic.pause(100)
    }
})
