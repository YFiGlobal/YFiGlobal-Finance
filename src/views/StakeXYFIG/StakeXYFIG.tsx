import React, {useEffect, useMemo, useState} from 'react'
import styled from 'styled-components'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import Spacer from '../../components/Spacer'
import useYFIG from '../../hooks/useYFIG'
import {getContract} from '../../utils/erc20'
import UnstakeXYFIG from './components/UnstakeXYFIG'
import StakeYFIG from "./components/StakeYFIG";

import {contractAddresses} from '../../YFIG/lib/constants'
import {getXYFIGSupply} from "../../YFIG/utils";
import BigNumber from "bignumber.js";
import {getBalanceNumber} from "../../utils/formatBalance";

const StakeXYFIG: React.FC = () => {
  const {
    tokenAddress,
  } = {
    tokenAddress: contractAddresses.xYFIG[56],
  }

  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  const YFIG = useYFIG()
  const {ethereum} = useWallet()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getXYFIGSupply(YFIG)
      setTotalSupply(supply)
    }
    if (YFIG) {
      fetchTotalSupply()
    }
  }, [YFIG, setTotalSupply])



  const lpContract = useMemo(() => {
    debugger
    return getContract(ethereum as provider, tokenAddress)
  }, [ethereum, tokenAddress])

  return (
    <>
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <UnstakeXYFIG
              lpContract={lpContract}
            />
          </StyledCardWrapper>
          <Spacer/>
          <StyledCardWrapper>
            <StakeYFIG
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <StyledInfo>
              ℹ️️ You will earn a portion of the swaps fees based on the amount
              of xYFiG held relative the weight of the staking. xYFiG can be minted
              by staking YFiG. To redeem YFiG staked plus swap fees convert xYFiG
              back to YFiG. {totalSupply ? `There are currently ${getBalanceNumber(totalSupply)} xYFiG in existence.` : '' }
            </StyledInfo>
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg"/>
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default StakeXYFIG
