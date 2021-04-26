import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
export const textState = atom({
  key: 'textState', // unique ID(다른 atom/selectors 와 구별하기 위함)
  default: '', // default value (=initial value)
})
export const sheetoptState = atom({
  key: 'sheet/opt', // unique ID(다른 atom/selectors 와 구별하기 위함)
  default: {
    layoutCss : {
      width:"100%",
      height:"100%",
    }
  }
})
export const SplitterRatio = atom({
  key: 'SplitterRatio',
  default: {
    left : 99.99,
    right: 0.01
  }
})