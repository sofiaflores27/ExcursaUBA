import { test, expect } from '@playwright/test';

test('Nueva Notificacion En El Front Sobre nueva Propuesta', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Agregar Nueva Propuesta...' }).click();
  await page.getByRole('textbox', { name: 'Título de la salida' }).click();
  await page.getByRole('textbox', { name: 'Título de la salida' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Título de la salida' }).fill('P');
  await page.getByRole('textbox', { name: 'Título de la salida' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Título de la salida' }).fill('Plaza');
  await page.locator('select[name="Como_Llegar"]').selectOption('Contratar Micro');
  await page.getByText('Mochila').click();
  await page.getByText('Comida').click();
  await page.getByText('Agua').click();
  await page.locator('select[name="Cuanto_Dura"]').selectOption('2 Horas');
  await page.getByRole('button', { name: 'Guardar' }).click();
});