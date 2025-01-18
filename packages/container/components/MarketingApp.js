import { mount } from "marketing/MarketingApp";
import { useEffect } from "react";
import { useRef } from "react";
import React from "react";

function MarketingApp() {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
}

export default MarketingApp;
