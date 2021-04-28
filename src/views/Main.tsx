import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Panel } from 'primereact/panel';
import { Search } from '../component';

export const Main = () => {
  const CardHeader = () => {
    
    return (
      <> 무야호 </>
    )
  }
  return (
    <div className="p-p-2">
      {/* <Message severity="info" text="KBL 레퍼런스 리뉴얼" className="p-d-flex p-jc-start" style={{width:"100%"}} /> */}
      <Search />
      <Accordion activeIndex={0}>
        {/* <AccordionTab header={<React.Fragment><i className="pi pi-search"></i><span>Header III</span><i className="pi pi-cog"></i></React.Fragment>}>
          Content I
        </AccordionTab> */}
        <AccordionTab header="KBL 레퍼런스 리뉴얼">
          <p>React 기반으로 수정하여 호환성을 높였습니다.</p>
          <p>스탯덕후들을 위해 온라인 엑셀 편집 및 저장 기능을 추가 하여 스탯 비교 및 저장 등을 쉽게 하였습니다.</p>
        </AccordionTab>
        <AccordionTab header="야스다">
          리뉴얼 공지사항
        </AccordionTab>
      </Accordion>
      <section className="p-grid p-my-3">
        <div className="p-col-12 p-sm-6">
          <Panel header="팀 순위">
            <p>

            </p>
          </Panel>
        </div>
        <div className="p-col-12 p-sm-6">
          <Panel header="득점 순위">
            <p>

            </p>
          </Panel>
        </div>
      </section>
    </div>
  )
}
export default Main