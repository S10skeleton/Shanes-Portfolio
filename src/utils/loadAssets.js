function importAll(r) {
    let assets = {};
    r.keys().forEach((item, index) => {
      assets[item.replace('./', '')] = r(item);
    });
    return assets;
  }
  
  export const screenshots = importAll(require.context('../assets/screenshots', false, /\.(png|jpe?g|svg)$/));
  export const videos = importAll(require.context('../assets/videos', false, /\.(mp4|webm)$/));
  