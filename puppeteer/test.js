const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cebbcfaeafdfeaeabcddcadffbbfddfa.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#submit',{timeout:1500});
      console.log('TESTCASE:test_case1:success');
    }
     catch(e){
      console.log('TESTCASE:test_case1:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cebbcfaeafdfeaeabcddcadffbbfddfa.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.click('#submit');

    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#errorFirstName',{timeout:1500});
      console.log('TESTCASE:test_case2:success');
    }
     catch(e){
      console.log('TESTCASE:test_case2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cebbcfaeafdfeaeabcddcadffbbfddfa.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.click('#submit');

    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#errorCountry',{timeout:1500});
      console.log('TESTCASE:test_case3:success');
    }
     catch(e){
      console.log('TESTCASE:test_case3:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cebbcfaeafdfeaeabcddcadffbbfddfa.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.click('#submit');

    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#errorAge',{timeout:1500});
      console.log('TESTCASE:test_case4:success');
    }
     catch(e){
      console.log('TESTCASE:test_case4:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
 (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cebbcfaeafdfeaeabcddcadffbbfddfa.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
	await page.type('#inputFirstname', 'Testing@123');
    await page.click('#submit');

    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#errorFirstName',{timeout:1500});
      console.log('TESTCASE:test_case5:success');
    }
     catch(e){
      console.log('TESTCASE:test_case5:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cebbcfaeafdfeaeabcddcadffbbfddfa.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
	await page.type('#inputAge', 'ab');
    await page.click('#submit');

    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#errorAge',{timeout:1500});
      console.log('TESTCASE:test_case6:success');
    }
     catch(e){
      console.log('TESTCASE:test_case6:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cebbcfaeafdfeaeabcddcadffbbfddfa.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
	
    await page.click('#submit');

    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#errorCity',{timeout:1500});
      console.log('TESTCASE:test_case7:success');
    }
     catch(e){
      console.log('TESTCASE:test_case7:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cebbcfaeafdfeaeabcddcadffbbfddfa.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
	await page.type('#inputFirstname', 'ab');
    await page.click('#submit');

    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#errorFirstName',{timeout:1500});
      console.log('TESTCASE:test_case8:success');
    }
     catch(e){
      console.log('TESTCASE:test_case8:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cebbcfaeafdfeaeabcddcadffbbfddfa.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
	await page.type('#inputFirstname', '12');
    await page.click('#submit');

    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#errorFirstName',{timeout:1500});
      console.log('TESTCASE:test_case9:success');
    }
     catch(e){
      console.log('TESTCASE:test_case9:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-cebbcfaeafdfeaeabcddcadffbbfddfa.project.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
	await page.type('#inputFirstname', 'Testing');
    await page.click('#submit');

    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#errorFirstName',{timeout:1000});
      console.log('TESTCASE:test_case10:success');
    }
     catch(e){
      console.log('TESTCASE:test_case10:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();