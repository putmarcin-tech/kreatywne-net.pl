// kreatywne-net: filcowe akcenty z kampanii 
(function () {
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  function felt(src, cls) { const i = document.createElement('i'); i.className = 'felt ' + cls; i.style.backgroundImage = 'url(img/craft/' + src + ')'; i.setAttribute('aria-hidden', 'true'); return i; }

  // usługi: filcowy monitor przy stronach www, robot przy biurku przy agentach AI
  const svcs = $$('.svc');
  if (svcs[0]) svcs[0].appendChild(felt('monitor.webp', 'f-monitor'));
  if (svcs[1]) svcs[1].appendChild(felt('robot-biurko.webp', 'f-robot'));

  // kontakt: filcowy robot przy pomarańczowym kablu
  const lead = $('#kontakt .lead');
  if (lead) lead.appendChild(felt('robot.webp', 'k-robot'));
})();
