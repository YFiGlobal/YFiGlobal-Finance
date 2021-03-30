import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../YFIG/utils'
import useYFIG from './useYFIG'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const YFIG = useYFIG()
  const masterChefContract = getMasterChefContract(YFIG)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, YFIG])

  useEffect(() => {
    if (account && masterChefContract && YFIG) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, YFIG])

  return balance
}

export default useEarnings
