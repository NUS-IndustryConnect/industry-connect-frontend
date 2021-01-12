import React from 'react';

import Page from '../../../common/Page';
import PostPreview from '../../../common/post/PostPreview';
import ButtonLink from '../../../common/ButtonLink';

// TODO: link up to Redux store
const mockData = {
  postTitle: "New internship opportunities at XXX",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia dui ut faucibus lobortis. Nullam a scelerisque dolor, eu posuere lorem. Mauris eu sapien dictum, tincidunt mauris in, euismod nunc. Aliquam fermentum, justo in hendrerit commodo, lorem justo venenatis lacus, consequat fringilla tellus justo vitae ante. Sed pellentesque scelerisque hendrerit. Curabitur maximus odio gravida, dapibus magna vitae, sollicitudin dolor. Etiam tristique, eros commodo malesuada elementum, lacus leo sollicitudin nisi, finibus tristique metus diam euismod nibh. Sed sed tempus erat. Maecenas et dolor porttitor, luctus nunc posuere, tincidunt nisi.\nNulla convallis gravida lorem, quis tempor ligula convallis id. Phasellus ac ultricies ipsum. Pellentesque et urna tincidunt, tincidunt nulla vitae, lacinia libero. In facilisis mattis ex vestibulum placerat. Nam iaculis sagittis tempus. Mauris id risus a dolor bibendum tempor fringilla non velit. Aliquam molestie nibh sit amet est posuere varius id eget diam. Maecenas rutrum nulla vitae lorem molestie consequat. In sit amet augue varius enim placerat fermentum. Vivamus laoreet turpis sed diam sollicitudin, quis pretium massa mollis. Sed lobortis quis ex non tempor. Ut quis odio in lorem dictum euismod. Phasellus vitae dictum diam.",
  videoUrl: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
  moreUrl: "https://www.tech.gov.sg/"
}

export default function Preview() {
  return (
    <Page title="Preview Post">
      <PostPreview data={mockData} />
      {/* TODO: Connect up to BE API */}
      <ButtonLink to="/industry/post/submitted" label="Submit for vetting" className="primary" />
    </Page>
  )
}