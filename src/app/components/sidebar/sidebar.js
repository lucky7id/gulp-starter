import React from 'react';

export class Sidebar extends React.Component {
  constructor(args) {
    super(args);
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar-items">
            <div className="list-group">
                <a href="#" className="list-group-item active">
                Cras justo odio
                </a>
                <a href="#" className="list-group-item">Dapibus ac facilisis in</a>
                <a href="#" className="list-group-item">Morbi leo risus</a>
                <a href="#" className="list-group-item">Porta ac consectetur ac</a>
                <a href="#" className="list-group-item">Vestibulum at eros</a>
            </div>
        </div>
      </div>
    )
  }
}