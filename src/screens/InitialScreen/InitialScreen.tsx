import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux';
import Presenter from './Presenter';
import { getCurrentPosition } from '@/utils/geolocation';
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync
} from '@/redux/modules/counter';

const InitialScreen = () => {
  const dispatch = useDispatch();
  const rootState = useSelector<RootState, RootState>(store => store);
  const { count } = rootState.counter;
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

  const askGeolocation = async () => {
    const location = await getCurrentPosition();
    if (location) console.log(location);
    else console.log('fail');
  };

  return (
    <Presenter
      count={count}
      onPressIncrease={onPressIncrease}
      onPressDecrease={onPressDecrease}
      onPressIncreaseAsync={onPressIncreaseAsync}
      onPressDecreaseAsync={onPressDecreaseAsync}
      askGeolocation={askGeolocation}
    />
  );
};

export default InitialScreen;
