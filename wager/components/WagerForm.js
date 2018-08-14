import React, { Component } from "react";
import { Form, Input, Message, Button, Card, Image } from "semantic-ui-react";
import Wager from "../ethereum/wager";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

const options = [
    { key: "y", text: "back", value: "back" },
    { key: "n", text: "lay", value: "lay" }
];

class WagerForm extends Component {
    state = {
        value: "",
        side: "back",
        errorMessage: "",
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();
        let participate = false;
        console.log(this.state.side);
        if (this.state.side == "back") {
            participate = true;
        } else {
            participate = false;
        }
        const wager = Wager(this.props.address);

        this.setState({ loading: true, errorMessage: "" });

        try {
            if (this.props.end) {
                const err = new Error("This wager has ended !");
                throw err;
            }
            const accounts = await web3.eth.getAccounts();
            await wager.methods.participate(participate).send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, "ether")
            });
            Router.replaceRoute(`/wagers/${this.props.address}`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false, value: "" });
    };

    handleChange = (e, { value }) => this.setState({ side: value });
    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Group>
                    <Form.Field>
                        <label>Amount to Contribute</label>
                        <Input
                            value={this.state.value}
                            onChange={event =>
                                this.setState({ value: event.target.value })
                            }
                            label="ether"
                            labelPosition="right"
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            value={this.state.side}
                            onChange={this.handleChange}
                            fluid
                            label="Side"
                            options={options}
                            placeholder="Side"
                        />
                    </Form.Field>
                </Form.Group>

                <Message
                    error
                    header="Oops!"
                    content={this.state.errorMessage}
                />
                <Button primary loading={this.state.loading}>
                    Bet
                </Button>
            </Form>
        );
    }
}

export default WagerForm;
