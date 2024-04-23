import React, { useEffect } from 'react';

function LandbotChat() {
  useEffect(() => {
    const initLandbot = () => {
      if (!window.myLandbot) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
        script.onload = () => {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.site/v3/H-2196742-HHOH6QF7QVX1C9BU/index.json',
          });
        };
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    };

    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
      if (window.myLandbot) {
        window.myLandbot.destroy(); 
      }
    };
  }, []);

  return null; 
}

export default LandbotChat;
