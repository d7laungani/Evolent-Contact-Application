import React, { PropTypes, Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, Platform, StatusBar, ListView } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from '../commons/ResponsiveDimensions';
import { FormLabel, FormInput, Button, Icon, SearchBar , Avatar} from 'react-native-elements'
import baseStyle from '../Styles/baseStyle'
import {Actions} from 'react-native-router-flux'

class ContactDetail extends Component {


    constructor(props){
        super(props);

        this.state = {
            contact: this.props.data,
        }

    }

    render() {
        const {contact } = this.state
        console.log(contact.image)
        return (
            <View style={styles.container}>
                <View style={[baseStyle.row,{backgroundColor: 'black'}]}>
                    <View style={styles.column3}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <Icon containerStyle={styles.backIconStyle} color={'red'} name='arrow-back' size= {responsiveFontSize(4)} onPress={() => Actions.pop()}/>
                        </View>
                    </View>
                    <View style={styles.column4}>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                            <Icon containerStyle={styles.editIconStyle} color={'red'} name='edit' size= {responsiveFontSize(4)} onPress={() => Actions.edit({data: this.state.contact, changeContacts: this.props.changeContacts})}/>
                        </View>
                    </View>
                </View>
                <View style={styles.headerSection}>
                    <Avatar
                        large
                        rounded
                        source={{uri: contact.image}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <View style={[baseStyle.row, {marginTop: responsiveHeight(8)}]}>
                        <Text style={styles.headerText}>{contact.firstName} {contact.lastName} </Text>
                    </View>
                    <View style={baseStyle.row}>
                        <Text style={styles.companyText}>{contact.company}, {contact.position} </Text>

                    </View>
                </View>
                <View style={baseStyle.row}>
                    <View style={styles.column1}>
                        <Icon containerStyle={styles.iconStyle} color={'red'} name='location-on' size= {responsiveFontSize(4)} onPress={() => Actions.pop()}/>

                    </View>
                    <View style={styles.column2}>
                        <Text style={styles.staticText}>{contact.location}</Text>
                    </View>
                </View>
                <View style={baseStyle.row}>
                    <View style={styles.column1}>
                        <Icon containerStyle={styles.iconStyle} color={'red'} name='phone' size= {responsiveFontSize(4)} onPress={() => Actions.pop()}/>

                    </View>
                    <View style={styles.column2}>
                        <Text style={styles.staticText}>{contact.number}</Text>
                    </View>
                </View>
                <View style={baseStyle.row}>
                    <View style={styles.column1}>
                        <Icon containerStyle={styles.iconStyle} color={'red'} name='email' size= {responsiveFontSize(4)} onPress={() => Actions.pop()}/>

                    </View>
                    <View style={styles.column2}>
                        <Text style={styles.staticText}>{contact.email}</Text>
                    </View>
                </View>
                <View style={styles.headerSection}>
                    <View style={[baseStyle.row,{alignItems: 'flex-end', justifyContent: 'flex-end'}]}>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                            <Icon containerStyle={styles.deleteIconStyle} color={'red'} name='delete' size= {responsiveFontSize(4)} onPress={() =>  this.props.changeContacts('delete', this.props.data)}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerSection: {
        height: responsiveHeight(30),
        marginTop: responsiveHeight(12),
        marginLeft: responsiveWidth(10),
        marginBottom: responsiveHeight(8),

    },
    headerText:{
        fontSize: responsiveFontSize(4),
        color: "#323359",
        alignSelf: "flex-start",
        fontWeight: 'bold'
    },
    companyText: {
        fontFamily: 'open-sans',
        fontWeight: 'normal',
        fontSize: responsiveFontSize(1.5),
    },

    iconStyle : {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: responsiveWidth(5),
        marginTop: responsiveHeight(0)
    },
    backIconStyle : {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(5)
    },
    editIconStyle : {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: responsiveWidth(5),
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(5)
    },
    deleteIconStyle : {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: responsiveWidth(5),
        marginBottom: responsiveHeight(8)
    },
    column1: {
        flexDirection: 'column',
        width: responsiveWidth(30)
    },
    column2: {
        flexDirection: 'column',
        width: responsiveWidth(60)
    },
    column3: {
        flexDirection: 'column',
        width: responsiveWidth(50)
    },column4: {
        flexDirection: 'column',
        width: responsiveWidth(50)
    },



});

export default ContactDetail
