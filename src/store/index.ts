import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
export const textState = atom({
  key: 'textState', // unique ID(다른 atom/selectors 와 구별하기 위함)
  default: '', 
})
export const isMenu = atom({
  key: 'Menu', // unique ID(다른 atom/selectors 와 구별하기 위함)
  default: false, 
})
export const User = atom({
  key: 'Users', 
  default: {
    Email : '',
    NickName : '',
  }
})
export const sheetoptState = atom({
  key: 'sheet/opt', 
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
export const DataSelecteds = atom({
  key : 'DataSelected',
  default : []
})