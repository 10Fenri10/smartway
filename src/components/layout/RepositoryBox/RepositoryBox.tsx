import { observer } from 'mobx-react-lite'
import useStore from '../../../hooks/useStore'
import { Item } from '../../../types/types'
import RepositoryCard from '../RepositoryCard/RepositoryCard'
import styles from './Repository.module.scss'

const RepositoryBox = observer(() => {
	const store = useStore()
	const { repositories, error, state } = store

	return (
		<div className={styles.Container}>
			<span className={styles.Container__Title}>Список репозиториев:</span>

			{state === 'pending' && <strong>Загрузка данных...</strong>}
			{repositories?.total_count === 0 && <strong>Не найдено</strong>}
			{state === 'error' ? (
				<strong className={styles.Error}>{error}</strong>
			) : (
				<div className={styles.Container__favoriteRepositories}>
					{repositories &&
						repositories.items &&
						repositories.items.map((item: Item) => (
							<RepositoryCard key={item.id} item={item} />
						))}
				</div>
			)}
		</div>
	)
})

export default RepositoryBox
