import { test, expect } from "@playwright/test";
test.describe("Asistencia - Observar - Front", () => {
  test("Despues de crearla es visible en la aplicacion para los alumnos.", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await expect(page.locator("body")).toContainText(
      "Abril Mosquera (Profesora)"
    );
    await expect(page.getByText("Abril Mosquera (Profesora)")).toBeVisible();
  });
});
