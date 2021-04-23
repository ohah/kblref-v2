import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { sheetoptState } from '../store'
declare var window:any
export const Luckysheet = () => {
  const option = useRecoilValue(sheetoptState);
  useEffect(() => {
    const luckysheet = window.luckysheet;
    luckysheet.create({
      container: "luckysheet",
      // plugins:['chart'],
    });
  }, [])
  const luckyCss:React.CSSProperties = {
    margin: '0px',
    padding: '0px',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px'
  }
  return (
    <section
    style={{
      width:option.layoutCss.width,
      height:option.layoutCss.height,
      position : "relative"
    }}>
      <div
      id="luckysheet"
      style={luckyCss}
      ></div>
    </section>
  )
}
export default Luckysheet