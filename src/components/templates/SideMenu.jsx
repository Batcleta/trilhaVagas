import { Link } from "react-router-dom";
import styled from "styled-components";

const SideMenu = () => {
  return (
    <SideMenuWrapper>
      {/* logo
            menu
            back
             */}

      <MenuContainer>
        <Link to="/">candidatos</Link>
        <Link to="/createVaga">Nova vaga</Link>
      </MenuContainer>
    </SideMenuWrapper>
  );
};

export default SideMenu;

const SideMenuWrapper = styled.div`
  grid-area: sideMenu;
  width: 18rem;
`;
const MenuContainer = styled.div``;
