// Executed only for deploy-preview/branch-deploy, never production.
import {readdir,readFile,writeFile} from 'node:fs/promises';
if (!['deploy-preview','branch-deploy','local-review'].includes(process.env.CONTEXT)) throw new Error('Preview context required');
for (const file of await readdir('public')) {
 if (!file.endsWith('.html')) continue;
 let html=await readFile('public/'+file,'utf8');
 html=html.replace(/<meta[^>]*name="robots"[^>]*>/g,'').replace('</head>','<meta name="robots" content="noindex, nofollow"></head>');
 html=html.replace(/<body([^>]*)>/,'<body$1><aside style="padding:12px 20px;background:#fff0cf;color:#101d2b;text-align:center" aria-label="Review preview">Review preview · Production is unchanged · Inquiry submission is disabled</aside>');
 html=html.replace(/<form\b[^>]*>/g,match=>match.replace(/\s(?:data-netlify|netlify|netlify-honeypot)(?:="[^"]*")?/g,'').replace(/\saction="[^"]*"/g,'').replace('>',' action="#" onsubmit="return false">'));
 html=html.replace(/<button([^>]*type="submit"[^>]*)>/g,'<button$1 disabled aria-disabled="true">');
 html=html.replace(/<input([^>]*type="submit"[^>]*)>/g,'<input$1 disabled aria-disabled="true">');
 await writeFile('public/'+file,html);
}
await writeFile('public/_headers',(await readFile('public/_headers','utf8'))+'\n/*\n  X-Robots-Tag: noindex, nofollow\n');
