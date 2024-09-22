import type { App } from "vue";

type PrimeThemeOptions = {
  theme: "aura-light" | "aura-dark" | "aura-dark" | "";
  colorScheme: string;
};

type OwnThemeParams = {
  custom?: boolean;
  callback?: () => Promise<{ default: typeof import("*.css") }>;
};

/**
 * Sets the theme for the Vue components.
 *
 * @param {PrimeThemeOptions["theme"]} [theme="aura-dark"] The theme to use.
 * @param {OwnThemeParams} [options={}] Options for the theme.
 * @param {OwnThemeParams["custom"]} [options.custom=false] If true, the callback
 *   function is called to load the custom theme.
 * @param {OwnThemeParams["callback"]} [options.callback=undefined] The callback
 *   function to load the theme.
 * @returns {(colorScheme?: PrimeThemeOptions["colorScheme"]) => { install: (app: App) => Promise<void> }}
 *   A function that takes an optional color scheme and returns an object with an install method.
 *   The install method takes an app and configures the theme.
 */
export const setTheme = (
  theme: PrimeThemeOptions["theme"] = "aura-dark",
  options: OwnThemeParams = {}
) => {
  //const root = "../../node_modules/";

  return (colorScheme: PrimeThemeOptions["colorScheme"] = "indigo") => {
    return {
      install: async (app: App) => {
        if (options.custom) {
          try {
            await options.callback?.();
          } catch (error) {
            console.error(error);
          }
        }
        
        else {
          try {
            await import(
              `primevue/resources/themes/${theme}-${colorScheme}/theme.css`
            );
          } catch (error) {
            console.error(error);
          }
        }
      },
    };
  };
};
