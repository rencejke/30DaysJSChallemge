//Exercises: Level 2
//#2 Create a closure which has three inner functions

const rectangle = () =>{
    let length = 10
    let width = 5

    const getArea = () =>{
        const area = length * width
        return area 
    }

    const getPerimeter = () =>{
        const perimeter = 2 * (length * width)
        return perimeter
    }

    return {
        areaOfTriangle: getArea(),
        perimeterOfTriangle: getPerimeter(),
    }
}

const rectangleFuncs = rectangle()

console.log(rectangleFuncs.areaOfTriangle) //50
console.log(rectangleFuncs.perimeterOfTriangle) //100