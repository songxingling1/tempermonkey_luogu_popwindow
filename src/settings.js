import $ from 'jquery'
import swal from 'sweetalert2'
import icon from './../assets/message.svg'
export function makeAlert() {
    let dom = `<a id="luogu_popwindow_setting" class="icon color-none">${icon}</a>`
    $('.user-nav nav').prepend(dom)
    $('.user-nav:has(> a)').prepend(dom)
    $('#luogu_popwindow_setting').on('click',() => {
        swal.fire({
            icon:"question",
            title:"请输入提示信息",
            html:`<input type="text" value="${GM_getValue('message','')}" id="lgp_text" style="height:1.5em;width:21em;"></input>`,
            showCancelButton: true
        }).then((result)=>{
            if(result.value) {
                GM_setValue('message',$('#lgp_text').val())
                swal.fire({
                    icon:"success",
                    title:"修改成功",
                    timer:1000,
                    showConfirmButton: false
                })
            }
        })
    })
}