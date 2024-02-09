import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

const CustomAlert = ({errorCode,errorMessage}) => {
   return (
    <Alert status="error">
       <AlertIcon/>
       <AlertTitle>Error{errorCode}</AlertTitle>
       <AlertDescription>{errorMessage}</AlertDescription>
    </Alert>
   );
}
export default CustomAlert;