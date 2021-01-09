import React from 'react';
import { Link, useParams, useHistory, useLocation } from 'react-router-dom';

import Page from '../Page';

const ViewIndustry = () => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const { company, postTitle, description, videoUrl, embeddedVideoURL, link } = location.state;
  const { companyName } = company;

  return (
    <Page title="View Industry">
        <h2>{postTitle}</h2>
        <h7>by <i>{companyName}</i></h7>
        <p>{description}</p>
        {embeddedVideoURL && 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3Ii4CFYAnkI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
        <p> Click{' '}
                <Link to={videoUrl} 
                    target="_blank" 
                    onClick={(event) => {event.preventDefault(); window.open(link);}}
                >here</Link>
                {' '}
                to find out more.
            </p>
        <button type="button" onClick={() => history.push('/student/industry')}>Back</button>
    </Page>
  )
}

export default ViewIndustry;
