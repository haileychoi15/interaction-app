import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavigationBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

function Navigation() {
    return (
        <NavigationBlock>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/a">Scroll Percentage</Link>
            </div>
            <div>
                <Link to="/b">Infinite Scroll</Link>
            </div>
        </NavigationBlock>
    );
}

export default Navigation;