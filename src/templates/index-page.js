import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import logo from "../img/logo.svg";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import "@fontsource/josefin-sans/700.css";

export const IndexPageTemplate = ({ image, title, subheading, mainpitch }) => (
  <div>
    <div
      className="full-width-image margin-top-0 hero is-medium"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center bottom`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div className="hero-body has-text-centered">
        <img
          src={logo}
          alt="P vs. W"
          style={{ width: "14em", height: "10em" }}
        />
        <h1
          className="title is-1 is-size-2-mobile"
          style={{
            fontFamily: "Josefin Sans",
            color: "#4056A1",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {title}
        </h1>
        <h3
          className="subtitle is-3 is-size-5-mobile is-size-5-tablet"
          style={{
            color: "#4056A1",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {subheading}
        </h3>
        <a
          href="https://soundcloud.com/user-163611181"
          className="button is-primary"
        >
          Listen Now
        </a>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <p className="subtitle">{mainpitch.description}</p>
                  </div>
                </div>
                <div className="column is-12 p-0">
                  <h3 className="has-text-weight-semibold is-size-3">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        mainpitch {
          title
          description
        }
      }
    }
  }
`;
