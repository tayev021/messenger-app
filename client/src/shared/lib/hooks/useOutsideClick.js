import { useEffect, useRef } from 'react';

export function useOutsideClick(handle, listenCapture = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleOutsideClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handle();
      }

      document.addEventListener('click', handleOutsideClick, listenCapture);

      return () =>
        document.removeEventListener(
          'click',
          handleOutsideClick,
          listenCapture
        );
    },
    [handle, listenCapture]
  );

  return ref;
}
