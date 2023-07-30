export class InputState {
    constructor() {
        this.up = false;
        this.left = false;
        this.right = false;
        this.down = false;
        this.fireRed = false;
        this.fireBlue = false;
    }
}
const PLAYER_1_INPUT_STATE = new InputState();
const PLAYER_2_INPUT_STATE = new InputState();
const PLAYER_1_LAYOUT = {
    up: "ArrowUp",
    left: "ArrowLeft",
    right: "ArrowRight",
    down: "ArrowDown",
    fireRed: "KeyQ",
    fireBlue: "KeyW",
};
const PLAYER_2_LAYOUT = {
    up: 12,
    left: 14,
    right: 15,
    down: 13,
    fireRed: 0,
    fireBlue: 1,
};
export const keyDownHandler = (e) => {
    if (e.code == PLAYER_1_LAYOUT.up) {
        PLAYER_1_INPUT_STATE.up = true;
    }
    else if (e.code == PLAYER_1_LAYOUT.left) {
        PLAYER_1_INPUT_STATE.left = true;
    }
    else if (e.code == PLAYER_1_LAYOUT.right) {
        PLAYER_1_INPUT_STATE.right = true;
    }
    else if (e.code == PLAYER_1_LAYOUT.down) {
        PLAYER_1_INPUT_STATE.down = true;
    }
    else if (e.code == PLAYER_1_LAYOUT.fireRed) {
        PLAYER_1_INPUT_STATE.fireRed = true;
    }
    else if (e.code == PLAYER_1_LAYOUT.fireBlue) {
        PLAYER_1_INPUT_STATE.fireBlue = true;
    }
};
export const keyUpHandler = (e) => {
    if (e.code == PLAYER_1_LAYOUT.up) {
        PLAYER_1_INPUT_STATE.up = false;
    }
    else if (e.code == PLAYER_1_LAYOUT.left) {
        PLAYER_1_INPUT_STATE.left = false;
    }
    else if (e.code == PLAYER_1_LAYOUT.right) {
        PLAYER_1_INPUT_STATE.right = false;
    }
    else if (e.code == PLAYER_1_LAYOUT.down) {
        PLAYER_1_INPUT_STATE.down = false;
    }
    else if (e.code == PLAYER_1_LAYOUT.fireRed) {
        PLAYER_1_INPUT_STATE.fireRed = false;
    }
    else if (e.code == PLAYER_1_LAYOUT.fireBlue) {
        PLAYER_1_INPUT_STATE.fireBlue = false;
    }
};
const updateGamepadInputState = () => {
    var gamepad = navigator.getGamepads()[0]; //get the first controller.
    if (gamepad && gamepad.connected) {
        //check if direction buttons (UP, DOWN, LEFT, RIGHT) was pressed
        // var axes = gamepad.axes;
        // for (var i in axes) {
        //     if (axes[i] != 0) { console.log('axes[%s] value is: %s', i, axes[i]); };
        // };
        // to check if other buttons(A,B,C,D,OK,Exit...) was pressed
        var buttons = gamepad.buttons;
        if (buttons[PLAYER_2_LAYOUT.up].pressed) {
            PLAYER_2_INPUT_STATE.up = true;
        }
        else {
            PLAYER_2_INPUT_STATE.up = false;
        }
        if (buttons[PLAYER_2_LAYOUT.left].pressed) {
            PLAYER_2_INPUT_STATE.left = true;
        }
        else {
            PLAYER_2_INPUT_STATE.left = false;
        }
        if (buttons[PLAYER_2_LAYOUT.right].pressed) {
            PLAYER_2_INPUT_STATE.right = true;
        }
        else {
            PLAYER_2_INPUT_STATE.right = false;
        }
        if (buttons[PLAYER_2_LAYOUT.down].pressed) {
            PLAYER_2_INPUT_STATE.down = true;
        }
        else {
            PLAYER_2_INPUT_STATE.down = false;
        }
        if (buttons[PLAYER_2_LAYOUT.fireRed].pressed) {
            PLAYER_2_INPUT_STATE.fireRed = true;
        }
        else {
            PLAYER_2_INPUT_STATE.fireRed = false;
        }
        if (buttons[PLAYER_2_LAYOUT.fireBlue].pressed) {
            PLAYER_2_INPUT_STATE.fireBlue = true;
        }
        else {
            PLAYER_2_INPUT_STATE.fireBlue = false;
        }
        // for (var i in buttons) {
        //     if (buttons[i].pressed) {
        //         console.log("buttons[%s] pressed", i);
        //     };
        // };
    }
    ;
};
export const getInputStates = () => {
    updateGamepadInputState();
    return [PLAYER_1_INPUT_STATE, PLAYER_2_INPUT_STATE];
};
