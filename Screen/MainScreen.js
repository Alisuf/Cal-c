import React, { useState } from 'react'
import {View, Text, ScrollView, Pressable } from 'react-native'
import styles from '../Screen/MainScreenStyle'

const MainScreen = () => {
    const [value, setValue] = useState('0');
    const [bracketopen, setBracketopen]= useState(false);
    const handlePress =(val)=>{
        console.log('pressed',val)
        if(val== 'AC')
        {
            setValue('0')
        }
        else if(val=='='){
            try{
                if((value.match(/\(/g)||[]).length==(value.match(/\)/g)||[]).length){
                    setValue('Error')
                console.log('equal brackets')
            if(value.slice(-1)=='+'||value.slice(-1)=='-'||value.slice(-1)=='*'||value.slice(-1)=='%'||value.slice(-1)=='/'||value.slice(-1)=='.')
            {
                setValue(`${eval(value.replace('()','(0)').slice(0,-1))}`)
            }
            else{
                setValue(`${eval(value.replace('()',''))}`)
            }
        }
            // else
            // {
            //     console.log('unequal bracket')
            //    }
        }

            catch (e){
                setValue('Format Error')
                  }
                }
        else if(val=='back'){
            setValue(value.slice(0,-1))
        }
        else if(val=='()'){
            if(value=='0'){
                setValue('(')
                setBracketopen(true)
            }
            else if(value.slice(-1)=='+'||value.slice(-1)=='-'||value.slice(-1)=='*'||value.slice(-1)=='%'||value.slice(-1)=='/'||value.slice(-1)=='.'){
                {
                    setValue(val +'(')
                    setBracketopen(true)
            }
             
        }
        else
            if(bracketopen==true){
                setValue(value +')')
                setBracketopen(false)
            }
            else{
                setValue(value+'(')
                setBracketopen(true)
            }
        
    }
        else {
            if(value=='0'){
                    if(val=='+'||val=='-'||val=='*'||val=='%'||val=='/'||val=='.')
                    {
                        setValue(value+val)
                    }
                else{
                    setValue(val)
                }
            }
            else if (isNaN(val)){
                if (value.slice(-1)=='+'||value.slice(-1)=='-'||value.slice(-1)=='*'||value.slice(-1)=='%'||value.slice(-1)=='/'||value.slice(-1)=='.'){
                    setValue(value.slice(0,-1)+val)
                }else{
                    setValue(value+val)
                }
            }
            else{
                setValue(value+val)
            }

        }
    }


  return (
    <View style={styles.MainScreen}>
            <ScrollView style={styles.MainScreenDisplay}>
                <Text style={styles.MainScreenDisplayText}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
            </ScrollView>
        <View style={styles.MainScreenKeypad}>
            <View style={styles.MainScreenKeypadRow}>
                <Pressable onPress={()=>handlePress('AC')}>
                    <View style={styles.ButtonOuter}>
                        <Text style={styles.bg1Button}>
                            AC
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('()')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                          ( )
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('%')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            %
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('/')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            /
                        </Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.MainScreenKeypadRow}>
                <Pressable onPress={()=>handlePress('7')}>
                    <View style={styles.ButtonOuter}>
                        <Text style={styles.bg1Button}>
                            7
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('8')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            8
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('9')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            9
                        </Text>
                    </View>
                </Pressable >
                <Pressable onPress={()=>handlePress('*')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            *
                        </Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.MainScreenKeypadRow}>
                <Pressable onPress={()=>handlePress('4')}>
                    <View style={styles.ButtonOuter}>
                        <Text style={styles.bg1Button}>
                           4
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('5')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                           5
                        </Text>
                    </View>
                </Pressable >
                <Pressable onPress={()=>handlePress('6')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            6
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('-')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            -
                        </Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.MainScreenKeypadRow}>
                <Pressable onPress={()=>handlePress('1')}>
                    <View style={styles.ButtonOuter}>
                        <Text style={styles.bg1Button}>
                            1
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('2')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            2
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('3')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            3
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('+')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            +
                        </Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.MainScreenKeypadRow}>
                <Pressable onPress={()=>handlePress('0')}>
                    <View style={styles.ButtonOuter}>
                        <Text style={styles.bg1Button}>
                          0
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('.')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            .
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('back')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                           x
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('=')}>
                    <View style={styles.Button2Outer}>
                        <Text style={styles.bg2Button}>
                            =
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    </View>

  )
}


export default MainScreen