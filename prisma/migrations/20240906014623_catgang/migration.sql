-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "chat_id" BIGINT NOT NULL,
    "reff_code" TEXT NOT NULL,
    "reff_by" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "reward_rate" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_chat_id_key" ON "User"("chat_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_reff_code_key" ON "User"("reff_code");
