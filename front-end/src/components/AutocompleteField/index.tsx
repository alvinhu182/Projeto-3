import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { Address } from "../../entities/Address";
import { FormField, FormFieldProps  } from "../FormField";
import { LoadGoogleScript } from "../LoadGoogleScript";


type Props = {
    value: null | Address
    onChange: (address: null | Address) => void

} & Omit<FormFieldProps, "value" | "onChange">

export function AutocompleteField ({value, onChange, ...fieldProps}: Props) {
    const autocompleteRef = useRef<null| google.maps.places.Autocomplete>(null)
    const handleLoad= (autocomplete: google.maps.places.Autocomplete) => { 
       autocompleteRef.current = autocomplete
       autocomplete.setBounds(new google.maps.LatLngBounds(
        new google.maps.LatLng(-21.9903362248593, -46.72129629743354),
        new google.maps.LatLng(-21.638449909189713, -46.37042047143955)
    ))
    }
    const handleChange = () => {
     const place = autocompleteRef.current?.getPlace()
        if (place && place.formatted_address && place.geometry?.location){
            const address: Address = {
                address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }
            onChange(address)
        }
    }
    return (
        <LoadGoogleScript>
            <Autocomplete
                onLoad={handleLoad}
                onPlaceChanged={handleChange}
                restrictions={{
                    country:'br'
                }}

              
                options= {{
                    strictBounds: true
                }}
               
            >
                <FormField 
                {...fieldProps}
                onChange={() => onChange(null)}
                />
            </Autocomplete>
        </LoadGoogleScript>
    )
}