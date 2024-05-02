const mime = require('mime-types');

function verificarImagen(archivo) {
  const extensionesValidas = ['jpg', 'jpeg', 'png', 'gif']; // Extensiones válidas

  if(extensionesValidas.includes(mime.extension(archivo.mimetype))){
    return true
  }else{
    return false
  }
}

function verificarArchivo(archivo) {
  const extensionesValidas = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'txt', 'xlsx', 'xls']; // Extensiones válidas

  if(extensionesValidas.includes(mime.extension(archivo.mimetype))){
    return true
  }else{
    return false
  }
}

  module.exports = {
    verificarImagen,
    verificarArchivo
  }