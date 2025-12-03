import { test, expect } from "@playwright/test";

test("agregar un evento debe observarse en la pantalla de inicio con su nombre", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "Añadir Nueva Excursión..." }).click();
  await page.getByRole("textbox", { name: "Nombre de la Excursión" }).click();
  await page
    .getByRole("textbox", { name: "Nombre de la Excursión" })
    .fill("Excursion 2");
  await page.getByRole("spinbutton", { name: "Número de Alumnos" }).click();
  await page.getByRole("spinbutton", { name: "Número de Alumnos" }).fill("30");
  await page.getByRole("textbox", { name: "Nombre", exact: true }).click();
  await page
    .getByRole("textbox", { name: "Nombre", exact: true })
    .fill("Joaquin Blanco");
  await page.getByRole("combobox", { name: "Rol" }).click();
  await page.getByText("Profesora", { exact: true }).click();
  await page.getByRole("textbox", { name: "Fecha" }).click();
  await page.getByRole("textbox", { name: "Fecha" }).click();
  await page.getByRole("textbox", { name: "Fecha" }).fill("11/09/2025");
  await page.getByRole("textbox", { name: "Horario" }).click();
  await page.getByRole("textbox", { name: "Fecha" }).dblclick();
  await page.getByRole("textbox", { name: "Fecha" }).fill("11/09");
  await page.getByRole("textbox", { name: "Horario" }).click();
  await page.getByRole("textbox", { name: "Horario" }).fill("09:30hs");
  await page.getByRole("button", { name: "Agregar Excursión" }).click();
  await expect(page.locator("body")).toContainText("Excursion 2");
});
