import React from "react";
import { View } from "react-native";

import GestacaoNascimento from "./GestacaoENascimento";
import Alimentacao from "./Alimentacao";

export default function Historico() {
    return (
        <View >
            <GestacaoNascimento/>
            <Alimentacao/>
        </View>
    )
}