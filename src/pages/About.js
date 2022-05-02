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
import "../css/style.css";
import BreadCrumb from "../components/BreadCrumb";
import Clients from "../components/clients";
import US from "../components/Home/Us";
import Wave from "../components/Wave";

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

        <Content className="py-6">
          <p className="text-center text-muted">
            Enim fugiat laboris fugiat elit quis eu excepteur reprehenderit aute
            Lorem mollit ad esse exercitation. Occaecat incididunt commodo eu
            mollit exercitation. Enim fugiat laboris fugiat elit quis eu
            excepteur reprehenderit aute
          </p>
        </Content>

        <div className="row gx-5 py-8">
          <div className="col-12 col-md-4 bg-primary"></div>
          <div className="col-12 col-md-8">
            <Content title="company Profile" titlePos="left">
              <p>
                Pariatur ut magna aliquip velit qui nisi nulla nulla magna eu
                duis in magna labore. Id occaecat do non mollit reprehenderit
                qui ad commodo. Tempor voluptate tempor est pariatur consequat
                officia officia dolore eiusmod sunt eiusmod enim ea. Elit
                proident esse ipsum dolor sunt reprehenderit do est aliqua id
                do. Aliquip elit reprehenderit voluptate nisi amet elit do.
                Fugiat ipsum id laborum minim consequat anim sunt. Nisi nisi
              </p>
            </Content>
          </div>
        </div>
      </Container>

      <Wave fill="var(--bs-dark)" t={4} />
      <div className="bg-dark">
        <Container>
          <Content
            className="py-6"
            title="Company History"
            titlePos="center"
            light={false}
          >
            <p className="text-center">
              Enim fugiat laboris fugiat elit quis eu excepteur reprehenderit
              aute Lorem mollit ad esse exercitation. Occaecat incididunt
              commodo eu mollit exercitation. Enim fugiat laboris fugiat elit
              quis eu excepteur reprehenderit aute at officia officia dolore
              eiusmod sunt eiusmod enim ea. Elit proident esse ipsum dolor sunt
              reprehenderit do est aliqua id do. Aliquip elit reprehenderit
              voluptate nisi amet elit do. Fugiat ipsum id laborum minim
              consequat anim sunt. Nisi nisi Enim fugiat laboris fugiat elit
              quis eu excepteur reprehenderit aute Lorem mollit ad esse
              exercitation. Occaecat incididunt commodo eu mollit exercitation.
              Enim fugiat laboris fugiat elit quis eu excepteur reprehenderit
              aute at officia officia dolore eiusmod sunt eiusmod enim ea. Elit
              proident esse ipsum dolor sunt reprehenderit do est aliqua id do.
              Aliquip elit reprehenderit voluptate nisi amet elit do. Fugiat
              ipsum id laborum minim consequat anim sunt. Nisi nisi
              <button className="btn btn-outline-primary mt-3">See All</button>
            </p>
          </Content>
        </Container>
      </div>
      <Wave fill="var(--bs-dark)" t={5} />

      {/* 
        <GridImages
          images={[
            <StaticImage src="../../images/icon.png" className="h-100 w-100" />,
            <StaticImage src="../../images/icon.png" className="img" />,
            <StaticImage src="../../images/icon.png" className="img" />,
          ]}
        /> */}
      <US />
      <Container>
        <Clients className="py-7" />
      </Container>
      <Footer />
      <Helmet>
        <script src="../bootstrap.min.js"></script>
        <title>About US | Esi Nigeria</title>
      </Helmet>
    </div>
  );
}
