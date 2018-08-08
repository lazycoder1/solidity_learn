import React, { Component } from "react";
import { Form, Input, Message, Button, Card, Image } from "semantic-ui-react";
import Wager from "../ethereum/wager";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

const options = [
    { key: "y", text: "yes", value: "yes" },
    { key: "n", text: "no", value: "no" }
];

class DeclareWinner extends Component {
    state = {
        choose: "yes",
        errorMessage: "",
        loading: false
    };

    handleChange = (e, { value }) => this.setState({ choose: value });

    onSubmit = async event => {
        event.preventDefault();
        let eventOccured = false;
        console.log(this.state.choose);
        if (this.state.choose == "yes") {
            eventOccured = true;
        } else {
            eventOccured = false;
        }
        const wager = Wager(this.props.address);
        console.log(eventOccured);
        try {
            const accounts = await web3.eth.getAccounts();
            await wager.methods.declareWinner(eventOccured).send({
                from: accounts[0],
                value: web3.utils.toWei("0.0001", "ether")
            });
            Router.replaceRoute(`/wagers/${this.props.address}`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Group>
                    <Form.Field>
                        <Form.Select
                            value={this.state.choose}
                            onChange={this.handleChange}
                            fluid
                            label="Did the event occur ?"
                            options={options}
                            placeholder="0.0001 ether will be charged"
                        />
                    </Form.Field>
                </Form.Group>

                <Message
                    error
                    header="Oops!"
                    content={this.state.errorMessage}
                />
                <Button primary loading={this.state.loading}>
                    Declare
                </Button>
            </Form>
        );
    }
}

export default DeclareWinner;
