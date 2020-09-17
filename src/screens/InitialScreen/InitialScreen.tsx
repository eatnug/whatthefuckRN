import React from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux';
import {
  CounterState,
  decrease,
  decreaseAsync,
  increase,
  increaseAsync
} from '@/redux/modules/counter';

const InitialScreen = () => {
  const dispatch = useDispatch();
  const { count } = useSelector<RootState, CounterState>(
    store => store.counter
  );

  const onPressIncrease = () => {
    dispatch(increase());
  };

  const onPressDecrease = () => {
    dispatch(decrease());
  };

  const onPressIncreaseAsync = () => {
    dispatch(increaseAsync());
  };

  const onPressDecreaseAsync = () => {
    dispatch(decreaseAsync());
  };

  return (
    <Wrapper>
      <Text>Counter</Text>
      <Text>Hello!!!</Text>
      <Text>World!!!</Text>
      <Text>{count}</Text>
      <Text>{count}</Text>
      <Button onPress={onPressIncrease}>
        <Text>increase</Text>
      </Button>
      <Button onPress={onPressDecrease}>
        <Text>decrease</Text>
      </Button>
      <Button onPress={onPressIncreaseAsync}>
        <Text>increaseAsync</Text>
      </Button>
      <Button onPress={onPressDecreaseAsync}>
        <Text>decreaseAsync</Text>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.View``;

const Text = styled.Text``;

const Button = styled.TouchableOpacity``;
export default InitialScreen;
