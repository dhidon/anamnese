import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Seletor({selecionado, aoMudar, lista}) {


    return (
        <View>
            <Picker
                style={{height: 55, width: '80%'}}
                selectedValue={selecionado}
                onValueChange={itemValue=>aoMudar(itemValue)}
                mode='dropdown'
            >
                {lista.map((item, index) => {
                    return <Picker.Item key={index} value={item.value} label={item.label}/>
                })}
            </Picker>
        </View>
    )
}