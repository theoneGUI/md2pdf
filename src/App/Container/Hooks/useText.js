import  { useState } from "react";
import { initialText } from "./InitialText.js";
import { SavedText, HasSavedText } from './SavedText';
const useText = (initialValue = HasSavedText() ? SavedText() : initialText) => {
  const [state, setState] = useState(initialValue);
  return [state, setState];
};
export default useText;
