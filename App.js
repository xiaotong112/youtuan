import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  // 使用 useState 来管理背景颜色
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  // 按钮点击事件处理函数
  const changeBackgroundColor = () => {
    // 随机生成一个新的背景颜色
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(newColor);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity style={styles.button} onPress={changeBackgroundColor}>
        <Text style={styles.buttonText}>点击我改变背景颜色</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;