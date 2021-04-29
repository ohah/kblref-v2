import { Button } from "primereact/button";
import React from "react";
import { useRecoilState } from "recoil";
import { DataSelecteds } from "../store";
declare var window:any

export const TableHeader = (Title:string, datas:any) => {  
  const getData = () => {
    const luckysheet = window.luckysheet;
    try {
      const Range = luckysheet.getRange(); //좌표 구함
      const startCol = Range[0].column[0]; //첫번째 col값
      const startRow = Range[0].row[0]; //첫번째 row값
      datas.forEach((rows:Object, r:number) => {
        let c = 0;
        Object.entries(rows).forEach(([key, value]) => {
          if(r == 0) {
            luckysheet.setCellValue(startRow + r, startCol + c, key);  //처음일경우 헤더값도 넣어줌
          }
          luckysheet.setCellValue(startRow + r + 1, startCol + c, value);
          c++;
        });
      });
    } catch(e) {
      alert('편집 테이블이 활성화 되지 않았거나 선택된 테이블이 없습니다.')
    }
  }
  return (
    <div className="table-header p-d-flex p-jc-between p-ai-center">
      <span>{Title}</span>
      <Button onClick={getData} icon="pi pi-angle-double-right" />
    </div>
  )
};
export default TableHeader