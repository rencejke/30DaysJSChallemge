class Statistics{
    constructor(age){
        this.age = age
    }
    count(){
        return this.age.length
    }
    sum(){
        return this.age.reduce((acc, curr) => acc + curr)
    }
    min(){
        return this.age.reduce((acc, curr) => {
            if(curr <= acc)   
            {
                return curr
            }else{
                return acc
            }
        })
    }
    max(){
         return this.age.reduce((acc, curr) => {
            if(curr >= acc)   
            {
                return curr
            }else{
                return acc
            }
        })
    }
    range(){
        return this.max() - this.min()
    }
    mean(){
        return this.sum() / this.count()
    }
    median(){
        const sortedAgeAsc = this.age.sort((a, b) =>  a - b)
        return sortedAgeAsc[Math.floor(this.count() / 2)]
    }
    mode(){
        const sortedAgeAsc = this.age.sort((a, b) =>  a - b)
        return sortedAgeAsc[Math.floor(this.count() / 2)]
    }

}

const stats = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
console.log(stats.count())
console.log(stats.sum())
console.log(stats.min())
console.log(stats.max())
console.log(stats.mean())
console.log(stats.median())