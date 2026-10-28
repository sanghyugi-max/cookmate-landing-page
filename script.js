/* 화면 구성 코드입니다. 문구·연락처·영상 수정은 config.js에서 하세요. */
(() => {
  'use strict';
  const c = window.COOKMATE_CONFIG;
  const app = document.getElementById('app');
  if (!c) { app.textContent = 'config.js 설정 파일을 불러오지 못했습니다. 파일이 같은 폴더에 있는지 확인해 주세요.'; return; }
  const e = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  // 설정 내용을 HTML이 아닌 일반 텍스트로 출력합니다.
  const safeURL = (value, local = false) => {
    if (!value || /[\u0000-\u001f]/.test(value)) return '';
    if (/^https?:\/\//i.test(value)) { try { return new URL(value).href; } catch { return ''; } }
    if (local && !/^[a-z][a-z0-9+.-]*:/i.test(value) && !/^[\\/]/.test(value)) return value;
    return '';
  };
  const phone = /^\+?[\d\s()-]{5,25}$/.test(c.contact.phone) ? c.contact.phone.replace(/[\s()-]/g, '') : '';
  const contactURL = safeURL(c.contact.url);
  const destination = contactURL || (phone ? `tel:${phone}` : '');
  const actionIcon = href => href && String(href).startsWith('tel:')
    ? '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.4 2.6.7 4 .7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.4.2 2.7.7 4 .1.4 0 .8-.3 1.2l-2.3 2.2Z"/></svg>'
    : '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.7 1.8 5.1 4.5 6.5l-1 3.6c-.1.3.3.6.6.4l4.3-2.8c.5.1 1.1.1 1.6.1 5.5 0 10-3.5 10-7.8S17.5 3 12 3Z"/></svg>';
  const action = (label = c.buttons.consult, secondary = false, href = destination) => href
    ? `<a class="button${secondary ? ' secondary' : ''}" href="${e(href)}">${actionIcon(href)}${e(label)}</a>`
    : `<button type="button" class="button" aria-disabled="true" aria-describedby="contact-note">${e(c.contact.pending)}</button>`;
  const badge = (text = c.labels.placeholder) => `<span class="badge">${e(text)}</span>`;
  const head = s => `<div class="section-head"><p class="eyebrow">${e(s.eyebrow)}</p><h2>${e(s.title)}</h2>${s.intro ? `<p>${e(s.intro)}</p>` : ''}${s.placeholder ? badge(c.labels.example) : ''}</div>`;
  const section = (id, s, body, soft = false) => `<section id="${id}" class="section${soft ? ' soft' : ''}"><div class="wrap">${head(s)}${body}</div></section>`;
  // 원본 카탈로그는 그대로 보관하고 제품 사진 영역만 화면에 표시합니다.
  const modelPhoto = m => {
    const url = safeURL(m.image,true); if (!url) return '';
    const crop = m.photoCrop;
    if (!crop) return `<img class="model-photo" src="${e(url)}" alt="${e(m.alt)}" loading="lazy">`;
    const {x,y,width,height,sourceWidth} = crop;
    if (![x,y,width,height,sourceWidth].every(Number.isFinite) || width <= 0 || height <= 0) return '';
    return `<div class="model-photo-crop" style="aspect-ratio:${width}/${height}"><img src="${e(url)}" alt="${e(m.alt)}" loading="lazy" style="width:${sourceWidth/width*100}%;left:${-x/width*100}%;top:${-y/height*100}%"></div>`;
  };
  const carousel = (label, slides, extra = '') => `<div class="carousel ${extra}" role="region" aria-roledescription="슬라이드" aria-label="${e(label)}" tabindex="0"><div class="carousel-viewport">${slides.map((slide,i) => `<div class="carousel-slide" role="group" aria-roledescription="슬라이드" aria-label="${i+1} / ${slides.length}" ${i ? 'hidden' : ''}>${slide}</div>`).join('')}</div><div class="carousel-controls"><button type="button" data-prev aria-label="이전 사진">←</button><span data-count aria-live="polite">1 / ${slides.length}</span><button type="button" data-next aria-label="다음 사진">→</button><button type="button" data-play aria-label="자동 넘김 일시정지">일시정지</button></div></div>`;
  const modelCards = () => c.specs.models?.length ? carousel('그릴메이트 제품 사진 및 사양', c.specs.models.map(m => `<article class="model-card">${modelPhoto(m)}<div class="model-body"><span class="ordinal">${e(m.code)}</span><h3>${e(m.name)}</h3><dl>${['size','gas','power','weight'].map(k => `<div><dt>${e(c.specs.modelLabels[k])}</dt><dd>${e(m[k])}</dd></div>`).join('')}</dl></div></article>`), 'model-carousel') : '';
  const installationPhotos = () => carousel('매장 설치 사진', c.cases.items.map(x => `<article class="case"><div class="case-image"><img src="${e(safeURL(x.image,true))}" alt="${e(x.alt)}" loading="lazy"></div><div class="case-body"><span class="case-kind">${e(x.category)}</span><h3>${e(x.title)}</h3></div></article>`), 'installation-carousel');
  document.title = c.meta.title;
  document.querySelector('meta[name="description"]').content = c.meta.description;
  app.innerHTML = `
    <a class="skip" href="#main">${e(c.buttons.skip)}</a>
    ${c.draft.show ? `<div class="draft">${e(c.draft.text)}</div>` : ''}
    <header class="header"><div class="wrap header-inner">
      <a class="brand" href="#top" aria-label="${e(c.brand.korean)}"><strong>${e(c.brand.name)}</strong><small>${e(c.brand.descriptor)}</small></a>
      <nav aria-label="주요 메뉴">${c.navigation.map(n => `<a href="#${e(n.target)}">${e(n.label)}</a>`).join('')}</nav>${action()}
    </div></header>
    <main id="main"><section class="hero" id="top"><div class="wrap hero-grid">
      <div><p class="eyebrow">${e(c.hero.eyebrow)}</p><h1>${e(c.hero.title)}</h1><p class="lead">${e(c.hero.description)}</p>
        <div class="actions">${action()}<a class="button secondary" href="#product-video">${e(c.buttons.watch)} <span aria-hidden="true">↓</span></a></div>
        <div class="tags">${c.hero.tags.map(t => `<span>${e(t)}</span>`).join('')}</div>
      </div>
      <div class="media-panel" id="product-video"><div class="media-heading"><small>${e(c.hero.mediaLabel)}</small><h2>${e(c.hero.mediaTitle)}</h2></div><div id="video-slot"></div><p class="media-note">${e(c.hero.mediaNote)}</p></div>
    </div></section>
    ${section('problem', c.problem, `<div class="grid three">${c.problem.items.map((x,i) => `<article class="card"><span class="ordinal">0${i+1}</span><h3>${e(x.title)}</h3><p>${e(x.text)}</p></article>`).join('')}</div>`, true)}
    ${section('how', c.how, `<div class="grid four">${c.how.items.map((x,i) => `<article class="step"><span class="ordinal">${String(i+1).padStart(2,'0')} / ${e(c.labels.number)}</span><h3>${e(x.title)}</h3><p>${e(x.text)}</p>${x.image ? `<img class="step-media" src="${e(x.image)}" alt="${e(x.title)} 작동 영상" loading="lazy">` : ''}</article>`).join('')}</div>`)}
    ${section('benefits', c.benefits, `<div class="grid two">${c.benefits.items.map((x,i) => `<article class="benefit"><h3><span aria-hidden="true">${String(i+1).padStart(2,'0')}</span>${e(x.title)}</h3><p>${e(x.text)}</p></article>`).join('')}</div>`, true)}
    ${section('cases', c.cases, installationPhotos())}
    ${section('comparison', c.comparison, `<div class="table-wrap"><table class="compare"><thead><tr><th scope="col">${e(c.comparison.before)}</th><th scope="col">${e(c.comparison.after)}</th></tr></thead><tbody>${c.comparison.rows.map(r => `<tr><td>${e(r[0])}</td><td>${e(r[1])}</td></tr>`).join('')}</tbody></table></div>`, true)}
    ${section('specs', c.specs, `${modelCards()}<div class="table-wrap"><table class="specs"><tbody>${c.specs.rows.map(r => `<tr><th scope="row">${e(r.label)}</th><td>${r.placeholder ? badge() : ''}<span>${e(r.value)}</span></td></tr>`).join('')}</tbody></table></div>`)}
    ${section('faq', c.faq, c.faq.items.map(x => `<details><summary>${e(x.question)}</summary><p>${e(x.answer)}</p>${x.placeholder ? badge() : ''}</details>`).join(''))}
    <section id="contact" class="cta"><div class="wrap cta-inner"><div><p class="eyebrow">${e(c.cta.eyebrow)}</p><h2>${e(c.cta.title)}</h2><p>${e(c.cta.text)}</p></div><div><div class="actions">${action()}${phone && contactURL ? action(c.buttons.phone,true,`tel:${phone}`) : ''}</div><p id="contact-note" class="contact-note">${e(destination ? c.contact.hours : c.contact.note)}</p>${phone ? `<p>${e(c.buttons.phone)} · ${e(c.contact.phone)}</p>` : ''}</div></div></section>
    </main><footer class="footer"><div class="wrap footer-inner"><div><strong>${e(c.brand.name)} · ${e(c.brand.korean)}</strong><p>${e(c.brand.footer)}</p><p>${e(c.contact.business)}</p><p>${e(c.brand.copyright)}</p></div><a href="#top">${e(c.buttons.backTop)} ↑</a></div></footer>
    <div class="bottom-bar">${action()}</div>`;

  document.querySelectorAll('.carousel').forEach(root => {
    const slides = [...root.querySelectorAll('.carousel-slide')];
    const count = root.querySelector('[data-count]');
    const play = root.querySelector('[data-play]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let index = 0, playing = !reducedMotion.matches, timer;
    const show = next => {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide,i) => { slide.hidden = i !== index; });
      count.textContent = `${index+1} / ${slides.length}`;
    };
    const stop = () => { clearInterval(timer); };
    const sync = () => {
      stop();
      play.textContent = playing ? '일시정지' : '자동 넘김';
      play.setAttribute('aria-label', playing ? '자동 넘김 일시정지' : '사진 자동 넘김 시작');
      if (playing && !document.hidden && !root.matches(':hover') && !root.contains(document.activeElement)) timer = setInterval(() => show(index+1), 5000);
    };
    root.querySelector('[data-prev]').addEventListener('click', () => { show(index-1); sync(); });
    root.querySelector('[data-next]').addEventListener('click', () => { show(index+1); sync(); });
    play.addEventListener('click', () => { playing = !playing; sync(); });
    root.addEventListener('keydown', event => {
      if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
      event.preventDefault(); show(index + (event.key === 'ArrowRight' ? 1 : -1)); sync();
    });
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', sync);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', () => setTimeout(sync, 0));
    document.addEventListener('visibilitychange', sync);
    reducedMotion.addEventListener('change', () => { playing = !reducedMotion.matches; sync(); });
    sync();
  });

  const slot = document.getElementById('video-slot');
  function videoPlaceholder(message) {
    slot.innerHTML = `<div class="media-placeholder"><span class="play" aria-hidden="true">▷</span><strong>${e(message)}</strong><p>${e(c.video.help)}</p></div>`;
  }
  function youtubeID(src) {
    try {
      const u = new URL(src);
      if (!['https:', 'http:'].includes(u.protocol)) return '';
      let id = '';
      if (u.hostname === 'youtu.be') id = u.pathname.split('/')[1];
      if (['youtube.com','www.youtube.com','m.youtube.com','youtube-nocookie.com','www.youtube-nocookie.com'].includes(u.hostname)) {
        id = u.pathname === '/watch' ? u.searchParams.get('v') : /^\/(embed|shorts|live)\//.test(u.pathname) ? u.pathname.split('/')[2] : '';
      }
      return /^[a-zA-Z0-9_-]{11}$/.test(id || '') ? id : '';
    } catch { return ''; }
  }
  if (!c.video.src) videoPlaceholder(c.video.placeholder);
  else if (c.video.type === 'youtube') {
    const id = youtubeID(c.video.src);
    if (!id) videoPlaceholder(c.video.error);
    else {
      const frame = document.createElement('iframe');
      frame.className = 'video'; frame.title = c.video.title;
      frame.src = `https://www.youtube-nocookie.com/embed/${id}`;
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
      frame.allowFullscreen = true; frame.referrerPolicy = 'strict-origin-when-cross-origin';
      slot.appendChild(frame);
      const link = document.createElement('a');
      link.className = 'video-link'; link.href = `https://www.youtube.com/watch?v=${id}`;
      link.textContent = c.buttons.youtube; link.target = '_blank'; link.rel = 'noopener noreferrer'; slot.appendChild(link);
    }
  } else if (c.video.type === 'mp4' && safeURL(c.video.src,true)) {
    const video = document.createElement('video');
    video.className = 'video'; video.controls = true; video.playsInline = true; video.preload = 'metadata';
    video.setAttribute('aria-label',c.video.title);
    if (safeURL(c.video.poster,true)) video.poster = safeURL(c.video.poster,true);
    video.addEventListener('error', () => videoPlaceholder(c.video.error));
    video.src = safeURL(c.video.src,true);
    if (safeURL(c.video.captions,true)) {
      const track = document.createElement('track'); track.kind = 'captions'; track.src = safeURL(c.video.captions,true);
      track.srclang = c.video.captionLanguage; track.label = c.video.captionsLabel; track.default = true; video.appendChild(track);
    }
    slot.appendChild(video);
  } else videoPlaceholder(c.video.error);
  document.querySelectorAll('.case-image img').forEach(img => img.addEventListener('error', () => { img.parentElement.textContent = c.labels.image; }));
})();
