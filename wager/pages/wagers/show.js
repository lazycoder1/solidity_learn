import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Wager from "../../ethereum/wager";
import web3 from "../../ethereum/web3";
import WagerForm from "../../components/WagerForm";
import DeclareWinner from "../../components/DeclareWinner";

class WagerShow extends Component {
    static async getInitialProps(props) {
        const wager = Wager(props.query.address);

        const summary = await wager.methods.getDetails().call();

        console.log(summary);

        return {
            address: props.query.address,
            description: summary[0],
            bet_admin: summary[1],
            balance: summary[2],
            willOccurList: summary[3],
            willNotOccurList: summary[4],
            end: summary[5]
        };
    }

    renderCards() {
        const {
            description,
            bet_admin,
            balance,
            willOccurList,
            willNotOccurList,
            end
        } = this.props;

        let status = "Its over";
        let backgroundColor = "red";
        if (!end) {
            status = "On Going";
            backgroundColor = "green";
        }

        const items = [
            {
                header: description,
                meta: "desc",
                description: "What is this wager about ?",
                fluid: true
            },
            {
                header: bet_admin,
                meta: "Address of Manager",
                description:
                    "The Manager who created this wager and call the winning side!",
                style: { overflowWrap: "break-word" },
                fluid: true
            },
            {
                header: status,
                meta: "status",
                description: "Has the wager ended ?",
                style: { backgroundColor: backgroundColor }
            },
            {
                header: web3.utils.fromWei(String(balance * 0.95), "ether"),
                meta: "Wager balance(ether)",
                description: "Total pool"
            },
            {
                header: willOccurList.length,
                meta: "No of backs",
                description: "No of people backing the claim"
            },
            {
                header: willNotOccurList.length,
                meta: "No of lays",
                description: "No of people laying the claim"
            }
        ];

        return <Card.Group items={items} />;
    }

    render() {
        const { end } = this.props;
        console.log("test");
        return (
            <Layout>
                <h3>Wager Show</h3>
                <Grid>
                    <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
                    <Grid.Column width={6}>
                        <WagerForm address={this.props.address} end={end} />
                    </Grid.Column>
                </Grid>
                <DeclareWinner address={this.props.address} end={end} />
            </Layout>
        );
    }
}

export default WagerShow;
