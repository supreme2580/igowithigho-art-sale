import { atom } from "recoil";

export const messageState = atom({
    key: "messageState",
    default: false
})

export const waitingState = atom({
    key: "waitingState",
    default: false
})