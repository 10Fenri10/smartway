import { observer } from 'mobx-react-lite'
import { useNavigate, useParams } from 'react-router-dom'
import useStore from '../../../hooks/useStore'
import NotFound from '../../../pages/NotFound/NotFound'
import styles from './RepositoryInfo.module.scss'

const RepositoryInfo = observer(() => {
	const { name } = useParams()
	const store = useStore()
	const navigate = useNavigate()

	if (!name) {
		return null
	}

	const currentRepository = store.getRepository(name)

	if (!currentRepository) {
		return <NotFound />
	}

	return (
		<div className={styles.Container}>
			<button className={styles.Container__Btn} onClick={() => navigate(-1)}>
				Назад
			</button>
			{currentRepository.homepage && (
				<a
					className={styles.Container__Link}
					href={currentRepository.homepage}
					rel='noopener'
					target='_blank'
				>
					Сайт
				</a>
			)}
			<h2>Полное название: {currentRepository.full_name}</h2>
			{currentRepository?.language && (
				<span className={styles.Container__Info}>
					Язык: {currentRepository.language}
				</span>
			)}
			<span className={styles.Container__Info}>
				Открытые вопросы: {currentRepository?.open_issues}
			</span>
			<span className={styles.Container__Info}>
				Просмотры: {currentRepository?.watchers}
			</span>
			{currentRepository.license?.name && (
				<span className={styles.Container__Info}>
					Лицензия: {currentRepository.license.name}
				</span>
			)}
			<span className={styles.Container__Info}>
				Видимость: {currentRepository?.visibility}
			</span>
		</div>
	)
})

export default RepositoryInfo
