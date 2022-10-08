import React, { useContext, useState } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import Button from '../../components/Button'

import { color, flex, font, form, margin, space } from '../../styles'

import api from '../../../providers/services/api'
import { Context } from '../../../providers/contexts/context'

export default function LoginScreen() {
  const { handleLogin } = useContext(Context)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    api.login(username, password).then((response) => {
      if (response.success) {
        handleLogin(response.token)
      } else {
        alert(response.message)
      }
    })
  }

  return (
    <View style={styles.container}>
      <View>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Bem vindo(a) de volta.</Text>
        </View>

        {/* Formulário */}
        <View style={margin.bottom.sm}>
          {/* Login */}
          <View style={margin.bottom.md}>
            <Text style={form.label}>Login</Text>
            <TextInput
              style={form.input}
              placeholder="Usuário do sistema"
              placeholderTextColor={color.line}
              value={username}
              onChangeText={setUsername}
            />
          </View>

          {/* Senha */}
          <View style={margin.bottom.md}>
            <Text style={form.label}>Senha</Text>
            <TextInput
              secureTextEntry={true}
              style={form.input}
              placeholder="Senha de 6 dígitos"
              placeholderTextColor={color.line}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Botões */}
          <View style={[flex.row, flex.alignCenter, margin.bottom.md]}>
            <Button
              style={margin.end.sm}
              title="Entrar"
              type="primary"
              onPress={handleSubmit}
            />
            <Button title="Criar nova conta" outline />
          </View>
        </View>

        {/* Esqueci a senha */}
        <View style={[flex.row, flex.alignCenter]}>
          <Text style={{ color: color.muted, fontFamily: font.family }}>
            Esqueceu a senha?{' '}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: color.muted,
                fontWeight: 'bold',
                fontFamily: font.family,
              }}
            >
              Clique aqui!
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Rodapé */}
      <Text style={styles.footer}>Vaux Gomes ©</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: space.lg * 1.5,
    paddingHorizontal: space.lg,
  },

  title: {
    fontFamily: font.family,
    marginBottom: space.sm,
    fontSize: font.size.xl,
    fontWeight: 'bold',
  },

  subtitle: {
    fontFamily: font.family,
    fontSize: font.size.md,
    color: color.secondary,
  },

  header: {
    marginBottom: space.xxl,
  },

  footer: {
    fontFamily: font.family,
    color: color.muted,
    fontSize: font.size.md,
  },
})
