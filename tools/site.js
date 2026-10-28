/* Shared renderer for the creator booklet site. renderSite(d) -> HTML string; bindSite(root,d) wires interactions. */
var SITE_EMAIL='pei@trusteebio.com';
function _e(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function _mark(t,m){t=_e(t);if(m){var em=_e(m);var i=t.indexOf(em);if(i>=0)return t.slice(0,i)+'<mark>'+em+'</mark>'+t.slice(i+em.length);}return t;}
function _br(t){return _e(t).replace(/\n/g,'<br>');}
var SITE_PRODUCTS={
  toner:{img:'img/toner.jpg',name:'700V 肌光露',spec:'150 mL · 化妝水質地 · 菸鹼醯胺'},
  ampoule:{img:'img/ampoule.jpg',name:'700V 安瓶精華',spec:'菸鹼醯胺 5% · 腺苷 · 穀胱甘肽 7,000 ppm'},
  cream:{img:'img/cream.jpg',name:'700V 修護面霜',spec:'角鯊烷 · 腺苷 · 柔滑不黏'}
};
function renderSite(d){
  d=d||{};var h=d.hero||{},c1=d.c1||{},c2=d.c2||{},c3=d.c3||{},c4=d.c4||{},c5=d.c5||{},c6=d.c6||{},rp=d.reply||{};
  var name=d.creator_name||'',ch=d.channel||'';
  var scenes=(c4.scenes||[]).slice(0,4),def=Math.min(Math.max(c4.default||0,0),Math.max(scenes.length-1,0));
  var s0=scenes[def]||{},p0=SITE_PRODUCTS[s0.p]||SITE_PRODUCTS.ampoule;
  var head=function(no,en,title,mark,intro){return '<div class="ch-head"><span class="ch-no">'+no+'</span><div><span class="label">'+en+'</span><h2>'+_mark(title,mark)+'</h2>'+(intro?'<p>'+_e(intro)+'</p>':'')+'</div></div>';};
  var o='';
  o+='<div class="rail band"><div class="inner"><span class="brand">Angel\'s Liquid × '+_e(ch||name)+'</span><button class="music" type="button" data-music aria-pressed="false"><span class="eq" aria-hidden="true"><i></i><i></i><i></i></span><span data-music-label>音樂</span></button><nav aria-label="章節">'
   +'<a href="#c1"><b>1</b>你們</a><a href="#c2"><b>2</b>我們</a><a href="#c3"><b>3</b>相遇</a><a href="#c4"><b>4</b>你的一天</a><a href="#c5"><b>5</b>猜猜看</a><a href="#c6"><b>6</b>一起</a><a href="#reply"><b>✓</b>回覆</a></nav></div><div class="bar" data-bar></div></div>';
  o+='<header class="cover band"><div class="inner"><div><span class="label">'+_e(h.eyebrow||('For '+name+' · 專屬頁面'))+'</span><h1>'+_e(h.title_l1||'')+'<br>'+_e(h.title_l2||'')+'</h1><p>'+_e(h.sub||'')+'</p><p class="from">來自 Angel\'s Liquid 台灣　Pei</p><button class="music-cta" type="button" data-music aria-pressed="false">♪ 開啟音樂，慢慢看</button></div>'
   +'<nav class="toc" aria-label="目錄"><span class="label">Contents</span><a href="#c1"><b>01</b><span>你們的故事</span></a><a href="#c2"><b>02</b><span>我們的故事</span></a><a href="#c3"><b>03</b><span>兩個故事的相遇</span></a><a href="#c4"><b>04</b><span>鏡頭外的一天</span></a><a href="#c5"><b>05</b><span>三個你可能不知道的小事</span></a><a href="#c6"><b>06</b><span>如果我們一起</span></a></nav></div></header><main>';
  // 1
  o+='<section class="ch band" id="c1"><div class="inner">'+head('01','Your story · 你們的故事',c1.title,c1.mark,c1.intro)+'<ol class="tl">';
  (c1.timeline||[]).slice(0,4).forEach(function(t){o+='<li><span class="yr">'+_e(t.k)+'</span><b>'+_e(t.b)+'</b><span>'+_e(t.s)+'</span></li>';});
  o+='</ol>';
  if(c1.quote&&c1.quote.text){o+='<div class="quote"><span class="q" aria-hidden="true">“</span><div><blockquote>'+_e(c1.quote.text)+'</blockquote>'+(c1.quote.cite?'<cite>'+_e(c1.quote.cite)+'</cite>':'')+(c1.quote.reflection?'<p>'+_e(c1.quote.reflection)+'</p>':'')+'</div></div>';}
  else if(c1.reflection){o+='<div class="quote"><span class="q" aria-hidden="true">“</span><div><p style="margin:0">'+_e(c1.reflection)+'</p></div></div>';}
  o+='</div></section>';
  // 2
  o+='<section class="ch band alt" id="c2"><div class="inner">'+head('02','Our story · 我們的故事',c2.title||'我們也只做一件事，做了十年',c2.mark||'做一件事',c2.intro||'Angel\'s Liquid 2016 年在首爾成立，自己的工廠、自己的研發團隊，從頭到尾只研究一個成分。')+'<div class="rows">'
   +'<div class="row"><div class="media"><img src="img/powder.jpg" alt="穀胱甘肽原料粉末"></div><div class="txt"><span class="label">From clinic to home</span><h3>韓國醫美診所的人氣成分，變成每天在家擦的保養</h3><p>穀胱甘肽由三種胺基酸組成，是人體本來就有的抗氧化成分，在韓國醫美診所很受歡迎。'+_e(c2.bridge||'但不是每個人都有時間跑診所。我們想把它帶回家。')+'</p></div></div>'
   +'<div class="row flip-r"><div class="media"><img src="img/liposome.jpg" alt="脂質體包覆穀胱甘肽示意圖"></div><div class="txt"><span class="label">Ten years</span><span class="big">300 → 7,000<small>ppm</small></span><h3>十年，把濃度提高約 23 倍</h3><p>穀胱甘肽不容易處理。我們用脂質體把還原型穀胱甘肽包起來，讓它穩定地傳遞。提高濃度的同時，也顧到配方、穩定度和擦起來的感覺。</p></div></div>'
   +'<div class="row"><div class="media"><img src="img/extracts.jpg" alt="12 種天然萃取"></div><div class="txt"><span class="label">Honest formula</span><h3>12 種天然萃取，<mark>不加香精</mark></h3><p>穀胱甘肽含硫，原料本身有氣味。很多品牌會用香精蓋掉，我們選擇保留。三款都通過皮膚刺激測試，判定為無刺激，適合每天用。</p></div></div></div>'
   +'<div class="proofs"><div class="proof"><b>10 年</b><span>只研究穀胱甘肽</span></div><div class="proof"><b>7,000</b><span>ppm 高濃度</span></div><div class="proof"><b>雙機能</b><span>韓國美白＋抗皺認證</span></div><div class="proof"><b>無刺激</b><span>三款皆通過刺激測試</span></div></div>'
   +'<div class="doc">研發顧問　<b>韓國 NEO 整形外科 朴正一 院長</b>　韓國整形外科經驗 20 年以上</div></div></section>';
  // 3
  o+='<section class="ch band" id="c3"><div class="inner">'+head('03','Where we meet · 兩個故事的相遇',c3.title||'我們發現，你們跟我們很像',c3.mark||'你們跟我們很像','')+'<div class="meet">';
  (c3.pairs||[]).slice(0,3).forEach(function(p){o+='<div class="pair"><div class="you"><span class="who">'+_e((ch||name).toUpperCase())+'</span><b>'+_e(p.you_b)+'</b><span>'+_e(p.you_s)+'</span></div><div class="mid">'+_br(p.mid)+'</div><div class="us"><span class="who">ANGEL\'S LIQUID</span><b>'+_e(p.us_b)+'</b><span>'+_e(p.us_s)+'</span></div></div>';});
  o+='</div></div></section>';
  // 4
  o+='<section class="ch band alt" id="c4"><div class="inner">'+head('04','Your day · 鏡頭外的一天',c4.title||'你最常是哪一個時刻？',c4.mark||'哪一個時刻',c4.intro||'點一個，我們告訴你那個時刻最適合哪一瓶。')+'<div class="scenes" role="group" aria-label="選擇一個時刻">';
  scenes.forEach(function(s,i){o+='<button class="scene" type="button" aria-pressed="'+(i===def)+'" data-i="'+i+'"><span class="t">'+_e(s.t)+'</span><b>'+_e(s.b)+'</b><span>'+_e(s.s)+'</span></button>';});
  o+='</div><div class="answer" aria-live="polite"><img data-ans-img src="'+p0.img+'" alt="'+_e(p0.name)+'"><div class="body"><span class="label" data-ans-tag>'+_e(s0.t||'')+' 的你</span><span class="name" data-ans-name>'+_e(p0.name)+'</span><span class="spec" data-ans-spec>'+_e(p0.spec)+'</span><p data-ans-why>'+_e(s0.why||'')+'</p></div></div>';
  o+='<div class="routine"><div class="ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="52" fill="none" stroke="#2E3035" stroke-width="6"/><circle data-arc cx="60" cy="60" r="52" fill="none" stroke="#D12A3B" stroke-width="6" stroke-linecap="round" stroke-dasharray="326.73" stroke-dashoffset="0"/></svg><div class="face"><span class="sec" data-sec>60</span><small>SECONDS</small></div></div>'
   +'<div><span class="label" style="color:#F07A86">Your 60 seconds</span><h3>'+_e(c4.routine_title||'三個步驟，60 秒保養')+'</h3><p data-rstat>三個步驟剛好 60 秒。按開始，跟著做一次看看。</p><div class="rsteps">'
   +'<div class="rstep on" data-rs><img src="img/step1.jpg" alt="肌光露質地"><div><b>01 肌光露</b>0–15 秒　拍勻打底</div></div>'
   +'<div class="rstep on" data-rs><img src="img/step2.jpg" alt="安瓶精華質地"><div><b>02 安瓶精華</b>15–40 秒　按壓吸收</div></div>'
   +'<div class="rstep on" data-rs><img src="img/step3.jpg" alt="修護面霜質地"><div><b>03 修護面霜</b>40–60 秒　最後鎖水</div></div></div>'
   +'<button class="go" data-timer type="button">開始我的 60 秒</button></div></div></div></section>';
  // 5
  o+='<section class="ch band" id="c5"><div class="inner">'+head('05','Guess · 猜猜看','三個你可能不知道的小事','你可能不知道','點卡片翻到背面看答案。')+'<div class="flips">';
  (c5.flips||[]).slice(0,3).forEach(function(f){o+='<button class="flip" type="button" aria-pressed="false"><div class="card"><div class="side front"><b>'+_e(f.q)+'</b><span>翻開看答案 →</span></div><div class="side back"><span class="t">ANSWER</span><p>'+_e(f.a)+'</p></div></div></button>';});
  o+='</div></div></section>';
  // 6
  o+='<section class="ch band alt" id="c6"><div class="inner">'+head('06','Together · 如果我們一起',c6.title||'幫你們先想了三個拍攝點子',c6.mark||'三個','')+'<div class="ideas">';
  (c6.ideas||[]).slice(0,3).forEach(function(x){o+='<div class="idea"><span class="fmt">'+_e(x.fmt)+'</span><h3>'+_e(x.title)+'</h3><p>'+_e(x.how)+'</p></div>';});
  o+='</div><p class="aside">'+_e(c6.aside||'只是靈感，怎麼拍、拍不拍都由你們決定。')+'</p>'
   +'<ol class="steps"><li><b>寄出三款正貨</b><span>肌光露、安瓶、面霜各一份，不需要發文。</span></li><li><b>用幾週看看</b><span>喜歡的話，再跟我們聊聊感受。</span></li><li><b>再談合作</b><span>Reels、限動或團購分潤，形式一起討論。</span></li></ol>'
   +'<span class="perk">合作創作者可優先參加韓國總公司參訪與品牌活動</span></div></section>';
  // reply
  o+='<section class="ch band" id="reply"><div class="inner"><div class="reply"><div class="head"><span class="label">Reply · 回覆 Pei</span><h2>'+_e(rp.title||'看到這裡，謝謝你')+'</h2>'
   +'<p>填好寄送資料，按「寄出回覆給 Pei」，會直接打開你的郵件，內容都幫你寫好了，按送出就完成。不想合作也沒關係，選「這次先不用」寄出一聲就好。</p>'
   +'<ol class="how"><li>選下一步、填寄送資料</li><li>按「寄出回覆給 Pei」</li><li>在打開的郵件裡按送出</li></ol></div>'
   +'<div class="form"><div class="gift"><img src="img/group.jpg" alt=""><div><b>三款正貨都會寄給你</b><span>700V 肌光露、安瓶精華、修護面霜各一份，不需要發文。</span></div></div>'
   +'<div class="grp"><span>接下來想怎麼做？</span><div class="chips" role="group" aria-label="下一步"><button class="chip ac" type="button" aria-pressed="true" data-v="send">寄給我們試試</button><button class="chip ac" type="button" aria-pressed="false" data-v="more">想先多了解合作</button><button class="chip ac" type="button" aria-pressed="false" data-v="no">這次先不用</button></div></div>'
   +'<div class="ship" data-ship><label><span>聯絡人 <em>*</em></span><input data-f="name" type="text" autocomplete="name" placeholder="收件人姓名"></label><label><span>聯絡電話 <em>*</em></span><input data-f="phone" type="tel" autocomplete="tel" placeholder="例：0912-345-678"></label><label class="wide"><span>收件地址 <em>*</em></span><input data-f="addr" type="text" autocomplete="street-address" placeholder="縣市、區、路段、門牌"></label></div>'
   +'<p class="err" data-err role="alert" hidden></p><label>想對 Pei 說的話（可略過）<textarea data-f="note" placeholder="例：最近皮膚比較乾、想先問成分"></textarea></label>'
   +'<a class="send" data-make href="mailto:'+SITE_EMAIL+'" target="_blank" rel="noopener" role="button">寄出回覆給 Pei　→</a><div class="out" data-out hidden><p style="font-size:14px;color:var(--ink);font-weight:700;margin:0">沒有跳出郵件的話，複製下面的內容回信給 Pei：</p><pre data-out-text></pre><button class="ghost" data-copy type="button">複製回覆</button><span data-copied style="font-size:13px;color:var(--crimson)" hidden>已複製</span>'
   +'<p style="font-size:14px;color:var(--muted)">複製好了就回到 Pei 寄給你的信，按「回覆」貼上送出。找不到那封信的話，也可以寄到 <span class="addr">'+SITE_EMAIL+'</span></p></div></div></div></div></section></main>';
  o+='<footer class="band"><div class="inner"><span><b>Angel\'s Liquid</b>　EST. 2016 · SEOUL　台灣由 TRUSTEE BiOMED 信賴生醫引進</span><span>這一頁只為 '+_e(ch||name)+' 製作 · Pei <span class="addr" style="color:#fff">'+SITE_EMAIL+'</span></span></div></footer>';
  return o;
}

/* Original ambient music, synthesized live with Web Audio (no audio file, no licensing). */
function SiteMusic(win){
  /* Plays the licensed track "Cafe Lofi" (Pixabay, zephiramusic) from the page's own files: loop, gentle fade in/out. */
  var A=null,on=false,fade=null,TARGET=0.55,cbs=[];
  function el(){ if(!A){ A=new win.Audio('audio/cafe-lofi.mp3'); A.loop=true; A.preload='auto'; A.volume=0;
      ['play','playing','pause'].forEach(function(ev){A.addEventListener(ev,function(){cbs.forEach(function(f){try{f();}catch(e){}});});}); } return A; }
  function ramp(to,ms,done){ var a=el(); if(fade) win.clearInterval(fade); var from=a.volume,t0=Date.now();
    fade=win.setInterval(function(){ var k=Math.min(1,(Date.now()-t0)/ms); try{a.volume=Math.max(0,Math.min(1,from+(to-from)*k));}catch(e){} if(k>=1){ win.clearInterval(fade); fade=null; if(done) done(); } },50); }
  function tryPlay(){ var a=el(); var p=a.play(); if(p&&p.then){ p.then(function(){ ramp(TARGET,2200); }).catch(function(){}); } else ramp(TARGET,2200); }
  return {
    start:function(){ on=true; tryPlay(); },
    stop:function(){ on=false; if(A) ramp(0,900,function(){ if(!on) A.pause(); }); },
    unlock:function(){ if(on&&(!A||A.paused)) tryPlay(); },
    playing:function(){ return !!(on&&A&&!A.paused); },
    isOn:function(){ return on; },
    onState:function(fn){ if(cbs.indexOf(fn)<0) cbs.push(fn); },
    toggle:function(){ if(on) this.stop(); else this.start(); return on; },
    supported:typeof win.Audio==='function'
  };
}
function bindSite(root,d,win,opts){
  win=win||window;var doc=root.ownerDocument||document;
  var q=function(s){return root.querySelector(s);},qa=function(s){return Array.prototype.slice.call(root.querySelectorAll(s));};
  var scenes=((d.c4||{}).scenes||[]).slice(0,4),sign=(d.reply||{}).sign||d.creator_name||'';
  // rail
  var links=qa('.rail nav a'),bar=q('[data-bar]');
  function onScroll(){var el=doc.documentElement,max=el.scrollHeight-el.clientHeight;if(bar)bar.style.width=(max>0?Math.min(100,el.scrollTop/max*100):0)+'%';var cur=-1;links.forEach(function(a,i){var s=root.querySelector(a.getAttribute('href'));if(s&&s.getBoundingClientRect().top<win.innerHeight*0.4)cur=i;});links.forEach(function(a,i){a.classList.toggle('on',i===cur);});}
  win.addEventListener('scroll',onScroll,{passive:true});onScroll();
  links.concat(qa('.toc a')).forEach(function(a){a.addEventListener('click',function(e){var t=root.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}});});

  // music: on by default; browsers only allow sound after the first tap, so it starts on the first interaction anywhere
  opts=opts||{};
  var music=SiteMusic(win),mbtns=qa('[data-music]'),want=!!opts.autoMusic;
  if(!music.supported){mbtns.forEach(function(b){b.hidden=true;});}
  function ui(){var pl=music.playing(),pend=want&&!pl;mbtns.forEach(function(x){x.setAttribute('aria-pressed',want);});
    var l=q('[data-music-label]');if(l)l.textContent=pl?'音樂播放中':(pend?'音樂即將開始':'音樂');
    var c=q('.music-cta');if(c)c.textContent=pl?'♪ 音樂播放中（點一下關閉）':(pend?'♪ 點一下畫面，音樂就會開始':'♪ 開啟音樂，慢慢看');}
  function unlockAll(){ if(want){ music.unlock(); win.setTimeout(ui,120); } if(music.playing()){ ['pointerdown','keydown','touchend'].forEach(function(ev){doc.removeEventListener(ev,unlockAll,true);}); } }
  if(want&&music.supported){ music.start(); music.onState(ui); ['pointerdown','keydown','touchend'].forEach(function(ev){doc.addEventListener(ev,unlockAll,true);}); }
  mbtns.forEach(function(b){b.addEventListener('click',function(){
    if(want&&!music.playing()){ music.unlock(); }
    else if(want){ music.stop(); want=false; }
    else { want=true; music.start(); music.onState(ui); music.unlock(); }
    win.setTimeout(ui,150); ui(); });});
  ui();
  // scenes
  qa('.scene').forEach(function(b){b.addEventListener('click',function(){qa('.scene').forEach(function(x){x.setAttribute('aria-pressed',x===b);});var s=scenes[+b.dataset.i]||{},p=SITE_PRODUCTS[s.p]||SITE_PRODUCTS.ampoule;
    q('[data-ans-img]').src=p.img;q('[data-ans-img]').alt=p.name;q('[data-ans-name]').textContent=p.name;q('[data-ans-spec]').textContent=p.spec;q('[data-ans-why]').textContent=s.why||'';q('[data-ans-tag]').textContent=(s.t||'')+' 的你';});});
  // timer
  var C=326.73,arc=q('[data-arc]'),sec=q('[data-sec]'),btn=q('[data-timer]'),rs=qa('[data-rs]'),raf=null,t0=0;
  var msg=['01 肌光露：倒在手心，輕拍全臉。','02 安瓶精華：兩三滴，按壓到吸收。','03 修護面霜：薄薄一層，把水分鎖住。'];
  function frame(now){var el=Math.min(60,(now-t0)/1000);sec.textContent=Math.ceil(60-el);arc.setAttribute('stroke-dashoffset',String(C*el/60));var i=el<15?0:el<40?1:2;rs.forEach(function(r,k){r.classList.toggle('on',k===i&&el<60);});q('[data-rstat]').textContent=el<60?msg[i]:'完成。今天也辛苦了。';if(el<60)raf=win.requestAnimationFrame(frame);else{raf=null;btn.textContent='再來一次';rs.forEach(function(r){r.classList.add('on');});}}
  if(btn)btn.addEventListener('click',function(){if(raf)win.cancelAnimationFrame(raf);t0=win.performance.now();btn.textContent='進行中…';raf=win.requestAnimationFrame(frame);});
  // flips
  qa('.flip').forEach(function(f){f.addEventListener('click',function(){f.setAttribute('aria-pressed',f.getAttribute('aria-pressed')!=='true');});});
  // reply
  var acs=qa('.ac'),val=function(k){return (q('[data-f="'+k+'"]').value||'').trim();};
  acs.forEach(function(c){c.addEventListener('click',function(){acs.forEach(function(x){x.setAttribute('aria-pressed',x===c);});q('[data-ship]').hidden=c.dataset.v!=='send';q('[data-err]').hidden=true;q('[data-out]').hidden=true;});});
  var subj='Re: 我們把 '+(d.channel||d.creator_name||'')+' 的故事整理成一頁｜Angel\'s Liquid 品牌合作';
  function build(){var v=acs.filter(function(x){return x.getAttribute('aria-pressed')==='true';})[0].dataset.v;
    var n=val('name'),ph=val('phone'),ad=val('addr'),note=val('note'),miss=[];
    if(v==='send')miss=[!n&&'聯絡人',!ph&&'聯絡電話',!ad&&'收件地址'].filter(Boolean);
    var t='Pei 你好，\n\n';
    if(v==='send')t+='我們想試試看三款產品，寄送資料如下：\n聯絡人：'+n+'\n聯絡電話：'+ph+'\n收件地址：'+ad+'\n';
    else if(v==='more')t+='想先多了解合作方式，方便的話再跟我們說說。\n';else t+='這次先不用，謝謝你做的這一頁。\n';
    if(note)t+='\n'+note+'\n';t+='\n'+sign;return {t:t,miss:miss};}
  function refresh(){var r=build();q('[data-make]').setAttribute('href','mailto:'+SITE_EMAIL+'?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(r.t));}
  qa('[data-f]').forEach(function(i){i.addEventListener('input',refresh);});acs.forEach(function(c){c.addEventListener('click',refresh);});refresh();
  q('[data-make]').addEventListener('click',function(e){var r=build(),err=q('[data-err]');err.hidden=true;
    if(r.miss.length){e.preventDefault();err.textContent='請填寫'+r.miss.join('、')+'，我們才能寄出。';err.hidden=false;q('[data-out]').hidden=true;return;}
    refresh();q('[data-out-text]').textContent=r.t;q('[data-copied]').hidden=true;win.setTimeout(function(){q('[data-out]').hidden=false;},600);});
  q('[data-copy]').addEventListener('click',function(){var t=q('[data-out-text]').textContent,ok=function(){q('[data-copied]').hidden=false;};var sel=function(){var r=doc.createRange();r.selectNodeContents(q('[data-out-text]'));var s=win.getSelection();s.removeAllRanges();s.addRange(r);};try{win.navigator.clipboard.writeText(t).then(ok,sel);}catch(e){sel();}});
}
