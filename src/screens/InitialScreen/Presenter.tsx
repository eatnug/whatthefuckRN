import React from 'react';
import styled from 'styled-components/native';

type Props = {
  count: number;
  onPressIncrease: () => void;
  onPressDecrease: () => void;
  onPressIncreaseAsync: () => void;
  onPressDecreaseAsync: () => void;
  askGeolocation: () => void;
};

const Presenter = (props: Props) => (
  <Wrapper>
    <Text>Counter</Text>
    <Text>Hello!!!</Text>
    <Text>World!!!</Text>
    <Text>{props.count}</Text>
    <Button onPress={props.onPressIncrease}>
      <Text>increase</Text>
    </Button>
    <Button onPress={props.onPressDecrease}>
      <Text>decrease</Text>
    </Button>
    <Button onPress={props.onPressIncreaseAsync}>
      <Text>increaseAsync</Text>
    </Button>
    <Button onPress={props.onPressDecreaseAsync}>
      <Text>decreaseAsync</Text>
    </Button>
    <Button onPress={props.askGeolocation}>
      <Text>askGeolocation</Text>
    </Button>
  </Wrapper>
);

const Wrapper = styled.View``;

const Text = styled.Text``;

const Button = styled.TouchableOpacity`
  padding: 5%;
  background: green;
  width: 200px;
  justify-content: center;
  align-items: center;
  margin: 5%;
  border-radius: 10px;
`;

export default Presenter;
