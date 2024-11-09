-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "is_true" INTEGER NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "card_question_key" ON "card"("question");
