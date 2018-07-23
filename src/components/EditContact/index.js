import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, Platform, StatusBar, ListView, TouchableOpacity } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from '../commons/ResponsiveDimensions';
import { Avatar, FormLabel, FormInput, Button, Icon, SearchBar } from 'react-native-elements'
import baseStyle from '../Styles/baseStyle'
import { Actions } from 'react-native-router-flux'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import uuid from 'react-native-uuid';

class EditContact extends Component {

    constructor(props){
        super(props);

        if (this.props.data) {
            this.state = {
                editing: true,
                contact: this.props.data,
                firstName: this.props.data.firstName,
                lastName: this.props.data.lastName,
                company: this.props.data.company,
                position: this.props.data.position,
                location: this.props.data.location,
                number: this.props.data.number,
                email : this.props.data.email,
                image: this.props.data.image
            }
        }
       else {
            this.state = {
                editing: false,
                contact: undefined,
                firstName: "",
                lastName: "",
                company: "",
                position: "",
                location: "",
                number: '',
                email : '',
                image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg'
            }
        }

    }

    render() {
        const { contact } = this.state

        return (
            <KeyboardAwareScrollView>
            <View style={styles.container}>
                <View style={[baseStyle.row,{backgroundColor: 'black'}]}>
                    <View style={styles.column1}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <Icon containerStyle={styles.backIconStyle} color={'red'} name='arrow-back' size= {responsiveFontSize(4)} onPress={() => Actions.pop()}/>
                        </View>
                    </View>
                </View>
                <View style={styles.headerSection}>
                    <View style={baseStyle.row}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>{this.state.editing ? 'Edit Contact' : 'Add Contact'}</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        </View>
                    </View>
                </View>
                <View style={styles.searchCont}>
                    <TouchableOpacity style={{marginLeft: responsiveWidth(5)}} onPress={() => console.log('update avatar')}>
                        <Avatar
                            large
                            rounded
                            source={{uri: this.state.image}}
                            onPress={() => this._pickImage()}
                            activeOpacity={0.7}
                        />
                    </TouchableOpacity>
                    <FormLabel labelStyle={[styles.formLabel,{ marginTop: responsiveHeight(2)}]}>First Name </FormLabel>
                    <FormInput
                        value={this.state.firstName}
                        blurOnSubmit={ true}
                        onChangeText={(text) => this.setState({firstName: text})}
                        inputStyle={styles.formInputStyle}
                        autoCapitalize= {'none'}
                        underlineColorAndroid="#000000"
                    />
                    <FormLabel labelStyle={styles.formLabel}>Last Name</FormLabel>
                    <FormInput
                        value={this.state.lastName}
                        blurOnSubmit={ true}
                        onChangeText={(text) => this.setState({lastName: text})}
                        inputStyle={styles.formInputStyle}
                        autoCapitalize= {'none'}
                        underlineColorAndroid="#000000"
                    />
                    <FormLabel labelStyle={styles.formLabel}>Number</FormLabel>
                    <FormInput
                        value={this.state.number}
                        blurOnSubmit={ true}
                        onChangeText={(text) => this.setState({number: text})}
                        inputStyle={styles.formInputStyle}
                        autoCapitalize= {'none'}
                        underlineColorAndroid="#000000"
                    />
                    <FormLabel labelStyle={styles.formLabel}>Email</FormLabel>
                    <FormInput
                        value={this.state.email}
                        blurOnSubmit={ true}
                        onChangeText={(text) => this.setState({email: text})}
                        inputStyle={styles.formInputStyle}
                        autoCapitalize= {'none'}
                        underlineColorAndroid="#000000"
                    />
                    <FormLabel labelStyle={styles.formLabel}>Position</FormLabel>
                    <FormInput
                        value={this.state.position}
                        blurOnSubmit={ true}
                        onChangeText={(text) => this.setState({position: text})}
                        inputStyle={styles.formInputStyle}
                        autoCapitalize= {'none'}
                        underlineColorAndroid="#000000"
                    />
                    <FormLabel labelStyle={styles.formLabel}>Company</FormLabel>
                    <FormInput
                        value={this.state.company}
                        blurOnSubmit={ true}
                        onChangeText={(text) => this.setState({company: text})}
                        inputStyle={styles.formInputStyle}
                        autoCapitalize= {'none'}
                        underlineColorAndroid="#000000"
                    />
                    <FormLabel labelStyle={styles.formLabel}>Location</FormLabel>
                    <FormInput
                        value={this.state.location}
                        blurOnSubmit={ true}
                        onChangeText={(text) => this.setState({location: text})}
                        inputStyle={styles.formInputStyle}
                        autoCapitalize= {'none'}
                        underlineColorAndroid="#000000"
                    />
                    <Text style = {{paddingLeft:15, fontFamily: 'tahoma-bold', color: 'red'}}> {this.state.errorMsg}</Text>


                    <View style={{ flex:0.5, flexDirection: 'row',justifyContent: 'center', alignItems: 'center', paddingTop: 30, paddingBottom: 30 }}>
                        <Button buttonStyle={styles.clickButton} title={this.state.editing ? 'Save' : 'Add'} onPress={() => this.saveContact()} />
                    </View>


                </View>
            </View>
            </KeyboardAwareScrollView>
        )
    }

