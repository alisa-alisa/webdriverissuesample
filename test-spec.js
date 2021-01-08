describe('Simple app to repro the issue', function () {
    it('Open Angular JS page and wait a little', async function () {
        await browser.get('https://angularjs.org');
        await browser.sleep(10000);
    });
});
