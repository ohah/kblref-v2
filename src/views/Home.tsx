import { Button } from 'primereact/button';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import React from 'react'
import { Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Luckysheet } from '../component/Luckysheet';
import { SplitterRatio } from '../store';
import Header from './Header';
import { Main } from './Main';
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
        <Route exact path="/" component={Main} />
      </SplitterPanel>
      <SplitterPanel size={Raito.right}>
        <Luckysheet />
      </SplitterPanel>
    </Splitter>
  )
}

export default Home