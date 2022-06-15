import { Address } from "./Address"

export type Estimate = {
    id: string
    minutes: number
    meters: number
    value: number
    startAddress: Address
    finalAddress: Address
    comments: string
}