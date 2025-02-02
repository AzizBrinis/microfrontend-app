import { mount } from "auth/AuthApp";
import { useEffect } from "react";
import { useRef } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

function AuthApp({ onSignIn }) {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) history.push(nextPathname);
      },
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
}

export default AuthApp;
