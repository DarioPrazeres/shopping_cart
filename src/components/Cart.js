import React, {useContext, createContext} from "react";
const Length = createContext();
const sold=[];
function Cart(){
    return(
        <Length.Provider value={sold}>
            <h1>{sold.length}</h1>
        </Length.Provider>
    );
}
export default Cart;
export {Length, sold};