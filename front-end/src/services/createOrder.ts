import { addDoc, collection } from "firebase/firestore"
import { Estimate } from "../entities/Estimate"
import { db } from "./firebase"

type NewOrderInput ={
    estimate: Estimate
    gatewayId: string
    userId: string
}
export const createOrder= async ({estimate, gatewayId, userId}: NewOrderInput): Promise<void> => {
    const friendlyId = new Date().getTime().toString(36).toUpperCase()
    const partnerValue = parseFloat((estimate.value * 0.9).toFixed(2))
    const {id: estimateId, ...estimateData} = estimate
    const newOrderData = {
        ...estimateData,
        estimateId,
        gatewayId,
        User: userId,
        friendlyId,
        partnerValue,
        status: 'CREATED',
        createdAt: new Date()
    }
    await addDoc(collection(db, 'orders'),newOrderData )

}