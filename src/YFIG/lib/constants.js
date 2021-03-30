import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}


export const contractAddresses = {
  YFIG: {
    1: '0xb4f7c1ef0465c8d88f4c52a4c9c9c21de8ad6a3d',
  },
  masterChef: {
    1: '0x47eBB1fef51820aF68457289274F760bf56B29A5',
  },
  weth: {
    1: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  },
  xYFIG: {
    1: '0x8b3ed31890c922ff021e379127e7306c52abb835'
  }
}



export const supportedPools = [
  // Perm Menu
  {
    pid: 0,
    lpAddresses: {
      1: '0xb4f7c1ef0465c8d88f4c52a4c9c9c21de8ad6a3d',
    },
    tokenAddresses: {
      1: '0xb4f7c1ef0465c8d88f4c52a4c9c9c21de8ad6a3d',
    },
    name: 'YFIG Whale!',
    symbol: 'YFIG',
    tokenSymbol: 'YFIG',
    icon: '🐋',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x3a556635395d50f7f4c6347d668bebc660dc9e49',
    },
    tokenAddresses: {
      1: '0xb4f7c1ef0465c8d88f4c52a4c9c9c21de8ad6a3d',
    },
    name: 'YFIG Horse!',
    symbol: 'YFIG-BNB LP',
    tokenSymbol: 'YFIG',
    icon: '🐎',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0x51e09cd452ebfe645c68b91b5be90f5af337c894',
    },
    tokenAddresses: {
      1: '0xb4f7c1ef0465c8d88f4c52a4c9c9c21de8ad6a3d',
    },
    name: 'Cake Party!',
    symbol: 'Cake Token',
    tokenSymbol: 'YFIG',
    icon: '🥞',
  }
]
