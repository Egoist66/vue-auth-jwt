import { ref } from "vue"

export enum Statuses {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}



/**
 * A hook for managing a simple state machine.
 *
 * @return {{
 *   statuses: Ref<Statuses>,
 *   error: Ref<any>,
 *   setStatus: (status: Statuses) => void,
 *   setSuccess: () => void,
 *   setError: (error: any) => void,
 *   setLoading: () => void,
 *   resetStatus: () => void
 * }} An object containing refs to the current status and error, and methods to set the status to success, error, loading, or reset it.
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