import { test, expect } from '@playwright/test';

test('La aplicación carga correctamente', async ({ page }) => {
  await page.goto('http://localhost:3000');   // Cambiá si tu app usa otro puerto

  await expect(page).toHaveTitle(/Viajes|Salidas|Excursa/i);
});
