import SiteTemplate from "../components/SiteTemplate";
import DetailsContainer from "../components/DetailsContainer";
import { useRouter } from "next/router";

const ProjectDetails = () => {
    let router = useRouter();
    let { projectDetails } = router.query;
    return (
        <SiteTemplate>
            <DetailsContainer project={projectDetails}/>
        </SiteTemplate>
    )
}

export default ProjectDetails;