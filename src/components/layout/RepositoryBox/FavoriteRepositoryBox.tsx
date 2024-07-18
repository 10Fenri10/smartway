import { observer } from 'mobx-react-lite'
import useStore from '../../../hooks/useStore'
import { Item } from '../../../types/types'
import RepositoryCard from '../RepositoryCard/RepositoryCard'
import styles from './Repository.module.scss'

const FavoriteRepositoryBox = observer(() => {
	const { favoriteRepositories } = useStore()

	return (
		<div className={styles.Container}>
			<span className={styles.Container__Title}>
				Список избранных репозиториев:
			</span>

			<div className={styles.Container__favoriteRepositories}>
				{favoriteRepositories &&
					favoriteRepositories.map((item: Item) => (
						<RepositoryCard key={item.id} item={item} />
					))}
			</div>
		</div>
	)
})

export default FavoriteRepositoryBox
