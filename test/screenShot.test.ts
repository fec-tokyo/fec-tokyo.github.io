import path from "node:path";
import { test } from "@playwright/test";

const screenShotDir = path.join(process.cwd(), "screen-shot");

test.describe("Screenshot Tests", () => {
  test("スクリーンショットを取得する", async ({
    page,
    browserName,
    isMobile,
  }) => {
    await page.goto("localhost:3000/index.html");
    await page.screenshot({
      path: path.join(
        screenShotDir,
        `${browserName}-${isMobile ? "mobile" : "desktop"}-screenshot.png`,
      ),
      fullPage: true,
    });
  });
});
