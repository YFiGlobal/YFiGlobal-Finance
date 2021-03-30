import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { YFIG } from '../../YFIG'

export interface YFIGContext {
  YFIG?: typeof YFIG
}

export const Context = createContext<YFIGContext>({
  YFIG: undefined,
})

declare global {
  interface Window {
    YFIGsauce: any
  }
}

const YFIGProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [YFIG, setYFIG] = useState<any>()

  // @ts-ignore
  window.YFIG = YFIG
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const YFIGLib = new YFIG(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setYFIG(YFIGLib)
      window.YFIGsauce = YFIGLib
    }
  }, [ethereum])

  return <Context.Provider value={{ YFIG }}>{children}</Context.Provider>
}

export default YFIGProvider
