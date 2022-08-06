const intersect = (a, b) => {
    let c = new Set();
    for (let value of b.values()) {
        if (a.has(value)) {
            c.add(value);
        }
    }
    return c;
}
const union = (a, b) => {
    let c = new Set(a);
    for (let value of b.values()) {
        if (!a.has(value)) {
            c.add(value);
        }
    }
    return c;
}
const different = (a, b) => {
    let c = new Set(a);
    for (let value of b.values()) {
        if (a.has(value)) {
            c.delete(value);
        }
    }
    return c;
}
const ex08 = () => {
    let A = new Set()
    let B = new Set()
    let U = new Set()

    for (let index = 1; index <= 50; index++) {
        if (index <= 35) {
            A.add(index)
            B.add(index)
        }
        U.add(index)
    }
    let pass_both_exams = 25

    // n(A) = สอบผ่านคณิต 35
    // n(B) = สอบผ่านสังคม 35 
    // n(B in B) = สอบทั้ง 25
    //! n(B U B) = สอบผ่านอย่างใดอย่างหนึ่ง ?
    let result = (U.size - (A.size + B.size - pass_both_exams))
    return result

}
function main() {
    let A = new Set([1, 2, 3, 4, 5]);
    let B = new Set([5, 6, 7, 8, 9]);
    let C = new Set([9, 10, 11, 12, 13]);
    let U = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    document.getElementById('ex01').innerText = `{${Array.from(union(A, B))}}`
    document.getElementById('ex02').innerText = `{${Array.from(intersect(A, B))}}`
    document.getElementById('ex03').innerText = `{${Array.from(different(U, C))}}`
    document.getElementById('ex04').innerText = `{${Array.from(different(A, B))}}`
    document.getElementById('ex05').innerText = `{${Array.from(different(A, C))}}`
    document.getElementById('ex06').innerText = `n = ${Array.from(union(A, union(B, C))).length}`
    document.getElementById('ex07').innerText = `{${Array.from(different(U, intersect(A, intersect(B, C))))}}`
    document.getElementById('ex08').innerText = `${ex08()} คน`
    document.getElementById('ex09').innerText = `{${Array.from(different(U,union(A,C)))}}`
    document.getElementById('ex10').innerText = `{${Array.from(union(A,intersect(B,C)))}}`

}
main()