import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../YFIG/utils'
import useYFIG from './useYFIG'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const YFIG = useYFIG()
  const farms = getFarms(YFIG)
  const masterChefContract = getMasterChefContract(YFIG)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, YFIG])

  useEffect(() => {
    if (account && masterChefContract && YFIG) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, YFIG])

  return balances
}

export default useAllEarnings
