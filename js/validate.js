function showMessage(id, message, state) {
    $(`#${id}`)[0].innerText = message
    $(`.sp-thongbao#${id}`)[0].style.display = state
}

function isValid_Account(account) {
    let reg = /^[0-9]{4,6}$/g
    if (!reg.test(account)) {
        showMessage("tbTKNV", "Tối đa 4 - 6 ký số, không để trống", "block")
        return false
    } else {
        showMessage("tbTKNV", "", "none")
        return true
    }
}

function isValid_Name(name) {
    let reg = /^[A-Za-z\s]+$/
    if (!reg.test(name)) {
        showMessage("tbTen", "Chỉ kí tự chữ, không để trống", "block")
        return false
    } else {
        showMessage("tbTen", "", "none")
        return true
    }
}

function isValid_Email(email) {
    const reg =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!reg.test(email)) {
        showMessage("tbEmail", "Email không hợp lệ", "block")
        return false
    } else {
        showMessage("tbEmail", "", "none")
        return true
    }
}
function isValid_Password(password) {
    const reg =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/g

    if (!reg.test(password)) {
        showMessage("tbMatKhau", "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống", "block")
        return false
    } else {
        showMessage("tbMatKhau", "", "none")
        return true
    }
}

function isValid_StartDate(startDate) {
    const reg =
        /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/g
    if (!reg.test(startDate)) {
        showMessage("tbNgay", "Ngày làm không để trống, định dạng mm/dd/yyyy", "block")
        return false
    } else {
        showMessage("tbNgay", "", "none")
        return true
    }
}

function isValid_Position(position) {

    if (position == "") {
        showMessage("tbChucVu", "Chọn chức vụ", "block")
        return false
    } else {
        showMessage("tbChucVu", "", "none")
        return true
    }
}

function isValid_WorkHour(workHour) {
    const reg = /[8-9][0-9]|1[0-9][0-9]|200/g
    if (!reg.test(workHour)) {
        showMessage("tbGiolam", "Số giờ làm trong tháng 80 - 200 giờ, không để trống", "block")
        return false
    } else {
        showMessage("tbGiolam", "", "none")
        return true
    }
}