import { type } from '@testing-library/user-event/dist/type';
import React, { createContext, useEffect, useState } from 'react';


type GlobalContextValue = {
  cartitem:number [];
  setCartitem: React.Dispatch<React.SetStateAction<number[]>>
};

export const GlobalContext = createContext<GlobalContextValue>({
  cartitem: [],
  setCartitem: () => {}
})
