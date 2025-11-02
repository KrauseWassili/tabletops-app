import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const eventTable = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull().unique(),
  description: varchar({ length: 255 }).notNull().unique(),
});


export const gameTable = pgTable("games", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull().unique(),
  description: varchar({ length: 255 }).notNull().unique(),
});

//При любых изменениях сначала меняем / добавляем схему
//генерируем npx drizzle-kit generate - сгенерирует скрипты в папку drizzle
//мигрируем npx drizzle-kit migrate - внесет изменения в базу данных