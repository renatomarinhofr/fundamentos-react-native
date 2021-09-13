import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export function SkillCard() {
  return (
    <TouchableOpacity key={1} style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        skill
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  }
})