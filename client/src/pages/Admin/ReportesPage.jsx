import { Nav } from "../../components/admin/Nav";
import { ReportCard } from "../../components/announcement/ReportCard";
import styles from "../../assets/styles/announcement/Reports.modules.scss"

export const ReportesPage = () => {
  const reports = [
    {
      "id": "1",
      "description": "Report of the first semester"
    },
    {
      "id": "2",
      "description": "Report of the second semester"
    },
    {
      "id": "3",
      "description": "Report of the third semester"
    },
    {
      "id": "4",
      "description": "Report of the fourth semester"
    },
    {
      "id": "5",
      "description": "Report of the fifth semester"
    }
  ]
  return (
    <div className={styles.wrapper}>
      <Nav />
      <main className={styles.main}>
        <h2 className={styles.main__title}>Reportes</h2>
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </main>
    </div>
  );
};
