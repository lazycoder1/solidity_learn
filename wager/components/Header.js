import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
    return (
        <Menu style={{ marginTop: "5px" }}>
            <Link route="/">
                <a className="item">WagerCoin</a>
            </Link>

            <Menu.Menu position="right">
                <Link route="/">
                    <a className="item">Wagers</a>
                </Link>
                <Link route="/wagers/new">
                    <a className="item">+</a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};
