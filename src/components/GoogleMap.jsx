import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    
    render() {
        
        const style = {
            width: '100%',
            height: '100%' 
        }

      return (
        <Map google={this.props.google} zoom={15}
            style={style}
            initialCenter={{
            lat: this.props.latitude,
            lng: this.props.longitude
            }}
        >
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              {/* <div>
                <h1>University Location</h1>
              </div> */}
          </InfoWindow>
        </Map>
      );
    }
}
   

// export default GoogleMap;
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBha2m_o8kKChjguj0zmwp0xK3H0Mq03hg'
  })(MapContainer);
