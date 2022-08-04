import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';


const puppeteer = require('puppeteer');

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('finds Finland', async () => {
      const browser = await puppeteer.launch({
        args: ["--no-sandbox"]
      });
      const page = await browser.newPage();
      await page.goto('http://dog-frontend:3001/countries');
      await page.waitForSelector('#countries');
      const textContent = await page.$eval('body', (el) => el.textContent);
      const includes = textContent.includes('Finland');
      expect(includes).toBe(true);
      await browser.close();
    });
  });
});
