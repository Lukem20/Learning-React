import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from "../sample-fishes"
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    }

    addToOrder = key => {
        // Take a copy of state
        const order = {...this.state.order};
        // Add to order or update number in order
        order[key] = order[key] + 1 || 1;
        // Call setState to update our state object
        this.setState({ order });
    }

    render () {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                                index={key}
                            />))
                        }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes} 
                />
            </div>
        );
    }
}

export default App;