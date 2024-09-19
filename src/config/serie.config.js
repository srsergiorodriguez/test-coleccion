const config = {
  "lang": "en",
  "localPort": "5173",
  "base": "https://srsergiorodriguez.github.io",
  "baseurl": "/test-coleccion",
  "title": "MMMMM",
  "subtitle": "Un sistema para mini colecciones digitales",
  "credits": "Por Sergio Rodríguez Gómez",
  "copyright": "Todos los derechos reservados, 2024",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      },
      {
        "key": "link",
        "label": "Link",
        "type": "link"
      },
      {
        "key": "ref",
        "label": "Ref",
        "type": "ref"
      },
      {
        "key": "video",
        "label": "Video",
        "type": "youtube"
      }
    ],
    "metadataToIndex": [
      "label",
      "autor",
      "fecha"
    ]
  }
};
export default config;