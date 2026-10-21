const directory={
 'trex-iptv':['Trex IPTV','IPTV','trex-iptv.png','33,000+','160,000+','27,000+'],
 '8k-strong':['8K Strong','4K','8k-strong.webp','57,192','179,790','47,437'],
 'ultra-8k-ott':['Ultra 8K OTT','4K','ultra-8k-ott.png','46,898','207,138','44,366'],
 'dino-iptv':['Dino IPTV','IPTV','dino-iptv.png','21,764','105,880','24,755'],
 'lion-ott':['Lion OTT','OTT','lion-ott.png','20,145','100,740','24,443'],
 'nexon-iptv':['Nexon IPTV','IPTV','nexon-iptv.png','30,717','154,221','679,811'],
 'tivione':['TiviOne','OTT','tivione.png','25,929','156,733','39,055'],
 'eagle-iptv':['Eagle IPTV','IPTV','eagle-iptv.png','19,070','168,505','35,468'],
 'mega-ott':['Mega OTT','OTT','mega-ott.png','27,394','156,212','1,235,475'],
 'crystal-ott':['Crystal OTT','OTT','crystal-ott.png','17,674','141,864','37,435'],
 'magnum-golden-ott':['Magnum / Golden OTT','OTT','magnum-golden-ott.png','28,294','157,484','1,051,082'],
 'infinity-iptv':['Infinity IPTV','IPTV','infinity-iptv.png','7,031','76,919','15,785'],
 'max-ott':['Max OTT','OTT','max-ott.png','—','—','—'],
 'dream-4k-iptv':['Dream 4K / Dream 24K','4K','dream-4k-iptv.png','39,724','243,359','52,344'],
 'promax-4k-ott':['ProMax 4K OTT','4K','promax-4k-ott.png','20,475','137,774','35,157']
};
const slug=window.PANEL_SLUG;
const panel=directory[slug];
const phone='212670779271';
const wa=(subject)=>`https://wa.me/${phone}?text=${encodeURIComponent(`Hello, I would like ${subject} for ${panel[0]} from OTT Provider.`)}`;
if(!panel){location.href='/';}
else{
 const [name,type,logo,live,movies,series]=panel;
 document.title=`${name} | OTT Provider`;
 document.querySelector('#panel-page').innerHTML=`
 <header class="panel-nav"><a class="panel-wordmark" href="/"><span>OTT</span> Provider<i>.tv</i></a><a class="back-link" href="/">← All panels</a><a class="nav-message" href="${wa('current information')}" target="_blank" rel="noopener">Message support ↗</a></header>
 <main>
  <section class="panel-hero"><div class="panel-hero-copy"><p class="panel-label">${type} · PANEL DETAIL</p><h1>${name}</h1><p>Everything in one place: content scale, subscription routes, reseller options, and a direct line to support.</p><div class="panel-buttons"><a href="${wa('current information')}" target="_blank" rel="noopener">Ask about ${name} <span>→</span></a><a class="quiet" href="#plans">View plans</a></div></div><div class="logo-stage"><div class="logo-ring"></div><div class="large-logo"><img src="/assets/logos/${logo}" alt="${name} logo"></div><small>OTT PROVIDER</small></div></section>
  <section class="numbers"><article><span>LIVE</span><b>${live}</b><p>Channels</p></article><article><span>ON DEMAND</span><b>${movies}</b><p>Movies</p></article><article><span>SERIES</span><b>${series}</b><p>Series</p></article><p class="numbers-note">Catalog numbers are supplied snapshots. Ask support to confirm current availability for your location.</p></section>
  <section class="moving-section"><p class="panel-label">CONTENT DISCOVERY</p><h2>More to explore,<br>one clear route.</h2><div class="ticker" aria-label="Sports and event names"><div>beIN SPORTS <i>✦</i> Canal+ France <i>✦</i> Sky Sports <i>✦</i> DAZN <i>✦</i> TNT Sports <i>✦</i> Champions League <i>✦</i> Premier League <i>✦</i> Formula 1 <i>✦</i> UFC <i>✦</i>&nbsp; beIN SPORTS <i>✦</i> Canal+ France <i>✦</i> Sky Sports <i>✦</i> DAZN <i>✦</i> TNT Sports <i>✦</i> Champions League <i>✦</i> Premier League <i>✦</i> Formula 1 <i>✦</i> UFC <i>✦</i></div></div><div class="ticker reverse" aria-label="Streaming platform names"><div>Netflix <i>●</i> Disney+ <i>●</i> Prime Video <i>●</i> Apple TV+ <i>●</i> HBO Max <i>●</i> Paramount+ <i>●</i> Shahid <i>●</i> OSN+ <i>●</i>&nbsp; Netflix <i>●</i> Disney+ <i>●</i> Prime Video <i>●</i> Apple TV+ <i>●</i> HBO Max <i>●</i> Paramount+ <i>●</i> Shahid <i>●</i> OSN+ <i>●</i></div></div></section>
  <section class="plans" id="plans"><div class="plans-intro"><p class="panel-label">CHOOSE YOUR ROUTE</p><h2>Plans made<br>easy to understand.</h2><p>Select a route, then confirm the current details with support before you order.</p></div><div class="plan-columns"><article class="plan-card annual"><span>FOR VIEWERS</span><h3>12 months</h3><p>A clear annual subscription route for one connection.</p><ul><li>12-month duration</li><li>Playlist / Xtream setup guidance</li><li>Support before activation</li></ul><a href="${wa('a 12-month subscription')}" target="_blank" rel="noopener">Ask about 12 months <b>→</b></a></article><article class="plan-card long"><span>BEST FOR LONGER TERM</span><h3>24 months</h3><p>A two-year subscription route for a longer viewing plan.</p><ul><li>24-month duration</li><li>Priority setup conversation</li><li>Support before activation</li></ul><a href="${wa('a 24-month subscription')}" target="_blank" rel="noopener">Ask about 24 months <b>→</b></a></article></div></section>
  <section class="reseller"><div><p class="panel-label">FOR RESELLERS</p><h2>Start small.<br><em>Grow clearly.</em></h2><p>Tell support how many customer accounts you want to manage. They will confirm the current credit format for ${name}.</p><a href="${wa('reseller options')}" target="_blank" rel="noopener">Discuss reseller options <span>→</span></a></div><div class="reseller-grid"><article><b>10</b><span>Starter<br>accounts</span></article><article><b>30</b><span>Growth<br>accounts</span></article><article><b>50</b><span>Scale<br>accounts</span></article><article><b>100+</b><span>Enterprise<br>accounts</span></article></div></section>
  <section class="trial"><div><p class="panel-label">TRY BEFORE DECIDING</p><h2>Need a playlist test?</h2><p>Ask support about a free M3U or Xtream test line. It is for checking setup compatibility, not a reseller panel purchase.</p></div><a href="${wa('a free M3U / Xtream playlist trial')}" target="_blank" rel="noopener">Request a free trial <span>→</span></a></section>
 </main>
 <footer class="panel-footer"><span>OTT Provider · Direct support for panel questions</span><a href="https://t.me/premiumiptvpanelscom" target="_blank" rel="noopener">Telegram</a><a href="mailto:support@reselleriptv.com">support@reselleriptv.com</a></footer>`;
}
