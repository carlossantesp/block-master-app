import { useCallback, useState } from "react";

export default function useToggle(initialState = false) {
  const [state, setstate] = useState(initialState);

  const toggle = useCallback(() => setstate((state) => !state), []);

  return [state, toggle];
}
