import copy from 'clipboard-copy'
import { useState } from 'react'
import styles from './CopyButton.module.scss'

const СopyButton = ({ value }: { value: string }) => {
	const [copied, setCopied] = useState(false)

	const handleClick = () => {
		copy(value)
		setCopied(true)

		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<button className={styles.Btn} onClick={handleClick}>
			{copied ? 'Copied' : 'Copy'}
		</button>
	)
}

export default СopyButton
