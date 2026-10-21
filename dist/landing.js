const phone='212670779271';
const messages={general:'Hello, I would like information about IPTV subscriptions or reseller panel options from OTT Provider.',trial:'Hello, I would like a free IPTV M3U / Xtream trial from OTT Provider.',reseller:'Hello, I would like information about OTT Provider reseller panel credits.','buy-1':'Hello, I would like to order a 1-month IPTV subscription from OTT Provider.','buy-6':'Hello, I would like to order a 6-month IPTV subscription from OTT Provider.','buy-12':'Hello, I would like to order a 12-month IPTV subscription from OTT Provider.'};
document.querySelectorAll('.wa-link').forEach(link=>link.href=`https://wa.me/${phone}?text=${encodeURIComponent(messages[link.dataset.message]||messages.general)}`);
const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));document.querySelector('#links').classList.toggle('open',!open)});

const homeCss=document.createElement('link');
homeCss.rel='stylesheet';homeCss.href='/home-panels.css';document.head.append(homeCss);
const resellerNav=document.createElement('a');
resellerNav.className='reseller-nav';resellerNav.href='/reseller/';resellerNav.textContent='Resellers / Panels';
document.querySelector('#links')?.prepend(resellerNav);
const resellerHero=document.querySelector('.actions .secondary');
if(resellerHero){resellerHero.href='/reseller/';resellerHero.target='';resellerHero.removeAttribute('data-message');resellerHero.textContent='Are you a Reseller? Access Panel Info →';}
const panels=[
 ['trex-iptv','Trex IPTV','trex-iptv.png'],['8k-strong','8K Strong','8k-strong.webp'],['ultra-8k-ott','Ultra 8K OTT','ultra-8k-ott.png'],['dino-iptv','Dino IPTV','dino-iptv.png'],['lion-ott','Lion OTT','lion-ott.png'],['nexon-iptv','Nexon IPTV','nexon-iptv.png'],['tivione','TiviOne','tivione.png'],['eagle-iptv','Eagle IPTV','eagle-iptv.png'],['mega-ott','Mega OTT','mega-ott.png'],['crystal-ott','Crystal OTT','crystal-ott.png'],['magnum-golden-ott','Magnum / Golden OTT','magnum-golden-ott.png'],['infinity-iptv','Infinity IPTV','infinity-iptv.png'],['max-ott','Max OTT','max-ott.png'],['dream-4k-iptv','Dream 4K / Dream 24K','dream-4k-iptv.png'],['promax-4k-ott','ProMax 4K OTT','promax-4k-ott.png']
];
const directory=document.createElement('section');
directory.className='home-directory';directory.id='panels';
directory.innerHTML=`<div class="directory-heading"><div><p class="eyebrow">PANEL DIRECTORY</p><h2>Explore available<br><em>IPTV panels.</em></h2></div><p>Choose a panel to view its content snapshot, subscription routes, reseller information, and direct WhatsApp support.</p></div><div class="directory-grid">${panels.map(panel=>`<a href="/panels/${panel[0]}/"><img src="/assets/logos/${panel[2]}" alt="${panel[1]} logo"><span>${panel[1]}</span><b>View panel →</b></a>`).join('')}</div></section>`;
document.querySelector('.bottom-cta')?.before(directory);
const banner=document.createElement('section');
banner.className='reseller-banner';
banner.innerHTML='<div><p class="eyebrow">FOR AMBITIOUS RESELLERS</p><h2>Want to start your own IPTV business?</h2></div><a href="/reseller/">Explore Reseller Panels <b>→</b></a>';
document.querySelector('footer')?.before(banner);

/* Keep the public subscription routes aligned with the 12- and 24-month plans. */
const planGrid=document.querySelector('.plan-grid');
if(planGrid){
  planGrid.innerHTML=`<article><p class="plan-label">SUBSCRIPTION</p><h3>12 months</h3><p>A clear annual subscription route for one connection.</p><ul><li>12-month duration</li><li>Playlist / Xtream setup guidance</li><li>Support before activation</li></ul><a class="wa-link" data-message="buy-12" target="_blank" rel="noopener">Ask about 12 months <b>→</b></a></article><article class="featured"><p class="plan-label">BEST FOR LONGER TERM</p><h3>24 months</h3><p>A two-year subscription route for a longer viewing plan.</p><ul><li>24-month duration</li><li>Priority setup conversation</li><li>Support before activation</li></ul><a class="wa-link" data-message="buy-24" target="_blank" rel="noopener">Ask about 24 months <b>→</b></a></article>`;
  planGrid.querySelectorAll('.wa-link').forEach(link=>{const custom={"buy-12":'Hello, I would like to ask about a 12-month IPTV subscription from OTT Provider.',"buy-24":'Hello, I would like to ask about a 24-month IPTV subscription from OTT Provider.'};link.href=`https://wa.me/${phone}?text=${encodeURIComponent(custom[link.dataset.message])}`});
}
