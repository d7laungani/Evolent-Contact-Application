import React, { PropTypes, Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, Platform, StatusBar, ListView } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from '../commons/ResponsiveDimensions';
import ContactRow from './contactRow.js'
import { FormLabel, FormInput, Button, Icon, SearchBar } from 'react-native-elements'
import baseStyle from '../Styles/baseStyle'
import { Actions } from 'react-native-router-flux'

class ContactsPage extends Component {


    constructor(props){
        super(props);

        let items = this.props.contacts.filter(element => {
            if( element.active) {
                return element
            }
        })
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        ds = ds.cloneWithRows(items)

        this.state = {
            searchValue: undefined,
            items:items,
            dataSource: ds,
        }

        this.updateTable = this.updateTable.bind(this)
        this.changeContacts = this.changeContacts.bind(this)



    }


    componentWillReceiveProps(newProps) {
        let items = newProps.contacts.filter(element => {
            if( element.active) {
                return element
            }
        })

        var ds = this.state.dataSource

        ds = ds.cloneWithRows(items)
        this.setState({ items: items, dataSource: ds})


    }

     updateTable (text) {

        let result = this.state.items.filter(element => {
            let name = element.firstName + ' ' + element.lastName
            if( name.toLowerCase().includes(text.toLowerCase())) {
                return element
            }
        })

        var ds = this.state.dataSource

        ds = ds.cloneWithRows(result)
        this.setState({ dataSource: ds})



    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerSection}>
                    <View style={baseStyle.row}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Contacts</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                            <Icon containerStyle={styles.backIconStyle} color={'red'} name='add' size= {responsiveFontSize(4)} onPress={() => Actions.edit({changeContacts: this.changeContacts})}/>
                        </View>
                    </View>
                </View>
                <View style={styles.searchCont}>
                    <SearchBar
                        lightTheme
                        onChangeText={this.updateTable}
                        searchIcon={{ size: 34 }}
                        round
                        placeholder='Search by Names'
                        inputStyle={{color: '#323359', backgroundColor: '#FAFAFB'}}
                        inputContainerStyle={{paddingTop: responsiveHeight(4),  paddingBottom: responsiveHeight(4)}}
                        containerStyle={{backgroundColor:'white', borderBottomWidth:0, borderTopWidth:0}}
                        clearIcon/>

                    <ListView
                        removeClippedSubviews={false}
                        enableEmptySections
                        dataSource={this.state.dataSource}
                        renderRow={(rowData, sectionID, rowID) => {
                            return (
                                <ContactRow
                                    key={rowID}
                                    data={rowData}
                                    changeContacts={this.changeContacts}
                                />
                            )
                        }}
                        renderSeparator={(sectionId, rowId) => {
                            return <View key={rowId} style={styles.separator}/>
                        }}
                    />
                </View>
            </View>
        )
    }

     changeContacts (type, data) {
        const { updateContacts } = this.props
        let currentContacts = this.props.contacts
        if ( type == 'delete') {
            let currentId = data.id
            let changedContacts = currentContacts.map(element => {
                if (element.id == currentId) {
                    element.active = false
                    return element
                }
                return element
            })
            updateContacts(changedContacts)
            Actions.popTo('main')

        } else if (type == 'edit') {
            let currentId = data.id
            let changedContacts = currentContacts.map(element => {
                if (element.id == currentId) {
                    return data
                } else {
                    return element
                }
            })
            updateContacts(changedContacts)
            Actions.popTo('main')
        } else if (type == 'add') {

            let changedContacts = currentContacts
            changedContacts.push(data)
            updateContacts(changedContacts)
            Actions.popTo('main')
            Actions.main()
        }
    }

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
        marginRight: responsiveWidth(5),
        marginTop: responsiveHeight(0)
    },

});

export default ContactsPage
