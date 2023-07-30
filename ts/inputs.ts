export interface ControllerLayout {
    up: string
    left: string
    right: string
    firePostive: string
    fireNegative: string


}

export class InputState {
    up: boolean = false
    left: boolean = false
    right: boolean = false
    firePositive: boolean = false
    fireNegative: boolean = false
}