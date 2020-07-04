import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const google = process.env.REACT_APP_GOOGLEMAPS;
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 44.080651,
      lng: -121.2058151,
    },
    zoom: 11,
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
            lat={44.080651}
            lng={-121.2058151}
            text="Grillo & Co"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
