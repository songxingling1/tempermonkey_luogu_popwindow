let obs = new MutationObserver((muts,obs)=>{
    muts.forEach((ele)=>{
        if($('[currenttemplate="RecordShow"] section div .info-rows:last-child div:nth-child(2) span:last-child span').text().trim() === 'Accepted') {
            swal.fire({
                icon:"info",
                title:"你通过了此题！",
                html:GM_getValue('message','')
            })
            obs.disconnect()
        }
    })
});
export function startListen() {
    let dom = document.querySelector('[currenttemplate="RecordShow"] section div .info-rows:last-child div:nth-child(2) span:last-child span')
    obs.observe(dom,{characterData:true,attributes:true})
}