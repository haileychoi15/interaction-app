import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavigationBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  padding: 2rem;
`;

const Li = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  & + & {
    margin-left: 1rem;
  }
`;

function Navigation() {
    return (
        <NavigationBlock>
            <Ul>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/sky">sky</Link>
                </Li>
                <Li>
                    <Link to="/ocean">ocean</Link>
                </Li>
            </Ul>
        </NavigationBlock>
    );
}

export default Navigation;