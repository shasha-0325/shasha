function $(str) {
    return document.querySelector(`#` + str)
}
// 添加功能
var btnAdd = $("btnAdd")
btnAdd.onclick = function () {
    let proId = $("proId").value
    let proName = $("proName").value
    let proPrice = $("proPrice").value
    // 创建复选框td
    let tdCheckbox = document.createElement("td")
    tdCheckbox.innerHTML = '<input type="checkbox"  class="Checkbox"  name="" id="">'
    //创建编号td
    let tdProId = document.createElement("td")
    tdProId.innerText = proId
    // 创建名称td
    let tdProName = document.createElement("td")
    tdProName.innerText = proName
    // 创建价格td
    let tdProPrice = document.createElement("td")
    tdProPrice.innerText = proPrice
    // 创建删除td
    let tdDel = document.createElement("td")
    tdDel.innerHTML = `<a href='javascript:;' class='del'>删除</a>&nbsp;<a href="javascript:;" class="edit" >编辑</a>
    &nbsp;<a href="javascript:;" class="save" >保存</a>`
    // 创建一个tr
    let tr = document.createElement("tr")
    // 不能为空
    if (proId.trim() == "" || proName.trim() == "" || proPrice.trim() == "") {
        alert("请输入内容!!!")
    } else {
        // 把td追加到tr
        tr.appendChild(tdCheckbox)
        tr.appendChild(tdProId)
        tr.appendChild(tdProName)
        tr.appendChild(tdProPrice)
        tr.appendChild(tdDel)
        // 把tr追加到tbody
        $("tableInfo").querySelector("tbody").insertBefore(tr, $("tableInfo").querySelector("tbody").lastElementChild)
    }
    // 删除功能
    var dels = document.querySelectorAll(".del")
    for (const del of dels) {
        del.onclick = function () {
            $("tableInfo").querySelector("tbody").removeChild(this.parentNode.parentNode)
        }
    }
    // 编辑功能
    var edits = document.querySelectorAll(".edit")
    for (const edit of edits) {
        edit.onclick = function () {
            for (let i = 1; i < 4; i++) {
                let text = this.parentNode.parentNode.children[i].innerText
                if (text != "") {
                    this.parentNode.parentNode.children[i].innerHTML = `<input type="text" value="${text}">`
                }
            }
        }
    }
    // 保存功能
    var saves = document.querySelectorAll(".save")
    for (const save of saves) {
        save.onclick = function () {
            for (let i = 1; i < 4; i++) {
                let text = this.parentNode.parentNode.children[i].querySelector("input").value
                this.parentNode.parentNode.children[i].innerText = text
            }
        }
    }
    // 全选功能下面按钮事件
    let Checkbox = document.querySelectorAll(".Checkbox")
    for (let i = 0; i < Checkbox.length; i++) {
        Checkbox[i].onclick = function () {
            let flag = true
            for (let j = 0; j < Checkbox.length; j++) {
                if (Checkbox[j].checked == false) {
                    flag = false
                }
            }
            $("chkAll").checked = flag
        }
    }
    $("chkAll").checked = false
}
/* 全选功能  */
$("chkAll").onclick = function () {
    let Checkbox = document.querySelectorAll(".Checkbox") //获取所有class为chkPro的复选框
    for (let i = 0; i < Checkbox.length; i++) {
        Checkbox[i].checked = this.checked
    }
}
//删除选中
$("delChecked").onclick = function () {
    let Checkbox = document.querySelectorAll(".Checkbox") //获取所有class为chkPro的复选框
    for (let i = 0; i < Checkbox.length; i++) {
        if (Checkbox[i].checked == true) {
            $("tableInfo").querySelector("tbody").removeChild(Checkbox[i].parentNode.parentNode)
        }
    }
    $("chkAll").checked = false
}
