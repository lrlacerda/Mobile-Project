import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

// Importando dependência do mapa
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

// Aqui nós vamos pedir uma solicitação a permitir a localização do celular do usuário
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,

  watchPositionAsync, //monitorar o posicionamento
  LocationAccuracy, 
} from "expo-location";

import MapViewDirections from "react-native-maps-directions";

import { mapskey } from "./utils/mapsApiKey";

export default function App() {
  const mapReference = useRef(null);
  const [initialPosition, setIniticalPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.206,
    longitude: -46.7836,
  });

  const [markerImageVisible, setMarkerImageVisible] = useState(false);

  async function CapturarLocalizacao() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const CaptureLocation = await getCurrentPositionAsync();

      setIniticalPosition(CaptureLocation);

      console.log(initialPosition);
    }
  }

  useEffect(() => {
    CapturarLocalizacao();

    //monitorar em tempo real
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1,
    }, async (response) => {
      await setIniticalPosition(response)

      mapReference.current?.animatedCamera({
        picht: 60,
        center: response.coords
      })
    }
    )
  }, [1000]);

  useEffect(() => {
    RecarregarVisualizarMapa();
  }, [initialPosition]);

  async function RecarregarVisualizarMapa() {
    if (mapReference.current && initialPosition) {
      await mapReference.current.fitToCoordinates(
        [
          {
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
          },
          {
            latitude: finalPosition.latitude,
            longitude: finalPosition.longitude,
          },
        ],
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true,
        }
      );
    }
  }

  const handleMarkerPress = () => {
    setMarkerImageVisible(!markerImageVisible);
  };

  return (
    <View style={styles.container}>
      {initialPosition != null ? (
        <MapView
          ref={mapReference}
          initialRegion={{
            latitude: initialPosition.coords.latitude,
            longitude: initialPosition.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={grayMapStyle}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: initialPosition.coords.latitude,
              longitude: initialPosition.coords.longitude,
            }}
            title="Posição inicial"
            description=" Estou aqui"
            pinColor="#49b3ba"
            onPress={handleMarkerPress}
          />

          <MapViewDirections
            origin={initialPosition.coords}
            destination={{
              latitude: -23.5329,
              longitude: -46.7926,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            strokeWidth={5}
            strokeColor="#496bba"
            apikey={mapskey}
          />

            {/* Adicionando o marcador para o destino */}
            <Marker
            coordinate={{
              latitude: finalPosition.latitude,
              longitude: finalPosition.longitude,
            }}
            title="Destino"
            description="Local de destino"
            pinColor="#ff0000"
          />

          <MapViewDirections
            origin={finalPosition.coords}
            destination={{
              latitude: finalPosition.latitude,
              longitude: finalPosition.longitude,
            }}
            strokeWidth={5}
            strokeColor="#496bba"
            apikey={mapskey}
          />
        </MapView>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
          <Text>Carregando...</Text>
        </View>
      )}
      {markerImageVisible && (
        <View style={styles.markerImageContainer}>
          {/* <Image
            source={require("./assets/image/entrega_hospital_igesp_fotofredcasagrande_24-03-2023-84-scaled.jpg")} // Substitua pelo caminho da sua imagem
            style={styles.markerImage}
          /> */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  markerImageContainer: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: [{ translateX: -50 }],
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },

  markerImage: {
    position: "absolute",
    // marginTop: -590,
    width: 50,
    height: 50,
  },
});

const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
];
