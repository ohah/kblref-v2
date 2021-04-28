import React from 'react'
import { AutoComplete } from 'primereact/autocomplete';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';

export const Search = () => {
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
  const data = [
    { "name": "Afghanistan", "code": "AF" },
  ]
  return (
    <div>
      <AutoComplete value={data} />
      <Link to="/개인스탯" > 개인스탯 </Link>
    </div>
  )
}
export default Search
