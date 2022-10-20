// 6. Сила методов класса заключается в возможности иметь множество реализаций.
// Реализуйте 2 класса с 2 различными реализациями

class A {
    random() {
        console.log("+");
    }
}

class B extends A{
    random() {
        super.random()
        console.log("-");
    }
}

class C extends B{
    random(){
        super.random()
        console.log("=");
    }
}

const c = new C()
const b = new B()
const a = new A()
c.random()
console.log("---------");
b.random()
console.log("---------");
a.random()