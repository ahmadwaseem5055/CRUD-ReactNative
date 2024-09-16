import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Dimensions } from 'react-native'; 
import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { adduser, updateuser } from '../redux/UserSlice'; 
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Adduser = () => {
  const route = useRoute();
  const [name, setname] = useState(route.params.type === 'edit' ? route.params.data.name : '');
  const [mobile, setmobile] = useState(route.params.type === 'edit' ? route.params.data.mobile : '');
  const [email, setemail] = useState(route.params.type === 'edit' ? route.params.data.email : '');
  const [address, setaddress] = useState(route.params.type === 'edit' ? route.params.data.address : '');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const validate = () => {
    let valid = true;
    if (name === '') valid = false;
    if (mobile === '') valid = false;
    if (email === '') valid = false;
    if (address === '') valid = false;
    return valid;
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          placeholder='Enter Your Name'
          value={name}
          onChangeText={txt => setname(txt)}
          style={styles.input}
        />
        <TextInput
          placeholder='Enter Your Mobile'
          value={mobile}
          onChangeText={txt => setmobile(txt)}
          style={styles.input}
          keyboardType='number-pad'
          maxLength={10}
        />
        <TextInput
          placeholder='Enter Your Email'
          value={email}
          onChangeText={txt => setemail(txt)}
          style={styles.input}
          keyboardType='email-address'
        />
        <TextInput
          placeholder='Enter Your Address'
          value={address}
          onChangeText={txt => setaddress(txt)}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (validate()) {
              if (route.params.type === 'edit') {
                dispatch(updateuser({ name, mobile, address, email, index: route.params.index }));
              } else {
                dispatch(adduser({ name, mobile, address, email }));
              }
              navigation.goBack();
            } else {
              Alert.alert("Please Fill Complete form");
            }
          }}
        >
          <Text style={styles.buttonText}>Save User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',  
  },
  formContainer: {
    width: width * 0.9,  
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,  // Creates a shadow for Android devices
    borderWidth: 1,
    borderColor: '#e3e3e3',  // Soft border color
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',  // Light background for inputs
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2.5,
    elevation: 3,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4c8bf5',  
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Adduser;
