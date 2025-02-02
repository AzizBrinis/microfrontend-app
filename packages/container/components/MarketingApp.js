import { mount } from "marketing/MarketingApp";
import { useEffect } from "react";
import { useRef } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

function MarketingApp() {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) history.push(nextPathname);
      },
    });

    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
}

export default MarketingApp;
