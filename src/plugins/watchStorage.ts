import type { App } from "vue";


/**
 * Creates a storage watcher that triggers a callback when a specified value is stored.
 *
 * @param {string[]} keys - An array of storage keys to watch.
 * @param {any[]} value - An array of values to watch for.
 * @param {() => void} callback - The function to call when a value is stored.
 * @return {() => { install: (app: App) => void }} A function that returns an object with an install method.
 */
export const watchStorage = (
  keys: string[],
  value: any[],
  callback: () => void
) => {
  return () => {
    return {
      /**
       * Installs a storage watcher that triggers a callback when a specified value is stored.
       *
       * @param {App} app - The Vue app instance.
       * @return {void}
       */
      install(app: App): void {
        window.addEventListener("storage", async (e) => {
          //console.log(e);

          keys.forEach((key, i) => {
            if (e.key === key && e.newValue === value[i]) {
                callback();

            }
          });
        });
      },
    };
  };
};
