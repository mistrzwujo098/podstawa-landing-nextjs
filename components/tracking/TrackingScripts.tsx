'use client'

import Script from 'next/script'

export default function TrackingScripts() {
  return (
    <>
      <Script
        id="mailerlite-universal"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '581975');
          `,
        }}
      />
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
