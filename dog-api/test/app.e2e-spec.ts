import {Test, TestingModule} from "@nestjs/testing";
import {AppModule} from "../src/app.module";
import {DogRepository} from "../src/dog/dog.repository";
import {Dog, DogSize} from "../src/entities/dog.entity";
import {INestApplication} from "@nestjs/common";
import playwright, { webkit } from 'playwright';

const puppeteer = require('puppeteer');

describe('e2e tests', () => {
  let dogRepository: DogRepository;

  let dog: Dog;
  let app: INestApplication;
  beforeAll(async () => {
    /*const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();

    dogRepository = app.get<DogRepository>(DogRepository);

    dog = new Dog();
    dog.size = DogSize.Medium;

    await dogRepository.save(dog);*/
  });
  it.skip('finds Dog', async () => {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"]
    });
    const page = await browser.newPage();
    await page.goto('http://dog-frontend:3001/dogs');
    await page.waitForSelector(`#dog-${dog.id}`);
  }, 10000);

  it('finds Dog with playwright', async () => {
    const browser = await webkit.launch();
    const page = await browser.newPage();
    await page.goto('http://dog-frontend:3001/dogs');
   // await page.waitForSelector(`#dog-${dog.id}`);
  }, 10000);

  afterAll(async () => {
  //  await dogRepository.remove(dog);
  //  await app.close();
  });
});
