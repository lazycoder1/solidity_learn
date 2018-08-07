import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class WagerIndex extends Component {
    static async getInitialProps() {
        const wagers = await factory.methods.getAllCampaigns().call();

        return { wagers };
    }

    renderWagers() {
        const items = this.props.wagers.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/wagers/${address}`}>
                        <a>View Wager</a>
                    </Link>
                ),
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open Wagers</h3>
                    <Link route="/wagers/new">
                        <a className="item">
                            <Button
                                floated="right"
                                content="Create Wager"
                                icon="add"
                                primary={true}
                            />
                        </a>
                    </Link>

                    {this.renderWagers()}
                </div>
            </Layout>
        );
    }
}

export default WagerIndex;
