import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavigationBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
`;

function Navigation() {
    return (
        <NavigationBlock>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/sky">sky</Link>
            </div>
            <div>
                <Link to="/ocean">ocean</Link>
            </div>
        </NavigationBlock>
    );
}

export default Navigation;