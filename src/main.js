import './../assets/style.css'
import $ from 'jquery'
import { startListen } from './listener'
import { makeAlert } from './settings'
let oldhref = 'kkkfc0114514'
let css = GM_getResourceText('sweetcss')
GM_addStyle(css)
setInterval(() => {
    $(()=>{
        if(window.location.href.search("https://www.luogu.com.cn/record/") === 0 && window.location.href !== oldhref) {
            startListen()
        }
        if($('#luogu_popwindow_setting').length === 0) {
            makeAlert()
        }
        oldhref = window.location.href
    })
},200)