import React, { Component } from "react";
import Layout from "../../components/Layout";
import Wager from "../../ethereum/wager";

class WagerShow extends Component {
    static async getInitialProps(props) {
        const wager = Wager(props.query.address);

        const summary = await wager.methods.getDetails().call();

        console.log(summary);

        return {};
    }

    render() {
        console.log();
        return (
            <Layout>
                <h3>Wager Show</h3>
            </Layout>
        );
    }
}

export default WagerShow;
