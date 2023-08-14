const addToFive = require("./addToFive.js");
test("Add 1 to five", ()=>{
	expect(addToFive(1).toBe(6));
})
