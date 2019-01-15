import React from 'react';
import { View } from 'react-native';

function EventPeopleView() {
    return <View />
}

class SimpleEventPage extends React.Component {
    render() {
        return <View>{this.props.children}</View>;
    }
}

class DebatePage extends React.Component {
        render() {
        const { event } = this.props;

        return (
            <SimpleEventPage {...this.props}>
                <EventPeopleView
                    title="Proposition"
                    people={event.proposition}
                    onPersonTapped={person => this.props.navigation.navigate('Person', {person})} />
                />
                <EventPeopleView
                    title="Opposition"
                    people={event.opposition}
                    onPersonTapped={person => this.props.navigation.navigate('Person', {person})} />
                />
            </SimpleEventPage>
        )
    }
}

export default class App extends React.Component {
    render() {
        return <DebatePage event={{}} />;
    }
}