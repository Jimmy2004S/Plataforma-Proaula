import PropTypes from 'prop-types';
import styles from '../../assets/styles/announcement/Announcement.module.scss'
import AnnouncementPicture from '../../assets/images/announcement.jpg'

export const AnnouncementCard = ({announcement}) => {
  return (
    <div className={styles.card}>
        <img src={AnnouncementPicture} alt="" className={styles.card__img}/>
        <p className={styles.card__description}>{announcement.description}</p>
    </div>
  )
}

AnnouncementCard.propTypes={
    announcement: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    })
}
