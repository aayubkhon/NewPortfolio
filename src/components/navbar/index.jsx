import React from "react";
import { Container, Section } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/nav";
import { Link } from "react-scroll";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Section onClick={() => navigate("/home")}>
          <h2>Ayubkhon</h2>
        </Section>
        <Section>
          {navbar.map(({ title, path, id }) => {
            return (
              <Link
                activeClass="active"
                className="test1"
                to="test1"
                spy={true}
                smooth={true}
                duration={500}
                offset={50}
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
