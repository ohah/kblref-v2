import { Splitter, SplitterPanel } from 'primereact/splitter';
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Luckysheet } from '../component/Luckysheet';
import { SplitterRatio } from '../store';
import Header from './Header';
import { Main } from './Main';
import MenuTeamplate from './Menu';
import Pstat from './Pstat';
import Allstat from './Allstat';
import Schedule from './Schedule';
declare var window:any
const Home = () => {
  const Raito = useRecoilValue(SplitterRatio);
  const ResizeEnd = () => {
    // console.log('test');
    try {
      window.luckysheet.resize();
    }catch (e) {
      window.luckysheet.create({
        container: "luckysheet",
        title:'KBL 레퍼런스 킹왕짱',
      });
    }
  }
  return (
    <Splitter style={{ height: `${window.innerHeight}px` }} onResizeEnd={ResizeEnd}>
      <SplitterPanel size={Raito.left}>
        <Header />
        <MenuTeamplate />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/개인스탯" component={Pstat} />
          <Route path="/올스탯" component={Allstat} />
          <Route path="/일정" component={Schedule} />
        </Switch>
      </SplitterPanel>
      <SplitterPanel size={Raito.right}>
        <Luckysheet />
      </SplitterPanel>
    </Splitter>
  )
}

export default Home