import { Address } from "../entities/Address"

type CalculateDistanceInput = {
    origin: Address
    destination: Address
}

export const calculateDistance = async ({origin, destination}: CalculateDistanceInput) => {
    const DirectionsService = new google.maps.DirectionsService()
   const {routes} = await DirectionsService.route({
        origin: new google.maps.LatLng(origin.lat, origin.lng),
        destination: new google.maps.LatLng(destination.lat, destination .lng) ,
        travelMode: google.maps.TravelMode.DRIVING 
    })
    if (!routes[0]?.legs[0]?.distance || !routes[0]?.legs[0]?.duration) {
        throw new Error('Falha ao calcular distancia. Tente novamente')
    }
    return {
        distance: routes [0].legs[0].distance.value,
        duration: routes[0].legs[0].duration.value
    }
}