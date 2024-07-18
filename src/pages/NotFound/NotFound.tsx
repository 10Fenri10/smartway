import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

const NotFound = () => (
	<div className={styles.Container}>
		<Link to='/'>
			<button className={styles.Container__Btn}>На главную</button>
		</Link>
	</div>
)

export default NotFound
