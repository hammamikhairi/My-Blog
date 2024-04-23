

const useWaitForElm = (selector) => {




  return new Promise( resolve => {

    setTimeout(() => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
    }, 1000);

    const observer = new MutationObserver( mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

export default useWaitForElm;