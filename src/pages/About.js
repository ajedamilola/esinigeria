import React from "react";
import Navbar from "../components/navbar";
import Helmet from "react-helmet";
import Topbar from "../components/About/topbar";
import Content from "../components/About/Content";
import Footer from "../components/footer";
import GridImages from "../components/About/GridImages";
import Container from "../components/Container";
import Intro from "../components/About/Intro";
import { StaticImage } from "gatsby-plugin-image";
import Us from "../components/Home/Us";
import BreadCrumb from "../components/BreadCrumb";
import Clients from "../components/clients";

export default function about() {
  return (
    <div className="bg-light">
      <Topbar>
        <Navbar />
        <Intro />
      </Topbar>
      <Container>
        <BreadCrumb
          pages={[
            { to: "/", title: "Home" },
            { to: "/About", title: "About", active: true },
          ]}
          className="pt-3"
        />
        <Content title="company history" titlePos="left">
          <p>
            Pariatur ut magna aliquip velit qui nisi nulla nulla magna eu duis
            in magna labore. Id occaecat do non mollit reprehenderit qui ad
            commodo. Tempor voluptate tempor est pariatur consequat officia
            officia dolore eiusmod sunt eiusmod enim ea. Elit proident esse
            ipsum dolor sunt reprehenderit do est aliqua id do. Aliquip elit
            reprehenderit voluptate nisi amet elit do. Fugiat ipsum id laborum
            minim consequat anim sunt. Nisi nisi commodo nulla nostrud qui
            tempor deserunt sunt. Fugiat enim magna magna enim voluptate mollit
            tempor fugiat. Tempor eiusmod irure tempor tempor enim quis ut non
            ex ullamco ullamco ullamco. Excepteur incididunt irure ea dolor enim
            duis officia voluptate proident duis Lorem consectetur non sint.
            Quis et consequat dolor cillum aliquip anim ipsum consectetur est
            veniam aute amet ex. Enim commodo culpa laborum nulla quis
            exercitation in proident enim commodo eiusmod sint Lorem. Commodo
            labore elit tempor aute. Eiusmod eiusmod proident anim aliqua Lorem
            adipisicing aliquip excepteur sint adipisicing. Tempor eiusmod
            labore ipsum pariatur pariatur laboris occaecat fugiat sint
            exercitation sit voluptate esse cillum. Ea sint aute nisi Lorem
            consequat cupidatat id id qui aliqua ullamco duis labore labore.
            Nisi culpa Lorem occaecat deserunt. Sint proident non magna proident
            dolor irure adipisicing ut minim proident anim esse.
          </p>
        </Content>

        <GridImages
          images={[
            <StaticImage src="../../images/icon.png" className="h-100 w-100" />,
            <StaticImage src="../../images/icon.png" className="img" />,
            <StaticImage src="../../images/icon.png" className="img" />,
          ]}
        />

        <Content title="Company profile" titlePos="right">
          <p>
            Fugiat magna commodo et Lorem ex nostrud. Ullamco aliquip deserunt
            ipsum duis cillum elit id dolore culpa deserunt non laboris.
            Cupidatat Lorem officia esse pariatur. Quis cupidatat laborum esse
            incididunt officia irure. Anim velit non elit aute nostrud tempor
            minim id reprehenderit ad. Occaecat duis enim irure laborum
            adipisicing. Ut occaecat adipisicing ut nulla est. Ipsum culpa magna
            fugiat tempor do nostrud eiusmod cupidatat consequat aliquip non
            consectetur.
          </p>
        </Content>

        <Clients className="py-7"/>
      </Container>
      <Footer />
      <Helmet>
        <script src="../bootstrap.min.js"></script>
        <title>About US | Esi Nigeria</title>
      </Helmet>
    </div>
  );
}
