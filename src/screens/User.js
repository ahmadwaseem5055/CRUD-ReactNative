import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { deleteuser, updateuser } from '../redux/UserSlice';
import { useNavigation } from '@react-navigation/native';

const User = () => {
  const UserData = useSelector((state) => state.user); 
  const dispatch = useDispatch();

  const navigation = useNavigation()
  const [editingIndex, seteditingindex] = useState(null); 
  const [editingField, seteditingfield] = useState(null); 
  const [editedValue, seteditedvalue] = useState(''); 

  

 
  const startedit = (index, field, item) => {
    seteditingindex(index); 
    seteditingfield(field); 
    seteditedvalue(item);  
  };

 
  const saveEdit = (index) => {
    const updatedUser = {...UserData.data[index], 
      [editingField]: editedValue, 
    };
    dispatch(updateuser({ ...updatedUser, index })); 
    seteditingindex(null); 
    seteditingfield(null); 
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={UserData.data} 
        renderItem={({ item, index }) => (
          <View
            style={{
              width: '90%',
              padding: 10,
              borderWidth: 1,
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View>
            
            <TouchableWithoutFeedback
  onPress={() => startedit(index, 'name', item.name)}
>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    {editingIndex === index && editingField === 'name' ? (
      <>
       
        <Text>Name: </Text>
        <TextInput
          value={editedValue}
          onChangeText={seteditedvalue}
          onBlur={() => saveEdit(index)} 
         
        />
      </>
    ) : (
     
      <Text>{'Name: ' + item.name}</Text>
    )}
  </View>
            </TouchableWithoutFeedback>


              <TouchableWithoutFeedback
                onPress={() => startedit(index, 'mobile', item.mobile)}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                {editingIndex === index && editingField === 'mobile' ? (
                   <>
                    <Text>Mobile: </Text>
                  <TextInput
                    value={editedValue}
                    onChangeText={seteditedvalue}
                    onBlur={() => saveEdit(index)}
                   
                  />
                  </>
                ) : (
                  <Text>{'Mobile: ' + item.mobile}</Text>
                )}
                </View>
              </TouchableWithoutFeedback>

              
              <TouchableWithoutFeedback
                onPress={() => startedit(index, 'email', item.email)}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {editingIndex === index && editingField === 'email' ? (
                   <>
                    <Text>Email: </Text>
                  <TextInput
                    value={editedValue}
                    onChangeText={seteditedvalue}
                    onBlur={() => saveEdit(index)}
                    
                  />
                  </>
                ) : (
                  <Text>{'Email: ' + item.email}</Text>
                )}
                </View>
              </TouchableWithoutFeedback>

             
              <TouchableWithoutFeedback
                onPress={() => startedit(index, 'address', item.address)}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {editingIndex === index && editingField === 'address' ? (
                  <>
                   <Text>Address: </Text>
                  <TextInput
                    value={editedValue}
                    onChangeText={seteditedvalue}
                    onBlur={() => saveEdit(index)}
                    
                  />
                  </>
                ) : (
                  <Text>{'Address: ' + item.address}</Text>
                )}
                </View>
              </TouchableWithoutFeedback>
            </View>

          
            <TouchableOpacity onPress={() => dispatch(deleteuser(index))}>
              <Text style={{ color: 'red' }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

    
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => { navigation.navigate("Adduser" , {type: 'add'}) }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Add New User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;
