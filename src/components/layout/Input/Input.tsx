import { ChangeEvent, useEffect, useRef, useState } from 'react'
import useStore from '../../../hooks/useStore'
import useThrottle from '../../../hooks/useThrottle'
import CopyButton from '../CopyButton/CopyButton'
import styles from './Input.module.scss'

const Input = () => {
	const [value, setValue] = useState<string>('')
	const input = useRef<HTMLInputElement | null>(null)

	const store = useStore()
	const throttle = useThrottle()

	const abortControllerRef = useRef<AbortController | null>(null)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)

		if (abortControllerRef.current) {
			abortControllerRef.current.abort()
		}

		throttle(() => {
			const abortController = new AbortController()
			abortControllerRef.current = abortController

			store.fetchRepositories(e.target.value, abortController.signal)
		})
	}

	useEffect(() => {
		if (input.current) {
			input.current.focus()
		}

		return () => abortControllerRef.current?.abort()
	}, [])

	return (
		<section className={styles.Container}>
			<input
				className={styles.Container__Input}
				type='text'
				id='text'
				placeholder='Введите название репозитория'
				value={value}
				onChange={e => handleChange(e)}
				ref={input}
			/>
			<CopyButton value={value} />
		</section>
	)
}

export default Input
