import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      DateTimePicker_35: new Date(""),
      DateTimePicker_40: new Date("05/16/2001"),
      TextInput_46: "",
      TextInput_56: ""
    }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View>
      <Image
        resizeMode="contain"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23916/f3a04e29-9a7e-4385-9f5b-25385e1e3697.PNG"
        }}
        style={styles.Image_3}
      />
      <Text style={styles.Text_33}>Date </Text>
      <DateTimePicker
        showIcon={false}
        style={styles.DateTimePicker_35}
        date={this.state.DateTimePicker_35}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_35: selectedDate })
        }
      />
      <Text style={styles.Text_37}>Heure</Text>
      <DateTimePicker
        showIcon={false}
        style={styles.DateTimePicker_40}
        date={this.state.DateTimePicker_40}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_40: selectedDate })
        }
      />
      <Text style={styles.Text_42}>Nature</Text>
      <TextInput
        placeholder="Nature"
        style={styles.TextInput_46}
        value={this.state.TextInput_46}
        onChangeText={nextValue => this.setState({ TextInput_46: nextValue })}
      />
      <Text style={styles.Text_48}>Prix</Text>
      <TextInput
        placeholder="   _ _ _ _ DH"
        keyboardType="numeric"
        style={styles.TextInput_56}
        value={this.state.TextInput_56}
        onChangeText={nextValue => this.setState({ TextInput_56: nextValue })}
      />
      <Button
        title="Enregistrer"
        color="#0fd215"
        style={styles.Button_58}
        onPress={() => alert("Pressed!")}
      />
      <Button
        title="back"
        color="#242528"
        style={styles.Button_61}
        onPress={() => alert("Pressed!")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Image_3: {
    width: 300,
    height: 116,
    marginLeft: 5,
    marginTop: 20,
    marginBottom: 5
  },
  Text_33: { marginLeft: 18, color: "#42c926", fontWeight: "bold" },
  DateTimePicker_35: {
    width: "84%",
    marginTop: 10,
    paddingLeft: 80,
    alignSelf: "center",
    borderColor: "#1bc045",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 2
  },
  Text_37: {
    marginLeft: 13,
    marginTop: 11,
    marginBottom: 10,
    alignSelf: "flex-start",
    color: "#2bda30",
    fontStyle: "italic",
    fontWeight: "bold"
  },
  DateTimePicker_40: {
    width: "84%",
    height: 30,
    marginLeft: 2,
    paddingLeft: 85,
    alignSelf: "center",
    color: "#100e10",
    borderColor: "#1fdb4e",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Text_42: {
    marginLeft: 13,
    marginTop: 19,
    color: "#1ae04c",
    fontWeight: "bold"
  },
  TextInput_46: {
    width: "83%",
    height: 29,
    paddingLeft: 101,
    paddingRight: 6,
    alignSelf: "center",
    color: "#151414",
    borderColor: "#32c343",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Text_48: {
    marginLeft: 14,
    marginTop: 14,
    marginBottom: 11,
    color: "#3cdd31",
    fontWeight: "bold",
    borderColor: "#b958bb"
  },
  TextInput_56: {
    width: "83%",
    marginLeft: 24,
    borderColor: "#55e421",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center"
  },
  Button_58: {
    width: "83%",
    marginLeft: 42,
    marginTop: 45,
    color: "#9f49b6",
    borderColor: "#0c9509",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 4,
    borderBottomWidth: 3,
    borderRadius: 11
  },
  Button_61: {
    width: "41%",
    marginLeft: "14%",
    marginTop: 42,
    paddingLeft: 1,
    paddingRight: 1,
    alignSelf: "flex-start",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
