import { test, expect } from '@playwright/test';

test('crear nueva excursión con todos los campos', async ({ page }) => {
  await page.goto('http://localhost:3000');


  // Abrir modal
  await page.getByRole('button', { name: 'Añadir Nueva Excursión...' }).click();

  const modal = page.getByRole('dialog', { name: 'Nueva Excursión' });
  await expect(modal).toBeVisible();

  // Desactivar animaciones
  await page.addStyleTag({ content: '* { transition: none !important; animation: none !important; }' });

  // Completar Nombre de la excursión
  await page.fill('#title', 'Museo de Ciencias Naturales');

  // Completar Número de Alumnos
  await page.fill('input[placeholder="Ej: 30"]', '45');

  // Seleccionar Adultos Responsables con fill + Enter
  const adultos = ['Mariela (Profesora)', 'Juan (Preceptor)', 'Lucas (Profesor)', 'Carlos (Preceptor)'];
  for (const nombre of adultos) {
    await page.fill('#adult-name', nombre);
    await page.keyboard.press('Enter');
  }

  // Seleccionar Rol (primer adulto)
  const rolSelect = page.locator('select[aria-label="Selecciona un rol"]');
  await rolSelect.waitFor({ state: 'visible' });
  await rolSelect.selectOption('Profesor');

  // Completar Horario y Fecha
  await page.fill('input[placeholder="HH:MMhs"]', '11:00');
  await page.fill('input[placeholder="DD/MM"]', '01/05');

  // Click en "Agregar Excursión"
  await page.getByRole('button', { name: 'Agregar Excursión' }).click();

  // Verificar que la excursión aparece
  await expect(page.locator('text=Museo de Ciencias Naturales')).toBeVisible();
  await expect(page.locator('text=45')).toBeVisible();
});
