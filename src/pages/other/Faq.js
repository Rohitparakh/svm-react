import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Faq from "react-faq-component";
import ReactGa from 'react-ga';
const FAQ = ({ location }) => {

  //For Google Analytics
  useEffect(()=>{ReactGa.pageview(window.location.pathname + window.location.search);
  });

  const { pathname } = location;

  const [rows, setRowsOption] = useState(null);


  const data = {
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "#a50034",
    rowContentPaddingLeft: '30px'
  };

const config = {
    animate: true,
    tabFocus: true
};

useEffect(() => {
  console.log(rows)
  if (rows) {
    data.rows.forEach((element,index) => {
      setTimeout(() => {
        rows[index].close()
        
      }, 1000);
    });
}
}, [rows]);


  return (
    <Fragment>
      <MetaTags>
      <title>LG | FAQ | SVM Electronics</title>
        <meta
          name="description"
          content="FAQ page of SVM Electronics( LG )."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        FAQ's
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />


            <Faq
                data={data}
                styles={styles}
                config={config}
                getRowOptions={setRowsOption}
            />
        
</LayoutOne>
</Fragment>);
};
FAQ.propTypes = {
    location: PropTypes.object
  };
export default FAQ