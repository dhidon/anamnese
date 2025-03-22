import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import Slider from "@react-native-community/slider";
import Seletor from "./Seletor";

export default function Alimentacao() {
    const [mamouSelecionado, setMamouSelecionado] = useState([])
    const [mamouMeses, setMamouMeses] = useState('')
    const [mamouIdade, setMamouIdade] = useState('')
    const [mamadeiraSelecionada, setMamamdeiraSelecionada] = useState([])
    const [chupetaSelecionada, setChupetaSelecionada] = useState([])
    const [idade, setIdade] = useState(0)
    const [dificuldadeAlimentarSelecionada, setDificuldadeAlimentarSelecionada] = useState([])
    const [quaisDificuldades, setQuaisDificuldades] = useState('')

    const consistencias = [
        {id: 0, label: 'Sólido'},
        {id: 1, label: 'Líquido'},
        {id: 2, label: 'Pastoso'}
    ]

    const mamou = [{label: 'Sim', value: 'sim'}, {label: 'Não', value: 'não'}]
    const mamadeira = [{label: 'Sim', value: 'sim'}, {label: 'Não', value: 'não'}]
    const chupeta = [{label: 'Sim', value: 'sim'}, {label: 'Não', value: 'não'}]
    const dificuldadeAlimentar = [{label: 'Sim', value: 'sim'}, {label: 'Não', value: 'não'}]

    return (
        <View style={styles.container}>
            <Text>ALIMENTAÇÃO</Text>
            <Text>A criança mamou?</Text>
            <Seletor
                selecionado={mamouSelecionado}
                aoMudar={setMamouSelecionado}
                lista={mamou}
            />
            {mamouSelecionado === 'sim'
            ? <View>
                <Text>Aleitamento materno esclusivo até quantos meses?</Text>
                <TextInput
                    style={styles.input}
                    value={mamouMeses}
                    onChangeText={newText=>setMamouMeses(newText)}
                />
                <Text>Mamou até quantos meses?</Text>
                <TextInput
                    style={styles.input}
                    value={mamouIdade}
                    onChangeText={newText=>setMamouIdade(newText)}
                />
            </View>
            :null}
            <Text>Usou mamadeira?</Text>
            <Seletor
                selecionado={mamadeiraSelecionada}
                aoMudar={setMamamdeiraSelecionada}
                lista={mamadeira}
            />
            <Text>Usou chupeta?</Text>
            <Seletor
                selecionado={chupetaSelecionada}
                aoMudar={setChupetaSelecionada}
                lista={chupeta}
            />
            <Text>Com qual idade foi feita a introdução alimentar?</Text>
            <Slider
                minimumValue={0}
                maximumValue={10}
                value={idade}
                onValueChange={newValue=>setIdade(newValue)}
                step={1}
                style={{width: '80%'}}
            />
            <Text>Apresentou dificuldade na introdução alimentar?</Text>
            <Seletor
                selecionado={dificuldadeAlimentarSelecionada}
                aoMudar={setDificuldadeAlimentarSelecionada}
                lista={dificuldadeAlimentar}
            />
            {dificuldadeAlimentarSelecionada === 'sim'
            ?<View>
                <Text>Quais?</Text>
                <TextInput
                    style={styles.input}
                    value={quaisDificuldades}
                    onChangeText={newText=>setQuaisDificuldades(newText)}
                />
            </View>
            :nul}
            <Text>ATUALMENTE</Text>
            <View>   
                <Text style={{textAlign: 'justify', marginBottom: 10}}>Aceita bem quais consistências de alimentos?</Text>
                {consistencias.map((opcao) => (
                <TouchableOpacity
                    key={opcao.id}
                    style={styles.checkboxContainer}
                    onPress={() => alternarSelecao(opcao.id)}
                >
                    <View
                        style={[
                            styles.checkbox,
                            opcoesSelecionadas.includes(opcao.id) && styles.checkboxSelected,
                        ]}
                    />
                    <Text style={styles.label}>{opcao.label}</Text>
                </TouchableOpacity>
                ))}
            </View>
            <Text>Alteração na mastigação, pouco apetite ou voracidade?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 8
    }
})