import React, { useState } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="p-2">
      <Navbar color="light" className="appColour" light expand="md">
        <NavbarBrand className="p-2" href="/">NÜBER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink >Account</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Select Role
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/user/">
                    User
                  </DropdownItem>
                  <DropdownItem href="/driver/">
                    Driver
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/admin/">
                    Admin
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="mx-5">
                <AmplifySignOut />
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
