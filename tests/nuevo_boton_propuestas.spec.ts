import { test, expect } from '@playwright/test';

test('Nuevo Boton De Propuestas', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agregar Nueva Propuesta...' }).click();
  await page.getByRole('textbox', { name: 'Título de la salida' }).click();
  await page.getByRole('textbox', { name: 'Título de la salida' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Título de la salida' }).fill('P');
  await page.getByRole('textbox', { name: 'Título de la salida' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Título de la salida' }).fill('Parque');
  await page.locator('select[name="Como_Llegar"]').selectOption('Independiente');
  await page.getByText('Mochila').click();
  await page.getByText('Comida').click();
  await page.getByText('Agua').click();
  await page.locator('select[name="Cuanto_Dura"]').selectOption('1 Hora');
  await page.getByRole('button', { name: 'Guardar' }).click();
});