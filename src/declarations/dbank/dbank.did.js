export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'TopUp' : IDL.Func([IDL.Float64], [], ['oneway']),
    'Withdrawl' : IDL.Func([IDL.Float64], [], ['oneway']),
    'checkBal' : IDL.Func([], [IDL.Float64], ['query']),
    'compound' : IDL.Func([], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
