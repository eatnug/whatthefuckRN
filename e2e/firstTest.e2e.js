describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it(`should show text 'Hello!!!'`, async () => {
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it(`should show text 'World!!!'`, async () => {
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
