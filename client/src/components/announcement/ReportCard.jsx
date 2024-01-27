import ReporteIcon from "../../assets/images/descarga.jpg"
import PropTypes from 'prop-types';
import styles from "../../assets/styles/announcement/Reports.modules.scss";

export const ReportCard = ({report}) => {
    return (
      <div className={styles.card}>
        <img src={ReporteIcon} className={styles.card__img} />
        <div>
        <p className={styles.card__description}>
          {report.description}
        </p>
        </div>
      </div>
    );
  };
  
ReportCard.propTypes={
      report: PropTypes.shape({
          description: PropTypes.string,
      })
  }