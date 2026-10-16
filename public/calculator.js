import {runway} from './finance.js';
const form=document.querySelector('#runway-form'),result=document.querySelector('#runway-output');
function update(){
 const values={};let invalid=false;
 for(const key of ['cash','reserve','receipts','payments','oneOff']){const field=form.elements[key];if(field.value.trim()===''||!field.checkValidity())invalid=true;values[key]=Number(field.value);}
 if(invalid){result.textContent='Enter a valid, non-negative amount in every field.';return;}
 try{
  const r=runway(values),currency=form.elements.currency.value;
  const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency,maximumFractionDigits:0}).format(n);
  const months=r.months===null?'No depletion at these rates':r.months===0?'Reserve already reached':r.months.toFixed(1)+' months';
  result.replaceChildren();
  const add=(tag,text,className)=>{const el=document.createElement(tag);el.textContent=text;if(className)el.className=className;result.append(el);};
  add('p','Estimated time until your cash reserve');
  add('div',months,'big-result');
  add('p','Cash after the one-off payment: '+money(r.available));
  add('p',r.burn>0?'Monthly net cash outflow: '+money(r.burn):'Monthly net cash inflow: '+money(-r.burn));
  add('p',r.headroom<=0?'The one-off payment leaves cash at or below your selected reserve.':r.months===null?'Cash stays level or grows if these monthly receipts and payments remain unchanged.':'Headroom above your reserve: '+money(r.headroom));
  add('h3','What this assumes');
  add('p','Receipts and payments stay constant and occur evenly through the month. The one-off payment happens now. This is a simplified cash estimate, not a detailed operating forecast.');
  const body=document.querySelector('#projection-body');body.replaceChildren();
  for(const row of r.balances){const tr=document.createElement('tr');for(const text of [row.month===0?'After one-off payment':'Month '+row.month,money(row.cash),row.cash<values.reserve?'Below reserve':row.cash===values.reserve?'At reserve':'Above reserve']){const td=document.createElement('td');td.textContent=text;tr.append(td);}body.append(tr);}
 }catch(error){result.textContent=error.message;}
}
form.addEventListener('input',update);form.addEventListener('change',update);form.addEventListener('submit',e=>{e.preventDefault();update();});update();
