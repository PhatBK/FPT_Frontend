import React, { Component } from 'react';

class MainSectionFooterFilters extends Component {
  render(){
    return(
		<footer id="demo-footer">
                    <span id="demo-count"><strong>4 &nbsp;</strong>Items left</span>

                    <ul id="demo-filters">
                        <li>
                            <a className="demo-selected" href="#">All</a>
                        </li>
                        <li>
                            <a className="demo-selected" href="#">Active</a>
                        </li>
                        <li>
                            <a className="demo-selected" href="#"> Completed</a>
                        </li>
                    </ul>
        </footer>
    );
  }
}

export {MainSectionFooterFilters};