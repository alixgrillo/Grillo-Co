import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const google = process.env.REACT_APP_GOOGLEMAPS;
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 39.68461670708278,
      lng: -105.27035338784644,
    },
    zoom: 12,
  };
  componentDidMount() {}

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "30vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: google }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <AnyReactComponent
            lat={39.68461670708278}
            lng={-105.27035338784644}
            text="Grillo & Co"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
