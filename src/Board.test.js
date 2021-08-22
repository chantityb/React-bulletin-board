const Board = require("./Board")
// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new Board.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("nextId", () => {
    let inst

    beforeEach(() => {
        inst = new Board.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.nextId()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("update", () => {
    let inst

    beforeEach(() => {
        inst = new Board.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.update({ key5: 100 }, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.update({ key5: -5.48 }, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.update({ key5: 100 }, -5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.update({ key5: 0 }, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.update({ key5: 1 }, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.update({}, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("remove", () => {
    let inst

    beforeEach(() => {
        inst = new Board.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.remove("fake_project")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.remove("projectId-1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.remove("fake_project_id")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.remove("proj_")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.remove("projects/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.remove(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
