import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Load the chatbot script dynamically
    const script = document.createElement('script');
    script.src = 'https://s3.ap-south-1.amazonaws.com/conferbot.defaults/dist/v1/widget.min.js';
    script.id = 'conferbot-js';
    script.async = true;
    script.charset = 'UTF-8';
    script.onload = function () {
        window.ConferbotWidget("6678026b47878652579581b9", "live_chat");
    };

    // Append script to the body
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component is unmounted
    return () => {
      const botScript = document.getElementById('conferbot-js');
      if (botScript) {
        botScript.remove();
      }
    };
  }, []);

  return null; // Since it's just injecting the script, it doesn't render any visible content
};

export default Chatbot;