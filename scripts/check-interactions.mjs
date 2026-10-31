import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const root=new URL('../public/',import.meta.url);
const finance=await import('data:text/javascript;base64,'+Buffer.from(await readFile(new URL('finance.js',root))).toString('base64'));
assert.equal(finance.runway({cash:100000,reserve:20000,receipts:10000,payments:30000,oneOff:0}).months,4);
assert.equal(finance.runway({cash:100000,reserve:20000,receipts:30000,payments:10000,oneOff:0}).months,null);
assert.equal(finance.runway({cash:10000,reserve:20000,receipts:0,payments:1000,oneOff:0}).months,0);
assert.throws(()=>finance.runway({cash:-1,reserve:0,receipts:0,payments:0,oneOff:0}));
const forecast=finance.forecast();assert.equal(forecast.length,13);assert.equal(forecast[0].closing,57000);
for(let i=1;i<forecast.length;i++)assert.equal(forecast[i].opening,forecast[i-1].closing);
assert.equal(finance.scenario(0).annualRevenue,600000);
assert.equal(finance.scenario(0).yearEndCash,186000);
const code=await readFile(new URL('inquiry.js',root),'utf8');
async function inquiry(host,fail=false){
 const events={};let calls=0;
 const status={textContent:''},ready={hidden:false,focus(){}},button={disabled:false,textContent:''};
 const form={elements:{service:{options:[{value:'India consultation and advisory'}]}},querySelector(){return button},addEventListener(k,v){events[k]=v},reportValidity(){return true},reset(){}};
 const context={document:{querySelector:s=>({'#inquiry-form':form,'#inquiry-ready':ready,'#inquiry-status':status}[s]),querySelectorAll:()=>[]},location:{search:'?service=India%20consultation%20and%20advisory',hostname:host},URLSearchParams,AbortController,setTimeout,clearTimeout,FormData:class{set(){}},fetch:async()=>{calls++;if(fail)throw Error('offline');return {ok:true}}};
 vm.runInNewContext(code,context);assert.equal(form.elements.service.value,'India consultation and advisory');
 await events.submit({preventDefault(){}});return {calls,status,button};
}
let r=await inquiry('deploy-preview-1--canda-advisory.netlify.app');assert.equal(r.calls,0);assert.match(r.status.textContent,/disabled/);
r=await inquiry('candaadvisory.com',true);assert.equal(r.calls,1);assert.match(r.status.textContent,/hello@candaadvisory.com/);assert.equal(r.button.disabled,false);
r=await inquiry('candaadvisory.com');assert.equal(r.calls,1);assert.match(r.status.textContent,/received/);
console.log('PASS: runway boundaries, forecast continuity, scenario baseline, India inquiry preselection, preview no-send, mocked production success/failure. No real submissions.');
