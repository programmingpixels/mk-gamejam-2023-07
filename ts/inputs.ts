export class ControllerLayout {
    up: string
    left: string
    right: string
    firePostive: string
    fireNegative: string

    constructor(up: string, left: string, right: string, firePostive: string, fireNegative: string) {
        this.up = up
        this.left = left
        this.right = right
        this.firePostive = firePostive
        this.fireNegative = fireNegative
    }
}

export interface InputState {
    up: boolean
    left: boolean
    right: boolean
    firePositive: boolean
    fireNegative: boolean
}