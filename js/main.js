// demo
// $("#btnThem")[0].click()

let json = localStorage.getItem("DSNV")
let DSNV = json != "null" ? JSON.parse(json) : []
DSNV = DSNV.map(nv => new User(...Object.values(nv)))
console.log("🚀 ~ file: main.js:7 ~ DSNV:", DSNV)
render(DSNV)

function add() {
    let nv = getUserInfo()
    let isValid =
        isValid_Account(nv.account)
        & isValid_Name(nv.name)
        & isValid_Email(nv.email)
        & isValid_Password(nv.password)
        & isValid_StartDate(nv.startDate)
        & isValid_Position(nv.position)
        & isValid_WorkHour(nv.workHour);

    if (!isValid) { return }

    DSNV.push(getUserInfo())
    render(DSNV)
    closeModal()
    saveLocal(DSNV)
}

function remove(account) {
    let index = DSNV.findIndex(nv => nv.account == account)
    DSNV.splice(index, 1)
    saveLocal(DSNV)
    render(DSNV)
}

function update() {
    let nv = getUserInfo()

    let isValid =
        isValid_Account(nv.account)
        & isValid_Name(nv.name)
        & isValid_Email(nv.email)
        & isValid_Password(nv.password)
        & isValid_StartDate(nv.startDate)
        & isValid_Position(nv.position)
        & isValid_WorkHour(nv.workHour);

    if (!isValid) { return }

    $("#tknv")[0].disabled = false

    let index = DSNV.findIndex(user => user.account == nv.account)
    DSNV[index] = nv
    saveLocal(DSNV)
    render(DSNV)
    // clear & close form
    showUserInfo(null)
    closeModal()
}

function searchRank() {
    let rank = $("#searchName")[0].value.toLowerCase()
    let filter = DSNV.filter(e => e.rank().toLowerCase().includes(rank))
    render(filter)
}