import { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
  Alert,
} from "react-native";

import { Camera, CameraType, Constants } from "expo-camera";

import * as MediaLibrary from "expo-media-library";

import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const cameraRef = useRef(null);
  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front);
  const [photo, setPhoto] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);

      setOpenModal(true);

      console.log(photo);
    }
  }

  function ClearPhoto() {
    setPhoto(null);

    setOpenModal(false);
  }

  //quando a foto for salva poder apagar da galeria
  //botão para tirar o flash
  //forma de carregar o autofocus
  //aplicar video no projeto

  async function SavePhoto() {
    if (photo) {
      await MediaLibrary.createAssetAsync(photo)
        .then(Alert.alert("Foto salva na galeria"))
        .catch((error) => {
          alert("Erro ao carregar foto");
        });
    }
  }

  //flash da camera
  async function toggleFlash() {
    const newFlashMode =
      flashMode === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off;
        setFlashMode(newFlashMode);
  }

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();

      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={tipoCamera}
        style={styles.camera}
        ratio={"16:9"}
        flashMode={flashMode} // Adicionando a propriedade flashMode
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity
            style={styles.btnFlip}
            onPress={() =>
              setTipoCamera(
                tipoCamera == CameraType.front
                  ? CameraType.back
                  : CameraType.front
              )
            }
          >
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnFlash} onPress={toggleFlash}>
            <Text style={styles.txtFlip}>Flash</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity
        style={styles.btnCaptura}
        onPress={() => CapturePhoto()}
      >
        <FontAwesome name="camera" size={23} color={"#fff"} />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={openModal}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 30,
          }}
        >
          <Image
            style={{ width: "100%", height: 500, borderRadius: 10 }}
            source={{ uri: photo }}
          />
          <View style={{ margin: 15, flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={() => ClearPhoto()}
            >
              <FontAwesome name="trash" size={35} color={"#ff0000"} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnUpload}
              onPress={() => SavePhoto()}
            >
              <FontAwesome name="save" size={35} color={"#121212"} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "80%",
  },
  viewFlip: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  btnFlip: {
    // position: 'absolute,',
    pading: 10,
    marginTop: 500,
  },
  txtFlip: {
    fontSize: 20,
    color: "#fff",
  },
  btnFlash: {
    marginBottom: 100,
    marginRight: 100,
  },
  btnCaptura: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#121212",

    alignItems: "center",
    justifyContent: "center",
  },
  btnCancel: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#transparent",

    alignItems: "center",
    justifyContent: "center",
  },
  btnUpload: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#transparent",

    alignItems: "center",
    justifyContent: "center",
  },
});
