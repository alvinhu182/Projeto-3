import { Button, ButtonProps } from "react-bootstrap";

type Props = {
    children: React.ReactNode
}

export function CustomButton (props: ButtonProps) {
    return(
        <Button{...props} />
    )
}