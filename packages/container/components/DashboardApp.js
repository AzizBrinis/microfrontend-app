import { mount } from "dashboard/DashboardApp";
import { useEffect } from "react";
import { useRef } from "react";
import React from "react";

function DashboardApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
}

export default DashboardApp;
