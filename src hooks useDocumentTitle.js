import { useEffect } from "react";

// Custom Hook: keeps the browser tab title in sync with how many
// courses are currently visible after filtering.
function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Course Catalog (${count} shown)`;
  }, [count]);
}

export default useDocumentTitle;
