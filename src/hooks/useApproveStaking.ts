import {useCallback} from 'react'

import useYFIG from './useYFIG'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getYFIGContract,
  getXYFIGStakingContract
} from '../YFIG/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const YFIG = useYFIG()
  const lpContract = getYFIGContract(YFIG)
  const contract = getXYFIGStakingContract(YFIG)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
