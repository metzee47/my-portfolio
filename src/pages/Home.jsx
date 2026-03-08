import Layout from "../components/Layout";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import MySkills from "./Skills";

export default function Home() {


    return (
        <Layout>
            <AboutMe/>
            <Experience/>
            <MySkills/>
            <Contact/>
        </Layout>
    )
}

