control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (mode < 4) {
        mode = 1 + mode
    } else {
        mode = 1
    }
    basic.showNumber(mode)
    basic.pause(1000)
    basic.clearScreen()
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (mode == 1) {
        argent += 0.01
    } else if (mode == 2) {
        argent += 0.1
    } else if (mode == 3) {
        argent += 1
    } else if (mode == 4) {
        argent += 10
    }
    basic.showNumber(argent)
    basic.pause(1000)
    basic.clearScreen()
})
let mode = 0
let argent = 0
argent = 0
mode = 1
basic.forever(function () {
	
})
