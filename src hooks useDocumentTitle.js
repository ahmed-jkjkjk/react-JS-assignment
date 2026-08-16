import { useEffect } from "react";

// Custom Hook: keeps the browser tab title synced with a given value.
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useDocumentTitle;