    _pickImage = async () => {
        let result = await this.getCameraPermission()
        if (result == false){ return }

        let pickerResult = await Expo.ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            base64: true
        });
        console.log(pickerResult.uri)
        this.setState({ image: pickerResult.uri });
    };

    async  getCameraPermission() {
        const { Permissions } = Expo;
        const result1= await Permissions.askAsync(Permissions.CAMERA);
        const result2 = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (result1.status === 'granted' && result2.status === 'granted') {
            return true
        } else {
            return false
        }
    }
    saveContact() {

        const {changeContacts} = this.props

        if (!(this.state.phone == undefined || this.state.phone == '')){

            var isValidCell = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(this.state.phone);
            if (!isValidCell) {
                this.setState({errorMsg: "Please enter a valid phone number"})
                return
            }
        }

        if ( this.state.firstName == undefined || this.state.firstName.length < 1 ) {
            this.setState({errorMsg: "Please enter contact name"})
            return
        }
        if ( !this.validateEmail(this.state.email)) {
            this.setState({errorMsg: "Please enter a valid email"})
            return
        }
        this.setState({errorMsg: " "})

        if (this.state.editing) {
            let contact = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                company: this.state.company,
                position: this.state.position,
                location: this.state.location,
                number: this.state.number,
                email: this.state.email,
                active: this.state.contact.active,
                id: this.state.contact.id,
                image: this.state.image

            }
            changeContacts('edit', contact)

        } else {
            let contact = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                company: this.state.company,
                position: this.state.position,
                location: this.state.location,
                number: this.state.number,
                email: this.state.email,
                active: true,
                id: uuid.v1(),
                image: this.state.image
            }
            changeContacts('add', contact)
        }
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerSection: {
        height: responsiveHeight(15),
        marginTop: responsiveHeight(3.5)
    },
    header:{
        marginTop: responsiveHeight(4),
        flex: 1,
        justifyContent: "flex-start",
        marginLeft: responsiveWidth(10)
    },
    headerText:{
        fontSize: responsiveFontSize(4),
        color: "#323359",
        alignSelf: "flex-start",
    },
    searchCont:{
        flex: 10,
    },
    labelTitle: {
        paddingTop: 10,
        paddingBottom: responsiveHeight(3),
        color: 'black',
        fontFamily:'open-sans-bold',
    },
    container_label: {
        padding: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around"
    },
    text: {
        fontSize: responsiveFontSize(1.5),
        color: "black",
        width: responsiveWidth(20),
        fontFamily:'open-sans-bold',
    },
    backIconStyle : {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(5)
    },
    staticText: {
        color: 'black',
        height:responsiveHeight(6),
        fontFamily: 'open-sans',
        fontWeight: 'normal',
        fontSize: responsiveFontSize(2.5),
    },
    formInputStyle: {
        color: 'black',
        height:responsiveHeight(6),
        fontSize: responsiveFontSize(2.5),
        paddingLeft: 5
    },
    formLabel: {
        fontFamily: 'open-sans-bold',
        color: 'black',
        height: responsiveHeight(4),
        width: responsiveWidth(100),
        fontSize: responsiveFontSize(2.5),
    },
    clickButton: {
        backgroundColor: '#de1d3e',
        borderColor: '#de1d3e',
        marginBottom: 12.5,
        marginTop: 25,
        borderRadius:4.5,
        borderWidth: 0.1,
        borderColor: '#fff'
    },




});

export default EditContact
