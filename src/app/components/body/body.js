import React from 'react';

export class Body extends React.Component {
  constructor(args) {
    super(args);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">{this.props.children}</div>
        </div>
      </div>
    )
  }
}