function Balance({props}){
    return(
        <div className="h-14 text-center whitespace-nowrap total-cats">
            <span className="inline-block font-semibold">{props} CATS</span>
        </div>
    )
}

export default Balance