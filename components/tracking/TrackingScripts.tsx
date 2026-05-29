'use client'

import Script from 'next/script'

export default function TrackingScripts() {
  return (
    <>
      {/* MailerLite universal.js usuniety 2026-05-29: strona sprzedazowa nie ma formularza ML,
          a skrypt pociagal universal.css i wywolywal blad CORS w konsoli (zbedny third-party request). */}
      <Script
        id="paulina-analytics-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: `
          (function(){
            var s=sessionStorage,k='pa_sid',sid=s.getItem(k);
            if(!sid){sid=Math.random().toString(36).slice(2)+Date.now().toString(36);s.setItem(k,sid);}
            var p=new URLSearchParams(location.search);
            var q='sid='+sid+'&url='+encodeURIComponent(location.href)
              +'&type=view'
              +(p.get('utm_source')?'&src='+encodeURIComponent(p.get('utm_source')):'')
              +(p.get('utm_medium')?'&med='+encodeURIComponent(p.get('utm_medium')):'')
              +(p.get('utm_campaign')?'&cmp='+encodeURIComponent(p.get('utm_campaign')):'')
              +(document.referrer?'&ref='+encodeURIComponent(document.referrer):'');
            new Image().src='https://paulina-analytics-api.kacperczaczyk.workers.dev/api/track/pixel?'+q;
          })();
        ` }}
      />
    </>
  )
}
