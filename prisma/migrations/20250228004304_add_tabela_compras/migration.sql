-- CreateTable
CREATE TABLE "Compra" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nomeProduto" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL,
    "dtCompra" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
