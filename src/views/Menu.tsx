import { Sidebar } from 'primereact/sidebar';
import React from 'react'
import { useRecoilState } from 'recoil';
import { Search } from '../component';
import { isMenu } from '../store';
import { Menu } from 'primereact/menu';
import { useHistory } from "react-router-dom";

const MenuTeamplate = () => {
  const [ visible, setVisible ] = useRecoilState(isMenu);
  const history = useHistory();
  // const visible = useRecoilValue(isMenu);
  const items = [
    {
      label: '올스탯',
      icon: 'pi pi-upload',
      command:() => {
        history.push("/올스탯");
        setVisible(false);
      }
    },
    {
      label: '개인스탯',
      icon: 'pi pi-upload',
      command:() => {
        history.push("/개인스탯");
        setVisible(false);
      }
    },
    {
      label: '일정',
      icon: 'pi pi-upload',
      command:() => {
        history.push("/일정");
        setVisible(false);
      }
    }
  ];
  return (
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
      <Search />
      <Menu model={items} style={{width: "100%", border : 0}}/>
    </Sidebar>
  )
}
export default MenuTeamplate;