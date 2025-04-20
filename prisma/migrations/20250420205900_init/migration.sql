-- CreateEnum
CREATE TYPE "UnidadeMedida" AS ENUM ('KG', 'G', 'L', 'ML', 'UNIDADE');

-- CreateEnum
CREATE TYPE "TipoMovimentacao" AS ENUM ('ENTRADA', 'SAIDA');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Insumo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "unidade" "UnidadeMedida" NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "validade" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Insumo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receita" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Receita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReceitaInsumo" (
    "id" TEXT NOT NULL,
    "receitaId" TEXT NOT NULL,
    "insumoId" TEXT NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ReceitaInsumo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanejamentoProducao" (
    "id" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PlanejamentoProducao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReceitaPlanejada" (
    "id" TEXT NOT NULL,
    "planejamentoId" TEXT NOT NULL,
    "receitaId" TEXT NOT NULL,
    "quantidadePlanejada" INTEGER NOT NULL,

    CONSTRAINT "ReceitaPlanejada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListaCompra" (
    "id" TEXT NOT NULL,
    "planejamentoId" TEXT NOT NULL,
    "insumoId" TEXT NOT NULL,
    "quantidadeFaltante" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ListaCompra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EstoqueHistorico" (
    "id" TEXT NOT NULL,
    "insumoId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "tipo" "TipoMovimentacao" NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EstoqueHistorico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Insumo_nome_key" ON "Insumo"("nome");

-- AddForeignKey
ALTER TABLE "ReceitaInsumo" ADD CONSTRAINT "ReceitaInsumo_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "Receita"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceitaInsumo" ADD CONSTRAINT "ReceitaInsumo_insumoId_fkey" FOREIGN KEY ("insumoId") REFERENCES "Insumo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceitaPlanejada" ADD CONSTRAINT "ReceitaPlanejada_planejamentoId_fkey" FOREIGN KEY ("planejamentoId") REFERENCES "PlanejamentoProducao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceitaPlanejada" ADD CONSTRAINT "ReceitaPlanejada_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "Receita"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaCompra" ADD CONSTRAINT "ListaCompra_planejamentoId_fkey" FOREIGN KEY ("planejamentoId") REFERENCES "PlanejamentoProducao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaCompra" ADD CONSTRAINT "ListaCompra_insumoId_fkey" FOREIGN KEY ("insumoId") REFERENCES "Insumo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstoqueHistorico" ADD CONSTRAINT "EstoqueHistorico_insumoId_fkey" FOREIGN KEY ("insumoId") REFERENCES "Insumo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstoqueHistorico" ADD CONSTRAINT "EstoqueHistorico_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
