import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  // {searchRepositories: dispatch(searchRepositories)} ←こんなオブジェクトを返却するイメージ
  // actionCreatorsを呼び出すと、自動でdispatchされるように設定してくれる
  return bindActionCreators(actionCreators, dispatch);
};
