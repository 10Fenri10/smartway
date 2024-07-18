import Input from '../Input/Input'
import FavoriteRepositoryBox from '../RepositoryBox/FavoriteRepositoryBox'
import RepositoryBox from '../RepositoryBox/RepositoryBox'
import styles from './Container.module.scss'

const Container = () => {
	return (
		<div className={styles.Container}>
			<Input />
			<div className={styles.Container__Section}>
				<RepositoryBox />
				<FavoriteRepositoryBox />
			</div>
		</div>
	)
}

export default Container
