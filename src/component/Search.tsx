import React, { useState, useEffect } from 'react'
import { AutoComplete } from 'primereact/autocomplete';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';

export const Search = () => {
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [filteredCities, setFilteredCities] = useState<any>(null);

  const groupedCities = [
    {
      label: 'Germany', code: 'DE',
      items: [
        { label: 'Berlin', value: 'Berlin' },
        { label: 'Frankfurt', value: 'Frankfurt' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Munich', value: 'Munich' }
      ]
    },
    {
      label: 'USA', code: 'US',
      items: [
        { label: 'Chicago', value: 'Chicago' },
        { label: 'Los Angeles', value: 'Los Angeles' },
        { label: 'New York', value: 'New York' },
        { label: 'San Francisco', value: 'San Francisco' }
      ]
    },
    {
      label: 'Japan', code: 'JP',
      items: [
        { label: 'Kyoto', value: 'Kyoto' },
        { label: 'Osaka', value: 'Osaka' },
        { label: 'Tokyo', value: 'Tokyo' },
        { label: 'Yokohama', value: 'Yokohama' }
      ]
    }
  ];

  useEffect(() => {
    // setCountries(countryservice);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const searchCity = (event: { query: string }) => {
    let query = event.query;
    let _filteredCities = [];

    for (let country of groupedCities) {
      let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
      if (filteredItems && filteredItems.length) {
        _filteredCities.push({ ...country, ...{ items: filteredItems } });
      }
    }

    setFilteredCities(_filteredCities);
  }

  const groupedItemTemplate = (item: any) => {
    return (
      <div className="p-d-flex p-ai-center country-item">
        <div>{item.label}</div>
      </div>
    );
  }

  return (
    <div className="p-my-2">
      <span className="p-fluid p-my-2">
      <AutoComplete value={selectedCity} placeholder="검색어를 입력하세요" suggestions={filteredCities} completeMethod={searchCity} field="label" optionGroupLabel="label" optionGroupChildren="items"optionGroupTemplate={groupedItemTemplate} onChange={(e) => setSelectedCity(e.value)} style={{width:'100%'}}/>
      </span>
    </div>
  )
}

export default Search
