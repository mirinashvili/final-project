import React, { PropsWithChildren, useState } from 'react'
import { GlobalContext } from '../CartContext/GlobalContext'

export function GlobalProvide ({children}: PropsWithChildren) {
    const [cartitem, setCartitem] = useState<number[]>([])


    return (
        <GlobalContext.Provider value={{cartitem, setCartitem}}>
           {children}
        </GlobalContext.Provider>
    )
}
