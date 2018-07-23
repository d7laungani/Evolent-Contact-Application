import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from '../commons/ResponsiveDimensions';
import { Actions } from 'react-native-router-flux'
import {Avatar} from 'react-native-elements'
class  ContactRow extends Component {
    render() {
        const {data} = this.props
        return (
            <TouchableHighlight onPress={() => Actions.detail({data: data, changeContacts: this.props.changeContacts})}>
                <View style={styles.container} >
                    <View style={styles.column1} >
                        <Avatar
                            size="medium"
                            rounded
                            source={{uri: data.image}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                    </View>
                    <View style={styles.column2} >
                        <Text style={styles.contactName}>{data.firstName} {data.lastName}</Text>
                        <Text style={styles.subDetail}>{data.position} , {data.company}</Text>

                    </View>
                    <View style={styles.column3} >
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 15,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around"
    },
    column1: {
        flexDirection: 'column',
        width: responsiveWidth(13)
    },
    column2: {
        flexDirection: 'column',
        width: responsiveWidth(60)
    },
    contactName: {
        fontSize: responsiveFontSize(2.5),
    },
    subDetail: {
        fontSize: responsiveFontSize(1.5),
        color: 'red'

    }
})

export default ContactRow;

