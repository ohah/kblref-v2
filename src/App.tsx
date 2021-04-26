import React, { useEffect, useState } from 'react';
// import 'primereact/resources/themes/mdc-light-indigo/theme.css'
import 'primereact/resources/themes/saga-blue/theme.css'
// import 'primereact/resources/themes/arya-blue/theme.css'
// import 'primereact/resources/themes/md-light-indigo/theme.css';
// import 'primereact/resources/themes/md-light-deeppurple/theme.css';
// import 'primereact/resources/themes/md-dark-indigo/theme.css';
// import 'primereact/resources/themes/md-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import './App.css';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { sheetoptState, SplitterRatio, textState } from './store'
import { RecoilRoot, selector, useRecoilState, useRecoilValue } from 'recoil';
import PrimeReact from 'primereact/api';
import Luckysheet from './component/Luckysheet';
import Home from './views/Home'
PrimeReact.ripple = true;
function CharacterCounter (){
  const [text,setText] = useRecoilState(textState);
	const [test, setTest] = useRecoilState(sheetoptState);
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};
	const layoutChange = (e:any) => {		
		// e.preventDefault();
		setTest({
			...test,
			layoutCss : {
				height:"500px",
				width:"100%",
			}
		})
	}
  const [value, setValue] = useState<string>();
	return (
		<div>
			{test.layoutCss.height}
      <Luckysheet />
			<TextInput />
			<Button label="무야호" onClick={layoutChange} />
      <InputText value={value} onChange={(e) => setValue(e.target.value)} className="p-inputtext-sm"/>
      <InputText type="text" value={text} onChange={onChange} className="p-inputtext-sm p-d-block p-mb-2" placeholder="Small" />
      <InputText type="text" className="p-d-block p-mb-2" placeholder="Normal" />
      <InputText type="text" className="p-inputtext-lg p-d-block"  placeholder="Large" />
		</div>	
	);
}
const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});
function TextInput() {
	const [text,setText] = useRecoilState(textState);
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};
	
	return(
		<div>
			<input type="text" value={text} onChange={onChange} />
			<br />
			Echo: {text}
		</div>
	);
}

function App() { 
  return (
    <RecoilRoot>
			<Home />
    </RecoilRoot>
  );
}

export default App;
