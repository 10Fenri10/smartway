import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import useStore from '../../../hooks/useStore'
import { Item } from '../../../types/types'
import styles from './RepositoryCard.module.scss'

const RepositoryCard = observer(({ item }: { item: Item }) => {
	const store = useStore()
	const navigate = useNavigate()

	const addFavorite = () => {
		store.addFavoriteRepo(item)
	}

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation()
		navigate(`/${item.name}`)
	}

	return (
		<div className={styles.Card} onClick={addFavorite}>
			<div>
				<img
					className={styles.Card__Img}
					src={item.owner.avatar_url}
					alt={item.name}
				/>
			</div>
			<div className={styles.Card__Content}>
				<div className={styles.Card__LinkWrapper}>
					<a
						className={styles.Card__Link}
						href={item.html_url}
						rel='noopener'
						target='_blank'
					>
						{item.name}
					</a>
				</div>
				<span className={styles.Card__Text}>
					Число старов: {item.stargazers_count}
				</span>
				<span className={styles.Card__Text}>Число форков: {item.forks}</span>
				<button className={styles.Card__Btn} onClick={e => handleClick(e)}>
					Подробнее
				</button>
			</div>
		</div>
	)
})

export default RepositoryCard
