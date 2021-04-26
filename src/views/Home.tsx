import { Button } from 'primereact/button';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import React from 'react'
import { useRecoilValue } from 'recoil';
import { Luckysheet } from '../component/Luckysheet';
import { SplitterRatio } from '../store';
declare var window:any

const Home = () => {
  const Raito = useRecoilValue(SplitterRatio);
  const ResizeEnd = () => {
    // console.log('test');
    window.luckysheet.resize();
  }
  return (
    <Splitter style={{ height: `${window.innerHeight}px` }} onResizeEnd={ResizeEnd}>
      <SplitterPanel size={Raito.left}>
        <div style={{ backgroundColor: 'var(--blue-500)' }}> 무야흐흐어허 </div>
      </SplitterPanel>
      <SplitterPanel size={Raito.right}>
        <Luckysheet />
      </SplitterPanel>
    </Splitter>
  )
}

export default Home
