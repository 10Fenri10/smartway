import { throttle } from 'lodash'
import { useCallback } from 'react'

const useThrottle = () => {
	return useCallback(
		throttle(async func => {
			await func()
		}, 1000),
		[]
	)
}

export default useThrottle
