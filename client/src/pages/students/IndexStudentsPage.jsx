import { Nav } from "../../components/students/Nav";
import Footer from "../../components/common/Footer";
import { ProjectList } from "../../components/project/ProjectList";
import { AnnouncementSlider } from "../../components/announcement/AnnouncementSlider";

export const IndexStudentPage = () => {
  return (
    <div>
      <Nav />
      <main>
        <AnnouncementSlider/>
        <ProjectList/>
      </main>
      <Footer />
    </div>
  );
};
