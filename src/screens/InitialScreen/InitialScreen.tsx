import React from 'react';
import styled from 'styled-components/native';

const InitialScreen = () => (
  <Wrapper>
    <Text>initial screen</Text>
    <Button
      onPress={() => {
        throw new Error('some crash');
      }}
    >
      <Text>crash</Text>
    </Button>
  </Wrapper>
);

const Wrapper = styled.View``;

const Text = styled.Text``;

const Button = styled.TouchableOpacity``;
export default InitialScreen;
