export const Pais = function (id, nombre, codigoAlfa2, codigoAlfa3, tipoRegion, continente) {
    this.id = id;
    this.nombre = nombre;
    this.codigoAlfa2 = codigoAlfa2;
    this.codigoAlfa3 = codigoAlfa3;
    this.tipoRegion = tipoRegion;
    this.continente = continente;
}

export const Region = function (id, nombre, area, poblacion) {
    this.id = id;
    this.nombre = nombre;
    this.area = area;
    this.poblacion = poblacion;
}
