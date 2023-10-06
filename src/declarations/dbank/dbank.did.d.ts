import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'TopUp' : (arg_0: number) => Promise<undefined>,
  'Withdrawl' : (arg_0: number) => Promise<undefined>,
  'checkBal' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
}
