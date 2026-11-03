/* 利用状況の匿名集計(PostHog / EUクラウド)。
   方針: Cookieも端末内への保存も使わない(persistence: memory)。画面の種類・機能名・件数だけを送り、
   イベント名・メンバー名・金額・振込先・共有リンク(#以降)の中身は送らない。
   ブラウザの Do Not Track / Global Privacy Control がオンなら何も送らない。
   本番(github.io)以外(localhost など)でも送らない。 */
(function () {
  var nav = navigator;
  var optedOut = nav.doNotTrack === '1' || window.doNotTrack === '1' || nav.msDoNotTrack === '1' || nav.globalPrivacyControl === true;
  var isProd = /\.github\.io$/.test(location.hostname);
  window.__track = function () {};
  if (optedOut || !isProd) return;

  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  posthog.init('phc_vJh3JzN6bTTasdJ4GR6j5kohEhfsPrwx4WWktPYT8hq5', {
    api_host: 'https://eu.i.posthog.com',
    ui_host: 'https://eu.posthog.com',
    persistence: 'memory',            // Cookie・localStorage を使わない(読み込みごとに匿名IDが変わる)
    person_profiles: 'identified_only', // 個人プロファイルは作らない
    autocapture: false,               // クリックや入力内容を自動で拾わない
    capture_pageview: false,          // 画面の表示は、アプリ側から種類だけを送る(#以降を送らないため)
    capture_pageleave: true,          // 滞在時間の計測用
    disable_session_recording: true,
    disable_surveys: true,
    sanitize_properties: function (props) {
      ['$current_url', '$referrer', '$initial_referrer', '$initial_current_url'].forEach(function (k) {
        if (typeof props[k] === 'string') props[k] = props[k].split('#')[0]; // 共有リンクの中身(#以降)を絶対に送らない
      });
      return props;
    }
  });

  window.__track = function (name, props) {
    try { posthog.capture(name, Object.assign({}, window.__ctx || {}, props || {})); } catch (e) {}
  };
})();
