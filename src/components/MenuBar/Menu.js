import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Badge } from "react-bootstrap";
import { MdSearch, MdMenu, MdShoppingCart } from "react-icons/md";
import style from "./MenuBar.module.css";
import { menus } from "./../Data/MenuList";

const Menu = () => {
  const [menuList] = useState(menus);
  return (
    <div className={style.menu__bar}>
      <Navbar expand="md">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <MdMenu />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {menuList.map((menu, index) => {
                return menu.dropdown ? (
                  <NavDropdown
                  key={index}
                    title={menu.text}
                    className={menu.active ? "active_menu" : ""}
                  >
                    {menu.dropdownList.length > 0 &&
                      menu.dropdownList.map((dropdown, index) => (
                        <NavDropdown.Item href="#action/3.1" key={index}>
                          {dropdown.text}
                        </NavDropdown.Item>
                      ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link
                  key={index}
                    className={menu.active ? "active_menu" : ""}
                    href="#link"
                  >
                    {menu.text}
                  </Nav.Link>
                );
              })}
            </Nav>
            <div>
              <div className={style.icon}>
                <MdSearch />
                <MdMenu />
                <MdShoppingCart />
                <Badge bg="white" className={`${style.badged} text-dark`}>
                  0
                </Badge>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
