import React, { useState } from 'react';
import {
	StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
    Modal,
    SafeAreaView,
	} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AddItem, UpdateItem, DeleteItem } from '../action/action';

const UpdateListWithModal = () => {

    const dispatch = useDispatch();
    const dataList = useSelector(state => state.counter.dataList);

    const [openModal, setOpenModal] = useState(false);
    const [openScreenModal, setOpenScreenModal] = useState(false);
    const [index, setIndex] = useState('');
    const [name, setName] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [age, setAge] = useState('');


    const RenderFunction = ({item, index}) => {
        return(
            <View>
                <View style={{marginHorizontal: "5%", marginVertical: 5}}>
                    <Text style={styles.txt}>Name     :   {item.name}</Text>                
                    <Text style={styles.txt}>Hobbies :   {item.hobbies}</Text>
                    <Text style={styles.txt}>Age         :   {item.age}</Text>


                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{flex: 1, marginHorizontal: '1%'}}>
                            <TouchableOpacity 
                                style={{marginRight: 0}} 
                                onPress={()=>{
                                    setName(item.name)
                                    setHobbies(item.hobbies)
                                    setAge(item.age)
                                    setIndex(index)

                                    setOpenScreenModal(true)
                                }}
                                >
                                    <Text style={styles.Editbtn}> Edit </Text>
                                    <View>
                                        <Modal visible={openScreenModal}>
                                            <SafeAreaView style={{backgroundColor: 'lightgray'}}>
                                                <View style={[styles.modalOuterContainer,]}>
                                                    <View style={[styles.modalContainer,]}>
                                                        <Text style={{}}>
                                                            UPDATE USER DETAILS
                                                        </Text>
                                                        
                                                        <TextInput
                                                            style={styles.txtInputModalField}
                                                            placeholder={'Enter Name'}
                                                            onChangeText={(text) => setName(text)}
                                                            defaultValue={name}
                                                            >
                                                        </TextInput>                                                                                                          
                                                        <TextInput
                                                            style={styles.txtInputModalField}
                                                            placeholder={'Enter Hobbies'}
                                                            onChangeText={(text) => setHobbies(text)}
                                                            defaultValue={hobbies}
                                                            >
                                                        </TextInput> 
                                                        <TextInput
                                                            style={styles.txtInputModalField}
                                                            placeholder={'Enter Age'}
                                                            onChangeText={(text) => setAge(text)}
                                                            defaultValue={age}
                                                            >
                                                        </TextInput>   

                                                        <View style={{flexDirection: 'row', flex: 1, }}>
                                                            <View style={{flex: 1}}>
                                                                <TouchableOpacity 
                                                                    style={{marginRight:10}}
                                                                    onPress={UpdateValues}
                                                                    >
                                                                    <Text style={styles.modalbtn}>UPDATE</Text>
                                                                </TouchableOpacity>
                                                            </View>

                                                            <View style={{flex: 1}}>
                                                                <TouchableOpacity 
                                                                    style={{marginLeft:10}} 
                                                                    onPress={()=>{
                                                                        setOpenScreenModal(false)

                                                                        setName('')
                                                                        setHobbies('')
                                                                        setAge('')
                                                                        setIndex('')
                                                                        }}>
                                                                    <Text style={styles.modalbtn}>EXIT</Text>
                                                                </TouchableOpacity>
                                                            </View>       
                                                        </View>
                                                                                
                                                    </View>
                                                </View>
                                            </SafeAreaView>
                                        </Modal>
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, marginHorizontal: '1%'}}>
                            <TouchableOpacity 
                                style={{marginLeft: 0, }}
                                onPressIn={()=> {setIndex(index)}}
                                onPressOut={DeleteData}
                                >
                                    <Text style={[styles.Editbtn, {backgroundColor: 'red'}]}> Delete </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>  
            </View>
        )
    }

    const DeleteData = () => {
        dispatch(DeleteItem(index))
    }

    const UpdateValues = () => {
        dispatch(UpdateItem(name, hobbies, age, index))

        setName('')
        setHobbies('')
        setAge('')
        setIndex('')
        setOpenScreenModal(false)
    } 

    const AddValues = () => {

        for(let a=0; a<dataList.length; a++){
            if(dataList[a].name === name){
                var xyz = true;
                break;
            }
            else{
                var xyz = false;
            }
        }

        if(name==='' || hobbies==='' || age===''){
            alert("Empty Field can't be update")
        }
        else{
            if(xyz){
                alert("User name already exist")
            }
            else{
                dispatch(AddItem(name, hobbies, age))
                setOpenModal(false)

                setName('')
                setHobbies('')
                setAge('')
            }           
        }       
    }

    return (
	    <View>
            <View style={[styles.center, ]}>
                <TouchableOpacity
                    onPress={()=>{setOpenModal(true)}}>
                    <Text style={styles.AddBtn}>Add Items</Text>
                </TouchableOpacity>

                <View>
                    <Modal visible={openModal}>
                        <SafeAreaView style={{backgroundColor: 'lightgray'}}>
                            <View style={[styles.modalOuterContainer,]}>
                                <View style={[styles.modalContainer,]}>
                                    <Text style={{}}>
                                        ADD USER DETAILS
                                    </Text>
                                    
                                    <TextInput
                                        style={styles.txtInputModalField}
                                        placeholder={'Enter Name'}
                                        onChangeText={(text) => setName(text)}
                                        // defaultValue={inputText}
                                        >
                                    </TextInput>                                                                                                          
                                    <TextInput
                                        style={styles.txtInputModalField}
                                        placeholder={'Enter Hobbies'}
                                        onChangeText={(text) => setHobbies(text)}
                                        // defaultValue={inputTextSkills}
                                        >
                                    </TextInput> 
                                    <TextInput
                                        style={styles.txtInputModalField}
                                        placeholder={'Enter Age'}
                                        onChangeText={(text) => setAge(text)}
                                        // defaultValue={inputTextSkills}
                                        >
                                    </TextInput>   

                                    <View style={{flexDirection: 'row', flex: 1, }}>
                                        <View style={{flex: 1}}>
                                            <TouchableOpacity 
                                                style={{marginRight:10}}
                                                onPress={AddValues}
                                                >
                                                <Text style={styles.modalbtn}>ADD USER</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{flex: 1}}>
                                            <TouchableOpacity style={{marginLeft:10}} onPress={()=>{setOpenModal(false)}}>
                                                <Text style={styles.modalbtn}>EXIT</Text>
                                            </TouchableOpacity>
                                        </View> 
                                    </View>
                                                             
                                </View>
                            </View>
                        </SafeAreaView>
                    </Modal>
                </View>            
            </View>
            <View style={styles.row}></View>
            <View>
                <FlatList
                    data={dataList}
                    renderItem={RenderFunction}
                    ItemSeparatorComponent={() => <View style={styles.itemSepCompo}/>}
                    />
            </View>          
            {/* <View style={styles.row}></View> */}
		</View>
    );
};

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    AddBtn:{
        color: 'white',
        fontWeight: '700',
        backgroundColor: 'green',
        padding: 10,       
    },
    row:{
        height: 1,
        width: '90%',
        backgroundColor: 'green',
        marginVertical: 10,
        marginHorizontal: '5%',
    },
    modalContainer:{
        width: '80%',
        height: '50%',
        marginHorizontal: '10%',
        marginVertical: '50%',    
        // borderWidth: 2,
        // borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 20,
        // justifyContent: 'center',
    },
    modalOuterContainer:{
        // backgroundColor: 'red',
        backgroundColor: 'lightgray',
    },
    txtInputModalField: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'gray',
        padding: 12,
        marginVertical: 15,
    },
    modalbtn:{
        color: 'white',
        fontWeight:'700',
        backgroundColor: 'green',  
        padding: 10,
        textAlign: 'center',    
        marginVertical: 15,   
    },
    itemSepCompo:{
        height: 1, 
        width: '90%', 
        backgroundColor: 'gray', 
        marginHorizontal: '5%', 
        marginVertical: 10,
    },
    txt:{
        fontSize: 16,
        paddingVertical: 2,
        paddingHorizontal: 4,
    },
    Editbtn:{
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: 'green',
        marginVertical: 10,
        // marginHorizontal: '5%'
    }

});

export default UpdateListWithModal;



//use item.item.name where parameter not pass in {} curley braktes