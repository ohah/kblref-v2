import { Sidebar } from 'primereact/sidebar';
import React from 'react'
import { useRecoilState } from 'recoil';
import { Search } from '../component';
import { isMenu } from '../store';

const Menu = () => {
  const [ visible, setVisible ] = useRecoilState(isMenu);
  // const visible = useRecoilValue(isMenu);
  return (
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
      <Search />
    </Sidebar>
  )
}
export default Menu;