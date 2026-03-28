# PetCare 🐾

**Estudiantes:**
Juan Esteban Martinez Montoya
Sebastian Guzman Garcia

## Descripción

PetCare es una aplicación móvil desarrollada con React Native CLI que permite gestionar información de mascotas. El usuario puede registrar nuevas mascotas, ver el listado de las registradas, consultar el detalle de cada una y acceder a consejos de cuidado que rotan automáticamente.

---

## Tecnologías utilizadas

- React Native CLI 0.76.9
- React Navigation (Stack + Bottom Tabs)
- react-native-screens 4.4.0
- react-native-safe-area-context 4.14.0
- Android Studio
- Node.js

---

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/Dragonico1/CS5PetCare.git
cd CS5PetCare
```

### 2. Instalar dependencias
```bash
npm install @react-navigation/native@6.1.18
npm install @react-navigation/native-stack@6.11.0
npm install @react-navigation/bottom-tabs@6.6.1
npm install react-native-screens@4.4.0 react-native-safe-area-context@4.14.0
```

### 3. Configurar el emulador en Android Studio

1. Abrir **Android Studio**
2. Ir a **More Actions** → **Virtual Device Manager**
3. Hacer clic en **Create Device**
4. En la categoría **Phone**, seleccionar **Pixel 9 Pro** → clic en **Next**
5. Seleccionar la imagen del sistema **API 35 (Android 15)** — si no está descargada, hacer clic en el ícono de descarga al lado y esperar
6. Clic en **Next** → **Finish**
7. En el **Virtual Device Manager**, presionar el botón ▶ para iniciar el emulador
8. Esperar a que cargue completamente el escritorio de Android antes de continuar

### 4. Ejecutar la aplicación

Dentro del proyecto en Visual Studio Code, abrir la terminal y ejecutar:
```bash
npx react-native run-android
```
