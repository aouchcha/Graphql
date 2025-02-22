export function ErrorComp(token) {
    let ErrC
    if (!token) {
        ErrC = `
            <p>Error : Invalid Credentials</p>
         `
    }else {
        ErrC = `
            <p>Error : Unotherazied</p>
         `
    }
    return ErrC
}