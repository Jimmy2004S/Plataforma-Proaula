import {Nav} from '../../components/admin/Nav'
import styles from "../../assets/styles/users/IndexStudent.module.scss"
import { AnnouncementCard } from '../../components/announcement/AnnouncementCard';
export const IndexAdminPage = () => {
  const announcements = [
    {
      id: 1,
      description: "Orientation Day",
    },
    {
      id: 2,
      description: "Career Fair",
    },
    {
      id: 3,
      description: "Guest Lecture: Dr. Jane Smith",
    },
    {
      id: 4,
      description: "Sports Day",
    },
    {
      id: 5,
      description: "Workshop: Entrepreneurship",
    },
    {
      id: 6,
      description: "Seminar: Climate Change",
    },
    {
      id: 7,
      description: "Cultural Fest",
    },
    {
      id: 8,
      description: "Hackathon",
    },
    {
      id: 9,
      description: "Alumni Meet",
    },
    {
      id: 10,
      description: "Research Symposium",
    },
  ];
  return (
    <div className='wrapper'>
      <Nav/>
      <section className={styles.section}>
      {announcements.map((announcement) => (
        <AnnouncementCard key={announcement.id} announcement={announcement} />
      ))}
      </section>
    </div>
  );
};
