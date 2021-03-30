import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://bscscan.com/address/0x47ebb1fef51820af68457289274f760bf56b29a5"
      >
        MasterChef Contract
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://bscscan.com/address/0x47ebb1fef51820af68457289274f760bf56b29a5"
      >
        LfiSwap LFI-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="http://www.t.me/YFiGlobalFinance">
        Telegram
      </StyledLink>
     <StyledLink target="_blank" href="http://www.twitter.com/YFiG_Finance">
        Twitter
      </StyledLink>
     <StyledLink target="_blank" href="http://www.t.me/YFiGlobalNews">
        Announcement
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
