import React from "react";
import { Container, Section } from "./style";
import { Outlet} from "react-router-dom";
import { navbar } from "../../utils/nav";
import { Link } from "react-scroll";
export const Navbar = () => {

  return (
    <>
      <Container>
        <Section>
          <h2>Ayubkhon</h2>
        </Section>
        <Section>
          {navbar.map(({ title, link, id }) => {
            return (
              <Link key={id}
                link={link}
                activeClass="active"
                className="link"
                to={link}
                spy={true}
                smooth={true}
                duration={700}
                offset={-50}
              >
                {title}
              </Link>
            );
          })}
        </Section>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
