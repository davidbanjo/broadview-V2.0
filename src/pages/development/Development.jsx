// import CaseStudy from "../../home/sections/casestudies/CaseStudy";
import CTA from "../../components/cta/CTA"
import InfiniteScroll from "../../components/infinite-scroll/InfiniteScroll"
import InfoCard from "../../components/infoCard/InfoCard"
import DevelopmentHero from "./DevelopmentHero"
import DevelopmentProcess from "./DevelopmentProcess"
import DevelopmentServices from "./DevelopmentServices"
// import SoftwareProcess from "./sections/SoftwareProcess";
// import SoftwareServices from "./sections/SoftwareServices";

const Development = () => {
    return (
        <div className="bts_software">
            <DevelopmentHero />
            <div className="bts-spacer-x1"></div>
            <DevelopmentServices />
            <InfoCard
                src="/img/broadview logo_var.png"
                alt="broadview-logo"
                content="Experience the intersection of quality and innovations where it matters"
                cta="Learn More" 
                className="relative mt-20"
                url="/contact"
            />
            <DevelopmentProcess />
            <InfiniteScroll />
            <CTA />
            {/* <SoftwareProcess />
            <div className="bts-spacer-x1"></div>
            <SoftwareServices /> */}
            {/* <Brands /> */}
            {/* <div className="bts-spacer-x1"></div>
            <CaseStudy />
            <CTA /> */}
        </div>
    )
}

export default Development