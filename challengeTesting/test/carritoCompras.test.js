const carritoCompras = require("../index");

describe("Class carritoCrompas", () => {
  it("Class carritoCompras tiene que existir", () => {
    expect(carritoCompras).toBeInstanceOf(Function);
  });
  it("una nueva instancia de carritoCompras debe ser correctamente instanciada", () => {
    const newCarrito = new carritoCompras();
    expect(newCarrito).toBeInstanceOf(carritoCompras);
  });
  it("Class carritoCompras debe contener los siguientes metodos", () => {
    expect(carritoCompras.prototype.constructor).toBeDefined();
    expect(carritoCompras.prototype.agregarProducto).toBeDefined();
    expect(carritoCompras.prototype.calcularTotal).toBeDefined();
    expect(carritoCompras.prototype.aplicarDescuento).toBeDefined();
  });
});

describe("Constructor", () => {
  it("Debe ser inicializado como un array vacio", () => {
    const newCarrito = new carritoCompras();
    const result = {
      carrito: [],
    };
    expect(newCarrito).toEqual(result);
  });
});

describe("agregarProducto", () => {
  it("Debe recibir un objeto y agregarlo al carrito", () => {
    const newCarrito = new carritoCompras();
    const producto = {
      nombre: "tv",
      precio: 456,
      cantidad: 4,
    };
    newCarrito.agregarProducto(producto);
    const result = [
      {
        nombre: "tv",
        precio: 456,
        cantidad: 4,
      },
    ];
    expect(newCarrito.carrito).toEqual(result);
  });
});

describe("calcularTotal", () => {
  it("Debe calcular el total del precio de los productos", () => {
    const newCarrito = new carritoCompras();
    const arrayProductos = [
      {
        nombre: "tv",
        precio: 456,
        cantidad: 4,
      },
      {
        nombre: "tv2",
        precio: 111,
        cantidad: 4,
      },
      {
        nombre: "tv3",
        precio: 222,
        cantidad: 4,
      },
    ];
    arrayProductos.forEach((producto) => newCarrito.agregarProducto(producto));
    expect(newCarrito.calcularTotal()).toBe(789);
  });
});

describe("aplicarDescuento", () => {
  it("Debe aplicar el descuento recibido", () => {
    const newCarrito = new carritoCompras();
    const arrayProductos = [
      {
        nombre: "tv",
        precio: 456,
        cantidad: 4,
      },
      {
        nombre: "tv2",
        precio: 111,
        cantidad: 4,
      },
      {
        nombre: "tv3",
        precio: 222,
        cantidad: 4,
      },
    ];
    arrayProductos.forEach((producto) => newCarrito.agregarProducto(producto));
    expect(newCarrito.aplicarDescuento(10)).toBe(710.1);
    expect(newCarrito.aplicarDescuento(25)).toBe(591.75);
    expect(newCarrito.aplicarDescuento(50)).toBe(394.5);
  });
});