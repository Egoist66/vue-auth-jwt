
/**
 * Returns an object with methods to interact with the browser's local storage.
 *
 * @return {{
 *   set: (key: string, value: any) => void;
 *   remove: (key: string) => void;
 *   get: <T = any>(key: string) => T;
 *   ls: typeof localStorage;
 *   exist: (key: string) => boolean;
 *   empty: (prop: any) => boolean;
 * }} An object with methods to interact with the browser's local storage.
 */
export const useLS = (): {
    set: (key: string, value: any) => void;
    remove: (key: string) => void;
    get: <T = any>(key: string) => T;
    ls: typeof localStorage;
    exist: (key: string) => boolean;
    empty: (prop: any) => boolean
} => {
    const ls = localStorage;

    const set = (key: string, value: any) => {
        try {
            ls.setItem(key, JSON.stringify(value));
        }
        catch (e){
            console.log(e)

        }
    };

    const remove = (key: string) => {
        ls.removeItem(key);
    };

    const get = <T = any>(key: string): T  => {
        const item = ls.getItem(key);
        if (item) {
            return JSON.parse(item) as T;
        }

        return null as T;
    };

    const empty = (prop: any) => {
        return !Object.keys(JSON.parse(ls[prop])).length;
    }

    const exist = (key: string) => {
        return key in ls;
    }


    return {
        set,
        remove,
        empty,
        get,
        ls,
        exist
    };
};