import totalizar from "./totalizador.js";

describe("Totalizador", () => {
  it("Calcula el precio neto para cantidad *precio", () => {
    expect(totalizar(3, 2)).toEqual(6);
  });

  it("Calcula el precio neto para cualquier  cantidad *precio", () => {
    expect(totalizar(7, 3)).toEqual(21);
  });
});
