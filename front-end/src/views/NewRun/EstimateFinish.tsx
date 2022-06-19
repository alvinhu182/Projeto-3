import { useDispatch, useSelector } from "react-redux";
import { PayPalButton } from "../../components/PaypalButton";
import { clearCurrentEstimate, selectCurrentEstimate } from "../../store/slice/estimateSlice";
import { OrderResponseBody } from '@paypal/paypal-js'
import { toast } from "react-toastify";
import { createOrder } from "../../services/createOrder";
import { selectUser } from "../../store/slice/userSlice";
import { useNavigate } from "react-router-dom";

export function EstimateFinish () {
    const currentEstimate = useSelector(selectCurrentEstimate)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if (!currentEstimate || !user){
        return null
    }
    const handlePayPalSuccess = async (details: OrderResponseBody) => {
    try {
        await createOrder({
            estimate: currentEstimate,
            gatewayId: details.id,
            userId: user.id
        })
        dispatch(clearCurrentEstimate())
        navigate('/novo-pedido/sucesso')
    } catch {
      toast.error ('falha ao processar. Por favor, entre em contato conosco.')  
    }

    }
    const handlePayPalError = () => {
        toast.error('Ocorreu um erro ao realizar o pagamento. Por favor entre em contato conosco.')
    }
    return (
        
        <div className="mt-3">
         <PayPalButton
            value={currentEstimate.value}
            customId={currentEstimate.id}
            onSuccess={handlePayPalSuccess}
            onError={handlePayPalError}
         />
        </div>
    )
}