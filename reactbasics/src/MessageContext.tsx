import * as React from "react";
import { IMessage } from "./common/IMessage";
//Creating Message context suing interface IMessage and with generics function
//Creating context
export const MessageContext = React.createContext<IMessage>({
    message: "Hello",
    time: new Date().getTime()
});