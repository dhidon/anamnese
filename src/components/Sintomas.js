import React, { useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Sintomas() {
    const navigation = useNavigation()

    const [motivo, setMotivo] = useState('')
    const [profissionais, setProfissionais] = useState('')
    const [convive, setConvive] = useState('')
    const [opcoesSelecionadas, setOpcoesSelecionadas] = useState([])

    const opcoes = [
        {id: 0, label: 'autismo'},
        {id: 1, label: 'déficit de atenção'},
        {id: 2, label: 'convulção ou epilepsia'},
        {id: 3, label: 'hiperatividade'},
        {id: 4, label: 'dificuldades de aprendizagem'},
        {id: 5, label: 'deficiência intelectual'},
        {id: 6, label: 'tiques ou Síndrome de Tourette'},
        {id: 7, label: 'abuso de álcool'},
        {id: 8, label: 'uso de drogas'},
        {id: 9, label: 'tentativa de suicídio'},
        {id: 10, label: 'abuso físico'},
        {id: 11, label: 'problemas comportamentais na infância'},
        {id: 12, label: 'doença mental'},
        {id: 13, label: 'depressão ou ansiedade'},
        {id: 14, label: 'abuso sexual'},
        {id: 15, label: 'doença ou enfermidade neurológica'}
    ]

    const alternarSelecao = (id) => {
        if (opcoesSelecionadas.includes(id)) {
            setOpcoesSelecionadas(opcoesSelecionadas.filter(opcao => opcao !== id))
        } else {
            setOpcoesSelecionadas([...opcoesSelecionadas, id])
        }

        console.log(opcoesSelecionadas)
    }

    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>2. Qual o principal motivo do paciente estar realizando esta avaliação?</Text>
            <TextInput
                style={styles.input}
                value={motivo}
                onChangeText={newText=>setMotivo(newText)}
            />
            <Text>Que profissionais estão fazendo o acompanhamento?</Text>
            <TextInput
                style={styles.input}
                value={profissionais}
                onChangeText={setProfissionais}
            />
            <Text>Com quem o adolescente passa mais tempo?</Text>
            <TextInput
                style={styles.input}
                value={convive}
                onChangeText={setConvive}
            />
            <View>   
                <Text style={{textAlign: 'justify', marginBottom: 10}}>Marque as condições ou doenças que algum membro próximo da família (pais, irmãos, irmãs, tios, tias, primos, avós) já teve. Anote o grau de parentesco com a criança</Text>
                {opcoes.map((opcao) => (
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
            <Button title='Próxima' onPress={() => navigation.navigate('Histórico - Adolescente')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 8
    },
    container: {
        gap: 10,
        flex: 1
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#444",
        marginRight: 10,
    },
    checkboxSelected: {
        backgroundColor: "#4CAF50",
    },
    label: {
        fontSize: 16,
    }
})