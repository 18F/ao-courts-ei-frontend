import React, { useReducer } from 'react';
import DocketDetails from '../components/docket-details';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Alert from '../components/alert';
import { Link } from 'gatsby';

const initialState = {
  caseNumber: '21-12345',
  caption: 'United States v. Timothy Carpenter',
  parties: [
    { partyName: 'United States', partyDesignation: 'Government' },
    { partyName: 'Timothy Carpenter', partyDesignation: 'Defendant' },
  ],
  events: [
    {
      date: {
        month: '09',
        day: '26',
        year: '2016',
      },
      description: 'Notice of Appeal filed',
    },
    {
      date: {
        month: '06',
        day: '30',
        year: '2021',
      },
      description:
        'Order remanding the case to the district court for further proceedings',
    },
  ],
};

const docketReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PARTY':
      return { ...state, parties: [...state.parties, action.party] };
    case 'ADD_EVENT':
      return { ...state, events: [...state.events, action.event] };
    default:
      return state;
  }
};

const DocketEntry = () => {
  const [state, dispatch] = useReducer(docketReducer, initialState);

  return (
    <Layout>
      <SEO title="Docket Entry" />
      <div className="grid-container">
        <Alert type="info" heading="New Remand Available">
          The case <em>US v. Carpenter</em> has been remanded.{' '}
          <Link to="#docket_table">View order.</Link>
        </Alert>
      </div>
      <DocketDetails courtCase={state} dispatch={dispatch} />
    </Layout>
  );
};

export default DocketEntry;