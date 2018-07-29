import React, { Component } from 'react';
import {MainSectionList} from './main_section_lists';
import {MainSectionFooterFilters} from './main_section_footer_filters';

class MainSection extends Component {
  render(){
    return(
      <section id="demo-main">
          <MainSectionList/>
          <MainSectionFooterFilters/>
      </section>
    );
  }
}
export {MainSection};