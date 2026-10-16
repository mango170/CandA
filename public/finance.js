export function runway({cash,reserve,receipts,payments,oneOff}) {
 const inputs=[cash,reserve,receipts,payments,oneOff];
 if(inputs.some(v=>!Number.isFinite(v)||v<0||v>1e12))throw new Error('Enter non-negative amounts up to 1 trillion.');
 const available=cash-oneOff, burn=payments-receipts, headroom=available-reserve;
 return {available,burn,headroom,months:headroom<=0?0:burn>0?headroom/burn:null,
  balances:Array.from({length:13},(_,month)=>({month,cash:available-month*burn}))};
}
export function forecast() {
 const receipts=[18000,22000,19000,26000,17000,24000,21000,28000,19000,25000,23000,29000,25000];
 const payments=[21000,27000,24000,36000,25000,20000,31000,23000,27000,22000,24000,21000,26000];
 let cash=60000;
 return receipts.map((received,i)=>{const opening=cash;cash+=received-payments[i];return {week:i+1,opening,receipts:received,payments:payments[i],net:received-payments[i],closing:cash};});
}
export function scenario(growth) {
 let monthlyRevenue=50000,cash=150000,annualRevenue=0;
 const rows=[];
 for(let month=1;month<=12;month++){
  const revenue=monthlyRevenue,cogs=revenue*.3,opex=32000,operating=revenue-cogs-opex;
  cash+=operating;annualRevenue+=revenue;rows.push({month,revenue,cogs,opex,operating,cash});monthlyRevenue*=1+growth;
 }
 return {rows,annualRevenue,yearEndCash:cash,operatingCash:cash-150000};
}
