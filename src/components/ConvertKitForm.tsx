'use client';

import { useEffect } from "react";

export default function FormConvertKit() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://flow-reborn.kit.com/5ed24b54bc/index.js";
    script.async = true;
    script.setAttribute("data-uid", "5ed24b54bc");
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[data-uid="5ed24b54bc"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return <div className="ck_form_container"></div>;
} 