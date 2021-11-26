// libs
import { useRef, useEffect } from 'react';

export const useEventListener = (
  eventName,
  handler,
  element = global,
  options = {},
) => {
  const saveHandler = useRef();
  const { capture, passive, once } = options;

  useEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) {
      return;
    }

    const eventListener = (event) => saveHandler.current(event);
    const opts = { capture, passive, once };
    element.addEventListener(eventName, eventListener, opts);
    return () => element.removeEventListener(eventName, eventListener, opts);
  }, [eventName, element, capture, passive, once]);
};
