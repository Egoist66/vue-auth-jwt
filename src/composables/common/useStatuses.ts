import { ref } from "vue"

export enum Statuses {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}


/**
 * Returns an object with a reactive `statuses` property and methods to set and reset the status.
 *
 * @return {{
 *   statuses: Ref<Statuses>,
 *   error: Ref<string | null>,
 *   setStatus: (status: Statuses) => void,
 *   setSuccess: () => void,
 *   setError: (error: string) => void,
 *   setLoading: () => void,
 *   resetStatus: () => void
 * }} An object with the `statuses` reactive property and methods to set and reset the status.
 */
export const useStatuses = () => {
    const statuses = ref<Statuses>(Statuses.IDLE)
    const error = ref<any>(null)




    const setStatus = (status: Statuses) => {
        statuses.value = status
    }

    const setSuccess = () => {
        setStatus(Statuses.SUCCESS)
    }

    const setError = (e: any) => {
        setStatus(Statuses.ERROR)
        error.value = e
    }

    const setLoading = () => {
        setStatus(Statuses.LOADING)
    }

    const resetStatus = () => {
        setStatus(Statuses.IDLE)
    }

    return {
        statuses,
        error,
        setStatus,
        setSuccess,
        setError,
        setLoading,
        resetStatus
    }
}