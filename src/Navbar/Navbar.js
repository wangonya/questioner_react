import React from 'react'
import {Menu, Container} from "semantic-ui-react";

const Navbar = () => (
    <div>
        <Menu fixed='top' borderless right>
            <Container>
                <Menu.Item as='a' header>
                    Questioner
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item href='#'>
                        Menu Item
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    </div>
);

export default Navbar;